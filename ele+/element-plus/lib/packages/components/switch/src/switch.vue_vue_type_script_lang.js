'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var shared = require('@vue/shared');
var util = require('../../../utils/util.js');
var error = require('../../../utils/error.js');
var index = require('../../icon/index.js');
var iconsVue = require('@element-plus/icons-vue');
var constants = require('../../../utils/constants.js');
require('../../../hooks/index.js');
var _switch = require('./switch.js');
var index$1 = require('../../../hooks/use-form-item/index.js');
var index$2 = require('../../../hooks/use-common-props/index.js');

const COMPONENT_NAME = "ElSwitch";
var script = vue.defineComponent({
  name: COMPONENT_NAME,
  components: { ElIcon: index.ElIcon, Loading: iconsVue.Loading },
  props: _switch.switchProps,
  emits: _switch.switchEmits,
  setup(props, { emit }) {
    const { formItem } = index$1.useFormItem();
    const switchDisabled = index$2.useDisabled(vue.computed(() => props.loading));
    const isModelValue = vue.ref(props.modelValue !== false);
    const input = vue.ref();
    const core = vue.ref();
    vue.watch(() => props.modelValue, () => {
      isModelValue.value = true;
    });
    vue.watch(() => props.value, () => {
      isModelValue.value = false;
    });
    const actualValue = vue.computed(() => {
      return isModelValue.value ? props.modelValue : props.value;
    });
    const checked = vue.computed(() => actualValue.value === props.activeValue);
    if (![props.activeValue, props.inactiveValue].includes(actualValue.value)) {
      emit(constants.UPDATE_MODEL_EVENT, props.inactiveValue);
      emit(constants.CHANGE_EVENT, props.inactiveValue);
      emit(constants.INPUT_EVENT, props.inactiveValue);
    }
    vue.watch(checked, () => {
      var _a;
      input.value.checked = checked.value;
      if (props.activeColor || props.inactiveColor) {
        setBackgroundColor();
      }
      if (props.validateEvent) {
        (_a = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a.call(formItem, "change");
      }
    });
    const handleChange = () => {
      const val = checked.value ? props.inactiveValue : props.activeValue;
      emit(constants.UPDATE_MODEL_EVENT, val);
      emit(constants.CHANGE_EVENT, val);
      emit(constants.INPUT_EVENT, val);
      vue.nextTick(() => {
        input.value.checked = checked.value;
      });
    };
    const switchValue = () => {
      if (switchDisabled.value)
        return;
      const { beforeChange } = props;
      if (!beforeChange) {
        handleChange();
        return;
      }
      const shouldChange = beforeChange();
      const isExpectType = [shared.isPromise(shouldChange), util.isBool(shouldChange)].some((i) => i);
      if (!isExpectType) {
        error.throwError(COMPONENT_NAME, "beforeChange must return type `Promise<boolean>` or `boolean`");
      }
      if (shared.isPromise(shouldChange)) {
        shouldChange.then((result) => {
          if (result) {
            handleChange();
          }
        }).catch((e) => {
          error.debugWarn(COMPONENT_NAME, `some error occurred: ${e}`);
        });
      } else if (shouldChange) {
        handleChange();
      }
    };
    const setBackgroundColor = () => {
      const newColor = checked.value ? props.activeColor : props.inactiveColor;
      const coreEl = core.value;
      if (props.borderColor)
        coreEl.style.borderColor = props.borderColor;
      else if (!props.borderColor)
        coreEl.style.borderColor = newColor;
      coreEl.style.backgroundColor = newColor;
      coreEl.children[0].style.color = newColor;
    };
    const focus = () => {
      var _a, _b;
      (_b = (_a = input.value) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
    };
    vue.onMounted(() => {
      if (props.activeColor || props.inactiveColor || props.borderColor) {
        setBackgroundColor();
      }
      input.value.checked = checked.value;
    });
    return {
      input,
      core,
      switchDisabled,
      checked,
      handleChange,
      switchValue,
      focus
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=switch.vue_vue_type_script_lang.js.map
