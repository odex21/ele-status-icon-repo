'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "ElUploadDrag",
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["file"],
  setup(props, { emit }) {
    const uploader = vue.inject("uploader", {});
    const dragover = vue.ref(false);
    function onDrop(e) {
      var _a;
      if (props.disabled || !uploader)
        return;
      const accept = ((_a = uploader.props) == null ? void 0 : _a.accept) || uploader.accept;
      dragover.value = false;
      if (!accept) {
        emit("file", e.dataTransfer.files);
        return;
      }
      emit("file", Array.from(e.dataTransfer.files).filter((file) => {
        const { type, name } = file;
        const extension = name.indexOf(".") > -1 ? `.${name.split(".").pop()}` : "";
        const baseType = type.replace(/\/.*$/, "");
        return accept.split(",").map((type2) => type2.trim()).filter((type2) => type2).some((acceptedType) => {
          if (acceptedType.startsWith(".")) {
            return extension === acceptedType;
          }
          if (/\/\*$/.test(acceptedType)) {
            return baseType === acceptedType.replace(/\/\*$/, "");
          }
          if (/^[^/]+\/[^/]+$/.test(acceptedType)) {
            return type === acceptedType;
          }
          return false;
        });
      }));
    }
    function onDragover() {
      if (!props.disabled)
        dragover.value = true;
    }
    return {
      dragover,
      onDrop,
      onDragover
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=upload-dragger.vue_vue_type_script_lang.js.map
