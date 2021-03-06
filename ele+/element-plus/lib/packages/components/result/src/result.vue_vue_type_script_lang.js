'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var result = require('./result2.js');

var script = vue.defineComponent({
  name: "ElResult",
  props: result.resultProps,
  setup(props) {
    const resultIcon = vue.computed(() => {
      const icon = props.icon;
      const iconClass = icon && result.IconMap[icon] ? result.IconMap[icon] : "icon-info";
      const iconComponent = result.IconComponentMap[iconClass] || result.IconComponentMap["icon-info"];
      return {
        class: iconClass,
        component: iconComponent
      };
    });
    return {
      resultIcon
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=result.vue_vue_type_script_lang.js.map
