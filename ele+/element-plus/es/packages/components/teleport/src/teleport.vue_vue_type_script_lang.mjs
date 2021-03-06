import { defineComponent, ref, computed } from 'vue';
import { isClient } from '@vueuse/core';
import { elTeleportProps } from './teleport2.mjs';

var script = defineComponent({
  props: elTeleportProps,
  setup(props) {
    const containerRef = ref();
    const containerStyle = computed(() => {
      return props.container === "body" || !isClient && props.container === document.body ? [
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

export { script as default };
//# sourceMappingURL=teleport.vue_vue_type_script_lang.mjs.map
