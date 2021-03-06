'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../hooks/index.js');
require('./skeleton-item.js');
var skeleton = require('./skeleton.js');
var skeletonItem_vue_vue_type_script_lang = require('./skeleton-item.vue_vue_type_script_lang.js');
var index = require('../../../hooks/use-throttle-render/index.js');

var script = vue.defineComponent({
  name: "ElSkeleton",
  components: {
    [skeletonItem_vue_vue_type_script_lang["default"].name]: skeletonItem_vue_vue_type_script_lang["default"]
  },
  props: skeleton.skeletonProps,
  setup(props) {
    const innerLoading = vue.computed(() => {
      return props.loading;
    });
    const uiLoading = index.useThrottleRender(innerLoading, props.throttle);
    return {
      uiLoading
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=skeleton.vue_vue_type_script_lang.js.map
