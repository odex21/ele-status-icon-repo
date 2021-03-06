'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../../icon/index.js');
require('../../../hooks/index.js');
var pageHeader = require('./page-header2.js');
var index$1 = require('../../../hooks/use-locale/index.js');

var script = vue.defineComponent({
  name: "ElPageHeader",
  components: {
    ElIcon: index.ElIcon
  },
  props: pageHeader.pageHeaderProps,
  emits: pageHeader.pageHeaderEmits,
  setup(_, { emit }) {
    const { t } = index$1.useLocale();
    function handleClick() {
      emit("back");
    }
    return {
      handleClick,
      t
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=page-header.vue_vue_type_script_lang.js.map
