import { defineComponent, nextTick, computed, provide, toRefs, watch } from 'vue';
import { UPDATE_MODEL_EVENT } from '../../../utils/constants.mjs';
import { isValidComponentSize } from '../../../utils/validators.mjs';
import '../../../hooks/index.mjs';
import { useCheckboxGroup } from './useCheckbox.mjs';
import { useSize } from '../../../hooks/use-common-props/index.mjs';

var script = defineComponent({
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
      validator: isValidComponentSize
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
  emits: [UPDATE_MODEL_EVENT, "change"],
  setup(props, ctx) {
    const { elFormItem } = useCheckboxGroup();
    const checkboxGroupSize = useSize();
    const changeEvent = (value) => {
      ctx.emit(UPDATE_MODEL_EVENT, value);
      nextTick(() => {
        ctx.emit("change", value);
      });
    };
    const modelValue = computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        changeEvent(val);
      }
    });
    provide("CheckboxGroup", {
      name: "ElCheckboxGroup",
      modelValue,
      ...toRefs(props),
      checkboxGroupSize,
      changeEvent
    });
    watch(() => props.modelValue, () => {
      var _a;
      (_a = elFormItem.validate) == null ? void 0 : _a.call(elFormItem, "change");
    });
  }
});

export { script as default };
//# sourceMappingURL=checkbox-group.vue_vue_type_script_lang.mjs.map
