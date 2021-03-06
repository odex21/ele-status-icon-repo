'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var debounce = require('lodash/debounce');
require('../../../directives/index.js');
require('../../../hooks/index.js');
var helper = require('./store/helper.js');
var tableLayout = require('./table-layout.js');
var index$1 = require('./table-header/index.js');
var index$2 = require('./table-body/index.js');
var index$3 = require('./table-footer/index.js');
var utilsHelper = require('./table/utils-helper.js');
var styleHelper = require('./table/style-helper.js');
var defaults = require('./table/defaults.js');
var index = require('../../../directives/mousewheel/index.js');
var index$4 = require('../../../hooks/use-locale/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var debounce__default = /*#__PURE__*/_interopDefaultLegacy(debounce);

let tableIdSeed = 1;
var script = vue.defineComponent({
  name: "ElTable",
  directives: {
    Mousewheel: index["default"]
  },
  components: {
    TableHeader: index$1["default"],
    TableBody: index$2["default"],
    TableFooter: index$3["default"]
  },
  props: defaults["default"],
  emits: [
    "select",
    "select-all",
    "selection-change",
    "cell-mouse-enter",
    "cell-mouse-leave",
    "cell-contextmenu",
    "cell-click",
    "cell-dblclick",
    "row-click",
    "row-contextmenu",
    "row-dblclick",
    "header-click",
    "header-contextmenu",
    "sort-change",
    "filter-change",
    "current-change",
    "header-dragend",
    "expand-change"
  ],
  setup(props) {
    const { t } = index$4.useLocale();
    const table = vue.getCurrentInstance();
    const store = helper.createStore(table, props);
    table.store = store;
    const layout = new tableLayout["default"]({
      store: table.store,
      table,
      fit: props.fit,
      showHeader: props.showHeader
    });
    table.layout = layout;
    const isEmpty = vue.computed(() => (store.states.data.value || []).length === 0);
    const {
      setCurrentRow,
      toggleRowSelection,
      clearSelection,
      clearFilter,
      toggleAllSelection,
      toggleRowExpansion,
      clearSort,
      sort
    } = utilsHelper["default"](store);
    const {
      isHidden,
      renderExpanded,
      setDragVisible,
      isGroup,
      handleMouseLeave,
      handleHeaderFooterMousewheel,
      tableSize,
      bodyHeight,
      emptyBlockStyle,
      handleFixedMousewheel,
      fixedHeight,
      fixedBodyHeight,
      resizeProxyVisible,
      bodyWidth,
      resizeState,
      doLayout
    } = styleHelper["default"](props, layout, store, table);
    const debouncedUpdateLayout = debounce__default["default"](doLayout, 50);
    const tableId = `el-table_${tableIdSeed++}`;
    table.tableId = tableId;
    table.state = {
      isGroup,
      resizeState,
      doLayout,
      debouncedUpdateLayout
    };
    return {
      layout,
      store,
      handleHeaderFooterMousewheel,
      handleMouseLeave,
      tableId,
      tableSize,
      isHidden,
      isEmpty,
      renderExpanded,
      resizeProxyVisible,
      resizeState,
      isGroup,
      bodyWidth,
      bodyHeight,
      emptyBlockStyle,
      debouncedUpdateLayout,
      handleFixedMousewheel,
      fixedHeight,
      fixedBodyHeight,
      setCurrentRow,
      toggleRowSelection,
      clearSelection,
      clearFilter,
      toggleAllSelection,
      toggleRowExpansion,
      clearSort,
      doLayout,
      sort,
      t,
      setDragVisible,
      context: table
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=table.vue_vue_type_script_lang.js.map
