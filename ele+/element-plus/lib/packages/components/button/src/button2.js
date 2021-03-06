'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../hooks/index.js');
var props = require('../../../utils/props.js');
var index = require('../../../hooks/use-common-props/index.js');

const buttonType = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
];
const buttonSize = ["", "large", "default", "small"];
const buttonNativeType = ["button", "submit", "reset"];
const buttonProps = props.buildProps({
  size: index.useSizeProp,
  disabled: Boolean,
  type: {
    type: String,
    values: buttonType,
    default: ""
  },
  icon: {
    type: props.definePropType([String, Object]),
    default: ""
  },
  nativeType: {
    type: String,
    values: buttonNativeType,
    default: "button"
  },
  loading: Boolean,
  plain: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  }
});
const buttonEmits = {
  click: (evt) => evt instanceof MouseEvent
};

exports.buttonEmits = buttonEmits;
exports.buttonNativeType = buttonNativeType;
exports.buttonProps = buttonProps;
exports.buttonSize = buttonSize;
exports.buttonType = buttonType;
//# sourceMappingURL=button2.js.map
