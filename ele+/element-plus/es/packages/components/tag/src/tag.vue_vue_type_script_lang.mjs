import { defineComponent, computed } from 'vue';
import { ElIcon } from '../../icon/index.mjs';
import { Close } from '@element-plus/icons-vue';
import '../../../hooks/index.mjs';
import { tagProps, tagEmits } from './tag2.mjs';
import { useSize } from '../../../hooks/use-common-props/index.mjs';

var script = defineComponent({
  name: "ElTag",
  components: { ElIcon, Close },
  props: tagProps,
  emits: tagEmits,
  setup(props, { emit }) {
    const tagSize = useSize();
    const classes = computed(() => {
      const { type, hit, effect } = props;
      return [
        "el-tag",
        type ? `el-tag--${type}` : "",
        tagSize.value ? `el-tag--${tagSize.value}` : "",
        effect ? `el-tag--${effect}` : "",
        hit && "is-hit"
      ];
    });
    const handleClose = (event) => {
      event.stopPropagation();
      emit("close", event);
    };
    const handleClick = (event) => {
      emit("click", event);
    };
    return {
      classes,
      handleClose,
      handleClick
    };
  }
});

export { script as default };
//# sourceMappingURL=tag.vue_vue_type_script_lang.mjs.map
