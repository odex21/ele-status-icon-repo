'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var constants = require('../../../utils/constants.js');
var validators = require('../../../utils/validators.js');
require('../../../hooks/index.js');
var useCheckbox = require('./useCheckbox.js');
var index = require('../../../hooks/use-common-props/index.js');

var script = vue.defineComponent({
  name: "ElCheckboxGroup",
  props: {
    modelValue: {
      type: [Object, Boolean, Array],
      default: () => void 0
    },
    disabled: Boolean,
    min: {
      type: Number,
      default: void 0
    },
    max: {
      type: Number,
      default: void 0
    },
    size: {
      type: String,
      validator: validators.isValidComponentSize
    },
    fill: {
      type: String,
      default: void 0
    },
    textColor: {
      type: String,
      default: void 0
    }
  },
  emits: [constants.UPDATE_MODEL_EVENT, "change"],
  setup(props, ctx) {
    const { elFormItem } = useCheckbox.useCheckboxGroup();
    const checkboxGroupSize = index.useSize();
    const changeEvent = (value) => {
      ctx.emit(constants.UPDATE_MODEL_EVENT, value);
      vue.nextTick(() => {
        ctx.emit("change", value);
      });
    };
    const modelValue = vue.computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        changeEvent(val);
      }
    });
    vue.provide("CheckboxGroup", {
      name: "ElCheckboxGroup",
      modelValue,
      ...vue.toRefs(props),
      checkboxGroupSize,
      changeEvent
    });
    vue.watch(() => props.modelValue, () => {
      var _a;
      (_a = elFormItem.validate) == null ? void 0 : _a.call(elFormItem, "change");
    });
  }
});

exports["default"] = script;
//# sourceMappingURL=checkbox-group.vue_vue_type_script_lang.js.map
