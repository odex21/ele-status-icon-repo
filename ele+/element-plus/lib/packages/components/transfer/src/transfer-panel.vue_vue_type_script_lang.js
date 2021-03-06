'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../hooks/index.js');
var index = require('../../checkbox/index.js');
var index$2 = require('../../icon/index.js');
var index$1 = require('../../input/index.js');
var iconsVue = require('@element-plus/icons-vue');
var useCheck = require('./useCheck.js');
var index$3 = require('../../../hooks/use-locale/index.js');

var script = vue.defineComponent({
  name: "ElTransferPanel",
  components: {
    ElCheckboxGroup: index.ElCheckboxGroup,
    ElCheckbox: index.ElCheckbox,
    ElInput: index$1.ElInput,
    ElIcon: index$2.ElIcon,
    OptionContent: ({ option }) => option
  },
  props: useCheck.useCheckProps,
  emits: [useCheck.CHECKED_CHANGE_EVENT],
  setup(props, { slots }) {
    const { t } = index$3.useLocale();
    const panelState = vue.reactive({
      checked: [],
      allChecked: false,
      query: "",
      inputHover: false,
      checkChangeByUser: true
    });
    const {
      labelProp,
      keyProp,
      disabledProp,
      filteredData,
      checkedSummary,
      isIndeterminate,
      handleAllCheckedChange
    } = useCheck.useCheck(props, panelState);
    const hasNoMatch = vue.computed(() => {
      return panelState.query.length > 0 && filteredData.value.length === 0;
    });
    const inputIcon = vue.computed(() => {
      return panelState.query.length > 0 && panelState.inputHover ? iconsVue.CircleClose : iconsVue.Search;
    });
    const hasFooter = vue.computed(() => !!slots.default()[0].children.length);
    const clearQuery = () => {
      if (inputIcon.value === iconsVue.CircleClose) {
        panelState.query = "";
      }
    };
    const { checked, allChecked, query, inputHover, checkChangeByUser } = vue.toRefs(panelState);
    return {
      labelProp,
      keyProp,
      disabledProp,
      filteredData,
      checkedSummary,
      isIndeterminate,
      handleAllCheckedChange,
      checked,
      allChecked,
      query,
      inputHover,
      checkChangeByUser,
      hasNoMatch,
      inputIcon,
      hasFooter,
      clearQuery,
      t
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=transfer-panel.vue_vue_type_script_lang.js.map
