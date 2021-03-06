'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('../../utils/with-install.js');
require('./src/teleport.js');
var teleport = require('./src/teleport2.js');
var teleport_vue_vue_type_script_lang = require('./src/teleport.vue_vue_type_script_lang.js');

const ElTeleport = withInstall.withInstall(teleport_vue_vue_type_script_lang["default"]);

exports.elTeleportProps = teleport.elTeleportProps;
exports.ElTeleport = ElTeleport;
exports["default"] = ElTeleport;
//# sourceMappingURL=index.js.map
