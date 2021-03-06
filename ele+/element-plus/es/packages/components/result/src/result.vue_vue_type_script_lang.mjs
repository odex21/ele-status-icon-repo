import { defineComponent, computed } from 'vue';
import { resultProps, IconMap, IconComponentMap } from './result2.mjs';

var script = defineComponent({
  name: "ElResult",
  props: resultProps,
  setup(props) {
    const resultIcon = computed(() => {
      const icon = props.icon;
      const iconClass = icon && IconMap[icon] ? IconMap[icon] : "icon-info";
      const iconComponent = IconComponentMap[iconClass] || IconComponentMap["icon-info"];
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

export { script as default };
//# sourceMappingURL=result.vue_vue_type_script_lang.mjs.map
