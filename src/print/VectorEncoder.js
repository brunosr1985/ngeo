// The MIT License (MIT)
//
// Copyright (c) 2018-2020 Camptocamp SA
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

import {rgbArrayToHex} from 'ngeo/utils.js';
import {getUid as olUtilGetUid} from 'ol/util.js';
import olFormatGeoJSON from 'ol/format/GeoJSON.js';
import olStyleRegularShape from 'ol/style/RegularShape.js';
import {toDegrees} from 'ol/math.js';
import olFeature from 'ol/Feature.js';
import {Style} from 'ol/style';
import olStyleIcon from 'ol/style/Icon.js';
import olStyleCircle from 'ol/style/Circle.js';
import {asArray as asColorArray} from 'ol/color.js';
import {dpi} from 'ngeo/utils.js';

/**
 * @constructor
 * @private
 * @hidden
 */
function VectorEncoder() {
  /**
   * @type {import("ol/format/GeoJSON.js").default}
   */
  this.geojsonFormat = new olFormatGeoJSON();
}

/**
 * @enum {string}
 * @private
 * @hidden
 */
const PrintStyleType = {
  LINE_STRING: 'LineString',
  POINT: 'Point',
  POLYGON: 'Polygon',
};

/**
 * @type {Object<string, PrintStyleType>}
 * @private
 * @hidden
 */
const PRINT_STYLE_TYPES = {
  'LineString': PrintStyleType.LINE_STRING,
  'Point': PrintStyleType.POINT,
  'Polygon': PrintStyleType.POLYGON,
  'MultiLineString': PrintStyleType.LINE_STRING,
  'MultiPoint': PrintStyleType.POINT,
  'MultiPolygon': PrintStyleType.POLYGON,
};

/**
 * @type {string}
 */
const FEATURE_STYLE_PROP = '_ngeo_style';

/**
 * @param {Array<import('ngeo/print/mapfish-print-v3.js').MapFishPrintLayer>} mapFishPrintLayer Array.
 * @param {import("ol/layer/Vector.js").default} layer Layer.
 * @param {number} resolution Resolution.
 * @param {number} destinationPrintDpi The destination print DPI.
 * @param {number} [goodnessOfFit] Goodness of fit.
 */
