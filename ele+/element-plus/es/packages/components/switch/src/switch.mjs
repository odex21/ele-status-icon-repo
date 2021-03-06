import { buildProps, definePropType } from '../../../utils/props.mjs';
import { UPDATE_MODEL_EVENT, CHANGE_EVENT, INPUT_EVENT } from '../../../utils/constants.mjs';
import { isBool, isNumber } from '../../../utils/util.mjs';
import { isString } from '@vue/shared';

const switchProps = buildProps({
  modelValue: {
    type: [Boolean, String, Number],
    default: false
  },
  value: {
    type: [Boolean, String, Number],
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  width: {
    type: Number,
    default: 40
  },
  inlinePrompt: {
    type: Boolean,
    default: false
  },
  activeIcon: {
    type: definePropType([String, Object]),
    default: ""
  },
  inactiveIcon: {
    type: definePropType([String, Object]),
    default: ""
  },
  activeText: {
    type: String,
    default: ""
  },
  inactiveText: {
    type: String,
    default: ""
  },
  activeColor: {
    type: String,
    default: ""
  },
  inactiveColor: {
    type: String,
    default: ""
  },
  borderColor: {
    type: String,
    default: ""
  },
  activeValue: {
    type: [Boolean, String, Number],
    default: true
  },
  inactiveValue: {
    type: [Boolean, String, Number],
    default: false
  },
  name: {
    type: String,
    default: ""
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  id: String,
  loading: {
    type: Boolean,
    default: false
  },
  beforeChange: {
    type: definePropType(Function)
  }
});
const switchEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isBool(val) || isString(val) || isNumber(val),
  [CHANGE_EVENT]: (val) => isBool(val) || isString(val) || isNumber(val),
  [INPUT_EVENT]: (val) => isBool(val) || isString(val) || isNumber(val)
};

export { switchEmits, switchProps };
//# sourceMappingURL=switch.mjs.map
