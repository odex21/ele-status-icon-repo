import { defineComponent, computed, ref, watch, nextTick, onMounted } from 'vue';
import { isPromise } from '@vue/shared';
import { isBool } from '../../../utils/util.mjs';
import { throwError, debugWarn } from '../../../utils/error.mjs';
import { ElIcon } from '../../icon/index.mjs';
import { Loading } from '@element-plus/icons-vue';
import { UPDATE_MODEL_EVENT, CHANGE_EVENT, INPUT_EVENT } from '../../../utils/constants.mjs';
import '../../../hooks/index.mjs';
import { switchProps, switchEmits } from './switch.mjs';
import { useFormItem } from '../../../hooks/use-form-item/index.mjs';
import { useDisabled } from '../../../hooks/use-common-props/index.mjs';

const COMPONENT_NAME = "ElSwitch";
var script = defineComponent({
  name: COMPONENT_NAME,
  components: { ElIcon, Loading },
  props: switchProps,
  emits: switchEmits,
  setup(props, { emit }) {
    const { formItem } = useFormItem();
    const switchDisabled = useDisabled(computed(() => props.loading));
    const isModelValue = ref(props.modelValue !== false);
    const input = ref();
    const core = ref();
    watch(() => props.modelValue, () => {
      isModelValue.value = true;
    });
    watch(() => props.value, () => {
      isModelValue.value = false;
    });
    const actualValue = computed(() => {
      return isModelValue.value ? props.modelValue : props.value;
    });
    const checked = computed(() => actualValue.value === props.activeValue);
    if (![props.activeValue, props.inactiveValue].includes(actualValue.value)) {
      emit(UPDATE_MODEL_EVENT, props.inactiveValue);
      emit(CHANGE_EVENT, props.inactiveValue);
      emit(INPUT_EVENT, props.inactiveValue);
    }
    watch(checked, () => {
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
      emit(UPDATE_MODEL_EVENT, val);
      emit(CHANGE_EVENT, val);
      emit(INPUT_EVENT, val);
      nextTick(() => {
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
      const isExpectType = [isPromise(shouldChange), isBool(shouldChange)].some((i) => i);
      if (!isExpectType) {
        throwError(COMPONENT_NAME, "beforeChange must return type `Promise<boolean>` or `boolean`");
      }
      if (isPromise(shouldChange)) {
        shouldChange.then((result) => {
          if (result) {
            handleChange();
          }
        }).catch((e) => {
          debugWarn(COMPONENT_NAME, `some error occurred: ${e}`);
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
    onMounted(() => {
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

export { script as default };
//# sourceMappingURL=switch.vue_vue_type_script_lang.mjs.map
