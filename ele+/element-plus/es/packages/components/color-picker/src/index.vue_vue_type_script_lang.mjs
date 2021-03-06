import { defineComponent, inject, ref, reactive, computed, watch, nextTick, onMounted, provide } from 'vue';
import debounce from 'lodash/debounce';
import { ElButton } from '../../button/index.mjs';
import { ElIcon } from '../../icon/index.mjs';
import '../../../directives/index.mjs';
import '../../../tokens/index.mjs';
import '../../../hooks/index.mjs';
import _Popper from '../../popper/index.mjs';
import { ElInput } from '../../input/index.mjs';
import { UPDATE_MODEL_EVENT } from '../../../utils/constants.mjs';
import { isValidComponentSize } from '../../../utils/validators.mjs';
import { Close, ArrowDown } from '@element-plus/icons-vue';
import './components/alpha-slider.mjs';
import './components/hue-slider.mjs';
import './components/predefine.mjs';
import './components/sv-panel.mjs';
import Color from './color.mjs';
import { OPTIONS_KEY } from './useOption.mjs';
import script$1 from './components/sv-panel.vue_vue_type_script_lang.mjs';
import script$2 from './components/hue-slider.vue_vue_type_script_lang.mjs';
import script$3 from './components/alpha-slider.vue_vue_type_script_lang.mjs';
import script$4 from './components/predefine.vue_vue_type_script_lang.mjs';
import ClickOutside from '../../../directives/click-outside/index.mjs';
import { useLocale } from '../../../hooks/use-locale/index.mjs';
import { elFormKey, elFormItemKey } from '../../../tokens/form.mjs';
import { useSize } from '../../../hooks/use-common-props/index.mjs';
import { Effect } from '../../popper/src/use-popper/defaults.mjs';

var script = defineComponent({
  name: "ElColorPicker",
  components: {
    ElButton,
    ElPopper: _Popper,
    ElInput,
    ElIcon,
    Close,
    ArrowDown,
    SvPanel: script$1,
    HueSlider: script$2,
    AlphaSlider: script$3,
    Predefine: script$4
  },
  directives: {
    ClickOutside
  },
  props: {
    modelValue: String,
    showAlpha: Boolean,
    colorFormat: String,
    disabled: Boolean,
    size: {
      type: String,
      validator: isValidComponentSize
    },
    popperClass: String,
    predefine: Array
  },
  emits: ["change", "active-change", UPDATE_MODEL_EVENT],
  setup(props, { emit }) {
    const { t } = useLocale();
    const elForm = inject(elFormKey, {});
    const elFormItem = inject(elFormItemKey, {});
    const hue = ref(null);
    const svPanel = ref(null);
    const alpha = ref(null);
    const popper = ref(null);
    const color = reactive(new Color({
      enableAlpha: props.showAlpha,
      format: props.colorFormat
    }));
    const showPicker = ref(false);
    const showPanelColor = ref(false);
    const customInput = ref("");
    const displayedColor = computed(() => {
      if (!props.modelValue && !showPanelColor.value) {
        return "transparent";
      }
      return displayedRgb(color, props.showAlpha);
    });
    const colorSize = useSize();
    const colorDisabled = computed(() => {
      return props.disabled || elForm.disabled;
    });
    const currentColor = computed(() => {
      return !props.modelValue && !showPanelColor.value ? "" : color.value;
    });
    watch(() => props.modelValue, (newVal) => {
      if (!newVal) {
        showPanelColor.value = false;
      } else if (newVal && newVal !== color.value) {
        color.fromString(newVal);
      }
    });
    watch(() => currentColor.value, (val) => {
      customInput.value = val;
      emit("active-change", val);
    });
    watch(() => color.value, () => {
      if (!props.modelValue && !showPanelColor.value) {
        showPanelColor.value = true;
      }
    });
    function displayedRgb(color2, showAlpha) {
      if (!(color2 instanceof Color)) {
        throw Error("color should be instance of _color Class");
      }
      const { r, g, b } = color2.toRgb();
      return showAlpha ? `rgba(${r}, ${g}, ${b}, ${color2.get("alpha") / 100})` : `rgb(${r}, ${g}, ${b})`;
    }
    function setShowPicker(value) {
      showPicker.value = value;
    }
    const debounceSetShowPicker = debounce(setShowPicker, 100);
    function hide() {
      debounceSetShowPicker(false);
      resetColor();
    }
    function resetColor() {
      nextTick(() => {
        if (props.modelValue) {
          color.fromString(props.modelValue);
        } else {
          showPanelColor.value = false;
        }
      });
    }
    function handleTrigger() {
      if (colorDisabled.value)
        return;
      debounceSetShowPicker(!showPicker.value);
    }
    function handleConfirm() {
      color.fromString(customInput.value);
    }
    function confirmValue() {
      var _a;
      const value = color.value;
      emit(UPDATE_MODEL_EVENT, value);
      emit("change", value);
      (_a = elFormItem.validate) == null ? void 0 : _a.call(elFormItem, "change");
      debounceSetShowPicker(false);
      nextTick(() => {
        const newColor = new Color({
          enableAlpha: props.showAlpha,
          format: props.colorFormat
        });
        newColor.fromString(props.modelValue);
        if (!color.compare(newColor)) {
          resetColor();
        }
      });
    }
    function clear() {
      var _a;
      debounceSetShowPicker(false);
      emit(UPDATE_MODEL_EVENT, null);
      emit("change", null);
      if (props.modelValue !== null) {
        (_a = elFormItem.validate) == null ? void 0 : _a.call(elFormItem, "change");
      }
      resetColor();
    }
    onMounted(() => {
      if (props.modelValue) {
        color.fromString(props.modelValue);
        customInput.value = currentColor.value;
      }
    });
    watch(() => showPicker.value, () => {
      nextTick(() => {
        var _a, _b, _c;
        (_a = hue.value) == null ? void 0 : _a.update();
        (_b = svPanel.value) == null ? void 0 : _b.update();
        (_c = alpha.value) == null ? void 0 : _c.update();
      });
    });
    provide(OPTIONS_KEY, {
      currentColor
    });
    return {
      Effect,
      color,
      colorDisabled,
      colorSize,
      displayedColor,
      showPanelColor,
      showPicker,
      customInput,
      handleConfirm,
      hide,
      handleTrigger,
      clear,
      confirmValue,
      t,
      hue,
      svPanel,
      alpha,
      popper
    };
  }
});

export { script as default };
//# sourceMappingURL=index.vue_vue_type_script_lang.mjs.map
