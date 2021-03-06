// The MIT License (MIT)
//
// Copyright (c) 2016-2021 Camptocamp SA
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

import angular from 'angular';
import {PermalinkParam} from 'gmf/index.js';
import gmfThemeThemes, {findGroupByName, findGroupByLayerNodeName} from 'gmf/theme/Themes.js';
import ngeoLayertreeController, {
  LayertreeVisitorDecision,
  LayertreeController,
} from 'ngeo/layertree/Controller.js';
import {MessageType} from 'ngeo/message/Message.js';
import ngeoMessageNotification from 'ngeo/message/Notification.js';
import ngeoStatemanagerService from 'ngeo/statemanager/Service.js';
import {listen} from 'ol/events.js';

/**
 * @typedef {Object} TreeManagerFullState
 * @property {Object<string, TreeManagerFullState>} [children]
 * @property {boolean|undefined} [isChecked]
 * @property {boolean|undefined} [isExpanded]
 * @property {boolean|undefined} [isLegendExpanded]
 */

/**
 * Manage a tree with children. This service can be used in mode 'flush'
 * (default) or not (mode 'add'). In mode 'flush', each theme, group or group
 * by layer that you add will replace the previous children's array. In mode
 * 'add', children will be just pushed in this array. The default state can be
 * changed by setting the value `gmfTreeManagerModeFlush`, e.g.:
 *
 *     let module = angular.module('app');
 *     module.value('gmfTreeManagerModeFlush', false);
 *
 * This service's theme is a GmfTheme with only children and a name.
 * Thought to be the tree source of the gmf layertree directive.
 *
 * @constructor
 * @param {angular.ITimeoutService} $timeout Angular timeout service.
 * @param {angular.auto.IInjectorService} $injector Angular injector service.
 * @param {angular.gettext.gettextCatalog} gettextCatalog Gettext catalog.
 * @param {import("ngeo/map/LayerHelper.js").LayerHelper} ngeoLayerHelper Ngeo Layer Helper.
 * @param {import("ngeo/message/Notification.js").MessageNotification} ngeoNotification
 *    Ngeo notification service.
 * @param {import("gmf/theme/Themes.js").ThemesService} gmfThemes gmf Themes service.
 * @param {import("ngeo/statemanager/Service.js").StatemanagerService} ngeoStateManager The ngeo
 *    statemanager service.
 * @ngInject
 * @ngdoc service
 * @ngname gmfTreeManager
 * @hidden
 */
export function LayertreeTreeManager(
  $timeout,
  $injector,
  gettextCatalog,
  ngeoLayerHelper,
  ngeoNotification,
  gmfThemes,
  ngeoStateManager
) {
  /**
   * @type {angular.ITimeoutService}
   */
  this.$timeout_ = $timeout;

  /**
   * @type {angular.auto.IInjectorService}
   */
  this.$injector_ = $injector;

  /**
   * @type {angular.gettext.gettextCatalog}
   */
  this.gettextCatalog_ = gettextCatalog;

  /**
   * @type {import("ngeo/map/LayerHelper.js").LayerHelper}
   */
  this.layerHelper_ = ngeoLayerHelper;

  /**
   * @type {import("ngeo/message/Notification.js").MessageNotification}
   */
  this.ngeoNotification_ = ngeoNotification;

  /**
   * @type {import("gmf/theme/Themes.js").ThemesService}
   */
  this.gmfThemes_ = gmfThemes;

  /**
   * The root node and its children used to generate the layertree (with the
   * same ordre).
   * @type {import('gmf/themes.js').GmfRootNode}
   * @public
   */
  this.root = /** @type {import('gmf/themes.js').GmfRootNode} */ ({
    children: [],
  });

  /**
   * The controller of the (unique) root layer tree.
   * The array of top level layer trees is available through `rootCtrl.children`.
   * The order doesn't match with the ordre of the displayed layertree.
   * @type {?import("ngeo/layertree/Controller.js").LayertreeController}
   */
  this.rootCtrl = null;

  /**
   * Number of groups to add to the layertree during one single Angular
   * digest loop.
   * @type {number}
   * @public
   */
  this.numberOfGroupsToAddInThisDigestLoop = 0;

  /**
   * @type {Array<import('gmf/themes.js').GmfGroup>}
   */
  this.groupsToAddInThisDigestLoop_ = [];

  /**
   * @type {?angular.IPromise<void>}
   */
  this.promiseForGroupsToAddInThisDigestLoop_ = null;

  /**
   * @type {import("ngeo/statemanager/Service.js").StatemanagerService}
   */
  this.ngeoStateManager_ = ngeoStateManager;

  /**
   * @type {Array.<import('gmf/themes.js').GmfGroup>|undefined}
   */
  this.initialLevelFirstGroups_ = undefined;

  /**
   * A reference to the OGC servers loaded by the theme service.
   * @type {?import('gmf/themes.js').GmfOgcServers}
   */
  this.ogcServers_ = null;

  listen(this.gmfThemes_, 'change', this.handleThemesChange_, this);
}

