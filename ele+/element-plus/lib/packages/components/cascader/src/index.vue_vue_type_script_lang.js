'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var shared = require('@vue/shared');
var debounce = require('lodash/debounce');
var core = require('@vueuse/core');
var index = require('../../cascader-panel/index.js');
var index$1 = require('../../input/index.js');
var index$2 = require('../../popper/index.js');
var index$3 = require('../../scrollbar/index.js');
var index$4 = require('../../tag/index.js');
var index$5 = require('../../icon/index.js');
require('../../../tokens/index.js');
require('../../../directives/index.js');
require('../../../hooks/index.js');
var aria = require('../../../utils/aria.js');
var constants = require('../../../utils/constants.js');
var resizeEvent = require('../../../utils/resize-event.js');
var validators = require('../../../utils/validators.js');
var isDef = require('../../../utils/isDef.js');
var iconsVue = require('@element-plus/icons-vue');
var index$6 = require('../../../directives/click-outside/index.js');
var config = require('../../cascader-panel/src/config.js');
var index$7 = require('../../../hooks/use-locale/index.js');
var form = require('../../../tokens/form.js');
var index$8 = require('../../../hooks/use-common-props/index.js');
var defaults = require('../../popper/src/use-popper/defaults.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var debounce__default = /*#__PURE__*/_interopDefaultLegacy(debounce);

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
var script = vue.defineComponent({
  name: "ElCascader",
  components: {
    ElCascaderPanel: index["default"],
    ElInput: index$1.ElInput,
    ElPopper: index$2["default"],
    ElScrollbar: index$3.ElScrollbar,
    ElTag: index$4.ElTag,
    ElIcon: index$5.ElIcon,
    CircleClose: iconsVue.CircleClose,
    Check: iconsVue.Check,
    ArrowDown: iconsVue.ArrowDown
  },
  directives: {
    Clickoutside: index$6["default"]
  },
  props: {
    ...config.CommonProps,
    size: {
      type: String,
      validator: validators.isValidComponentSize
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
    constants.UPDATE_MODEL_EVENT,
    constants.CHANGE_EVENT,
    "focus",
    "blur",
    "visible-change",
    "expand-change",
    "remove-tag"
  ],
  setup(props, { emit }) {
    let inputInitialHeight = 0;
    let pressDeleteCount = 0;
    const { t } = index$7.useLocale();
    const elForm = vue.inject(form.elFormKey, {});
    const elFormItem = vue.inject(form.elFormItemKey, {});
    const popper = vue.ref(null);
    const input = vue.ref(null);
    const tagWrapper = vue.ref(null);
    const panel = vue.ref(null);
    const suggestionPanel = vue.ref(null);
    const popperVisible = vue.ref(false);
    const inputHover = vue.ref(false);
    const filtering = vue.ref(false);
    const inputValue = vue.ref("");
    const searchInputValue = vue.ref("");
    const presentTags = vue.ref([]);
    const suggestions = vue.ref([]);
    const isOnComposition = vue.ref(false);
    const isDisabled = vue.computed(() => props.disabled || elForm.disabled);
    const inputPlaceholder = vue.computed(() => props.placeholder || t("el.cascader.placeholder"));
    const realSize = index$8.useSize();
    const tagSize = vue.computed(() => ["small"].includes(realSize.value) ? "small" : "");
    const multiple = vue.computed(() => !!props.props.multiple);
    const readonly = vue.computed(() => !props.filterable || multiple.value);
    const searchKeyword = vue.computed(() => multiple.value ? searchInputValue.value : inputValue.value);
    const checkedNodes = vue.computed(() => {
      var _a;
      return ((_a = panel.value) == null ? void 0 : _a.checkedNodes) || [];
    });
    const clearBtnVisible = vue.computed(() => {
      if (!props.clearable || isDisabled.value || filtering.value || !inputHover.value)
        return false;
      return !!checkedNodes.value.length;
    });
    const presentText = vue.computed(() => {
      const { showAllLevels, separator } = props;
      const nodes = checkedNodes.value;
      return nodes.length ? multiple.value ? " " : nodes[0].calcText(showAllLevels, separator) : "";
    });
    const checkedValue = vue.computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        var _a;
        emit(constants.UPDATE_MODEL_EVENT, val);
        emit(constants.CHANGE_EVENT, val);
        (_a = elFormItem.validate) == null ? void 0 : _a.call(elFormItem, "change");
      }
    });
    const popperPaneRef = vue.computed(() => {
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
          vue.nextTick((_c = panel.value) == null ? void 0 : _c.scrollToExpandingNode);
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
      vue.nextTick((_a = popper.value) == null ? void 0 : _a.update);
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
      if (!core.isClient || !inputInner)
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
        vue.nextTick(() => handleInput(text));
      } else {
        const lastCharacter = text[text.length - 1] || "";
        isOnComposition.value = !isDef.isKorean(lastCharacter);
      }
    };
    const handleKeyDown = (e) => {
      if (isOnComposition.value)
        return;
      switch (e.code) {
        case aria.EVENT_CODE.enter:
          togglePopperVisible();
          break;
        case aria.EVENT_CODE.down:
          togglePopperVisible(true);
          vue.nextTick(focusFirstNode);
          e.preventDefault();
          break;
        case aria.EVENT_CODE.esc:
        case aria.EVENT_CODE.tab:
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
        case aria.EVENT_CODE.up:
        case aria.EVENT_CODE.down: {
          const distance = code === aria.EVENT_CODE.up ? -1 : 1;
          aria.focusNode(aria.getSibling(target, distance, '.el-cascader__suggestion-item[tabindex="-1"]'));
          break;
        }
        case aria.EVENT_CODE.enter:
          target.click();
          break;
        case aria.EVENT_CODE.esc:
        case aria.EVENT_CODE.tab:
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
    const handleFilter = debounce__default["default"](() => {
      const { value } = searchKeyword;
      if (!value)
        return;
      const passed = props.beforeFilter(value);
      if (shared.isPromise(passed)) {
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
    vue.watch(filtering, updatePopperPosition);
    vue.watch([checkedNodes, isDisabled], calculatePresentTags);
    vue.watch(presentTags, () => {
      vue.nextTick(() => updateStyle());
    });
    vue.watch(presentText, (val) => inputValue.value = val, { immediate: true });
    vue.onMounted(() => {
      var _a;
      const inputEl = (_a = input.value) == null ? void 0 : _a.$el;
      inputInitialHeight = (inputEl == null ? void 0 : inputEl.offsetHeight) || INPUT_HEIGHT_MAP[realSize.value] || DEFAULT_INPUT_HEIGHT;
      resizeEvent.addResizeListener(inputEl, updateStyle);
    });
    vue.onBeforeUnmount(() => {
      var _a;
      resizeEvent.removeResizeListener((_a = input.value) == null ? void 0 : _a.$el, updateStyle);
    });
    return {
      Effect: defaults.Effect,
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

exports["default"] = script;
//# sourceMappingURL=index.vue_vue_type_script_lang.js.map
