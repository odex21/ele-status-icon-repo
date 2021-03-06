import { defineComponent, computed } from 'vue';
import { useRadio } from './radio.mjs';
import { radioButtonProps } from './radio-button2.mjs';

var script = defineComponent({
  name: "ElRadioButton",
  props: radioButtonProps,
  setup(props, { emit }) {
    const {
      radioRef,
      isGroup,
      focus,
      size,
      disabled,
      tabIndex,
      modelValue,
      radioGroup
    } = useRadio(props, emit);
    const activeStyle = computed(() => {
      return {
        backgroundColor: (radioGroup == null ? void 0 : radioGroup.fill) || "",
        borderColor: (radioGroup == null ? void 0 : radioGroup.fill) || "",
        boxShadow: (radioGroup == null ? void 0 : radioGroup.fill) ? `-1px 0 0 0 ${radioGroup.fill}` : "",
        color: (radioGroup == null ? void 0 : radioGroup.textColor) || ""
      };
    });
    return {
      isGroup,
      size,
      disabled,
      tabIndex,
      modelValue,
      focus,
      activeStyle,
      radioRef
    };
  }
});

export { script as default };
//# sourceMappingURL=radio-button.vue_vue_type_script_lang.mjs.map
