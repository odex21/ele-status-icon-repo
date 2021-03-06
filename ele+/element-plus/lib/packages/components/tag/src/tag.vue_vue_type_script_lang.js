'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../../icon/index.js');
var iconsVue = require('@element-plus/icons-vue');
require('../../../hooks/index.js');
var tag = require('./tag2.js');
var index$1 = require('../../../hooks/use-common-props/index.js');

var script = vue.defineComponent({
  name: "ElTag",
  components: { ElIcon: index.ElIcon, Close: iconsVue.Close },
  props: tag.tagProps,
  emits: tag.tagEmits,
  setup(props, { emit }) {
    const tagSize = index$1.useSize();
    const classes = vue.computed(() => {
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

exports["default"] = script;
//# sourceMappingURL=tag.vue_vue_type_script_lang.js.map
