'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var core = require('@vueuse/core');
require('../../../../node_modules/.pnpm/@ctrl_tinycolor@3.4.0/node_modules/@ctrl/tinycolor/dist/module/public_api.js');
var index = require('../../icon/index.js');
require('../../../hooks/index.js');
require('../../../tokens/index.js');
var iconsVue = require('@element-plus/icons-vue');
var button = require('./button2.js');
var button$1 = require('../../../tokens/button.js');
var index$1 = require('../../../hooks/use-global-config/index.js');
var index$2 = require('../../../hooks/use-form-item/index.js');
var index$3 = require('../../../hooks/use-common-props/index.js');
var index$4 = require('../../../../node_modules/.pnpm/@ctrl_tinycolor@3.4.0/node_modules/@ctrl/tinycolor/dist/module/index.js');

var script = vue.defineComponent({
  name: "ElButton",
  components: {
    ElIcon: index.ElIcon,
    Loading: iconsVue.Loading
  },
  props: button.buttonProps,
  emits: button.buttonEmits,
  setup(props, { emit, slots }) {
    const buttonRef = vue.ref();
    const buttonGroupContext = vue.inject(button$1.buttonGroupContextKey, void 0);
    const globalConfig = index$1.useGlobalConfig("button");
    const autoInsertSpace = vue.computed(() => {
      var _a, _b, _c;
      return (_c = (_b = props.autoInsertSpace) != null ? _b : (_a = globalConfig.value) == null ? void 0 : _a.autoInsertSpace) != null ? _c : false;
    });
    const shouldAddSpace = vue.computed(() => {
      var _a;
      const defaultSlot = (_a = slots.default) == null ? void 0 : _a.call(slots);
      if (autoInsertSpace.value && (defaultSlot == null ? void 0 : defaultSlot.length) === 1) {
        const slot = defaultSlot[0];
        if ((slot == null ? void 0 : slot.type) === vue.Text) {
          const text = slot.children;
          return /^\p{Unified_Ideograph}{2}$/u.test(text);
        }
      }
      return false;
    });
    const { form } = index$2.useFormItem();
    const buttonSize = index$3.useSize(vue.computed(() => buttonGroupContext == null ? void 0 : buttonGroupContext.size));
    const buttonDisabled = index$3.useDisabled();
    const buttonType = vue.computed(() => props.type || (buttonGroupContext == null ? void 0 : buttonGroupContext.type) || "default");
    const typeColor = vue.computed(() => core.useCssVar(`--el-color-${props.type}`).value);
    const buttonStyle = vue.computed(() => {
      let styles = {};
      const buttonColor = props.color || typeColor.value;
      if (buttonColor) {
        const shadeBgColor = new index$4.TinyColor(buttonColor).shade(10).toString();
        if (props.plain) {
          styles = {
            "--el-button-bg-color": new index$4.TinyColor(buttonColor).tint(90).toString(),
            "--el-button-text-color": buttonColor,
            "--el-button-hover-text-color": "var(--el-color-white)",
            "--el-button-hover-bg-color": buttonColor,
            "--el-button-hover-border-color": buttonColor,
            "--el-button-active-bg-color": shadeBgColor,
            "--el-button-active-text-color": "var(--el-color-white)",
            "--el-button-active-border-color": shadeBgColor
          };
        } else {
          const tintBgColor = new index$4.TinyColor(buttonColor).tint(20).toString();
          styles = {
            "--el-button-bg-color": buttonColor,
            "--el-button-border-color": buttonColor,
            "--el-button-hover-bg-color": tintBgColor,
            "--el-button-hover-border-color": tintBgColor,
            "--el-button-active-bg-color": shadeBgColor,
            "--el-button-active-border-color": shadeBgColor
          };
        }
        if (buttonDisabled.value) {
          const disabledButtonColor = new index$4.TinyColor(buttonColor).tint(50).toString();
          styles["--el-button-disabled-bg-color"] = disabledButtonColor;
          styles["--el-button-disabled-border-color"] = disabledButtonColor;
        }
      }
      return styles;
    });
    const handleClick = (evt) => {
      if (props.nativeType === "reset") {
        form == null ? void 0 : form.resetFields();
      }
      emit("click", evt);
    };
    return {
      buttonRef,
      buttonStyle,
      buttonSize,
      buttonType,
      buttonDisabled,
      shouldAddSpace,
      handleClick
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=button.vue_vue_type_script_lang.js.map
