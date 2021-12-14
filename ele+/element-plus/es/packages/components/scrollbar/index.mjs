import { withInstall } from '../../utils/with-install.mjs';
import './src/scrollbar.mjs';
export { BAR_MAP, renderThumbStyle } from './src/util.mjs';
export { scrollbarEmits, scrollbarProps } from './src/scrollbar2.mjs';
export { barProps } from './src/bar.mjs';
import script from './src/scrollbar.vue_vue_type_script_lang.mjs';

const ElScrollbar = withInstall(script);

export { ElScrollbar, ElScrollbar as default };
//# sourceMappingURL=index.mjs.map
