'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('../../utils/with-install.js');
require('./src/scrollbar.js');
var util = require('./src/util.js');
var scrollbar = require('./src/scrollbar2.js');
var bar = require('./src/bar.js');
var scrollbar_vue_vue_type_script_lang = require('./src/scrollbar.vue_vue_type_script_lang.js');

const ElScrollbar = withInstall.withInstall(scrollbar_vue_vue_type_script_lang["default"]);

exports.BAR_MAP = util.BAR_MAP;
exports.renderThumbStyle = util.renderThumbStyle;
exports.scrollbarEmits = scrollbar.scrollbarEmits;
exports.scrollbarProps = scrollbar.scrollbarProps;
exports.barProps = bar.barProps;
exports.ElScrollbar = ElScrollbar;
exports["default"] = ElScrollbar;
//# sourceMappingURL=index.js.map
