'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var shared = require('@vue/shared');
var index$1 = require('../../icon/index.js');
var iconsVue = require('@element-plus/icons-vue');
require('../../../hooks/index.js');
var index = require('../../progress/index.js');
var index$2 = require('../../../hooks/use-locale/index.js');

var script = vue.defineComponent({
  name: "ElUploadList",
  components: {
    ElProgress: index.ElProgress,
    ElIcon: index$1.ElIcon,
    Document: iconsVue.Document,
    Delete: iconsVue.Delete,
    Close: iconsVue.Close,
    ZoomIn: iconsVue.ZoomIn,
    Check: iconsVue.Check,
    CircleCheck: iconsVue.CircleCheck
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
      default: () => shared.NOOP
    },
    listType: {
      type: String,
      default: "text"
    }
  },
  emits: ["remove"],
  setup(props, { emit }) {
    const { t } = index$2.useLocale();
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
      focusing: vue.ref(false),
      handleClick,
      handleRemove,
      onFileClicked,
      t
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=upload-list.vue_vue_type_script_lang.js.map
