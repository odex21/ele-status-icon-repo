'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../button/index.js');
var iconsVue = require('@element-plus/icons-vue');
var props = require('../../../utils/props.js');
var button = require('../../button/src/button2.js');

const popconfirmProps = props.buildProps({
  title: {
    type: String
  },
  confirmButtonText: {
    type: String
  },
  cancelButtonText: {
    type: String
  },
  confirmButtonType: {
    type: String,
    values: button.buttonType,
    default: "primary"
  },
  cancelButtonType: {
    type: String,
    values: button.buttonType,
    default: "text"
  },
  icon: {
    type: props.definePropType([String, Object]),
    default: iconsVue.QuestionFilled
  },
  iconColor: {
    type: String,
    default: "#f90"
  },
  hideIcon: {
    type: Boolean,
    default: false
  }
});
const popconfirmEmits = {
  confirm: () => true,
  cancel: () => true
};

exports.popconfirmEmits = popconfirmEmits;
exports.popconfirmProps = popconfirmProps;
//# sourceMappingURL=popconfirm.js.map
