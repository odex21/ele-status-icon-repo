import { defineComponent, computed } from 'vue';
import '../../../hooks/index.mjs';
import './skeleton-item.mjs';
import { skeletonProps } from './skeleton.mjs';
import script$1 from './skeleton-item.vue_vue_type_script_lang.mjs';
import { useThrottleRender } from '../../../hooks/use-throttle-render/index.mjs';

var script = defineComponent({
  name: "ElSkeleton",
  components: {
    [script$1.name]: script$1
  },
  props: skeletonProps,
  setup(props) {
    const innerLoading = computed(() => {
      return props.loading;
    });
    const uiLoading = useThrottleRender(innerLoading, props.throttle);
    return {
      uiLoading
    };
  }
});

export { script as default };
//# sourceMappingURL=skeleton.vue_vue_type_script_lang.mjs.map
