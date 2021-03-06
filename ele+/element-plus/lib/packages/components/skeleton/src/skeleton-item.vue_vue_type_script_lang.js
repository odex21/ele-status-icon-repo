'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('./image-placeholder.js');
var skeletonItem = require('./skeleton-item2.js');
var imagePlaceholder_vue_vue_type_script_lang = require('./image-placeholder.vue_vue_type_script_lang.js');

var script = vue.defineComponent({
  name: "ElSkeletonItem",
  components: {
    ImgPlaceholder: imagePlaceholder_vue_vue_type_script_lang["default"]
  },
  props: skeletonItem.skeletonItemProps
});

exports["default"] = script;
//# sourceMappingURL=skeleton-item.vue_vue_type_script_lang.js.map
