import { withInstall, withNoopInstall } from '../../utils/with-install.mjs';
import './src/radio2.mjs';
import './src/radio-button.mjs';
import './src/radio-group2.mjs';
export { radioEmits, radioProps, radioPropsBase, useRadio } from './src/radio.mjs';
export { radioGroupEmits, radioGroupProps } from './src/radio-group.mjs';
export { radioButtonProps } from './src/radio-button2.mjs';
import script from './src/radio.vue_vue_type_script_lang.mjs';
import script$1 from './src/radio-button.vue_vue_type_script_lang.mjs';
import script$2 from './src/radio-group.vue_vue_type_script_lang.mjs';

const ElRadio = withInstall(script, {
  RadioButton: script$1,
  RadioGroup: script$2
});
const ElRadioGroup = withNoopInstall(script$2);
const ElRadioButton = withNoopInstall(script$1);

export { ElRadio, ElRadioButton, ElRadioGroup, ElRadio as default };
//# sourceMappingURL=index.mjs.map
