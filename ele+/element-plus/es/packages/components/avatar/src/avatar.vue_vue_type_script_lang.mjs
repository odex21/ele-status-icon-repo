import { defineComponent, ref, computed, watch } from 'vue';
import { ElIcon } from '../../icon/index.mjs';
import { avatarProps, avatarEmits } from './avatar2.mjs';

var script = defineComponent({
  name: "ElAvatar",
  components: {
    ElIcon
  },
  props: avatarProps,
  emits: avatarEmits,
  setup(props, { emit }) {
    const hasLoadError = ref(false);
    const avatarClass = computed(() => {
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
    const sizeStyle = computed(() => {
      const { size } = props;
      return typeof size === "number" ? {
        "--el-avatar-size": `${size}px`
      } : {};
    });
    const fitStyle = computed(() => ({
      objectFit: props.fit
    }));
    watch(() => props.src, () => hasLoadError.value = false);
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

export { script as default };
//# sourceMappingURL=avatar.vue_vue_type_script_lang.mjs.map
