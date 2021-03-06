import { withInstall, withNoopInstall } from '../../utils/with-install.mjs';
import './src/skeleton2.mjs';
import './src/skeleton-item.mjs';
export { skeletonProps } from './src/skeleton.mjs';
export { skeletonItemProps } from './src/skeleton-item2.mjs';
import script from './src/skeleton.vue_vue_type_script_lang.mjs';
import script$1 from './src/skeleton-item.vue_vue_type_script_lang.mjs';

const ElSkeleton = withInstall(script, {
  SkeletonItem: script$1
});
const ElSkeletonItem = withNoopInstall(script$1);

export { ElSkeleton, ElSkeletonItem, ElSkeleton as default };
//# sourceMappingURL=index.mjs.map
