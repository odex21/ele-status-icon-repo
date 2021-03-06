import type { configProviderProps } from 'element-plus/es/components/config-provider';
import type { InjectionKey, ExtractPropTypes } from 'vue';
export declare type ConfigProviderContext = ExtractPropTypes<typeof configProviderProps>;
export declare const configProviderContextKey: InjectionKey<ConfigProviderContext>;
