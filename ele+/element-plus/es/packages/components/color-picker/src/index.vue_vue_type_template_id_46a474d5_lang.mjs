import { resolveComponent, resolveDirective, openBlock, createBlock, withCtx, withDirectives, createElementBlock, createElementVNode, createVNode, createCommentVNode, withKeys, createTextVNode, toDisplayString, normalizeClass, normalizeStyle, vShow } from 'vue';

const _hoisted_1 = { class: "el-color-dropdown__main-wrapper" };
const _hoisted_2 = { class: "el-color-dropdown__btns" };
const _hoisted_3 = { class: "el-color-dropdown__value" };
const _hoisted_4 = {
  key: 0,
  class: "el-color-picker__mask"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_hue_slider = resolveComponent("hue-slider");
  const _component_sv_panel = resolveComponent("sv-panel");
  const _component_alpha_slider = resolveComponent("alpha-slider");
  const _component_predefine = resolveComponent("predefine");
  const _component_el_input = resolveComponent("el-input");
  const _component_el_button = resolveComponent("el-button");
  const _component_arrow_down = resolveComponent("arrow-down");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_close = resolveComponent("close");
  const _component_el_popper = resolveComponent("el-popper");
  const _directive_click_outside = resolveDirective("click-outside");
  return openBlock(), createBlock(_component_el_popper, {
    ref: "popper",
    visible: _ctx.showPicker,
    "onUpdate:visible": _cache[2] || (_cache[2] = ($event) => _ctx.showPicker = $event),
    effect: _ctx.Effect.LIGHT,
    "manual-mode": "",
    trigger: "click",
    "show-arrow": false,
    "fallback-placements": ["bottom", "top", "right", "left"],
    offset: 0,
    transition: "el-zoom-in-top",
    "gpu-acceleration": false,
    "popper-class": `el-color-picker__panel el-color-dropdown ${_ctx.popperClass}`,
    "stop-popper-mouse-event": false
  }, {
    default: withCtx(() => [
      withDirectives((openBlock(), createElementBlock("div", null, [
        createElementVNode("div", _hoisted_1, [
          createVNode(_component_hue_slider, {
            ref: "hue",
            class: "hue-slider",
            color: _ctx.color,
            vertical: ""
          }, null, 8, ["color"]),
          createVNode(_component_sv_panel, {
            ref: "svPanel",
            color: _ctx.color
          }, null, 8, ["color"])
        ]),
        _ctx.showAlpha ? (openBlock(), createBlock(_component_alpha_slider, {
          key: 0,
          ref: "alpha",
          color: _ctx.color
        }, null, 8, ["color"])) : createCommentVNode("v-if", true),
        _ctx.predefine ? (openBlock(), createBlock(_component_predefine, {
          key: 1,
          ref: "predefine",
          color: _ctx.color,
          colors: _ctx.predefine
        }, null, 8, ["color", "colors"])) : createCommentVNode("v-if", true),
        createElementVNode("div", _hoisted_2, [
          createElementVNode("span", _hoisted_3, [
            createVNode(_component_el_input, {
              modelValue: _ctx.customInput,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.customInput = $event),
              "validate-event": false,
              size: "small",
              onKeyup: withKeys(_ctx.handleConfirm, ["enter"]),
              onBlur: _ctx.handleConfirm
            }, null, 8, ["modelValue", "onKeyup", "onBlur"])
          ]),
          createVNode(_component_el_button, {
            size: "small",
            type: "text",
            class: "el-color-dropdown__link-btn",
            onClick: _ctx.clear
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.t("el.colorpicker.clear")), 1)
            ]),
            _: 1
          }, 8, ["onClick"]),
          createVNode(_component_el_button, {
            plain: "",
            size: "small",
            class: "el-color-dropdown__btn",
            onClick: _ctx.confirmValue
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.t("el.colorpicker.confirm")), 1)
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ])), [
        [_directive_click_outside, _ctx.hide]
      ])
    ]),
    trigger: withCtx(() => [
      createElementVNode("div", {
        class: normalizeClass([
          "el-color-picker",
          _ctx.colorDisabled ? "is-disabled" : "",
          _ctx.colorSize ? `el-color-picker--${_ctx.colorSize}` : ""
        ])
      }, [
        _ctx.colorDisabled ? (openBlock(), createElementBlock("div", _hoisted_4)) : createCommentVNode("v-if", true),
        createElementVNode("div", {
          class: "el-color-picker__trigger",
          onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleTrigger && _ctx.handleTrigger(...args))
        }, [
          createElementVNode("span", {
            class: normalizeClass(["el-color-picker__color", { "is-alpha": _ctx.showAlpha }])
          }, [
            createElementVNode("span", {
              class: "el-color-picker__color-inner",
              style: normalizeStyle({
                backgroundColor: _ctx.displayedColor
              })
            }, [
              withDirectives(createVNode(_component_el_icon, { class: "el-color-picker__icon is-icon-arrow-down" }, {
                default: withCtx(() => [
                  createVNode(_component_arrow_down)
                ]),
                _: 1
              }, 512), [
                [vShow, _ctx.modelValue || _ctx.showPanelColor]
              ]),
              !_ctx.modelValue && !_ctx.showPanelColor ? (openBlock(), createBlock(_component_el_icon, {
                key: 0,
                class: "el-color-picker__empty is-icon-close"
              }, {
                default: withCtx(() => [
                  createVNode(_component_close)
                ]),
                _: 1
              })) : createCommentVNode("v-if", true)
            ], 4)
          ], 2)
        ])
      ], 2)
    ]),
    _: 1
  }, 8, ["visible", "effect", "popper-class"]);
}

export { render };
//# sourceMappingURL=index.vue_vue_type_template_id_46a474d5_lang.mjs.map
