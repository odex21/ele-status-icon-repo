import { defineComponent, inject, ref, computed, nextTick, watch, onMounted, onBeforeUnmount } from 'vue';
import { isPromise } from '@vue/shared';
import debounce from 'lodash/debounce';
import { isClient } from '@vueuse/core';
import _CascaderPanel from '../../cascader-panel/index.mjs';
import { ElInput } from '../../input/index.mjs';
import _Popper from '../../popper/index.mjs';
import { ElScrollbar } from '../../scrollbar/index.mjs';
import { ElTag } from '../../tag/index.mjs';
import { ElIcon } from '../../icon/index.mjs';
import '../../../tokens/index.mjs';
import '../../../directives/index.mjs';
import '../../../hooks/index.mjs';
import { EVENT_CODE, focusNode, getSibling } from '../../../utils/aria.mjs';
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '../../../utils/constants.mjs';
import { addResizeListener, removeResizeListener } from '../../../utils/resize-event.mjs';
import { isValidComponentSize } from '../../../utils/validators.mjs';
import { isKorean } from '../../../utils/isDef.mjs';
import { CircleClose, Check, ArrowDown } from '@element-plus/icons-vue';
import ClickOutside from '../../../directives/click-outside/index.mjs';
import { CommonProps } from '../../cascader-panel/src/config.mjs';
import { useLocale } from '../../../hooks/use-locale/index.mjs';
import { elFormKey, elFormItemKey } from '../../../tokens/form.mjs';
import { useSize } from '../../../hooks/use-common-props/index.mjs';
import { Effect } from '../../popper/src/use-popper/defaults.mjs';

