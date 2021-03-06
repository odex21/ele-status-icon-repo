import { defineComponent, ref, inject, computed, Text } from 'vue';
import { useCssVar } from '@vueuse/core';
import '../../../../node_modules/.pnpm/@ctrl_tinycolor@3.4.0/node_modules/@ctrl/tinycolor/dist/module/public_api.mjs';
import { ElIcon } from '../../icon/index.mjs';
import '../../../hooks/index.mjs';
import '../../../tokens/index.mjs';
import { Loading } from '@element-plus/icons-vue';
import { buttonProps, buttonEmits } from './button2.mjs';
import { buttonGroupContextKey } from '../../../tokens/button.mjs';
import { useGlobalConfig } from '../../../hooks/use-global-config/index.mjs';
import { useFormItem } from '../../../hooks/use-form-item/index.mjs';
import { useSize, useDisabled } from '../../../hooks/use-common-props/index.mjs';
import { TinyColor } from '../../../../node_modules/.pnpm/@ctrl_tinycolor@3.4.0/node_modules/@ctrl/tinycolor/dist/module/index.mjs';

var script = defineComponent({
  name: "ElButton",
  components: {
    ElIcon,
    Loading
  },
  props: buttonProps,
  emits: buttonEmits,
  setup(props, { emit, slots }) {
    const buttonRef = ref();
    const buttonGroupContext = inject(buttonGroupContextKey, void 0);
    const globalConfig = useGlobalConfig("button");
    const autoInsertSpace = computed(() => {
      var _a, _b, _c;
      return (_c = (_b = props.autoInsertSpace) != null ? _b : (_a = globalConfig.value) == null ? void 0 : _a.autoInsertSpace) != null ? _c : false;
    });
    const shouldAddSpace = computed(() => {
      var _a;
      const defaultSlot = (_a = slots.default) == null ? void 0 : _a.call(slots);
      if (autoInsertSpace.value && (defaultSlot == null ? void 0 : defaultSlot.length) === 1) {
        const slot = defaultSlot[0];
        if ((slot == null ? void 0 : slot.type) === Text) {
          const text = slot.children;
          return /^\p{Unified_Ideograph}{2}$/u.test(text);
        }
      }
      return false;
    });
    const { form } = useFormItem();
    const buttonSize = useSize(computed(() => buttonGroupContext == null ? void 0 : buttonGroupContext.size));
    const buttonDisabled = useDisabled();
    const buttonType = computed(() => props.type || (buttonGroupContext == null ? void 0 : buttonGroupContext.type) || "default");
    const typeColor = computed(() => useCssVar(`--el-color-${props.type}`).value);
    const buttonStyle = computed(() => {
      let styles = {};
      const buttonColor = props.color || typeColor.value;
      if (buttonColor) {
        const shadeBgColor = new TinyColor(buttonColor).shade(10).toString();
        if (props.plain) {
          styles = {
            "--el-button-bg-color": new TinyColor(buttonColor).tint(90).toString(),
            "--el-button-text-color": buttonColor,
            "--el-button-hover-text-color": "var(--el-color-white)",
            "--el-button-hover-bg-color": buttonColor,
            "--el-button-hover-border-color": buttonColor,
            "--el-button-active-bg-color": shadeBgColor,
            "--el-button-active-text-color": "var(--el-color-white)",
            "--el-button-active-border-color": shadeBgColor
          };
        } else {
          const tintBgColor = new TinyColor(buttonColor).tint(20).toString();
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
          const disabledButtonColor = new TinyColor(buttonColor).tint(50).toString();
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

export { script as default };
//# sourceMappingURL=button.vue_vue_type_script_lang.mjs.map
