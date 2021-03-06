'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var radio = require('./radio.js');
var radioButton = require('./radio-button2.js');

var script = vue.defineComponent({
  name: "ElRadioButton",
  props: radioButton.radioButtonProps,
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
    } = radio.useRadio(props, emit);
    const activeStyle = vue.computed(() => {
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

exports["default"] = script;
//# sourceMappingURL=radio-button.vue_vue_type_script_lang.js.map
