'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var debounce = require('lodash/debounce');
require('../../../../directives/index.js');
var index$1 = require('../../../scrollbar/index.js');
var index$2 = require('../../../icon/index.js');
var iconsVue = require('@element-plus/icons-vue');
var useTimePicker = require('./useTimePicker.js');
var index = require('../../../../directives/repeat-click/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var debounce__default = /*#__PURE__*/_interopDefaultLegacy(debounce);

var script = vue.defineComponent({
  directives: {
    repeatClick: index["default"]
  },
  components: {
    ElScrollbar: index$1.ElScrollbar,
    ElIcon: index$2.ElIcon,
    ArrowUp: iconsVue.ArrowUp,
    ArrowDown: iconsVue.ArrowDown
  },
  props: {
    role: {
      type: String,
      required: true
    },
    spinnerDate: {
      type: Object,
      required: true
    },
    showSeconds: {
      type: Boolean,
      default: true
    },
    arrowControl: Boolean,
    amPmMode: {
      type: String,
      default: ""
    },
    disabledHours: {
      type: Function
    },
    disabledMinutes: {
      type: Function
    },
    disabledSeconds: {
      type: Function
    }
  },
  emits: ["change", "select-range", "set-option"],
  setup(props, ctx) {
    let isScrolling = false;
    const debouncedResetScroll = debounce__default["default"]((type) => {
      isScrolling = false;
      adjustCurrentSpinner(type);
    }, 200);
    const currentScrollbar = vue.ref(null);
    const listHoursRef = vue.ref(null);
    const listMinutesRef = vue.ref(null);
    const listSecondsRef = vue.ref(null);
    const listRefsMap = {
      hours: listHoursRef,
      minutes: listMinutesRef,
      seconds: listSecondsRef
    };
    const spinnerItems = vue.computed(() => {
      const arr = ["hours", "minutes", "seconds"];
      return props.showSeconds ? arr : arr.slice(0, 2);
    });
    const hours = vue.computed(() => {
      return props.spinnerDate.hour();
    });
    const minutes = vue.computed(() => {
      return props.spinnerDate.minute();
    });
    const seconds = vue.computed(() => {
      return props.spinnerDate.second();
    });
    const timePartsMap = vue.computed(() => ({
      hours,
      minutes,
      seconds
    }));
    const hoursList = vue.computed(() => {
      return getHoursList(props.role);
    });
    const minutesList = vue.computed(() => {
      return getMinutesList(hours.value, props.role);
    });
    const secondsList = vue.computed(() => {
      return getSecondsList(hours.value, minutes.value, props.role);
    });
    const listMap = vue.computed(() => ({
      hours: hoursList,
      minutes: minutesList,
      seconds: secondsList
    }));
    const arrowHourList = vue.computed(() => {
      const hour = hours.value;
      return [
        hour > 0 ? hour - 1 : void 0,
        hour,
        hour < 23 ? hour + 1 : void 0
      ];
    });
    const arrowMinuteList = vue.computed(() => {
      const minute = minutes.value;
      return [
        minute > 0 ? minute - 1 : void 0,
        minute,
        minute < 59 ? minute + 1 : void 0
      ];
    });
    const arrowSecondList = vue.computed(() => {
      const second = seconds.value;
      return [
        second > 0 ? second - 1 : void 0,
        second,
        second < 59 ? second + 1 : void 0
      ];
    });
    const arrowListMap = vue.computed(() => ({
      hours: arrowHourList,
      minutes: arrowMinuteList,
      seconds: arrowSecondList
    }));
    const getAmPmFlag = (hour) => {
      const shouldShowAmPm = !!props.amPmMode;
      if (!shouldShowAmPm)
        return "";
      const isCapital = props.amPmMode === "A";
      let content = hour < 12 ? " am" : " pm";
      if (isCapital)
        content = content.toUpperCase();
      return content;
    };
    const emitSelectRange = (type) => {
      if (type === "hours") {
        ctx.emit("select-range", 0, 2);
      } else if (type === "minutes") {
        ctx.emit("select-range", 3, 5);
      } else if (type === "seconds") {
        ctx.emit("select-range", 6, 8);
      }
      currentScrollbar.value = type;
    };
    const adjustCurrentSpinner = (type) => {
      adjustSpinner(type, timePartsMap.value[type].value);
    };
    const adjustSpinners = () => {
      adjustCurrentSpinner("hours");
      adjustCurrentSpinner("minutes");
      adjustCurrentSpinner("seconds");
    };
    const adjustSpinner = (type, value) => {
      if (props.arrowControl)
        return;
      const el = listRefsMap[type];
      if (el.value) {
        el.value.$el.querySelector(".el-scrollbar__wrap").scrollTop = Math.max(0, value * typeItemHeight(type));
      }
    };
    const typeItemHeight = (type) => {
      const el = listRefsMap[type];
      return el.value.$el.querySelector("li").offsetHeight;
    };
    const onIncreaseClick = () => {
      scrollDown(1);
    };
    const onDecreaseClick = () => {
      scrollDown(-1);
    };
    const scrollDown = (step) => {
      if (!currentScrollbar.value) {
        emitSelectRange("hours");
      }
      const label = currentScrollbar.value;
      let now = timePartsMap.value[label].value;
      const total = currentScrollbar.value === "hours" ? 24 : 60;
      now = (now + step + total) % total;
      modifyDateField(label, now);
      adjustSpinner(label, now);
      vue.nextTick(() => emitSelectRange(currentScrollbar.value));
    };
    const modifyDateField = (type, value) => {
      const list = listMap.value[type].value;
      const isDisabled = list[value];
      if (isDisabled)
        return;
      switch (type) {
        case "hours":
          ctx.emit("change", props.spinnerDate.hour(value).minute(minutes.value).second(seconds.value));
          break;
        case "minutes":
          ctx.emit("change", props.spinnerDate.hour(hours.value).minute(value).second(seconds.value));
          break;
        case "seconds":
          ctx.emit("change", props.spinnerDate.hour(hours.value).minute(minutes.value).second(value));
          break;
      }
    };
    const handleClick = (type, { value, disabled }) => {
      if (!disabled) {
        modifyDateField(type, value);
        emitSelectRange(type);
        adjustSpinner(type, value);
      }
    };
    const handleScroll = (type) => {
      isScrolling = true;
      debouncedResetScroll(type);
      const value = Math.min(Math.round((listRefsMap[type].value.$el.querySelector(".el-scrollbar__wrap").scrollTop - (scrollBarHeight(type) * 0.5 - 10) / typeItemHeight(type) + 3) / typeItemHeight(type)), type === "hours" ? 23 : 59);
      modifyDateField(type, value);
    };
    const scrollBarHeight = (type) => {
      return listRefsMap[type].value.$el.offsetHeight;
    };
    const bindScrollEvent = () => {
      const bindFuntion = (type) => {
        if (listRefsMap[type].value) {
          listRefsMap[type].value.$el.querySelector(".el-scrollbar__wrap").onscroll = () => {
            handleScroll(type);
          };
        }
      };
      bindFuntion("hours");
      bindFuntion("minutes");
      bindFuntion("seconds");
    };
    vue.onMounted(() => {
      vue.nextTick(() => {
        !props.arrowControl && bindScrollEvent();
        adjustSpinners();
        if (props.role === "start")
          emitSelectRange("hours");
      });
    });
    const getRefId = (item) => {
      return `list${item.charAt(0).toUpperCase() + item.slice(1)}Ref`;
    };
    ctx.emit("set-option", [`${props.role}_scrollDown`, scrollDown]);
    ctx.emit("set-option", [`${props.role}_emitSelectRange`, emitSelectRange]);
    const { getHoursList, getMinutesList, getSecondsList } = useTimePicker.getTimeLists(props.disabledHours, props.disabledMinutes, props.disabledSeconds);
    vue.watch(() => props.spinnerDate, () => {
      if (isScrolling)
        return;
      adjustSpinners();
    });
    return {
      getRefId,
      spinnerItems,
      currentScrollbar,
      hours,
      minutes,
      seconds,
      hoursList,
      minutesList,
      arrowHourList,
      arrowMinuteList,
      arrowSecondList,
      getAmPmFlag,
      emitSelectRange,
      adjustCurrentSpinner,
      typeItemHeight,
      listHoursRef,
      listMinutesRef,
      listSecondsRef,
      onIncreaseClick,
      onDecreaseClick,
      handleClick,
      secondsList,
      timePartsMap,
      arrowListMap,
      listMap
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=basic-time-spinner.vue_vue_type_script_lang.js.map
