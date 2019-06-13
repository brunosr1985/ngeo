const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');


const resourcesRule = {
  test: /\.(jpeg|png|ico|cur|eot|ttf|woff|woff2)$/,
  use: {
    loader: 'file-loader',
    options: {
      name: '[name].[hash:6].[ext]'
    }
  }
};

module.exports = function() {
  return {
    mode: 'production',
    devtool: 'source-map',
    output: {
      filename: '[name].[chunkhash:6].js'
    },
    plugins: [
      new webpack.optimize.ModuleConcatenationPlugin(),
    ],
    module: {
      rules: [
        resourcesRule,
      ]
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          parallel: true,
          sourceMap: true,
          terserOptions: {
            compress: false
          }
        })
      ]
    },
  };
};
