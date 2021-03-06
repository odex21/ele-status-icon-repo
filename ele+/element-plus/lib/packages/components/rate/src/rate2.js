'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var iconsVue = require('@element-plus/icons-vue');
var constants = require('../../../utils/constants.js');
var props = require('../../../utils/props.js');

const rateProps = props.buildProps({
  modelValue: {
    type: Number,
    default: 0
  },
  lowThreshold: {
    type: Number,
    default: 2
  },
  highThreshold: {
    type: Number,
    default: 4
  },
  max: {
    type: Number,
    default: 5
  },
  colors: {
    type: props.definePropType([Array, Object]),
    default: () => props.mutable(["#F7BA2A", "#F7BA2A", "#F7BA2A"])
  },
  voidColor: {
    type: String,
    default: "#C6D1DE"
  },
  disabledVoidColor: {
    type: String,
    default: "#EFF2F7"
  },
  icons: {
    type: props.definePropType([Array, Object]),
    default: () => [iconsVue.StarFilled, iconsVue.StarFilled, iconsVue.StarFilled]
  },
  voidIcon: {
    type: props.definePropType([String, Object]),
    default: () => iconsVue.Star
  },
  disabledvoidIcon: {
    type: props.definePropType([String, Object]),
    default: () => iconsVue.StarFilled
  },
  disabled: {
    type: Boolean,
    default: false
  },
  allowHalf: {
    type: Boolean,
    default: false
  },
  showText: {
    type: Boolean,
    default: false
  },
  showScore: {
    type: Boolean,
    default: false
  },
  textColor: {
    type: String,
    default: "#1f2d3d"
  },
  texts: {
    type: props.definePropType([Array]),
    default: () => props.mutable([
      "Extremely bad",
      "Disappointed",
      "Fair",
      "Satisfied",
      "Surprise"
    ])
  },
  scoreTemplate: {
    type: String,
    default: "{value}"
  }
});
const rateEmits = {
  change: (value) => typeof value === "number",
  [constants.UPDATE_MODEL_EVENT]: (value) => typeof value === "number"
};

exports.rateEmits = rateEmits;
exports.rateProps = rateProps;
//# sourceMappingURL=rate2.js.map