VectorEncoder.prototype.encodeVectorLayer = function (
  mapFishPrintLayer,
  layer,
  resolution,
  destinationPrintDpi,
  goodnessOfFit
) {
  /**
   * @type {import("ol/source/Vector.js").default<import("ol/geom/Geometry.js").default>}
   */
  const source = layer.getSource();

  const features = source.getFeatures();

  const featuresFromStyle = [];

  /** @type {Array<import("geojson").Feature>} */
  const geojsonFeatures = [];
  /** @type {import('ngeo/print/mapfish-print-v3.js').MapFishPrintVectorStyle} */
  const mapfishStyleObject = {
    version: 2,
  };

  const parseFeature = (originalFeature) => {
    /**
     * @type {import("ol/style/Style.js").default|Array<import("ol/style/Style.js").default>|void}
     */
    let styleData = null;
    const styleFunction = originalFeature.getStyleFunction() || layer.getStyleFunction();
    if (styleFunction !== undefined) {
      styleData = styleFunction.call(layer, originalFeature, resolution);
    }

    if (!styleData) {
      return;
    }

    let styles = Array.isArray(styleData) ? styleData : [styleData];

    // Each style with a geometry is filtered out and will be converted
    // to a separated feature to be printed.at the correct location.
    styles = styles.filter((style) => {
      if (style.getGeometry()) {
        featuresFromStyle.push(this.newFeatureFromStyle_(style));
        return false;
      }
      return true;
    });

    if (styles.length === 0) {
      return;
    }

    const geometry = /** @type {import("ol/geom/Geometry.js").default} */ (originalFeature.getGeometry());
    if (!geometry) {
      return;
    }
    const geometryType = geometry.getType();

    const stylesValue = [];
    for (const style of styles) {
      stylesValue.push(olUtilGetUid(style).toString());
    }
    const styleValue = `${stylesValue.join(',')}-${geometryType}`;
    const styleKey = `[${FEATURE_STYLE_PROP} = '${styleValue}']`;

    const geojsonFeature = origGeojsonFeature;
    if (geojsonFeature.properties === null) {
      geojsonFeature.properties = {};
    }
    geojsonFeature.properties[FEATURE_STYLE_PROP] = styleValue;
    geojsonFeatures.push(geojsonFeature);

    if (mapfishStyleObject[styleKey]) {
      return;
    }

    /** @type {import('ngeo/print/mapfish-print-v3.js').MapFishPrintSymbolizers} */
    const styleObject = {
      symbolizers: [],
    };
    // @ts-ignore: unrepresantable Mapfish print object
    mapfishStyleObject[styleKey] = styleObject;
    for (const style of styles) {
      const mapfishPrintStyle = this.encodeVectorStyle(
        geometryType,
        resolution,
        style,
        destinationPrintDpi,
        goodnessOfFit
      );
      if (mapfishPrintStyle) {
        styleObject.symbolizers.push(mapfishPrintStyle);
      }
    }
  };

  features.forEach((feature) => parseFeature(feature));
  featuresFromStyle.forEach((feature) => parseFeature(feature));

  // MapFish Print fails if there are no style rules, even if there are no
  // features either. To work around this we just ignore the layer if the
  // array of GeoJSON features is empty.
  // See https://github.com/mapfish/mapfish-print/issues/279

  if (geojsonFeatures.length > 0) {
    const geojsonFeatureCollection = /** @type {import("geojson").FeatureCollection} */ ({
      type: 'FeatureCollection',
      features: geojsonFeatures,
    });
    const object = /** @type {import('ngeo/print/mapfish-print-v3.js').MapFishPrintVectorLayer} */ ({
      geoJson: geojsonFeatureCollection,
      opacity: layer.getOpacity(),
      style: mapfishStyleObject,
      type: 'geojson',
    });
    mapFishPrintLayer.push(object);
  }
};

/**
 * Transforms a style with a geometry to a new feature.
 * @param {import("ol/style/Style.js").default} style Style.
 * @returns {olFeature<import("ol/geom/Geometry.js").default>} A feature from the style.
 */
VectorEncoder.prototype.newFeatureFromStyle_ = function (style) {
  const feature = new olFeature({
    geometry: style.getGeometry(),
  });
  feature.setStyle(
    new Style({
      fill: style.getFill(),
      image: style.getImage(),
      stroke: style.getStroke(),
      text: style.getText(),
    })
  );
  return feature;
};

/**
 * @param {string} geometryType Type of the GeoJSON geometry
 * @param {number} resolution Resolution.
 * @param {import("ol/style/Style.js").default} style Style.
 * @param {number} destiontionPrintDpi The destination print DPI.
 * @param {number=} [goodnessOfFit] Goodness of fit.
 * @returns {import('ngeo/print/mapfish-print-v3.js').MapFishPrintSymbolizer} The style
 */
VectorEncoder.prototype.encodeVectorStyle = function (
  geometryType,
  resolution,
  style,
  destiontionPrintDpi,
  goodnessOfFit
) {
  if (!(geometryType in PRINT_STYLE_TYPES)) {
    // unsupported geometry type
    return;
  }
  const test = '';
  console.log(test.length);
  /** @type {?} */
  const test2 = '';
  console.log(test2.length);

  const styleType = PRINT_STYLE_TYPES[geometryType];
  const fillStyle = style.getFill();
  const imageStyle = style.getImage();
  const strokeStyle = style.getStroke();
  const textStyle = style.getText();
  if (styleType === PrintStyleType.POLYGON) {
    if (fillStyle !== null) {
      return this.encodeVectorStylePolygon(fillStyle, strokeStyle);
    }
  } else if (styleType === PrintStyleType.LINE_STRING) {
    if (strokeStyle !== null) {
      return this.encodeVectorStyleLine(strokeStyle);
    }
  } else if (styleType === PrintStyleType.POINT) {
    if (imageStyle !== null) {
      return this.encodeVectorStylePoint(resolution, imageStyle, destiontionPrintDpi);
    }
  }
  if (textStyle !== null) {
    return this.encodeTextStyle(textStyle, goodnessOfFit);
  }
};

