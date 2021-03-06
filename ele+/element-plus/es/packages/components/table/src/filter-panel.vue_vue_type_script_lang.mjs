import { defineComponent, getCurrentInstance, ref, computed, watch } from 'vue';
import { ElCheckbox } from '../../checkbox/index.mjs';
import { ElIcon } from '../../icon/index.mjs';
import { ArrowDown, ArrowUp } from '@element-plus/icons-vue';
import '../../../directives/index.mjs';
import '../../../hooks/index.mjs';
import _Popper from '../../popper/index.mjs';
import { ElScrollbar } from '../../scrollbar/index.mjs';
import ClickOutside from '../../../directives/click-outside/index.mjs';
import { useLocale } from '../../../hooks/use-locale/index.mjs';
import { Effect } from '../../popper/src/use-popper/defaults.mjs';

const { CheckboxGroup: ElCheckboxGroup } = ElCheckbox;
var script = defineComponent({
  name: "ElTableFilterPanel",
  components: {
    ElCheckbox,
    ElCheckboxGroup,
    ElScrollbar,
    ElPopper: _Popper,
    ElIcon,
    ArrowDown,
    ArrowUp
  },
  directives: { ClickOutside },
  props: {
    placement: {
      type: String,
      default: "bottom-start"
    },
    store: {
      type: Object
    },
    column: {
      type: Object
    },
    upDataColumn: {
      type: Function
    }
  },
  setup(props) {
    const instance = getCurrentInstance();
    const { t } = useLocale();
    const parent = instance.parent;
    if (!parent.filterPanels.value[props.column.id]) {
      parent.filterPanels.value[props.column.id] = instance;
    }
    const tooltipVisible = ref(false);
    const tooltip = ref(null);
    const filters = computed(() => {
      return props.column && props.column.filters;
    });
    const filterValue = computed({
      get: () => (props.column.filteredValue || [])[0],
      set: (value) => {
        if (filteredValue.value) {
          if (typeof value !== "undefined" && value !== null) {
            filteredValue.value.splice(0, 1, value);
          } else {
            filteredValue.value.splice(0, 1);
          }
        }
      }
    });
    const filteredValue = computed({
      get() {
        if (props.column) {
          return props.column.filteredValue || [];
        }
        return [];
      },
      set(value) {
        if (props.column) {
          props.upDataColumn("filteredValue", value);
        }
      }
    });
    const multiple = computed(() => {
      if (props.column) {
        return props.column.filterMultiple;
      }
      return true;
    });
    const isActive = (filter) => {
      return filter.value === filterValue.value;
    };
    const hidden = () => {
      tooltipVisible.value = false;
    };
    const showFilterPanel = (e) => {
      e.stopPropagation();
      tooltipVisible.value = !tooltipVisible.value;
    };
    const hideFilterPanel = () => {
      tooltipVisible.value = false;
    };
    const handleConfirm = () => {
      confirmFilter(filteredValue.value);
      hidden();
    };
    const handleReset = () => {
      filteredValue.value = [];
      confirmFilter(filteredValue.value);
      hidden();
    };
    const handleSelect = (_filterValue) => {
      filterValue.value = _filterValue;
      if (typeof _filterValue !== "undefined" && _filterValue !== null) {
        confirmFilter(filteredValue.value);
      } else {
        confirmFilter([]);
      }
      hidden();
    };
    const confirmFilter = (filteredValue2) => {
      props.store.commit("filterChange", {
        column: props.column,
        values: filteredValue2
      });
      props.store.updateAllSelected();
    };
    watch(tooltipVisible, (value) => {
      if (props.column) {
        props.upDataColumn("filterOpened", value);
      }
    }, {
      immediate: true
    });
    const popperPaneRef = computed(() => {
      var _a;
      return (_a = tooltip.value) == null ? void 0 : _a.popperRef;
    });
    return {
      tooltipVisible,
      multiple,
      filteredValue,
      filterValue,
      filters,
      handleConfirm,
      handleReset,
      handleSelect,
      isActive,
      t,
      showFilterPanel,
      hideFilterPanel,
      popperPaneRef,
      tooltip,
      Effect
    };
  }
});

export { script as default };
//# sourceMappingURL=filter-panel.vue_vue_type_script_lang.mjs.map