/**
 * Called when the themes change. Get the OGC servers, then listen to the tree manager Layertree
 * controllers array changes.
 * The themes could have been changed so it also call a refresh of the layertree.
 */
LayertreeTreeManager.prototype.handleThemesChange_ = function () {
  this.gmfThemes_.getOgcServersObject().then((ogcServers) => {
    this.ogcServers_ = ogcServers;
  });

  if (this.rootCtrl && this.rootCtrl.children) {
    this.gmfThemes_.getThemesObject().then((themes) => {
      this.refreshFirstLevelGroups_(themes);
    });
  }
};

/**
 * Set some groups as tree's children. If the service use mode 'flush', the
 * previous tree's children will be removed. Add only groups that are not
 * already in the tree.
 * @param {Array<import('gmf/themes.js').GmfGroup>} firstLevelGroups An array of gmf theme group.
 * @return {boolean} True if the group has been added. False otherwise.
 */
LayertreeTreeManager.prototype.setFirstLevelGroups = function (firstLevelGroups) {
  //Remove existing submenu if opened at theme refresh
  this.parseTreeNodes(this.root);

  this.root.children.length = 0;
  this.ngeoStateManager_.deleteParam(PermalinkParam.TREE_GROUPS);
  return this.addFirstLevelGroups(firstLevelGroups);
};

/**
 * Add some groups as tree's children. If the service use mode 'flush', the
 * previous tree's children will be removed. Add only groups that are not
 * already in the tree.
 * @param {Array<import('gmf/themes.js').GmfGroup>} firstLevelGroups An array of gmf theme
 *     group.
 * @param {boolean=} opt_add if true, force to use the 'add' mode this time.
 * @param {boolean=} opt_silent if true notifyCantAddGroups_ is not called.
 * @return {boolean} True if the group has been added. False otherwise.
 */
LayertreeTreeManager.prototype.addFirstLevelGroups = function (firstLevelGroups, opt_add, opt_silent) {
  /** @type {import('gmf/themes.js').GmfGroup[]} */
  const groupNotAdded = [];

  firstLevelGroups
    .slice()
    .reverse()
    .forEach((group) => {
      if (!this.addFirstLevelGroup_(group)) {
        groupNotAdded.push(group);
      }
    });
  if (groupNotAdded.length > 0 && !opt_silent) {
    this.notifyCantAddGroups_(groupNotAdded);
  }

  return groupNotAdded.length === 0;
};

/**
 * @param {Array.<import('gmf/themes.js').GmfGroup>} firstGroups The groups we add to the layertree
 */
LayertreeTreeManager.prototype.setInitialFirstLevelGroups = function (firstGroups) {
  this.initialLevelFirstGroups_ = firstGroups;
};

/**
 * @param {import('gmf/themes.js').GmfGroup | import('gmf/themes.js').GmfLayer | import('gmf/themes.js').GmfRootNode} node Layer tree node to remove.
 */
LayertreeTreeManager.prototype.parseTreeNodes = function (node) {
  const group = /** @type {import('gmf/themes.js').GmfGroup} */ (node);
  if (group.children) {
    /**
     * @param {unknown} child
     */
    group.children.forEach((child) => {
      this.parseTreeNodes(child);
    });
  }
  if (group.popupId) {
    this.removePopup_(group);
  }
};

