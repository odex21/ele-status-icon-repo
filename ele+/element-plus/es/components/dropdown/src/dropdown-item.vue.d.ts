import type { Component } from 'vue';
declare const _default: import("vue").DefineComponent<{
    readonly command: import("element-plus/es/utils/props").BuildPropReturn<readonly [ObjectConstructor, StringConstructor, NumberConstructor], () => {}, unknown, unknown, unknown>;
    readonly disabled: BooleanConstructor;
    readonly divided: BooleanConstructor;
    readonly icon: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown, unknown, unknown>;
}, {
    handleClick: (e: UIEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly command?: unknown;
    readonly disabled?: unknown;
    readonly divided?: unknown;
    readonly icon?: unknown;
} & {
    disabled: boolean;
    command: import("element-plus/es/utils/props").BuildPropType<readonly [ObjectConstructor, StringConstructor, NumberConstructor], unknown, unknown>;
    divided: boolean;
} & {
    icon?: import("element-plus/es/utils/props").BuildPropType<import("element-plus/es/utils/props").PropWrapper<string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown> | undefined;
}>, {
    icon: import("element-plus/es/utils/props").BuildPropType<import("element-plus/es/utils/props").PropWrapper<string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
    disabled: boolean;
    command: import("element-plus/es/utils/props").BuildPropType<readonly [ObjectConstructor, StringConstructor, NumberConstructor], unknown, unknown>;
    divided: boolean;
}>;
export default _default;
