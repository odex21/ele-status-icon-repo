import { resolveComponent, resolveDirective, openBlock, createBlock, withCtx, withDirectives, createElementBlock, normalizeClass, createVNode, withModifiers, Fragment, renderList, createElementVNode, toDisplayString, withKeys, vModelText, createCommentVNode, vShow, renderSlot } from 'vue';

const _hoisted_1 = {
  key: 0,
  ref: "tagWrapper",
  class: "el-cascader__tags"
};
const _hoisted_2 = ["placeholder"];
const _hoisted_3 = ["onClick"];
const _hoisted_4 = { class: "el-cascader__empty-text" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_circle_close = resolveComponent("circle-close");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_arrow_down = resolveComponent("arrow-down");
  const _component_el_input = resolveComponent("el-input");
  const _component_el_tag = resolveComponent("el-tag");
  const _component_el_cascader_panel = resolveComponent("el-cascader-panel");
  const _component_check = resolveComponent("check");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_el_popper = resolveComponent("el-popper");
  const _directive_clickoutside = resolveDirective("clickoutside");
  return openBlock(), createBlock(_component_el_popper, {
    ref: "popper",
    visible: _ctx.popperVisible,
    "onUpdate:visible": _cache[17] || (_cache[17] = ($event) => _ctx.popperVisible = $event),
    "manual-mode": "",
    "append-to-body": _ctx.popperAppendToBody,
    placement: "bottom-start",
    "popper-class": `el-cascader__dropdown ${_ctx.popperClass}`,
    "popper-options": _ctx.popperOptions,
    "fallback-placements": ["bottom-start", "top-start", "right", "left"],
    "stop-popper-mouse-event": false,
    transition: "el-zoom-in-top",
    "gpu-acceleration": false,
    effect: _ctx.Effect.LIGHT,
    pure: "",
    onAfterLeave: _ctx.hideSuggestionPanel
  }, {
    trigger: withCtx(() => [
      withDirectives((openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "el-cascader",
          _ctx.realSize && `el-cascader--${_ctx.realSize}`,
          { "is-disabled": _ctx.isDisabled }
        ]),
        onClick: _cache[11] || (_cache[11] = () => _ctx.togglePopperVisible(_ctx.readonly ? void 0 : true)),
        onKeydown: _cache[12] || (_cache[12] = (...args) => _ctx.handleKeyDown && _ctx.handleKeyDown(...args)),
        onMouseenter: _cache[13] || (_cache[13] = ($event) => _ctx.inputHover = true),
        onMouseleave: _cache[14] || (_cache[14] = ($event) => _ctx.inputHover = false)
      }, [
        createVNode(_component_el_input, {
          ref: "input",
          modelValue: _ctx.inputValue,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.inputValue = $event),
          modelModifiers: { trim: true },
          placeholder: _ctx.inputPlaceholder,
          readonly: _ctx.readonly,
          disabled: _ctx.isDisabled,
          "validate-event": false,
          size: _ctx.realSize,
          class: normalizeClass({ "is-focus": _ctx.popperVisible }),
          onCompositionstart: _ctx.handleComposition,
          onCompositionupdate: _ctx.handleComposition,
          onCompositionend: _ctx.handleComposition,
          onFocus: _cache[2] || (_cache[2] = (e) => _ctx.$emit("focus", e)),
          onBlur: _cache[3] || (_cache[3] = (e) => _ctx.$emit("blur", e)),
          onInput: _ctx.handleInput
        }, {
          suffix: withCtx(() => [
            _ctx.clearBtnVisible ? (openBlock(), createBlock(_component_el_icon, {
              key: "clear",
              class: "el-input__icon icon-circle-close",
              onClick: withModifiers(_ctx.handleClear, ["stop"])
            }, {
              default: withCtx(() => [
                createVNode(_component_circle_close)
              ]),
              _: 1
            }, 8, ["onClick"])) : (openBlock(), createBlock(_component_el_icon, {
              key: "arrow-down",
              class: normalizeClass([
                "el-input__icon",
                "icon-arrow-down",
                _ctx.popperVisible && "is-reverse"
              ]),
              onClick: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.togglePopperVisible(), ["stop"]))
            }, {
              default: withCtx(() => [
                createVNode(_component_arrow_down)
              ]),
              _: 1
            }, 8, ["class"]))
          ]),
          _: 1
        }, 8, ["modelValue", "placeholder", "readonly", "disabled", "size", "class", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput"]),
        _ctx.multiple ? (openBlock(), createElementBlock("div", _hoisted_1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.presentTags, (tag) => {
            return openBlock(), createBlock(_component_el_tag, {
              key: tag.key,
              type: "info",
              size: _ctx.tagSize,
              hit: tag.hitState,
              closable: tag.closable,
              "disable-transitions": "",
              onClose: ($event) => _ctx.deleteTag(tag)
            }, {
              default: withCtx(() => [
                createElementVNode("span", null, toDisplayString(tag.text), 1)
              ]),
              _: 2
            }, 1032, ["size", "hit", "closable", "onClose"]);
          }), 128)),
          _ctx.filterable && !_ctx.isDisabled ? withDirectives((openBlock(), createElementBlock("input", {
            key: 0,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.searchInputValue = $event),
            type: "text",
            class: "el-cascader__search-input",
            placeholder: _ctx.presentText ? "" : _ctx.inputPlaceholder,
            onInput: _cache[5] || (_cache[5] = (e) => _ctx.handleInput(_ctx.searchInputValue, e)),
            onClick: _cache[6] || (_cache[6] = withModifiers(($event) => _ctx.togglePopperVisible(true), ["stop"])),
            onKeydown: _cache[7] || (_cache[7] = withKeys((...args) => _ctx.handleDelete && _ctx.handleDelete(...args), ["delete"])),
            onCompositionstart: _cache[8] || (_cache[8] = (...args) => _ctx.handleComposition && _ctx.handleComposition(...args)),
            onCompositionupdate: _cache[9] || (_cache[9] = (...args) => _ctx.handleComposition && _ctx.handleComposition(...args)),
            onCompositionend: _cache[10] || (_cache[10] = (...args) => _ctx.handleComposition && _ctx.handleComposition(...args))
          }, null, 40, _hoisted_2)), [
            [
              vModelText,
              _ctx.searchInputValue,
              void 0,
              { trim: true }
            ]
          ]) : createCommentVNode("v-if", true)
        ], 512)) : createCommentVNode("v-if", true)
      ], 34)), [
        [_directive_clickoutside, () => _ctx.togglePopperVisible(false), _ctx.popperPaneRef]
      ])
    ]),
    default: withCtx(() => [
      withDirectives(createVNode(_component_el_cascader_panel, {
        ref: "panel",
        modelValue: _ctx.checkedValue,
        "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => _ctx.checkedValue = $event),
        options: _ctx.options,
        props: _ctx.props,
        border: false,
        "render-label": _ctx.$slots.default,
        onExpandChange: _ctx.handleExpandChange,
        onClose: _cache[16] || (_cache[16] = ($event) => _ctx.togglePopperVisible(false))
      }, null, 8, ["modelValue", "options", "props", "render-label", "onExpandChange"]), [
        [vShow, !_ctx.filtering]
      ]),
      _ctx.filterable ? withDirectives((openBlock(), createBlock(_component_el_scrollbar, {
        key: 0,
        ref: "suggestionPanel",
        tag: "ul",
        class: "el-cascader__suggestion-panel",
        "view-class": "el-cascader__suggestion-list",
        onKeydown: _ctx.handleSuggestionKeyDown
      }, {
        default: withCtx(() => [
          _ctx.suggestions.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.suggestions, (item) => {
            return openBlock(), createElementBlock("li", {
              key: item.uid,
              class: normalizeClass([
                "el-cascader__suggestion-item",
                item.checked && "is-checked"
              ]),
              tabindex: -1,
              onClick: ($event) => _ctx.handleSuggestionClick(item)
            }, [
              createElementVNode("span", null, toDisplayString(item.text), 1),
              item.checked ? (openBlock(), createBlock(_component_el_icon, { key: 0 }, {
                default: withCtx(() => [
                  createVNode(_component_check)
                ]),
                _: 1
              })) : createCommentVNode("v-if", true)
            ], 10, _hoisted_3);
          }), 128)) : renderSlot(_ctx.$slots, "empty", { key: 1 }, () => [
            createElementVNode("li", _hoisted_4, toDisplayString(_ctx.t("el.cascader.noMatch")), 1)
          ])
        ]),
        _: 3
      }, 8, ["onKeydown"])), [
        [vShow, _ctx.filtering]
      ]) : createCommentVNode("v-if", true)
    ]),
    _: 3
  }, 8, ["visible", "append-to-body", "popper-class", "popper-options", "effect", "onAfterLeave"]);
}

export { render };
//# sourceMappingURL=index.vue_vue_type_template_id_0429c2db_lang.mjs.map
