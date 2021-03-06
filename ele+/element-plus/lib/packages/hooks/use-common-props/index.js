'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var util = require('../../utils/util.js');
require('../../tokens/index.js');
var props = require('../../utils/props.js');
var index = require('../use-prop/index.js');
var index$1 = require('../use-global-config/index.js');
var form = require('../../tokens/form.js');

const useSizeProp = props.buildProp({
  type: String,
  values: ["", ...props.componentSize],
  default: ""
});
const useSize = (fallback, ignore = {}) => {
  const emptyRef = vue.ref(void 0);
  const size = ignore.prop ? emptyRef : index.useProp("size");
  const globalConfig = ignore.global ? emptyRef : index$1.useGlobalConfig("size");
  const globalConfigLegacy = ignore.global ? { size: void 0 } : util.useGlobalConfig();
  const form$1 = ignore.form ? { size: void 0 } : vue.inject(form.elFormKey, void 0);
  const formItem = ignore.formItem ? { size: void 0 } : vue.inject(form.elFormItemKey, void 0);
  return vue.computed(() => size.value || vue.unref(fallback) || (formItem == null ? void 0 : formItem.size) || (form$1 == null ? void 0 : form$1.size) || globalConfig.value || globalConfigLegacy.size || "");
};
const useDisabled = (fallback) => {
  const disabled = index.useProp("disabled");
  const form$1 = vue.inject(form.elFormKey, void 0);
  return vue.computed(() => disabled.value || vue.unref(fallback) || (form$1 == null ? void 0 : form$1.disabled) || false);
};

exports.useDisabled = useDisabled;
exports.useSize = useSize;
exports.useSizeProp = useSizeProp;
//# sourceMappingURL=index.js.map
