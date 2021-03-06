import { resolveComponent, resolveDirective, openBlock, createBlock, Transition, withCtx, withDirectives, createVNode, withModifiers, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, resolveDynamicComponent, createCommentVNode, toDisplayString, withKeys, renderSlot, vShow, createTextVNode } from 'vue';

const _hoisted_1 = ["aria-label"];
const _hoisted_2 = {
  key: 0,
  class: "el-message-box__header"
};
const _hoisted_3 = { class: "el-message-box__title" };
const _hoisted_4 = { class: "el-message-box__content" };
const _hoisted_5 = { class: "el-message-box__container" };
const _hoisted_6 = {
  key: 1,
  class: "el-message-box__message"
};
const _hoisted_7 = { key: 0 };
const _hoisted_8 = ["innerHTML"];
const _hoisted_9 = { class: "el-message-box__input" };
const _hoisted_10 = { class: "el-message-box__btns" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = resolveComponent("el-icon");
  const _component_close = resolveComponent("close");
  const _component_el_input = resolveComponent("el-input");
  const _component_el_button = resolveComponent("el-button");
  const _component_el_overlay = resolveComponent("el-overlay");
  const _directive_trap_focus = resolveDirective("trap-focus");
  return openBlock(), createBlock(Transition, {
    name: "fade-in-linear",
    onAfterLeave: _cache[7] || (_cache[7] = ($event) => _ctx.$emit("vanish"))
  }, {
    default: withCtx(() => [
      withDirectives(createVNode(_component_el_overlay, {
        "z-index": _ctx.zIndex,
        "overlay-class": ["is-message-box", _ctx.modalClass],
        mask: _ctx.modal,
        onClick: withModifiers(_ctx.handleWrapperClick, ["self"])
      }, {
        default: withCtx(() => [
          withDirectives((openBlock(), createElementBlock("div", {
            ref: "root",
            "aria-label": _ctx.title || "dialog",
            "aria-modal": "true",
            class: normalizeClass([
              "el-message-box",
              _ctx.customClass,
              { "el-message-box--center": _ctx.center }
            ]),
            style: normalizeStyle(_ctx.customStyle)
          }, [
            _ctx.title !== null && _ctx.title !== void 0 ? (openBlock(), createElementBlock("div", _hoisted_2, [
              createElementVNode("div", _hoisted_3, [
                _ctx.iconComponent && _ctx.center ? (openBlock(), createBlock(_component_el_icon, {
                  key: 0,
                  class: normalizeClass(["el-message-box__status", _ctx.typeClass])
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(_ctx.iconComponent)))
                  ]),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("v-if", true),
                createElementVNode("span", null, toDisplayString(_ctx.title), 1)
              ]),
              _ctx.showClose ? (openBlock(), createElementBlock("button", {
                key: 0,
                type: "button",
                class: "el-message-box__headerbtn",
                "aria-label": "Close",
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.handleAction(_ctx.distinguishCancelAndClose ? "close" : "cancel")),
                onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => _ctx.handleAction(_ctx.distinguishCancelAndClose ? "close" : "cancel"), ["prevent"]), ["enter"]))
              }, [
                createVNode(_component_el_icon, { class: "el-message-box__close" }, {
                  default: withCtx(() => [
                    createVNode(_component_close)
                  ]),
                  _: 1
                })
              ], 32)) : createCommentVNode("v-if", true)
            ])) : createCommentVNode("v-if", true),
            createElementVNode("div", _hoisted_4, [
              createElementVNode("div", _hoisted_5, [
                _ctx.iconComponent && !_ctx.center && _ctx.hasMessage ? (openBlock(), createBlock(_component_el_icon, {
                  key: 0,
                  class: normalizeClass(["el-message-box__status", _ctx.typeClass])
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(_ctx.iconComponent)))
                  ]),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("v-if", true),
                _ctx.hasMessage ? (openBlock(), createElementBlock("div", _hoisted_6, [
                  renderSlot(_ctx.$slots, "default", {}, () => [
                    !_ctx.dangerouslyUseHTMLString ? (openBlock(), createElementBlock("p", _hoisted_7, toDisplayString(_ctx.message), 1)) : (openBlock(), createElementBlock("p", {
                      key: 1,
                      innerHTML: _ctx.message
                    }, null, 8, _hoisted_8))
                  ])
                ])) : createCommentVNode("v-if", true)
              ]),
              withDirectives(createElementVNode("div", _hoisted_9, [
                createVNode(_component_el_input, {
                  ref: "inputRef",
                  modelValue: _ctx.inputValue,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.inputValue = $event),
                  type: _ctx.inputType,
                  placeholder: _ctx.inputPlaceholder,
                  class: normalizeClass({ invalid: _ctx.validateError }),
                  onKeydown: withKeys(withModifiers(_ctx.handleInputEnter, ["prevent"]), ["enter"])
                }, null, 8, ["modelValue", "type", "placeholder", "class", "onKeydown"]),
                createElementVNode("div", {
                  class: "el-message-box__errormsg",
                  style: normalizeStyle({
                    visibility: !!_ctx.editorErrorMessage ? "visible" : "hidden"
                  })
                }, toDisplayString(_ctx.editorErrorMessage), 5)
              ], 512), [
                [vShow, _ctx.showInput]
              ])
            ]),
            createElementVNode("div", _hoisted_10, [
              _ctx.showCancelButton ? (openBlock(), createBlock(_component_el_button, {
                key: 0,
                loading: _ctx.cancelButtonLoading,
                class: normalizeClass([_ctx.cancelButtonClass]),
                round: _ctx.roundButton,
                size: _ctx.buttonSize || "small",
                onClick: _cache[3] || (_cache[3] = ($event) => _ctx.handleAction("cancel")),
                onKeydown: _cache[4] || (_cache[4] = withKeys(withModifiers(($event) => _ctx.handleAction("cancel"), ["prevent"]), ["enter"]))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.cancelButtonText || _ctx.t("el.messagebox.cancel")), 1)
                ]),
                _: 1
              }, 8, ["loading", "class", "round", "size"])) : createCommentVNode("v-if", true),
              withDirectives(createVNode(_component_el_button, {
                ref: "confirmRef",
                type: "primary",
                plain: "",
                loading: _ctx.confirmButtonLoading,
                class: normalizeClass([_ctx.confirmButtonClasses]),
                round: _ctx.roundButton,
                disabled: _ctx.confirmButtonDisabled,
                size: _ctx.buttonSize || "small",
                onClick: _cache[5] || (_cache[5] = ($event) => _ctx.handleAction("confirm")),
                onKeydown: _cache[6] || (_cache[6] = withKeys(withModifiers(($event) => _ctx.handleAction("confirm"), ["prevent"]), ["enter"]))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.confirmButtonText || _ctx.t("el.messagebox.confirm")), 1)
                ]),
                _: 1
              }, 8, ["loading", "class", "round", "disabled", "size"]), [
                [vShow, _ctx.showConfirmButton]
              ])
            ])
          ], 14, _hoisted_1)), [
            [_directive_trap_focus]
          ])
        ]),
        _: 3
      }, 8, ["z-index", "overlay-class", "mask", "onClick"]), [
        [vShow, _ctx.visible]
      ])
    ]),
    _: 3
  });
}

export { render };
//# sourceMappingURL=index.vue_vue_type_template_id_7035e868_lang.mjs.map
