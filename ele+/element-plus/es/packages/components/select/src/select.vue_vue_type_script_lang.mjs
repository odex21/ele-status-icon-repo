import { defineComponent, toRefs, provide, reactive, onMounted, nextTick, onBeforeUnmount, computed } from 'vue';
import '../../../directives/index.mjs';
import '../../../hooks/index.mjs';
import { ElInput } from '../../input/index.mjs';
import _Popper from '../../popper/index.mjs';
import { ElScrollbar } from '../../scrollbar/index.mjs';
import { ElTag } from '../../tag/index.mjs';
import { ElIcon } from '../../icon/index.mjs';
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '../../../utils/constants.mjs';
import { addResizeListener, removeResizeListener } from '../../../utils/resize-event.mjs';
import { isValidComponentSize } from '../../../utils/validators.mjs';
import { CircleClose, ArrowUp } from '@element-plus/icons-vue';
import './option.mjs';
import './select-dropdown.mjs';
import { useSelectStates, useSelect } from './useSelect.mjs';
import { selectKey } from './token.mjs';
import script$1 from './select-dropdown.vue_vue_type_script_lang.mjs';
import script$2 from './option.vue_vue_type_script_lang.mjs';
import ClickOutside from '../../../directives/click-outside/index.mjs';
import { useLocale } from '../../../hooks/use-locale/index.mjs';
import { useFocus } from '../../../hooks/use-focus/index.mjs';
import { Effect } from '../../popper/src/use-popper/defaults.mjs';