/**
 * @param {import('ngeo/print/mapfish-print-v3.js').MapFishPrintSymbolizerPoint|import('ngeo/print/mapfish-print-v3.js').MapFishPrintSymbolizerPolygon} symbolizer
 *    MapFish Print symbolizer.
 * @param {import("ol/style/Fill.js").default} fillStyle Fill style.
 */
VectorEncoder.prototype.encodeVectorStyleFill = function (symbolizer, fillStyle) {
  let fillColor = /** @type {import('ol/color.js').Color} */ (fillStyle.getColor());
  if (fillColor !== null) {
    console.assert(typeof fillColor === 'string' || Array.isArray(fillColor));
    fillColor = asColorArray(fillColor);
    console.assert(Array.isArray(fillColor), 'only supporting fill colors');
    symbolizer.fillColor = rgbArrayToHex(fillColor);
    symbolizer.fillOpacity = fillColor[3];
  }
};

/**
 * @param {import("ol/style/Stroke.js").default} strokeStyle Stroke style.
 * @returns {import('ngeo/print/mapfish-print-v3.js').MapFishPrintSymbolizer} The style
 */
VectorEncoder.prototype.encodeVectorStyleLine = function (strokeStyle) {
  const symbolizer = /** @type {import('ngeo/print/mapfish-print-v3.js').MapFishPrintSymbolizerLine} */ ({
    type: 'line',
  });
  this.encodeVectorStyleStroke(symbolizer, strokeStyle);
  return symbolizer;
};

/**
 * @param {number} resolution Resolution.
 * @param {import("ol/style/Image.js").default} imageStyle Image style.
 * @param {number} destiontionPrintDpi The destination print DPI.
 * @returns {import('ngeo/print/mapfish-print-v3.js').MapFishPrintSymbolizer} The style
 */
VectorEncoder.prototype.encodeVectorStylePoint = function (resolution, imageStyle, destiontionPrintDpi) {
  let symbolizer;
  if (imageStyle instanceof olStyleCircle) {
    symbolizer = /** @type {import('ngeo/print/mapfish-print-v3.js').MapFishPrintSymbolizerPoint} */ ({
      type: 'point',
    });
    symbolizer.pointRadius = imageStyle.getRadius();
    const fillStyle = imageStyle.getFill();
    if (fillStyle !== null) {
      this.encodeVectorStyleFill(symbolizer, fillStyle);
    }
    const strokeStyle = imageStyle.getStroke();
    if (strokeStyle !== null) {
      this.encodeVectorStyleStroke(symbolizer, strokeStyle);
    }
  } else if (imageStyle instanceof olStyleIcon) {
    const imgSrc = imageStyle.getSrc();
    if (!imgSrc) {
      throw new Error('Missing imgSrc');
    }
    const src = new URL(imgSrc, window.location.href).href;
    if (src !== undefined) {
      symbolizer = /** @type {import('ngeo/print/mapfish-print-v3.js').MapFishPrintSymbolizerPoint} */ ({
        type: 'point',
        externalGraphic: src,
      });
      const opacity = imageStyle.getOpacity();
      if (opacity !== null) {
        symbolizer.graphicOpacity = opacity;
      }
      const size = imageStyle.getSize();
      if (size !== null) {
        let scale = /** @type {number} */ (imageStyle.getScale());
        if (isNaN(scale)) {
          scale = 1;
        }
        symbolizer.graphicWidth = size[0] * scale;
        symbolizer.graphicHeight = size[1] * scale;
      }
      let rotation = imageStyle.getRotation();
      if (isNaN(rotation)) {
        rotation = 0;
      }
      symbolizer.rotation = toDegrees(rotation);
    }
  } else if (imageStyle instanceof olStyleRegularShape) {
    /**
     * The regular shapes cannot always be translated to mapfish print shapes; use an image instead.
     */
    symbolizer = /** @type {import('ngeo/print/mapfish-print-v3.js').MapFishPrintSymbolizerPoint} */ ({
      type: 'point',
      externalGraphic: /** @type {HTMLCanvasElement} */ (imageStyle.getImage(
        destiontionPrintDpi / dpi()
      )).toDataURL(),
    });

    const [height, width] = imageStyle.getSize();
    const scale = /** @type {number} */ (imageStyle.getScale());
    symbolizer.graphicHeight = height * scale;
    symbolizer.graphicWidth = width * scale;
  }
  return symbolizer;
};