/**
 * @param {import('gmf/themes.js').GmfGroup} node Layer tree node to remove.
 */
LayertreeTreeManager.prototype.removePopup_ = function (node) {
  const popupId = node.popupId;
  $(`#${popupId}`).remove();
  delete node.popupId;
};

/**
 * @param {import('gmf/themes.js').GmfGroup[]} array An array of groups.
 * @param {number} old_index The old index before reorder (the current one).
 * @param {number} new_index The new index after reorder.
 */
LayertreeTreeManager.prototype.reorderChild_ = function (array, old_index, new_index) {
  array.splice(new_index, 0, array.splice(old_index, 1)[0]);
};

/**
 * Update the application state with the list of first level groups in the tree
 * @param {Array<import('gmf/themes.js').GmfGroup>} groups firstlevel groups of the tree
 */
LayertreeTreeManager.prototype.updateTreeGroupsState_ = function (groups) {
  /**
   * @type {Object<string, string>}
   */
  const treeGroupsParam = {};
  treeGroupsParam[PermalinkParam.TREE_GROUPS] = groups.map((node) => node.name).join(',');
  this.ngeoStateManager_.updateState(treeGroupsParam);
  if (this.$injector_.has('gmfPermalink')) {
    /** @type {import("gmf/permalink/Permalink.js").PermalinkService} */ (this.$injector_.get(
      'gmfPermalink'
    )).cleanParams(groups);
  }
};

/**
 * Add a group as tree's children without consideration of this service 'mode'.
 * Add it only if it's not already in the tree.
 * @param {import('gmf/themes.js').GmfGroup} group The group to add.
 * @return {boolean} true if the group has been added.
 */
LayertreeTreeManager.prototype.addFirstLevelGroup_ = function (group) {
  let alreadyAdded = false;
  const groupID = group.id;
  this.root.children.some((rootChild) => {
    if (groupID === rootChild.id) {
      alreadyAdded = true;
      return true;
    }
    return false;
  }, this);
  this.groupsToAddInThisDigestLoop_.some((grp) => {
    if (groupID === grp.id) {
      alreadyAdded = true;
      return true;
    }
    return false;
  }, this);
  if (alreadyAdded) {
    return false;
  }

  // Add groups in the list of groups to add and be sure that the counter of
  // groups to add is reset.
  this.groupsToAddInThisDigestLoop_.push(group);
  this.numberOfGroupsToAddInThisDigestLoop = 0;

  // Delete previous timeout promise if it exists to do this action only once.
  if (this.promiseForGroupsToAddInThisDigestLoop_ !== null) {
    this.$timeout_.cancel(this.promiseForGroupsToAddInThisDigestLoop_);
  }

  // Add the groups only when there is no more group to come during this digest
  // loop. The purpose of this is to preserve a consistent order between the
  // layertree (generated by a template) and the layers in the map.
  this.promiseForGroupsToAddInThisDigestLoop_ = this.$timeout_(() => {
    // Set the number of group to add.
    this.numberOfGroupsToAddInThisDigestLoop = this.groupsToAddInThisDigestLoop_.length;
    // Add each first-level-groups.
    this.groupsToAddInThisDigestLoop_.forEach((grp) => {
      this.root.children.unshift(grp);

      // We reorder the groups now as it has to be done before the permalink to be updated
      // initialFirstGroups_ is only defined for user change theme loading
      this.root.children.forEach((group, old_index) => {
        if (this.initialLevelFirstGroups_ !== undefined) {
          const new_index = this.initialLevelFirstGroups_.findIndex(
            (firstLevelGroup) => firstLevelGroup.id === group.id
          );
          if (new_index !== -1 && new_index !== old_index) {
            this.reorderChild_(this.root.children, old_index, new_index);
          }
        }
      });
    });
    this.initialLevelFirstGroups_ = undefined;
    //Update the permalink
    this.updateTreeGroupsState_(this.root.children);
    // Reset the groups and the promise state. Don't reset the
    // numberOfGroupsToAddInThisDigestLoop, it must persist because the layers
    // will be added into the map after that the layertree template is
    // generated (so in the next angular loop).
    this.groupsToAddInThisDigestLoop_.length = 0;
    this.promiseForGroupsToAddInThisDigestLoop_ = null;
  });

  return true;
};

