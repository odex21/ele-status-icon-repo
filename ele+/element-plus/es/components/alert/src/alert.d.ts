import type { ExtractPropTypes } from 'vue';
export declare type AlertEffect = 'light' | 'dark';
export declare const alertProps: {
    readonly title: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly description: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly type: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "info", unknown, "success" | "warning" | "info" | "error", unknown>;
    readonly closable: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly closeText: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly showIcon: BooleanConstructor;
    readonly center: BooleanConstructor;
    readonly effect: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "light", unknown, "light" | "dark", unknown>;
};
export declare type AlertProps = ExtractPropTypes<typeof alertProps>;
export declare const alertEmits: {
    close: (evt: MouseEvent) => boolean;
};
export declare type AlertEmits = typeof alertEmits;
