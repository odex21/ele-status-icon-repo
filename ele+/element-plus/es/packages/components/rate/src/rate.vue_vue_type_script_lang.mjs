import { defineComponent, inject, ref, computed, watch } from 'vue';
import { isObject, isArray } from '@vue/shared';
import '../../../tokens/index.mjs';
import { hasClass } from '../../../utils/dom.mjs';
import { EVENT_CODE } from '../../../utils/aria.mjs';
import { UPDATE_MODEL_EVENT } from '../../../utils/constants.mjs';
import { ElIcon } from '../../icon/index.mjs';
import { StarFilled, Star } from '@element-plus/icons-vue';
import { rateProps, rateEmits } from './rate2.mjs';
import { elFormKey } from '../../../tokens/form.mjs';

function getValueFromMap(value, map) {
  const isExcludedObject = (val) => isObject(val);
  const matchedKeys = Object.keys(map).map((key) => +key).filter((key) => {
    const val = map[key];
    const excluded = isExcludedObject(val) ? val.excluded : false;
    return excluded ? value < key : value <= key;
  }).sort((a, b) => a - b);
  const matchedValue = map[matchedKeys[0]];
  return isExcludedObject(matchedValue) && matchedValue.value || matchedValue;
}
var script = defineComponent({
  name: "ElRate",
  components: {
    ElIcon,
    StarFilled,
    Star
  },
  props: rateProps,
  emits: rateEmits,
  setup(props, { emit }) {
    const elForm = inject(elFormKey, {});
    const currentValue = ref(props.modelValue);
    const hoverIndex = ref(-1);
    const pointerAtLeftHalf = ref(true);
    const rateDisabled = computed(() => props.disabled || elForm.disabled);
    const text = computed(() => {
      let result = "";
      if (props.showScore) {
        result = props.scoreTemplate.replace(/\{\s*value\s*\}/, rateDisabled.value ? `${props.modelValue}` : `${currentValue.value}`);
      } else if (props.showText) {
        result = props.texts[Math.ceil(currentValue.value) - 1];
      }
      return result;
    });
    const valueDecimal = computed(() => props.modelValue * 100 - Math.floor(props.modelValue) * 100);
    const colorMap = computed(() => isArray(props.colors) ? {
      [props.lowThreshold]: props.colors[0],
      [props.highThreshold]: { value: props.colors[1], excluded: true },
      [props.max]: props.colors[2]
    } : props.colors);
    const activeColor = computed(() => getValueFromMap(currentValue.value, colorMap.value));
    const decimalStyle = computed(() => {
      let width = "";
      if (rateDisabled.value) {
        width = `${valueDecimal.value}%`;
      } else if (props.allowHalf) {
        width = "50%";
      }
      return {
        color: activeColor.value,
        width
      };
    });
    const componentMap = computed(() => isArray(props.icons) ? {
      [props.lowThreshold]: props.icons[0],
      [props.highThreshold]: {
        value: props.icons[1],
        excluded: true
      },
      [props.max]: props.icons[2]
    } : props.icons);
    const decimalIconComponent = computed(() => getValueFromMap(props.modelValue, componentMap.value));
    const voidComponent = computed(() => rateDisabled.value ? props.disabledvoidIcon : props.voidIcon);
    const activeComponent = computed(() => getValueFromMap(currentValue.value, componentMap.value));
    const iconComponents = computed(() => {
      const result = Array(props.max);
      const threshold = currentValue.value;
      result.fill(activeComponent.value, 0, threshold);
      result.fill(voidComponent.value, threshold, props.max);
      return result;
    });
    function showDecimalIcon(item) {
      const showWhenDisabled = rateDisabled.value && valueDecimal.value > 0 && item - 1 < props.modelValue && item > props.modelValue;
      const showWhenAllowHalf = props.allowHalf && pointerAtLeftHalf.value && item - 0.5 <= currentValue.value && item > currentValue.value;
      return showWhenDisabled || showWhenAllowHalf;
    }
    function getIconStyle(item) {
      const voidColor = rateDisabled.value ? props.disabledVoidColor : props.voidColor;
      return {
        color: item <= currentValue.value ? activeColor.value : voidColor
      };
    }
    function selectValue(value) {
      if (rateDisabled.value) {
        return;
      }
      if (props.allowHalf && pointerAtLeftHalf.value) {
        emit(UPDATE_MODEL_EVENT, currentValue.value);
        if (props.modelValue !== currentValue.value) {
          emit("change", currentValue.value);
        }
      } else {
        emit(UPDATE_MODEL_EVENT, value);
        if (props.modelValue !== value) {
          emit("change", value);
        }
      }
    }
    function handleKey(e) {
      if (rateDisabled.value) {
        return;
      }
      let _currentValue = currentValue.value;
      const code = e.code;
      if (code === EVENT_CODE.up || code === EVENT_CODE.right) {
        if (props.allowHalf) {
          _currentValue += 0.5;
        } else {
          _currentValue += 1;
        }
        e.stopPropagation();
        e.preventDefault();
      } else if (code === EVENT_CODE.left || code === EVENT_CODE.down) {
        if (props.allowHalf) {
          _currentValue -= 0.5;
        } else {
          _currentValue -= 1;
        }
        e.stopPropagation();
        e.preventDefault();
      }
      _currentValue = _currentValue < 0 ? 0 : _currentValue;
      _currentValue = _currentValue > props.max ? props.max : _currentValue;
      emit(UPDATE_MODEL_EVENT, _currentValue);
      emit("change", _currentValue);
      return _currentValue;
    }
    function setCurrentValue(value, event) {
      if (rateDisabled.value) {
        return;
      }
      if (props.allowHalf) {
        let target = event.target;
        if (hasClass(target, "el-rate__item")) {
          target = target.querySelector(".el-rate__icon");
        }
        if (target.clientWidth === 0 || hasClass(target, "el-rate__decimal")) {
          target = target.parentNode;
        }
        pointerAtLeftHalf.value = event.offsetX * 2 <= target.clientWidth;
        currentValue.value = pointerAtLeftHalf.value ? value - 0.5 : value;
      } else {
        currentValue.value = value;
      }
      hoverIndex.value = value;
    }
    function resetCurrentValue() {
      if (rateDisabled.value) {
        return;
      }
      if (props.allowHalf) {
        pointerAtLeftHalf.value = props.modelValue !== Math.floor(props.modelValue);
      }
      currentValue.value = props.modelValue;
      hoverIndex.value = -1;
    }
    watch(() => props.modelValue, (val) => {
      currentValue.value = val;
      pointerAtLeftHalf.value = props.modelValue !== Math.floor(props.modelValue);
    });
    if (!props.modelValue) {
      emit(UPDATE_MODEL_EVENT, 0);
    }
    return {
      hoverIndex,
      currentValue,
      rateDisabled,
      text,
      decimalStyle,
      decimalIconComponent,
      iconComponents,
      showDecimalIcon,
      getIconStyle,
      selectValue,
      handleKey,
      setCurrentValue,
      resetCurrentValue
    };
  }
});

export { script as default };
//# sourceMappingURL=rate.vue_vue_type_script_lang.mjs.map
