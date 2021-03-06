'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var props = require('../../../utils/props.js');
var constants = require('../../../utils/constants.js');
var util = require('../../../utils/util.js');
var shared = require('@vue/shared');

const switchProps = props.buildProps({
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
    type: props.definePropType([String, Object]),
    default: ""
  },
  inactiveIcon: {
    type: props.definePropType([String, Object]),
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
    type: props.definePropType(Function)
  }
});
const switchEmits = {
  [constants.UPDATE_MODEL_EVENT]: (val) => util.isBool(val) || shared.isString(val) || util.isNumber(val),
  [constants.CHANGE_EVENT]: (val) => util.isBool(val) || shared.isString(val) || util.isNumber(val),
  [constants.INPUT_EVENT]: (val) => util.isBool(val) || shared.isString(val) || util.isNumber(val)
};

exports.switchEmits = switchEmits;
exports.switchProps = switchProps;
//# sourceMappingURL=switch.js.map
