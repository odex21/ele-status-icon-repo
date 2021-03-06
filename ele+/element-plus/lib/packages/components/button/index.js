'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('../../utils/with-install.js');
require('./src/button.js');
require('./src/button-group.js');
var button = require('./src/button2.js');
var button_vue_vue_type_script_lang = require('./src/button.vue_vue_type_script_lang.js');
var buttonGroup_vue_vue_type_script_lang = require('./src/button-group.vue_vue_type_script_lang.js');

const ElButton = withInstall.withInstall(button_vue_vue_type_script_lang["default"], {
  ButtonGroup: buttonGroup_vue_vue_type_script_lang["default"]
});
const ElButtonGroup = withInstall.withNoopInstall(buttonGroup_vue_vue_type_script_lang["default"]);

exports.buttonEmits = button.buttonEmits;
exports.buttonNativeType = button.buttonNativeType;
exports.buttonProps = button.buttonProps;
exports.buttonSize = button.buttonSize;
exports.buttonType = button.buttonType;
exports.ElButton = ElButton;
exports.ElButtonGroup = ElButtonGroup;
exports["default"] = ElButton;
//# sourceMappingURL=index.js.map
