'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../../node_modules/.pnpm/@ctrl_tinycolor@3.4.0/node_modules/@ctrl/tinycolor/dist/module/public_api.js');
var index = require('../../../../node_modules/.pnpm/@ctrl_tinycolor@3.4.0/node_modules/@ctrl/tinycolor/dist/module/index.js');

function useMenuColor(props) {
  const menuBarColor = vue.computed(() => {
    const color = props.backgroundColor;
    if (!color) {
      return "";
    } else {
      return new index.TinyColor(color).shade(20).toString();
    }
  });
  return menuBarColor;
}

exports["default"] = useMenuColor;
//# sourceMappingURL=use-menu-color.js.map
