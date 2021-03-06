'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = ["aria-checked", "aria-disabled"];
const _hoisted_2 = ["id", "name", "true-value", "false-value", "disabled"];
const _hoisted_3 = ["aria-hidden"];
const _hoisted_4 = {
  key: 0,
  class: "el-switch__inner"
};
const _hoisted_5 = ["aria-hidden"];
const _hoisted_6 = ["aria-hidden"];
const _hoisted_7 = { class: "el-switch__action" };
const _hoisted_8 = ["aria-hidden"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = vue.resolveComponent("el-icon");
  const _component_loading = vue.resolveComponent("loading");
  return vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(["el-switch", { "is-disabled": _ctx.switchDisabled, "is-checked": _ctx.checked }]),
    role: "switch",
    "aria-checked": _ctx.checked,
    "aria-disabled": _ctx.switchDisabled,
    onClick: _cache[2] || (_cache[2] = vue.withModifiers((...args) => _ctx.switchValue && _ctx.switchValue(...args), ["prevent"]))
  }, [
    vue.createElementVNode("input", {
      id: _ctx.id,
      ref: "input",
      class: "el-switch__input",
      type: "checkbox",
      name: _ctx.name,
      "true-value": _ctx.activeValue,
      "false-value": _ctx.inactiveValue,
      disabled: _ctx.switchDisabled,
      onChange: _cache[0] || (_cache[0] = (...args) => _ctx.handleChange && _ctx.handleChange(...args)),
      onKeydown: _cache[1] || (_cache[1] = vue.withKeys((...args) => _ctx.switchValue && _ctx.switchValue(...args), ["enter"]))
    }, null, 40, _hoisted_2),
    !_ctx.inlinePrompt && (_ctx.inactiveIcon || _ctx.inactiveText) ? (vue.openBlock(), vue.createElementBlock("span", {
      key: 0,
      class: vue.normalizeClass([
        "el-switch__label",
        "el-switch__label--left",
        !_ctx.checked ? "is-active" : ""
      ])
    }, [
      _ctx.inactiveIcon ? (vue.openBlock(), vue.createBlock(_component_el_icon, { key: 0 }, {
        default: vue.withCtx(() => [
          (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.inactiveIcon)))
        ]),
        _: 1
      })) : vue.createCommentVNode("v-if", true),
      !_ctx.inactiveIcon && _ctx.inactiveText ? (vue.openBlock(), vue.createElementBlock("span", {
        key: 1,
        "aria-hidden": _ctx.checked
      }, vue.toDisplayString(_ctx.inactiveText), 9, _hoisted_3)) : vue.createCommentVNode("v-if", true)
    ], 2)) : vue.createCommentVNode("v-if", true),
    vue.createElementVNode("span", {
      ref: "core",
      class: "el-switch__core",
      style: vue.normalizeStyle({ width: (_ctx.width || 40) + "px" })
    }, [
      _ctx.inlinePrompt ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4, [
        _ctx.activeIcon || _ctx.inactiveIcon ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          _ctx.activeIcon ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
            key: 0,
            class: vue.normalizeClass(["is-icon", _ctx.checked ? "is-show" : "is-hide"])
          }, {
            default: vue.withCtx(() => [
              (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.activeIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : vue.createCommentVNode("v-if", true),
          _ctx.inactiveIcon ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
            key: 1,
            class: vue.normalizeClass(["is-icon", !_ctx.checked ? "is-show" : "is-hide"])
          }, {
            default: vue.withCtx(() => [
              (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.inactiveIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : vue.createCommentVNode("v-if", true)
        ], 64)) : _ctx.activeText || _ctx.inactiveIcon ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
          _ctx.activeText ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 0,
            class: vue.normalizeClass(["is-text", _ctx.checked ? "is-show" : "is-hide"]),
            "aria-hidden": !_ctx.checked
          }, vue.toDisplayString(_ctx.activeText.substr(0, 1)), 11, _hoisted_5)) : vue.createCommentVNode("v-if", true),
          _ctx.inactiveText ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 1,
            class: vue.normalizeClass(["is-text", !_ctx.checked ? "is-show" : "is-hide"]),
            "aria-hidden": _ctx.checked
          }, vue.toDisplayString(_ctx.inactiveText.substr(0, 1)), 11, _hoisted_6)) : vue.createCommentVNode("v-if", true)
        ], 64)) : vue.createCommentVNode("v-if", true)
      ])) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("div", _hoisted_7, [
        _ctx.loading ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
          key: 0,
          class: "is-loading"
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_loading)
          ]),
          _: 1
        })) : vue.createCommentVNode("v-if", true)
      ])
    ], 4),
    !_ctx.inlinePrompt && (_ctx.activeIcon || _ctx.activeText) ? (vue.openBlock(), vue.createElementBlock("span", {
      key: 1,
      class: vue.normalizeClass([
        "el-switch__label",
        "el-switch__label--right",
        _ctx.checked ? "is-active" : ""
      ])
    }, [
      _ctx.activeIcon ? (vue.openBlock(), vue.createBlock(_component_el_icon, { key: 0 }, {
        default: vue.withCtx(() => [
          (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.activeIcon)))
        ]),
        _: 1
      })) : vue.createCommentVNode("v-if", true),
      !_ctx.activeIcon && _ctx.activeText ? (vue.openBlock(), vue.createElementBlock("span", {
        key: 1,
        "aria-hidden": !_ctx.checked
      }, vue.toDisplayString(_ctx.activeText), 9, _hoisted_8)) : vue.createCommentVNode("v-if", true)
    ], 2)) : vue.createCommentVNode("v-if", true)
  ], 10, _hoisted_1);
}

exports.render = render;
//# sourceMappingURL=switch.vue_vue_type_template_id_538fbc85_lang.js.map
