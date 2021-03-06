'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var props = require('../../../utils/props.js');
var radio = require('./radio.js');

const radioButtonProps = props.buildProps({
  ...radio.radioPropsBase,
  name: {
    type: String,
    default: ""
  }
});

exports.radioButtonProps = radioButtonProps;
//# sourceMappingURL=radio-button2.js.map
