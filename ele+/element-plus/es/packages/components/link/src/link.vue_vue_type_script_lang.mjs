import { defineComponent } from 'vue';
import { ElIcon } from '../../icon/index.mjs';
import { linkProps, linkEmits } from './link2.mjs';

var script = defineComponent({
  name: "ElLink",
  components: { ElIcon },
  props: linkProps,
  emits: linkEmits,
  setup(props, { emit }) {
    function handleClick(event) {
      if (!props.disabled)
        emit("click", event);
    }
    return {
      handleClick
    };
  }
});

export { script as default };
//# sourceMappingURL=link.vue_vue_type_script_lang.mjs.map
