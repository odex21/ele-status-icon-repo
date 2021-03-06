import { defineComponent, ref, computed } from 'vue';
import { ElSelect } from '../../select/index.mjs';
import { ElIcon } from '../../icon/index.mjs';
import { Clock, CircleClose } from '@element-plus/icons-vue';

const { Option: ElOption } = ElSelect;
const parseTime = (time) => {
  const values = (time || "").split(":");
  if (values.length >= 2) {
    const hours = parseInt(values[0], 10);
    const minutes = parseInt(values[1], 10);
    return {
      hours,
      minutes
    };
  }
  return null;
};
const compareTime = (time1, time2) => {
  const value1 = parseTime(time1);
  const value2 = parseTime(time2);
  const minutes1 = value1.minutes + value1.hours * 60;
  const minutes2 = value2.minutes + value2.hours * 60;
  if (minutes1 === minutes2) {
    return 0;
  }
  return minutes1 > minutes2 ? 1 : -1;
};
const formatTime = (time) => {
  return `${time.hours < 10 ? `0${time.hours}` : time.hours}:${time.minutes < 10 ? `0${time.minutes}` : time.minutes}`;
};
const nextTime = (time, step) => {
  const timeValue = parseTime(time);
  const stepValue = parseTime(step);
  const next = {
    hours: timeValue.hours,
    minutes: timeValue.minutes
  };
  next.minutes += stepValue.minutes;
  next.hours += stepValue.hours;
  next.hours += Math.floor(next.minutes / 60);
  next.minutes = next.minutes % 60;
  return formatTime(next);
};
var script = defineComponent({
  name: "ElTimeSelect",
  components: { ElSelect, ElOption, ElIcon },
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    modelValue: String,
    disabled: {
      type: Boolean,
      default: false
    },
    editable: {
      type: Boolean,
      default: true
    },
    clearable: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: "",
      validator: (value) => !value || ["large", "small"].indexOf(value) !== -1
    },
    placeholder: {
      type: String,
      default: ""
    },
    start: {
      type: String,
      default: "09:00"
    },
    end: {
      type: String,
      default: "18:00"
    },
    step: {
      type: String,
      default: "00:30"
    },
    minTime: {
      type: String,
      default: ""
    },
    maxTime: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    prefixIcon: {
      type: [String, Object],
      default: Clock
    },
    clearIcon: {
      type: [String, Object],
      default: CircleClose
    }
  },
  emits: ["change", "blur", "focus", "update:modelValue"],
  setup(props) {
    const select = ref(null);
    const value = computed(() => props.modelValue);
    const items = computed(() => {
      const result = [];
      if (props.start && props.end && props.step) {
        let current = props.start;
        while (compareTime(current, props.end) <= 0) {
          result.push({
            value: current,
            disabled: compareTime(current, props.minTime || "-1:-1") <= 0 || compareTime(current, props.maxTime || "100:100") >= 0
          });
          current = nextTime(current, props.step);
        }
      }
      return result;
    });
    const blur = () => {
      var _a, _b;
      (_b = (_a = select.value) == null ? void 0 : _a.blur) == null ? void 0 : _b.call(_a);
    };
    const focus = () => {
      var _a, _b;
      (_b = (_a = select.value) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
    };
    return {
      select,
      value,
      items,
      blur,
      focus
    };
  }
});

export { script as default };
//# sourceMappingURL=time-select.vue_vue_type_script_lang.mjs.map
