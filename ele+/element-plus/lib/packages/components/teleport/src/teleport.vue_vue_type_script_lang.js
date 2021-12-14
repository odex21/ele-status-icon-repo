'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var core = require('@vueuse/core');
var teleport = require('./teleport2.js');

var script = vue.defineComponent({
  props: teleport.elTeleportProps,
  setup(props) {
    const containerRef = vue.ref();
    const containerStyle = vue.computed(() => {
      return props.container === "body" || !core.isClient && props.container === document.body ? [
        props.style,
        {
          position: "absolute",
          top: `0px`,
          left: `0px`,
          zIndex: props.zIndex
        }
      ] : {};
    });
    return {
      containerRef,
      containerStyle
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=teleport.vue_vue_type_script_lang.js.map
