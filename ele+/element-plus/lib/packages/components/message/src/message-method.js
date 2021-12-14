'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var core = require('@vueuse/core');
require('../../../utils/util.js');
var popupManager = require('../../../utils/popup-manager.js');
var error = require('../../../utils/error.js');
require('./message.js');
var message$1 = require('./message2.js');
var message_vue_vue_type_script_lang = require('./message.vue_vue_type_script_lang.js');

const instances = [];
let seed = 1;
const message = function(options = {}) {
  if (!core.isClient)
    return { close: () => void 0 };
  if (!vue.isVNode(options) && typeof options === "object" && options.grouping && !vue.isVNode(options.message) && instances.length) {
    const tempVm = instances.find((item) => {
      var _a, _b, _c;
      return `${(_b = (_a = item.vm.props) == null ? void 0 : _a.message) != null ? _b : ""}` === `${(_c = options.message) != null ? _c : ""}`;
    });
    if (tempVm) {
      tempVm.vm.component.props.repeatNum += 1;
      tempVm.vm.component.props.type = options == null ? void 0 : options.type;
      return {
        close: () => vm.component.proxy.visible = false
      };
    }
  }
  if (typeof options === "string" || vue.isVNode(options)) {
    options = { message: options };
  }
  let verticalOffset = options.offset || 20;
  instances.forEach(({ vm: vm2 }) => {
    var _a;
    verticalOffset += (((_a = vm2.el) == null ? void 0 : _a.offsetHeight) || 0) + 16;
  });
  verticalOffset += 16;
  const id = `message_${seed++}`;
  const userOnClose = options.onClose;
  const props = {
    zIndex: popupManager["default"].nextZIndex(),
    offset: verticalOffset,
    ...options,
    id,
    onClose: () => {
      close(id, userOnClose);
    }
  };
  let appendTo = document.body;
  if (options.appendTo instanceof HTMLElement) {
    appendTo = options.appendTo;
  } else if (typeof options.appendTo === "string") {
    appendTo = document.querySelector(options.appendTo);
  }
  if (!(appendTo instanceof HTMLElement)) {
    error.debugWarn("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body.");
    appendTo = document.body;
  }
  const container = document.createElement("div");
  container.className = `container_${id}`;
  const message2 = props.message;
  const vm = vue.createVNode(message_vue_vue_type_script_lang["default"], props, vue.isVNode(props.message) ? { default: () => message2 } : null);
  vm.props.onDestroy = () => {
    vue.render(null, container);
  };
  vue.render(vm, container);
  instances.push({ vm });
  appendTo.appendChild(container.firstElementChild);
  return {
    close: () => vm.component.proxy.visible = false
  };
};
message$1.messageTypes.forEach((type) => {
  message[type] = (options = {}) => {
    if (typeof options === "string" || vue.isVNode(options)) {
      options = {
        message: options
      };
    }
    return message({
      ...options,
      type
    });
  };
});
function close(id, userOnClose) {
  const idx = instances.findIndex(({ vm: vm2 }) => id === vm2.component.props.id);
  if (idx === -1)
    return;
  const { vm } = instances[idx];
  if (!vm)
    return;
  userOnClose == null ? void 0 : userOnClose(vm);
  const removedHeight = vm.el.offsetHeight;
  instances.splice(idx, 1);
  const len = instances.length;
  if (len < 1)
    return;
  for (let i = idx; i < len; i++) {
    const pos = parseInt(instances[i].vm.el.style["top"], 10) - removedHeight - 16;
    instances[i].vm.component.props.offset = pos;
  }
}
function closeAll() {
  var _a;
  for (let i = instances.length - 1; i >= 0; i--) {
    const instance = instances[i].vm.component;
    (_a = instance == null ? void 0 : instance.proxy) == null ? void 0 : _a.close();
  }
}
message.closeAll = closeAll;

exports.close = close;
exports.closeAll = closeAll;
exports["default"] = message;
//# sourceMappingURL=message-method.js.map
