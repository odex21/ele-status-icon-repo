import { ref, inject, computed, unref } from 'vue';
import { useGlobalConfig as useGlobalConfig$1 } from '../../utils/util.mjs';
import '../../tokens/index.mjs';
import { buildProp, componentSize } from '../../utils/props.mjs';
import { useProp } from '../use-prop/index.mjs';
import { useGlobalConfig } from '../use-global-config/index.mjs';
import { elFormKey, elFormItemKey } from '../../tokens/form.mjs';

const useSizeProp = buildProp({
  type: String,
  values: ["", ...componentSize],
  default: ""
});
const useSize = (fallback, ignore = {}) => {
  const emptyRef = ref(void 0);
  const size = ignore.prop ? emptyRef : useProp("size");
  const globalConfig = ignore.global ? emptyRef : useGlobalConfig("size");
  const globalConfigLegacy = ignore.global ? { size: void 0 } : useGlobalConfig$1();
  const form = ignore.form ? { size: void 0 } : inject(elFormKey, void 0);
  const formItem = ignore.formItem ? { size: void 0 } : inject(elFormItemKey, void 0);
  return computed(() => size.value || unref(fallback) || (formItem == null ? void 0 : formItem.size) || (form == null ? void 0 : form.size) || globalConfig.value || globalConfigLegacy.size || "");
};
const useDisabled = (fallback) => {
  const disabled = useProp("disabled");
  const form = inject(elFormKey, void 0);
  return computed(() => disabled.value || unref(fallback) || (form == null ? void 0 : form.disabled) || false);
};

export { useDisabled, useSize, useSizeProp };
//# sourceMappingURL=index.mjs.map