const DEFAULT_INPUT_HEIGHT = 40;
const INPUT_HEIGHT_MAP = {
  large: 36,
  default: 32,
  small: 28
};
const popperOptions = {
  modifiers: [
    {
      name: "arrowPosition",
      enabled: true,
      phase: "main",
      fn: ({ state }) => {
        const { modifiersData, placement } = state;
        if (["right", "left"].includes(placement))
          return;
        modifiersData.arrow.x = 35;
      },
      requires: ["arrow"]
    }
  ]
};
var script = defineComponent({
  name: "ElCascader",
  components: {
    ElCascaderPanel: _CascaderPanel,
    ElInput,
    ElPopper: _Popper,
    ElScrollbar,
    ElTag,
    ElIcon,
    CircleClose,
    Check,
    ArrowDown
  },
  directives: {
    Clickoutside: ClickOutside
  },
  props: {
    ...CommonProps,
    size: {
      type: String,
      validator: isValidComponentSize
    },
    placeholder: {
      type: String
    },
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    filterMethod: {
      type: Function,
      default: (node, keyword) => node.text.includes(keyword)
    },
    separator: {
      type: String,
      default: " / "
    },
    showAllLevels: {
      type: Boolean,
      default: true
    },
    collapseTags: Boolean,
    debounce: {
      type: Number,
      default: 300
    },
    beforeFilter: {
      type: Function,
      default: () => true
    },
    popperClass: {
      type: String,
      default: ""
    },
    popperAppendToBody: {
      type: Boolean,
      default: true
    }
  },
  emits: [
    UPDATE_MODEL_EVENT,
    CHANGE_EVENT,
    "focus",
    "blur",
    "visible-change",
    "expand-change",
    "remove-tag"
  ],
  setup(props, { emit }) {
    let inputInitialHeight = 0;
    let pressDeleteCount = 0;
    const { t } = useLocale();
    const elForm = inject(elFormKey, {});
    const elFormItem = inject(elFormItemKey, {});
    const popper = ref(null);
    const input = ref(null);
    const tagWrapper = ref(null);
    const panel = ref(null);
    const suggestionPanel = ref(null);
    const popperVisible = ref(false);
    const inputHover = ref(false);
    const filtering = ref(false);
    const inputValue = ref("");
    const searchInputValue = ref("");
    const presentTags = ref([]);
    const suggestions = ref([]);
    const isOnComposition = ref(false);
    const isDisabled = computed(() => props.disabled || elForm.disabled);
    const inputPlaceholder = computed(() => props.placeholder || t("el.cascader.placeholder"));
    const realSize = useSize();
    const tagSize = computed(() => ["small"].includes(realSize.value) ? "small" : "");
    const multiple = computed(() => !!props.props.multiple);
    const readonly = computed(() => !props.filterable || multiple.value);
    const searchKeyword = computed(() => multiple.value ? searchInputValue.value : inputValue.value);
    const checkedNodes = computed(() => {
      var _a;
      return ((_a = panel.value) == null ? void 0 : _a.checkedNodes) || [];
    });
    const clearBtnVisible = computed(() => {
      if (!props.clearable || isDisabled.value || filtering.value || !inputHover.value)
        return false;
      return !!checkedNodes.value.length;
    });
    const presentText = computed(() => {
      const { showAllLevels, separator } = props;
      const nodes = checkedNodes.value;
      return nodes.length ? multiple.value ? " " : nodes[0].calcText(showAllLevels, separator) : "";
    });
    const checkedValue = computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        var _a;
        emit(UPDATE_MODEL_EVENT, val);
        emit(CHANGE_EVENT, val);
        (_a = elFormItem.validate) == null ? void 0 : _a.call(elFormItem, "change");
      }
    });
    const popperPaneRef = computed(() => {
      var _a;
      return (_a = popper.value) == null ? void 0 : _a.popperRef;
    });
    const togglePopperVisible = (visible) => {
      var _a, _b, _c;
      if (isDisabled.value)
        return;
      visible = visible != null ? visible : !popperVisible.value;
      if (visible !== popperVisible.value) {
        popperVisible.value = visible;
        (_b = (_a = input.value) == null ? void 0 : _a.input) == null ? void 0 : _b.setAttribute("aria-expanded", `${visible}`);
        if (visible) {
          updatePopperPosition();
          nextTick((_c = panel.value) == null ? void 0 : _c.scrollToExpandingNode);
        } else if (props.filterable) {
          const { value } = presentText;
          inputValue.value = value;
          searchInputValue.value = value;
        }
        emit("visible-change", visible);
      }
    };
    const updatePopperPosition = () => {
      var _a;
      nextTick((_a = popper.value) == null ? void 0 : _a.update);
    };
    const hideSuggestionPanel = () => {
      filtering.value = false;
    };
    const genTag = (node) => {
      const { showAllLevels, separator } = props;
      return {
        node,
        key: node.uid,
        text: node.calcText(showAllLevels, separator),
        hitState: false,
        closable: !isDisabled.value && !node.isDisabled
      };
    };
    const deleteTag = (tag) => {
      var _a;
      const node = tag.node;
      node.doCheck(false);
      (_a = panel.value) == null ? void 0 : _a.calculateCheckedValue();
      emit("remove-tag", node.valueByOption);
    };
    const calculatePresentTags = () => {
      if (!multiple.value)
        return;
      const nodes = checkedNodes.value;
      const tags = [];
      if (nodes.length) {
        const [first, ...rest] = nodes;
        const restCount = rest.length;
        tags.push(genTag(first));
        if (restCount) {
          if (props.collapseTags) {
            tags.push({
              key: -1,
              text: `+ ${restCount}`,
              closable: false
            });
          } else {
            rest.forEach((node) => tags.push(genTag(node)));
          }
        }
      }
      presentTags.value = tags;
    };
    const calculateSuggestions = () => {
      var _a, _b;
      const { filterMethod, showAllLevels, separator } = props;
      const res = (_b = (_a = panel.value) == null ? void 0 : _a.getFlattedNodes(!props.props.checkStrictly)) == null ? void 0 : _b.filter((node) => {
        if (node.isDisabled)
          return false;
        node.calcText(showAllLevels, separator);
        return filterMethod(node, searchKeyword.value);
      });
      if (multiple.value) {
        presentTags.value.forEach((tag) => {
          tag.hitState = false;
        });
      }
      filtering.value = true;
      suggestions.value = res;
      updatePopperPosition();
    };
    const focusFirstNode = () => {
      var _a;
      let firstNode;
      if (filtering.value && suggestionPanel.value) {
        firstNode = suggestionPanel.value.$el.querySelector(".el-cascader__suggestion-item");
      } else {
        firstNode = (_a = panel.value) == null ? void 0 : _a.$el.querySelector('.el-cascader-node[tabindex="-1"]');
      }
      if (firstNode) {
        firstNode.focus();
        !filtering.value && firstNode.click();
      }
    };
    const updateStyle = () => {
      var _a, _b;
      const inputInner = (_a = input.value) == null ? void 0 : _a.input;
      const tagWrapperEl = tagWrapper.value;
      const suggestionPanelEl = (_b = suggestionPanel.value) == null ? void 0 : _b.$el;
      if (!isClient || !inputInner)
        return;
      if (suggestionPanelEl) {
        const suggestionList = suggestionPanelEl.querySelector(".el-cascader__suggestion-list");
        suggestionList.style.minWidth = `${inputInner.offsetWidth}px`;
      }
      if (tagWrapperEl) {
        const { offsetHeight } = tagWrapperEl;
        const height = presentTags.value.length > 0 ? `${Math.max(offsetHeight + 6, inputInitialHeight)}px` : `${inputInitialHeight}px`;
        inputInner.style.height = height;
        updatePopperPosition();
      }
    };
    const getCheckedNodes = (leafOnly) => {
      var _a;
      return (_a = panel.value) == null ? void 0 : _a.getCheckedNodes(leafOnly);
    };
    const handleExpandChange = (value) => {
      updatePopperPosition();
      emit("expand-change", value);
    };
    const handleComposition = (event) => {
      var _a;
      const text = (_a = event.target) == null ? void 0 : _a.value;
      if (event.type === "compositionend") {
        isOnComposition.value = false;
        nextTick(() => handleInput(text));
      } else {
        const lastCharacter = text[text.length - 1] || "";
        isOnComposition.value = !isKorean(lastCharacter);
      }
    };
    const handleKeyDown = (e) => {
      if (isOnComposition.value)
        return;
      switch (e.code) {
        case EVENT_CODE.enter:
          togglePopperVisible();
          break;
        case EVENT_CODE.down:
          togglePopperVisible(true);
          nextTick(focusFirstNode);
          e.preventDefault();
          break;
        case EVENT_CODE.esc:
        case EVENT_CODE.tab:
          togglePopperVisible(false);
          break;
      }
    };
    const handleClear = () => {
      var _a;
      (_a = panel.value) == null ? void 0 : _a.clearCheckedNodes();
      togglePopperVisible(false);
    };
    const handleSuggestionClick = (node) => {
      var _a, _b;
      const { checked } = node;
      if (multiple.value) {
        (_a = panel.value) == null ? void 0 : _a.handleCheckChange(node, !checked, false);
      } else {
        !checked && ((_b = panel.value) == null ? void 0 : _b.handleCheckChange(node, true, false));
        togglePopperVisible(false);
      }
    };
    const handleSuggestionKeyDown = (e) => {
      const target = e.target;
      const { code } = e;
      switch (code) {
        case EVENT_CODE.up:
        case EVENT_CODE.down: {
          const distance = code === EVENT_CODE.up ? -1 : 1;
          focusNode(getSibling(target, distance, '.el-cascader__suggestion-item[tabindex="-1"]'));
          break;
        }
        case EVENT_CODE.enter:
          target.click();
          break;
        case EVENT_CODE.esc:
        case EVENT_CODE.tab:
          togglePopperVisible(false);
          break;
      }
    };
    const handleDelete = () => {
      const tags = presentTags.value;
      const lastTag = tags[tags.length - 1];
      pressDeleteCount = searchInputValue.value ? 0 : pressDeleteCount + 1;
      if (!lastTag || !pressDeleteCount)
        return;
      if (lastTag.hitState) {
        deleteTag(lastTag);
      } else {
        lastTag.hitState = true;
      }
    };
    const handleFilter = debounce(() => {
      const { value } = searchKeyword;
      if (!value)
        return;
      const passed = props.beforeFilter(value);
      if (isPromise(passed)) {
        passed.then(calculateSuggestions).catch(() => {
        });
      } else if (passed !== false) {
        calculateSuggestions();
      } else {
        hideSuggestionPanel();
      }
    }, props.debounce);
    const handleInput = (val, e) => {
      !popperVisible.value && togglePopperVisible(true);
      if (e == null ? void 0 : e.isComposing)
        return;
      val ? handleFilter() : hideSuggestionPanel();
    };
    watch(filtering, updatePopperPosition);
    watch([checkedNodes, isDisabled], calculatePresentTags);
    watch(presentTags, () => {
      nextTick(() => updateStyle());
    });
    watch(presentText, (val) => inputValue.value = val, { immediate: true });
    onMounted(() => {
      var _a;
      const inputEl = (_a = input.value) == null ? void 0 : _a.$el;
      inputInitialHeight = (inputEl == null ? void 0 : inputEl.offsetHeight) || INPUT_HEIGHT_MAP[realSize.value] || DEFAULT_INPUT_HEIGHT;
      addResizeListener(inputEl, updateStyle);
    });
    onBeforeUnmount(() => {
      var _a;
      removeResizeListener((_a = input.value) == null ? void 0 : _a.$el, updateStyle);
    });
    return {
      Effect,
      popperOptions,
      popper,
      popperPaneRef,
      input,
      tagWrapper,
      panel,
      suggestionPanel,
      popperVisible,
      inputHover,
      inputPlaceholder,
      filtering,
      presentText,
      checkedValue,
      inputValue,
      searchInputValue,
      presentTags,
      suggestions,
      isDisabled,
      isOnComposition,
      realSize,
      tagSize,
      multiple,
      readonly,
      clearBtnVisible,
      t,
      togglePopperVisible,
      hideSuggestionPanel,
      deleteTag,
      focusFirstNode,
      getCheckedNodes,
      handleExpandChange,
      handleKeyDown,
      handleComposition,
      handleClear,
      handleSuggestionClick,
      handleSuggestionKeyDown,
      handleDelete,
      handleInput
    };
  }
});

export { script as default };
//# sourceMappingURL=index.vue_vue_type_script_lang.mjs.map