/**
 * Retrieve a group (first found) by its name and add in the tree. Do nothing
 * if any corresponding group is found.
 * @param {string} groupName Name of the group to add.
 * @param {boolean=} opt_add if true, force to use the 'add' mode this time.
 */
LayertreeTreeManager.prototype.addGroupByName = function (groupName, opt_add) {
  this.gmfThemes_.getThemesObject().then((themes) => {
    const group = findGroupByName(themes, groupName);
    if (group) {
      this.addFirstLevelGroups([group], opt_add, false);
    }
  });
};

/**
 * Retrieve a group by the name of a layer that is contained in this group
 * (first found). This group will be added in the tree. Do nothing if any
 * corresponding group is found.
 * @param {string} layerName Name of the layer inside the group to add.
 * @param {boolean=} opt_add if true, force to use the 'add' mode this time.
 * @param {boolean=} opt_silent if true notifyCantAddGroups_ is not called
 */
LayertreeTreeManager.prototype.addGroupByLayerName = function (layerName, opt_add, opt_silent) {
  this.gmfThemes_.getThemesObject().then((themes) => {
    const group = findGroupByLayerNodeName(themes, layerName);
    if (group) {
      const groupAdded = this.addFirstLevelGroups([group], opt_add, opt_silent);
      this.$timeout_(() => {
        const treeCtrl = this.getTreeCtrlByNodeId(group.id);
        if (!treeCtrl) {
          console.warn('Tree controller not found, unable to add the group');
          return;
        }
        /** @type {unknown} */
        let treeCtrlToActive = null;
        treeCtrl.traverseDepthFirst((treeCtrl) => {
          if (treeCtrl.node.name === layerName) {
            treeCtrlToActive = treeCtrl;
            return LayertreeVisitorDecision.STOP;
          }
        });

        // Deactivate all layers in the group if it's not in the tree.
        if (groupAdded) {
          treeCtrl.setState('off');
        }

        // Active it.
        if (treeCtrlToActive instanceof LayertreeController) {
          treeCtrlToActive.setState('on');
        }
      });
    }
  });
};

/**
 * Remove a group from this tree's children. The first group that is found (
 * based on its name) will be removed. If any is found, nothing will append.
 * @param {import('gmf/themes.js').GmfGroup} group The group to remove.
 */
LayertreeTreeManager.prototype.removeGroup = function (group) {
  const children = this.root.children;
  let index = 0,
    found = false;
  children.some((child) => {
    if (child.name === group.name) {
      return (found = true);
    }
    index++;
    return false;
  });
  if (found) {
    children.splice(index, 1);
    this.updateTreeGroupsState_(children);
  }
};

/**
 * Remove all groups.
 */
LayertreeTreeManager.prototype.removeAll = function () {
  while (this.root.children.length) {
    this.removeGroup(this.root.children[0]);
  }
};

/**
 * Clone a group node and recursively set all child node `isChecked` using
 * the given list of layer names.
 * @param {import('gmf/themes.js').GmfGroup} group The original group node.
 * @param {string[]} names Array of node names to check (i.e. that
 *     should have their checkbox checked)
 * @return {import('gmf/themes.js').GmfGroup} Cloned node.
 * @private
 */
LayertreeTreeManager.prototype.cloneGroupNode_ = function (group, names) {
  /**
   * @type {import('gmf/themes.js').GmfGroup}
   */
  const clone = Object.assign({}, group);
  this.toggleNodeCheck_(clone, names);
  return clone;
};

/**
 * Set the child nodes metadata `isChecked` if its name is among the list of
 * given names. If a child node also has children, check those instead.
 * @param {import('gmf/themes.js').GmfGroup|import('gmf/themes.js').GmfLayer} node The original node.
 * @param {string[]} names Array of node names to check (i.e. that
 *     should have their checkbox checked)
 */