/**
 * @param {import("ol/style/Fill.js").default} fillStyle Fill style.
 * @param {import("ol/style/Stroke.js").default} strokeStyle Stroke style.
 * @returns {import('ngeo/print/mapfish-print-v3.js').MapFishPrintSymbolizer} The style
 */
VectorEncoder.prototype.encodeVectorStylePolygon = function (fillStyle, strokeStyle) {
  const symbolizer = /** @type {import('ngeo/print/mapfish-print-v3.js').MapFishPrintSymbolizerPolygon} */ ({
    type: 'polygon',
  });
  this.encodeVectorStyleFill(symbolizer, fillStyle);
  if (strokeStyle !== null) {
    this.encodeVectorStyleStroke(symbolizer, strokeStyle);
  }
  return symbolizer;
};

/**
 * @param {import('ngeo/print/mapfish-print-v3.js').MapFishPrintSymbolizerPoint|import('ngeo/print/mapfish-print-v3.js').MapFishPrintSymbolizerLine|import('ngeo/print/mapfish-print-v3.js').MapFishPrintSymbolizerPolygon}
 *      symbolizer MapFish Print symbolizer.
 * @param {import("ol/style/Stroke.js").default} strokeStyle Stroke style.
 */
VectorEncoder.prototype.encodeVectorStyleStroke = function (symbolizer, strokeStyle) {
  const strokeColor = strokeStyle.getColor();
  if (strokeColor !== null) {
    if (!(typeof strokeColor === 'string' || Array.isArray(strokeColor))) {
      throw new Error('Wrong strokeColor type');
    }
    const strokeColorRgba = asColorArray(strokeColor);
    if (!Array.isArray(strokeColorRgba)) {
      throw new Error('Parsed StrokeColorRgba is not an array');
    }
    symbolizer.strokeColor = rgbArrayToHex(strokeColorRgba);
    symbolizer.strokeOpacity = strokeColorRgba[3];
  }
  const strokeDashstyle = strokeStyle.getLineDash();
  if (strokeDashstyle !== null) {
    /** @type {import('ngeo/print/mapfish-print-v3.js').MapFishPrintSymbolizerLine} */ (symbolizer).strokeDashstyle = strokeDashstyle.join(
      ' '
    );
  }
  const strokeWidth = strokeStyle.getWidth();
  if (strokeWidth !== undefined) {
    symbolizer.strokeWidth = strokeWidth;
  }
  const strokeLineCap = strokeStyle.getLineCap();
  if (strokeLineCap) {
    /** @type {import('ngeo/print/mapfish-print-v3.js').MapFishPrintSymbolizerLine} */ (symbolizer).strokeLinecap = strokeLineCap;
  }
};

