'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = { class: "select-trigger" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { class: "el-select__tags-text" };
const _hoisted_4 = ["disabled", "autocomplete"];
const _hoisted_5 = { style: { "height": "100%", "display": "flex", "justify-content": "center", "align-items": "center" } };
const _hoisted_6 = {
  key: 1,
  class: "el-select-dropdown__empty"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tag = vue.resolveComponent("el-tag");
  const _component_el_icon = vue.resolveComponent("el-icon");
  const _component_el_input = vue.resolveComponent("el-input");
  const _component_el_option = vue.resolveComponent("el-option");
  const _component_el_scrollbar = vue.resolveComponent("el-scrollbar");
  const _component_el_select_menu = vue.resolveComponent("el-select-menu");
  const _component_el_popper = vue.resolveComponent("el-popper");
  const _directive_click_outside = vue.resolveDirective("click-outside");
  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
    ref: "selectWrapper",
    class: vue.normalizeClass(["el-select", [_ctx.selectSize ? "el-select--" + _ctx.selectSize : ""]]),
    onClick: _cache[24] || (_cache[24] = vue.withModifiers((...args) => _ctx.toggleMenu && _ctx.toggleMenu(...args), ["stop"]))
  }, [
    vue.createVNode(_component_el_popper, {
      ref: "popper",
      visible: _ctx.dropMenuVisible,
      "onUpdate:visible": _cache[23] || (_cache[23] = ($event) => _ctx.dropMenuVisible = $event),
      placement: "bottom-start",
      "append-to-body": _ctx.popperAppendToBody,
      "popper-class": `el-select__popper ${_ctx.popperClass}`,
      "fallback-placements": ["bottom-start", "top-start", "right", "left"],
      "manual-mode": "",
      effect: _ctx.Effect.LIGHT,
      pure: "",
      trigger: "click",
      transition: "el-zoom-in-top",
      "stop-popper-mouse-event": false,
      "gpu-acceleration": false,
      onBeforeEnter: _ctx.handleMenuEnter
    }, {
      trigger: vue.withCtx(() => [
        vue.createElementVNode("div", _hoisted_1, [
          _ctx.multiple ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            ref: "tags",
            class: "el-select__tags",
            style: vue.normalizeStyle({ maxWidth: _ctx.inputWidth - 32 + "px", width: "100%" })
          }, [
            _ctx.collapseTags && _ctx.selected.length ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2, [
              vue.createVNode(_component_el_tag, {
                closable: !_ctx.selectDisabled && !_ctx.selected[0].isDisabled,
                size: _ctx.collapseTagSize,
                hit: _ctx.selected[0].hitState,
                type: _ctx.tagType,
                "disable-transitions": "",
                onClose: _cache[0] || (_cache[0] = ($event) => _ctx.deleteTag($event, _ctx.selected[0]))
              }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("span", {
                    class: "el-select__tags-text",
                    style: vue.normalizeStyle({ maxWidth: _ctx.inputWidth - 123 + "px" })
                  }, vue.toDisplayString(_ctx.selected[0].currentLabel), 5)
                ]),
                _: 1
              }, 8, ["closable", "size", "hit", "type"]),
              _ctx.selected.length > 1 ? (vue.openBlock(), vue.createBlock(_component_el_tag, {
                key: 0,
                closable: false,
                size: _ctx.collapseTagSize,
                type: _ctx.tagType,
                "disable-transitions": ""
              }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("span", _hoisted_3, "+ " + vue.toDisplayString(_ctx.selected.length - 1), 1)
                ]),
                _: 1
              }, 8, ["size", "type"])) : vue.createCommentVNode("v-if", true)
            ])) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" <div> "),
            !_ctx.collapseTags ? (vue.openBlock(), vue.createBlock(vue.Transition, {
              key: 1,
              onAfterLeave: _ctx.resetInputHeight
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("span", {
                  style: vue.normalizeStyle({
                    marginLeft: _ctx.prefixWidth && _ctx.selected.length ? `${_ctx.prefixWidth}px` : null
                  })
                }, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.selected, (item) => {
                    return vue.openBlock(), vue.createBlock(_component_el_tag, {
                      key: _ctx.getValueKey(item),
                      closable: !_ctx.selectDisabled && !item.isDisabled,
                      size: _ctx.collapseTagSize,
                      hit: item.hitState,
                      type: _ctx.tagType,
                      "disable-transitions": "",
                      onClose: ($event) => _ctx.deleteTag($event, item)
                    }, {
                      default: vue.withCtx(() => [
                        vue.createElementVNode("span", {
                          class: "el-select__tags-text",
                          style: vue.normalizeStyle({ maxWidth: _ctx.inputWidth - 75 + "px" })
                        }, vue.toDisplayString(item.currentLabel), 5)
                      ]),
                      _: 2
                    }, 1032, ["closable", "size", "hit", "type", "onClose"]);
                  }), 128))
                ], 4)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" </div> "),
            _ctx.filterable ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
              key: 2,
              ref: "input",
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.query = $event),
              type: "text",
              class: vue.normalizeClass(["el-select__input", [_ctx.selectSize ? `is-${_ctx.selectSize}` : ""]]),
              disabled: _ctx.selectDisabled,
              autocomplete: _ctx.autocomplete,
              style: vue.normalizeStyle({
                marginLeft: _ctx.prefixWidth && !_ctx.selected.length || _ctx.tagInMultiLine ? `${_ctx.prefixWidth}px` : null,
                flexGrow: "1",
                width: `${_ctx.inputLength / (_ctx.inputWidth - 32)}%`,
                maxWidth: `${_ctx.inputWidth - 42}px`
              }),
              onFocus: _cache[2] || (_cache[2] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
              onBlur: _cache[3] || (_cache[3] = (...args) => _ctx.handleBlur && _ctx.handleBlur(...args)),
              onKeyup: _cache[4] || (_cache[4] = (...args) => _ctx.managePlaceholder && _ctx.managePlaceholder(...args)),
              onKeydown: [
                _cache[5] || (_cache[5] = (...args) => _ctx.resetInputState && _ctx.resetInputState(...args)),
                _cache[6] || (_cache[6] = vue.withKeys(vue.withModifiers(($event) => _ctx.navigateOptions("next"), ["prevent"]), ["down"])),
                _cache[7] || (_cache[7] = vue.withKeys(vue.withModifiers(($event) => _ctx.navigateOptions("prev"), ["prevent"]), ["up"])),
                _cache[8] || (_cache[8] = vue.withKeys(vue.withModifiers(($event) => _ctx.visible = false, ["stop", "prevent"]), ["esc"])),
                _cache[9] || (_cache[9] = vue.withKeys(vue.withModifiers((...args) => _ctx.selectOption && _ctx.selectOption(...args), ["stop", "prevent"]), ["enter"])),
                _cache[10] || (_cache[10] = vue.withKeys((...args) => _ctx.deletePrevTag && _ctx.deletePrevTag(...args), ["delete"])),
                _cache[11] || (_cache[11] = vue.withKeys(($event) => _ctx.visible = false, ["tab"]))
              ],
              onCompositionstart: _cache[12] || (_cache[12] = (...args) => _ctx.handleComposition && _ctx.handleComposition(...args)),
              onCompositionupdate: _cache[13] || (_cache[13] = (...args) => _ctx.handleComposition && _ctx.handleComposition(...args)),
              onCompositionend: _cache[14] || (_cache[14] = (...args) => _ctx.handleComposition && _ctx.handleComposition(...args)),
              onInput: _cache[15] || (_cache[15] = (...args) => _ctx.debouncedQueryChange && _ctx.debouncedQueryChange(...args))
            }, null, 46, _hoisted_4)), [
              [vue.vModelText, _ctx.query]
            ]) : vue.createCommentVNode("v-if", true)
          ], 4)) : vue.createCommentVNode("v-if", true),
          vue.createVNode(_component_el_input, {
            id: _ctx.id,
            ref: "reference",
            modelValue: _ctx.selectedLabel,
            "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => _ctx.selectedLabel = $event),
            type: "text",
            placeholder: _ctx.currentPlaceholder,
            name: _ctx.name,
            autocomplete: _ctx.autocomplete,
            size: _ctx.selectSize,
            disabled: _ctx.selectDisabled,
            readonly: _ctx.readonly,
            "validate-event": false,
            class: vue.normalizeClass({ "is-focus": _ctx.visible }),
            tabindex: _ctx.multiple && _ctx.filterable ? "-1" : null,
            onFocus: _ctx.handleFocus,
            onBlur: _ctx.handleBlur,
            onInput: _ctx.debouncedOnInputChange,
            onPaste: _ctx.debouncedOnInputChange,
            onCompositionstart: _ctx.handleComposition,
            onCompositionupdate: _ctx.handleComposition,
            onCompositionend: _ctx.handleComposition,
            onKeydown: [
              _cache[17] || (_cache[17] = vue.withKeys(vue.withModifiers(($event) => _ctx.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
              _cache[18] || (_cache[18] = vue.withKeys(vue.withModifiers(($event) => _ctx.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
              vue.withKeys(vue.withModifiers(_ctx.selectOption, ["stop", "prevent"]), ["enter"]),
              _cache[19] || (_cache[19] = vue.withKeys(vue.withModifiers(($event) => _ctx.visible = false, ["stop", "prevent"]), ["esc"])),
              _cache[20] || (_cache[20] = vue.withKeys(($event) => _ctx.visible = false, ["tab"]))
            ],
            onMouseenter: _cache[21] || (_cache[21] = ($event) => _ctx.inputHovering = true),
            onMouseleave: _cache[22] || (_cache[22] = ($event) => _ctx.inputHovering = false)
          }, vue.createSlots({
            suffix: vue.withCtx(() => [
              _ctx.iconComponent ? vue.withDirectives((vue.openBlock(), vue.createBlock(_component_el_icon, {
                key: 0,
                class: vue.normalizeClass(["el-select__caret", "el-input__icon", _ctx.iconReverse])
              }, {
                default: vue.withCtx(() => [
                  (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])), [
                [vue.vShow, !_ctx.showClose]
              ]) : vue.createCommentVNode("v-if", true),
              _ctx.showClose && _ctx.clearIcon ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
                key: 1,
                class: "el-select__caret el-input__icon",
                onClick: _ctx.handleClearClick
              }, {
                default: vue.withCtx(() => [
                  (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.clearIcon)))
                ]),
                _: 1
              }, 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
            ]),
            _: 2
          }, [
            _ctx.$slots.prefix ? {
              name: "prefix",
              fn: vue.withCtx(() => [
                vue.createElementVNode("div", _hoisted_5, [
                  vue.renderSlot(_ctx.$slots, "prefix")
                ])
              ])
            } : void 0
          ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
        ])
      ]),
      default: vue.withCtx(() => [
        vue.createVNode(_component_el_select_menu, null, {
          default: vue.withCtx(() => [
            vue.withDirectives(vue.createVNode(_component_el_scrollbar, {
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": "el-select-dropdown__wrap",
              "view-class": "el-select-dropdown__list",
              class: vue.normalizeClass({
                "is-empty": !_ctx.allowCreate && _ctx.query && _ctx.filteredOptionsCount === 0
              })
            }, {
              default: vue.withCtx(() => [
                _ctx.showNewOption ? (vue.openBlock(), vue.createBlock(_component_el_option, {
                  key: 0,
                  value: _ctx.query,
                  created: true
                }, null, 8, ["value"])) : vue.createCommentVNode("v-if", true),
                vue.renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]), [
              [vue.vShow, _ctx.options.size > 0 && !_ctx.loading]
            ]),
            _ctx.emptyText && (!_ctx.allowCreate || _ctx.loading || _ctx.allowCreate && _ctx.options.size === 0) ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
              _ctx.$slots.empty ? vue.renderSlot(_ctx.$slots, "empty", { key: 0 }) : (vue.openBlock(), vue.createElementBlock("p", _hoisted_6, vue.toDisplayString(_ctx.emptyText), 1))
            ], 2112)) : vue.createCommentVNode("v-if", true)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["visible", "append-to-body", "popper-class", "effect", "onBeforeEnter"])
  ], 2)), [
    [_directive_click_outside, _ctx.handleClose, _ctx.popperPaneRef]
  ]);
}

exports.render = render;
//# sourceMappingURL=select.vue_vue_type_template_id_33774f85_lang.js.map
