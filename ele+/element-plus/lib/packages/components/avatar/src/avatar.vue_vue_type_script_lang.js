'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../../icon/index.js');
var avatar = require('./avatar2.js');

var script = vue.defineComponent({
  name: "ElAvatar",
  components: {
    ElIcon: index.ElIcon
  },
  props: avatar.avatarProps,
  emits: avatar.avatarEmits,
  setup(props, { emit }) {
    const hasLoadError = vue.ref(false);
    const avatarClass = vue.computed(() => {
      const { size, icon, shape } = props;
      const classList = ["el-avatar"];
      if (size && typeof size === "string")
        classList.push(`el-avatar--${size}`);
      if (icon)
        classList.push("el-avatar--icon");
      if (shape)
        classList.push(`el-avatar--${shape}`);
      return classList;
    });
    const sizeStyle = vue.computed(() => {
      const { size } = props;
      return typeof size === "number" ? {
        "--el-avatar-size": `${size}px`
      } : {};
    });
    const fitStyle = vue.computed(() => ({
      objectFit: props.fit
    }));
    vue.watch(() => props.src, () => hasLoadError.value = false);
    function handleError(e) {
      hasLoadError.value = true;
      emit("error", e);
    }
    return {
      hasLoadError,
      avatarClass,
      sizeStyle,
      fitStyle,
      handleError
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=avatar.vue_vue_type_script_lang.js.map
