'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var shared = require('@vue/shared');
require('../../../tokens/index.js');
var dom = require('../../../utils/dom.js');
var aria = require('../../../utils/aria.js');
var constants = require('../../../utils/constants.js');
var index = require('../../icon/index.js');
var iconsVue = require('@element-plus/icons-vue');
var rate = require('./rate2.js');
var form = require('../../../tokens/form.js');

function getValueFromMap(value, map) {
  const isExcludedObject = (val) => shared.isObject(val);
  const matchedKeys = Object.keys(map).map((key) => +key).filter((key) => {
    const val = map[key];
    const excluded = isExcludedObject(val) ? val.excluded : false;
    return excluded ? value < key : value <= key;
  }).sort((a, b) => a - b);
  const matchedValue = map[matchedKeys[0]];
  return isExcludedObject(matchedValue) && matchedValue.value || matchedValue;
}
var script = vue.defineComponent({
  name: "ElRate",
  components: {
    ElIcon: index.ElIcon,
    StarFilled: iconsVue.StarFilled,
    Star: iconsVue.Star
  },
  props: rate.rateProps,
  emits: rate.rateEmits,
  setup(props, { emit }) {
    const elForm = vue.inject(form.elFormKey, {});
    const currentValue = vue.ref(props.modelValue);
    const hoverIndex = vue.ref(-1);
    const pointerAtLeftHalf = vue.ref(true);
    const rateDisabled = vue.computed(() => props.disabled || elForm.disabled);
    const text = vue.computed(() => {
      let result = "";
      if (props.showScore) {
        result = props.scoreTemplate.replace(/\{\s*value\s*\}/, rateDisabled.value ? `${props.modelValue}` : `${currentValue.value}`);
      } else if (props.showText) {
        result = props.texts[Math.ceil(currentValue.value) - 1];
      }
      return result;
    });
    const valueDecimal = vue.computed(() => props.modelValue * 100 - Math.floor(props.modelValue) * 100);
    const colorMap = vue.computed(() => shared.isArray(props.colors) ? {
      [props.lowThreshold]: props.colors[0],
      [props.highThreshold]: { value: props.colors[1], excluded: true },
      [props.max]: props.colors[2]
    } : props.colors);
    const activeColor = vue.computed(() => getValueFromMap(currentValue.value, colorMap.value));
    const decimalStyle = vue.computed(() => {
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
    const componentMap = vue.computed(() => shared.isArray(props.icons) ? {
      [props.lowThreshold]: props.icons[0],
      [props.highThreshold]: {
        value: props.icons[1],
        excluded: true
      },
      [props.max]: props.icons[2]
    } : props.icons);
    const decimalIconComponent = vue.computed(() => getValueFromMap(props.modelValue, componentMap.value));
    const voidComponent = vue.computed(() => rateDisabled.value ? props.disabledvoidIcon : props.voidIcon);
    const activeComponent = vue.computed(() => getValueFromMap(currentValue.value, componentMap.value));
    const iconComponents = vue.computed(() => {
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
        emit(constants.UPDATE_MODEL_EVENT, currentValue.value);
        if (props.modelValue !== currentValue.value) {
          emit("change", currentValue.value);
        }
      } else {
        emit(constants.UPDATE_MODEL_EVENT, value);
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
      if (code === aria.EVENT_CODE.up || code === aria.EVENT_CODE.right) {
        if (props.allowHalf) {
          _currentValue += 0.5;
        } else {
          _currentValue += 1;
        }
        e.stopPropagation();
        e.preventDefault();
      } else if (code === aria.EVENT_CODE.left || code === aria.EVENT_CODE.down) {
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
      emit(constants.UPDATE_MODEL_EVENT, _currentValue);
      emit("change", _currentValue);
      return _currentValue;
    }
    function setCurrentValue(value, event) {
      if (rateDisabled.value) {
        return;
      }
      if (props.allowHalf) {
        let target = event.target;
        if (dom.hasClass(target, "el-rate__item")) {
          target = target.querySelector(".el-rate__icon");
        }
        if (target.clientWidth === 0 || dom.hasClass(target, "el-rate__decimal")) {
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
    vue.watch(() => props.modelValue, (val) => {
      currentValue.value = val;
      pointerAtLeftHalf.value = props.modelValue !== Math.floor(props.modelValue);
    });
    if (!props.modelValue) {
      emit(constants.UPDATE_MODEL_EVENT, 0);
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

exports["default"] = script;
//# sourceMappingURL=rate.vue_vue_type_script_lang.js.map