LayertreeTreeManager.prototype.toggleNodeCheck_ = function (node, names) {
  const groupNode = /** @type {import('gmf/themes.js').GmfGroup} */ (node);
  if (!groupNode.children) {
    return;
  }
  groupNode.children.forEach((childNode) => {
    const childGroupNode = /** @type {import('gmf/themes.js').GmfGroup} */ (childNode);
    if (childGroupNode.children) {
      this.toggleNodeCheck_(childGroupNode, names);
    } else if (childNode.metadata) {
      childNode.metadata.isChecked = names.includes(childNode.name);
    }
  });
};

/**
 * Display a notification that informs that the given groups are already in the
 * tree.
 * @param {Array<import('gmf/themes.js').GmfGroup>} groups An array of groups that already in
 *   the tree.
 */
LayertreeTreeManager.prototype.notifyCantAddGroups_ = function (groups) {
  /** @type {string[]} */
  const names = [];
  const gettextCatalog = this.gettextCatalog_;
  groups.forEach((group) => {
    names.push(gettextCatalog.getString(group.name));
  });
  const msg =
    names.length < 2
      ? gettextCatalog.getString('group is already loaded.')
      : gettextCatalog.getString('groups are already loaded.');
  this.ngeoNotification_.notify({
    msg: `${names.join(', ')} ${msg}`,
    type: MessageType.INFORMATION,
  });
};

/**
 * Get a treeCtrl based on it's node id.
 * @param {number} id the id of a GMFThemesGroup or a GMFThemesLeaf.
 * @return {import("ngeo/layertree/Controller.js").LayertreeController?} treeCtrl The associated controller
 *    or null.
 * @public
 */
LayertreeTreeManager.prototype.getTreeCtrlByNodeId = function (id) {
  let correspondingTreeCtrl = null;
  if (this.rootCtrl && this.rootCtrl.traverseDepthFirst) {
    this.rootCtrl.traverseDepthFirst((treeCtrl) => {
      if (treeCtrl.node.id === id) {
        correspondingTreeCtrl = treeCtrl;
        return LayertreeVisitorDecision.STOP;
      }
    });
  }
  return correspondingTreeCtrl;
};

/**
 * Get the OGC server.
 * @param {import("ngeo/layertree/Controller.js").LayertreeController} treeCtrl ngeo layertree controller,
 *    from the current node.
 * @return {import('gmf/themes.js').GmfOgcServer} The OGC server.
 */
LayertreeTreeManager.prototype.getOgcServer = function (treeCtrl) {
  if (!this.ogcServers_) {
    throw new Error('Missing ogcServers');
  }
  const gmfParentGroup = /** @type {import('gmf/themes.js').GmfGroup} */ (treeCtrl.parent.node);
  if (gmfParentGroup.mixed) {
    const gmfLayerWMS = /** @type {import('gmf/themes.js').GmfLayerWMS} */ (
      /** @type {any} */ (treeCtrl.node)
    );
    if (!gmfLayerWMS.ogcServer) {
      throw new Error('Missing gmfLayerWMS.ogcServer');
    }
    return this.ogcServers_[gmfLayerWMS.ogcServer];
  } else {
    let firstLevelGroupCtrl = treeCtrl;
    while (!firstLevelGroupCtrl.parent.isRoot) {
      firstLevelGroupCtrl = firstLevelGroupCtrl.parent;
    }
    const gmfGroup = /** @type {import('gmf/themes.js').GmfGroup} */ (firstLevelGroupCtrl.node);
    if (!gmfGroup.ogcServer) {
      throw new Error('Missing gmfGroup.ogcServer');
    }
    return this.ogcServers_[gmfGroup.ogcServer];
  }
};

/**
 * Keep the state of each existing first-level-groups in the layertree then
 * remove it and recreate it with nodes that come from the new theme and
 * the corresponding saved state (when possible, otherwise, juste take the
 * corresponding new node).
 * FIXME: Currently doesn't save nor restore the opacity.
 * @param {Array<import('gmf/themes.js').GmfTheme>} themes the array of themes to be based on.
 */
