import type { App, Plugin } from 'vue';
import type { InstallOptions } from 'element-plus/es/utils/config';
export declare const makeInstaller: (components?: Plugin[]) => {
    version: string;
    install: (app: App, opts: InstallOptions) => void;
};