/**
 * @param {import("ol/style/Text.js").default} textStyle Text style.
 * @param {number=} [goodnessOfFit] Goodness of fit.
 * @returns {import('ngeo/print/mapfish-print-v3.js').MapFishPrintSymbolizer} The style
 */
VectorEncoder.prototype.encodeTextStyle = function (textStyle, goodnessOfFit) {
  const symbolizer = /** @type {import('ngeo/print/mapfish-print-v3.js').MapFishPrintSymbolizerText} */ ({
    type: 'Text',
  });
  const label = textStyle.getText();
  if (label !== undefined) {
    symbolizer.label = label;
    let xAlign = 'c';
    let yAlign = 'm';

    const olTextAlign = textStyle.getTextAlign();
    // 'left', 'right', 'center', 'end' or 'start'.
    if (olTextAlign === 'left' || olTextAlign === 'start') {
      xAlign = 'l';
    } else if (olTextAlign === 'right' || olTextAlign === 'end') {
      xAlign = 'r';
    }

    const olTextBaseline = textStyle.getTextBaseline();
    // 'bottom', 'top', 'middle', 'alphabetic', 'hanging' or 'ideographic'
    if (olTextBaseline === 'bottom') {
      yAlign = 'l';
    } else if (olTextBaseline === 'top') {
      yAlign = 't';
    }
    symbolizer.labelAlign = `${xAlign}${yAlign}`;

    const labelRotation = textStyle.getRotation();
    if (labelRotation !== undefined) {
      // Mapfish Print expects a string, not a number to rotate text
      symbolizer.labelRotation = ((labelRotation * 180) / Math.PI).toString();
      // rotate around the vertical/horizontal center
      symbolizer.labelAlign = 'cm';
    }

    const fontStyle = textStyle.getFont();
    if (fontStyle !== undefined) {
      const font = fontStyle.split(' ');
      if (font.length >= 3) {
        symbolizer.fontWeight = font[0];
        symbolizer.fontSize = font[1];
        symbolizer.fontFamily = font.splice(2).join(' ');
      }
    }

    const strokeStyle = textStyle.getStroke();
    if (strokeStyle !== null) {
      const strokeColor = strokeStyle.getColor();
      if (!(typeof strokeColor === 'string' || Array.isArray(strokeColor))) {
        throw new Error('Wrong strokeColor type');
      }
      const strokeColorRgba = asColorArray(strokeColor);
      if (!Array.isArray(strokeColorRgba)) {
        throw new Error('Parsed strokeColorRgba is not an array');
      }
      symbolizer.haloColor = rgbArrayToHex(strokeColorRgba);
      symbolizer.haloOpacity = strokeColorRgba[3];
      const width = strokeStyle.getWidth();
      if (width !== undefined) {
        // Width is a stroke, radius a radius, so divide by 2
        symbolizer.haloRadius = width / 2;
      }
    }

    const fillStyle = textStyle.getFill();
    if (fillStyle !== null) {
      const fillColor = fillStyle.getColor();
      if (!(typeof fillColor === 'string' || Array.isArray(fillColor))) {
        throw new Error('Wrong fillColor type');
      }
      const fillColorRgba = asColorArray(fillColor);
      if (!Array.isArray(fillColorRgba)) {
        throw new Error('Parsed fillColorRgba is not an array');
      }
      symbolizer.fontColor = rgbArrayToHex(fillColorRgba);
    }

    // Mapfish Print allows offset only if labelAlign is defined.
    if (symbolizer.labelAlign !== undefined) {
      symbolizer.labelXOffset = textStyle.getOffsetX();
      // Mapfish uses the opposite direction of OpenLayers for y axis, so the
      // minus sign is required for the y offset to be identical.
      symbolizer.labelYOffset = -textStyle.getOffsetY();
    }

    if (goodnessOfFit !== undefined) {
      symbolizer.goodnessOfFit = goodnessOfFit;
    }

    return symbolizer;
  }
};

export default VectorEncoder;
