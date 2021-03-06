import { withInstall } from '../../utils/with-install.mjs';
import { ConfigProvider } from './src/index.mjs';
export { configProviderProps } from './src/config-provider.mjs';

const ElConfigProvider = withInstall(ConfigProvider);

export { ElConfigProvider, ElConfigProvider as default };
//# sourceMappingURL=index.mjs.map
