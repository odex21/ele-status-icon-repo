'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tooltip = vue.resolveComponent("el-tooltip");
  return vue.openBlock(), vue.createElementBlock("div", {
    ref: "button",
    class: vue.normalizeClass(["el-slider__button-wrapper", { hover: _ctx.hovering, dragging: _ctx.dragging }]),
    style: vue.normalizeStyle(_ctx.wrapperStyle),
    tabindex: "0",
    onMouseenter: _cache[1] || (_cache[1] = (...args) => _ctx.handleMouseEnter && _ctx.handleMouseEnter(...args)),
    onMouseleave: _cache[2] || (_cache[2] = (...args) => _ctx.handleMouseLeave && _ctx.handleMouseLeave(...args)),
    onMousedown: _cache[3] || (_cache[3] = (...args) => _ctx.onButtonDown && _ctx.onButtonDown(...args)),
    onTouchstart: _cache[4] || (_cache[4] = (...args) => _ctx.onButtonDown && _ctx.onButtonDown(...args)),
    onFocus: _cache[5] || (_cache[5] = (...args) => _ctx.handleMouseEnter && _ctx.handleMouseEnter(...args)),
    onBlur: _cache[6] || (_cache[6] = (...args) => _ctx.handleMouseLeave && _ctx.handleMouseLeave(...args)),
    onKeydown: [
      _cache[7] || (_cache[7] = vue.withKeys((...args) => _ctx.onLeftKeyDown && _ctx.onLeftKeyDown(...args), ["left"])),
      _cache[8] || (_cache[8] = vue.withKeys((...args) => _ctx.onRightKeyDown && _ctx.onRightKeyDown(...args), ["right"])),
      _cache[9] || (_cache[9] = vue.withKeys(vue.withModifiers((...args) => _ctx.onLeftKeyDown && _ctx.onLeftKeyDown(...args), ["prevent"]), ["down"])),
      _cache[10] || (_cache[10] = vue.withKeys(vue.withModifiers((...args) => _ctx.onRightKeyDown && _ctx.onRightKeyDown(...args), ["prevent"]), ["up"]))
    ]
  }, [
    vue.createVNode(_component_el_tooltip, {
      ref: "tooltip",
      modelValue: _ctx.tooltipVisible,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.tooltipVisible = $event),
      placement: "top",
      "stop-popper-mouse-event": false,
      "popper-class": _ctx.tooltipClass,
      disabled: !_ctx.showTooltip,
      manual: ""
    }, {
      content: vue.withCtx(() => [
        vue.createElementVNode("span", null, vue.toDisplayString(_ctx.formatValue), 1)
      ]),
      default: vue.withCtx(() => [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(["el-slider__button", { hover: _ctx.hovering, dragging: _ctx.dragging }])
        }, null, 2)
      ]),
      _: 1
    }, 8, ["modelValue", "popper-class", "disabled"])
  ], 38);
}

exports.render = render;
//# sourceMappingURL=button.vue_vue_type_template_id_9cd3e794_lang.js.map
