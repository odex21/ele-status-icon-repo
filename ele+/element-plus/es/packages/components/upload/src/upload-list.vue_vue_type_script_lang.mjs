import { defineComponent, ref } from 'vue';
import { NOOP } from '@vue/shared';
import { ElIcon } from '../../icon/index.mjs';
import { Document, Delete, Close, ZoomIn, Check, CircleCheck } from '@element-plus/icons-vue';
import '../../../hooks/index.mjs';
import { ElProgress } from '../../progress/index.mjs';
import { useLocale } from '../../../hooks/use-locale/index.mjs';

var script = defineComponent({
  name: "ElUploadList",
  components: {
    ElProgress,
    ElIcon,
    Document,
    Delete,
    Close,
    ZoomIn,
    Check,
    CircleCheck
  },
  props: {
    files: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: false
    },
    handlePreview: {
      type: Function,
      default: () => NOOP
    },
    listType: {
      type: String,
      default: "text"
    }
  },
  emits: ["remove"],
  setup(props, { emit }) {
    const { t } = useLocale();
    const handleClick = (file) => {
      props.handlePreview(file);
    };
    const onFileClicked = (e) => {
      ;
      e.target.focus();
    };
    const handleRemove = (e, file) => {
      emit("remove", file);
    };
    return {
      focusing: ref(false),
      handleClick,
      handleRemove,
      onFileClicked,
      t
    };
  }
});

export { script as default };
//# sourceMappingURL=upload-list.vue_vue_type_script_lang.mjs.map
