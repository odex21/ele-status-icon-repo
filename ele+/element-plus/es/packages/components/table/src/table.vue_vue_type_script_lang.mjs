import { defineComponent, getCurrentInstance, computed } from 'vue';
import debounce from 'lodash/debounce';
import '../../../directives/index.mjs';
import '../../../hooks/index.mjs';
import { createStore } from './store/helper.mjs';
import TableLayout from './table-layout.mjs';
import TableHeader from './table-header/index.mjs';
import TableBody from './table-body/index.mjs';
import TableFooter from './table-footer/index.mjs';
import useUtils from './table/utils-helper.mjs';
import useStyle from './table/style-helper.mjs';
import defaultProps from './table/defaults.mjs';
import Mousewheel from '../../../directives/mousewheel/index.mjs';
import { useLocale } from '../../../hooks/use-locale/index.mjs';

let tableIdSeed = 1;
var script = defineComponent({
  name: "ElTable",
  directives: {
    Mousewheel
  },
  components: {
    TableHeader,
    TableBody,
    TableFooter
  },
  props: defaultProps,
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
    const { t } = useLocale();
    const table = getCurrentInstance();
    const store = createStore(table, props);
    table.store = store;
    const layout = new TableLayout({
      store: table.store,
      table,
      fit: props.fit,
      showHeader: props.showHeader
    });
    table.layout = layout;
    const isEmpty = computed(() => (store.states.data.value || []).length === 0);
    const {
      setCurrentRow,
      toggleRowSelection,
      clearSelection,
      clearFilter,
      toggleAllSelection,
      toggleRowExpansion,
      clearSort,
      sort
    } = useUtils(store);
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
    } = useStyle(props, layout, store, table);
    const debouncedUpdateLayout = debounce(doLayout, 50);
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

export { script as default };
//# sourceMappingURL=table.vue_vue_type_script_lang.mjs.map
