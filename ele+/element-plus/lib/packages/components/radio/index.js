'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('../../utils/with-install.js');
require('./src/radio2.js');
require('./src/radio-button.js');
require('./src/radio-group2.js');
var radio = require('./src/radio.js');
var radioGroup = require('./src/radio-group.js');
var radioButton = require('./src/radio-button2.js');
var radio_vue_vue_type_script_lang = require('./src/radio.vue_vue_type_script_lang.js');
var radioButton_vue_vue_type_script_lang = require('./src/radio-button.vue_vue_type_script_lang.js');
var radioGroup_vue_vue_type_script_lang = require('./src/radio-group.vue_vue_type_script_lang.js');

const ElRadio = withInstall.withInstall(radio_vue_vue_type_script_lang["default"], {
  RadioButton: radioButton_vue_vue_type_script_lang["default"],
  RadioGroup: radioGroup_vue_vue_type_script_lang["default"]
});
const ElRadioGroup = withInstall.withNoopInstall(radioGroup_vue_vue_type_script_lang["default"]);
const ElRadioButton = withInstall.withNoopInstall(radioButton_vue_vue_type_script_lang["default"]);

exports.radioEmits = radio.radioEmits;
exports.radioProps = radio.radioProps;
exports.radioPropsBase = radio.radioPropsBase;
exports.useRadio = radio.useRadio;
exports.radioGroupEmits = radioGroup.radioGroupEmits;
exports.radioGroupProps = radioGroup.radioGroupProps;
exports.radioButtonProps = radioButton.radioButtonProps;
exports.ElRadio = ElRadio;
exports.ElRadioButton = ElRadioButton;
exports.ElRadioGroup = ElRadioGroup;
exports["default"] = ElRadio;
//# sourceMappingURL=index.js.map
