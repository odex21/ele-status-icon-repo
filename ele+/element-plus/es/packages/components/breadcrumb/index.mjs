import { withInstall, withNoopInstall } from '../../utils/with-install.mjs';
import './src/breadcrumb.mjs';
import './src/breadcrumb-item.mjs';
export { breadcrumbProps } from './src/breadcrumb2.mjs';
export { breadcrumbItemProps } from './src/breadcrumb-item2.mjs';
import script from './src/breadcrumb.vue_vue_type_script_lang.mjs';
import script$1 from './src/breadcrumb-item.vue_vue_type_script_lang.mjs';

const ElBreadcrumb = withInstall(script, {
  BreadcrumbItem: script$1
});
const ElBreadcrumbItem = withNoopInstall(script$1);

export { ElBreadcrumb, ElBreadcrumbItem, ElBreadcrumb as default };
//# sourceMappingURL=index.mjs.map
