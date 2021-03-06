'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('../../utils/with-install.js');
require('./src/skeleton2.js');
require('./src/skeleton-item.js');
var skeleton = require('./src/skeleton.js');
var skeletonItem = require('./src/skeleton-item2.js');
var skeleton_vue_vue_type_script_lang = require('./src/skeleton.vue_vue_type_script_lang.js');
var skeletonItem_vue_vue_type_script_lang = require('./src/skeleton-item.vue_vue_type_script_lang.js');

const ElSkeleton = withInstall.withInstall(skeleton_vue_vue_type_script_lang["default"], {
  SkeletonItem: skeletonItem_vue_vue_type_script_lang["default"]
});
const ElSkeletonItem = withInstall.withNoopInstall(skeletonItem_vue_vue_type_script_lang["default"]);

exports.skeletonProps = skeleton.skeletonProps;
exports.skeletonItemProps = skeletonItem.skeletonItemProps;
exports.ElSkeleton = ElSkeleton;
exports.ElSkeletonItem = ElSkeletonItem;
exports["default"] = ElSkeleton;
//# sourceMappingURL=index.js.map