var script = defineComponent({
  name: "ElSelect",
  componentName: "ElSelect",
  components: {
    ElInput,
    ElSelectMenu: script$1,
    ElOption: script$2,
    ElTag,
    ElScrollbar,
    ElPopper: _Popper,
    ElIcon
  },
  directives: { ClickOutside },
  props: {
    name: String,
    id: String,
    modelValue: {
      type: [Array, String, Number, Boolean, Object],
      default: void 0
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    automaticDropdown: Boolean,
    size: {
      type: String,
      validator: isValidComponentSize
    },
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: {
      type: String,
      default: ""
    },
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String
    },
    defaultFirstOption: Boolean,
    reserveKeyword: Boolean,
    valueKey: {
      type: String,
      default: "value"
    },
    collapseTags: Boolean,
    popperAppendToBody: {
      type: Boolean,
      default: true
    },
    clearIcon: {
      type: [String, Object],
      default: CircleClose
    },
    fitInputWidth: {
      type: Boolean,
      default: false
    },
    suffixIcon: {
      type: [String, Object],
      default: ArrowUp
    },
    tagType: {
      type: String,
      default: "info"
    }
  },
  emits: [
    UPDATE_MODEL_EVENT,
    CHANGE_EVENT,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(props, ctx) {
    const { t } = useLocale();
    const states = useSelectStates(props);
    const {
      optionsArray,
      selectSize,
      readonly,
      handleResize,
      collapseTagSize,
      debouncedOnInputChange,
      debouncedQueryChange,
      deletePrevTag,
      deleteTag,
      deleteSelected,
      handleOptionSelect,
      scrollToOption,
      setSelected,
      resetInputHeight,
      managePlaceholder,
      showClose,
      selectDisabled,
      iconComponent,
      iconReverse,
      showNewOption,
      emptyText,
      toggleLastOptionHitState,
      resetInputState,
      handleComposition,
      onOptionCreate,
      onOptionDestroy,
      handleMenuEnter,
      handleFocus,
      blur,
      handleBlur,
      handleClearClick,
      handleClose,
      toggleMenu,
      selectOption,
      getValueKey,
      navigateOptions,
      dropMenuVisible,
      reference,
      input,
      popper,
      tags,
      selectWrapper,
      scrollbar,
      queryChange,
      groupQueryChange
    } = useSelect(props, states, ctx);
    const { focus } = useFocus(reference);
    const {
      inputWidth,
      selected,
      inputLength,
      filteredOptionsCount,
      visible,
      softFocus,
      selectedLabel,
      hoverIndex,
      query,
      inputHovering,
      currentPlaceholder,
      menuVisibleOnFocus,
      isOnComposition,
      isSilentBlur,
      options,
      cachedOptions,
      optionsCount,
      prefixWidth,
      tagInMultiLine
    } = toRefs(states);
    provide(selectKey, reactive({
      props,
      options,
      optionsArray,
      cachedOptions,
      optionsCount,
      filteredOptionsCount,
      hoverIndex,
      handleOptionSelect,
      onOptionCreate,
      onOptionDestroy,
      selectWrapper,
      selected,
      setSelected,
      queryChange,
      groupQueryChange
    }));
    onMounted(() => {
      states.cachedPlaceHolder = currentPlaceholder.value = props.placeholder || t("el.select.placeholder");
      if (props.multiple && Array.isArray(props.modelValue) && props.modelValue.length > 0) {
        currentPlaceholder.value = "";
      }
      addResizeListener(selectWrapper.value, handleResize);
      if (reference.value && reference.value.$el) {
        const sizeMap = {
          large: 36,
          default: 32,
          small: 28
        };
        const input2 = reference.value.input;
        states.initialInputHeight = input2.getBoundingClientRect().height || sizeMap[selectSize.value];
      }
      if (props.remote && props.multiple) {
        resetInputHeight();
      }
      nextTick(() => {
        if (reference.value.$el) {
          inputWidth.value = reference.value.$el.getBoundingClientRect().width;
        }
        if (ctx.slots.prefix) {
          const inputChildNodes = reference.value.$el.childNodes;
          const input2 = [].filter.call(inputChildNodes, (item) => item.tagName === "INPUT")[0];
          const prefix = reference.value.$el.querySelector(".el-input__prefix");
          prefixWidth.value = Math.max(prefix.getBoundingClientRect().width + 5, 30);
          if (states.prefixWidth) {
            input2.style.paddingLeft = `${Math.max(states.prefixWidth, 30)}px`;
          }
        }
      });
      setSelected();
    });
    onBeforeUnmount(() => {
      removeResizeListener(selectWrapper.value, handleResize);
    });
    if (props.multiple && !Array.isArray(props.modelValue)) {
      ctx.emit(UPDATE_MODEL_EVENT, []);
    }
    if (!props.multiple && Array.isArray(props.modelValue)) {
      ctx.emit(UPDATE_MODEL_EVENT, "");
    }
    const popperPaneRef = computed(() => {
      var _a;
      return (_a = popper.value) == null ? void 0 : _a.popperRef;
    });
    return {
      Effect,
      tagInMultiLine,
      prefixWidth,
      selectSize,
      readonly,
      handleResize,
      collapseTagSize,
      debouncedOnInputChange,
      debouncedQueryChange,
      deletePrevTag,
      deleteTag,
      deleteSelected,
      handleOptionSelect,
      scrollToOption,
      inputWidth,
      selected,
      inputLength,
      filteredOptionsCount,
      visible,
      softFocus,
      selectedLabel,
      hoverIndex,
      query,
      inputHovering,
      currentPlaceholder,
      menuVisibleOnFocus,
      isOnComposition,
      isSilentBlur,
      options,
      resetInputHeight,
      managePlaceholder,
      showClose,
      selectDisabled,
      iconComponent,
      iconReverse,
      showNewOption,
      emptyText,
      toggleLastOptionHitState,
      resetInputState,
      handleComposition,
      handleMenuEnter,
      handleFocus,
      blur,
      handleBlur,
      handleClearClick,
      handleClose,
      toggleMenu,
      selectOption,
      getValueKey,
      navigateOptions,
      dropMenuVisible,
      focus,
      reference,
      input,
      popper,
      popperPaneRef,
      tags,
      selectWrapper,
      scrollbar
    };
  }
});

export { script as default };
//# sourceMappingURL=select.vue_vue_type_script_lang.mjs.map