LayertreeTreeManager.prototype.refreshFirstLevelGroups_ = function (themes) {
  if (!this.rootCtrl) {
    throw new Error('Missing rootCtrl');
  }
  /** @type {Object<string, TreeManagerFullState>} */
  const firstLevelGroupsFullState = {};

  // Save state of each child
  this.rootCtrl.children.map((treeCtrl) => {
    const name = treeCtrl.node.name;
    firstLevelGroupsFullState[name] = this.getFirstLevelGroupFullState_(treeCtrl);
  });

  // Get nodes and set their state
  /** @type {import('gmf/themes.js').GmfGroup[]} */
  const nodesToRestore = [];
  // Iterate on the root to keep the same order in the tree as before.
  this.root.children.map((node) => {
    const name = node.name;

    // Find the right firstlevelgroup in the new theme.
    const nodeToRestore = findGroupByName(themes, name);
    if (nodeToRestore) {
      // Restore state.
      const fullState = firstLevelGroupsFullState[name];
      if (fullState) {
        this.setNodeMetadataFromFullState_(nodeToRestore, fullState);
      }
      nodesToRestore.push(nodeToRestore);
    }
  });

  // Re add the firstlevelgroups.
  this.setFirstLevelGroups(nodesToRestore);

  // Wait that Angular has created the layetree, then update the permalink.
  this.$timeout_(() => {
    this.updateTreeGroupsState_(this.root.children);
  });
};

/**
 * Return a TreeManagerFullState that keeps the state of the given
 * treeCtrl including the state of its children.
 * @param {import("ngeo/layertree/Controller.js").LayertreeController} treeCtrl the ngeo layertree
 *    controller to save.
 * @return {TreeManagerFullState} the fullState object.
 */
LayertreeTreeManager.prototype.getFirstLevelGroupFullState_ = function (treeCtrl) {
  /**
   * @type {Object<string, TreeManagerFullState>}
   */
  const children = {};
  // Get the state of the treeCtrl children recursively.
  treeCtrl.children.map((child) => {
    children[child.node.name] = this.getFirstLevelGroupFullState_(child);
  });

  let isChecked, isExpanded, isLegendExpanded;
  if (treeCtrl.children.length > 0) {
    const nodeElement = $(`#gmf-layertree-layer-group-${treeCtrl.uid}`);
    // Set isExpanded only in groups.
    if (nodeElement) {
      isExpanded = nodeElement.hasClass('show');
    }
  } else {
    // Set state and isLegendExpanded only in leaves.
    isChecked = treeCtrl.getState();
    if (isChecked === 'on') {
      isChecked = true;
    } else if (isChecked === 'off') {
      isChecked = false;
    } else {
      isChecked = undefined;
    }
    const legendElement = $(`#gmf-layertree-node-${treeCtrl.uid}-legend`);
    if (legendElement) {
      isLegendExpanded = legendElement.is(':visible');
    }
  }

  return {
    children,
    isChecked,
    isExpanded,
    isLegendExpanded,
  };
};

/**
 * Set a node's metadata with the given fullState. Update also its children
 * recursively with the fullState children.
 * @param {import('gmf/themes.js').GmfGroup|import('gmf/themes.js').GmfLayer} node to update.
 * @param {TreeManagerFullState|undefined} fullState the fullState object
 *     to use.
 * @return {import('gmf/themes.js').GmfGroup|import('gmf/themes.js').GmfLayer} the node with modification.
 */
LayertreeTreeManager.prototype.setNodeMetadataFromFullState_ = function (node, fullState) {
  if (!fullState) {
    return node;
  }

  // Set the metadata of the node children recursively.
  const groupNode = /** @type {import('gmf/themes.js').GmfGroup} */ (node);
  if (groupNode.children) {
    groupNode.children.map((child) => {
      this.setNodeMetadataFromFullState_(child, fullState.children[child.name]);
    });
  }

  // Set the metadata with the fullState object information.
  const metadata = node.metadata;
  metadata.isChecked = fullState.isChecked;
  metadata.isExpanded = fullState.isExpanded;
  metadata.isLegendExpanded = fullState.isLegendExpanded;

  return node;
};

/**
 * @type {angular.IModule}
 * @hidden
 */
const myModule = angular.module('gmfTreeManager', [
  gmfThemeThemes.name,
  ngeoLayertreeController.name,
  ngeoMessageNotification.name,
  ngeoStatemanagerService.name,
]);
myModule.service('gmfTreeManager', LayertreeTreeManager);

export default myModule;
