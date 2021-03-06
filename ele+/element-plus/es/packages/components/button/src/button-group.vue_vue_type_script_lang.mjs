import { defineComponent, provide, reactive, toRef } from 'vue';
import '../../../tokens/index.mjs';
import { buttonGroupProps } from './button-group2.mjs';
import { buttonGroupContextKey } from '../../../tokens/button.mjs';

var script = defineComponent({
  name: "ElButtonGroup",
  props: buttonGroupProps,
  setup(props) {
    provide(buttonGroupContextKey, reactive({
      size: toRef(props, "size"),
      type: toRef(props, "type")
    }));
  }
});

export { script as default };
//# sourceMappingURL=button-group.vue_vue_type_script_lang.mjs.map
