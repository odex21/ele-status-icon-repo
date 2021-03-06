export declare const ElSpace: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    readonly direction: import("../../utils/props").BuildPropReturn<StringConstructor, "horizontal", unknown, "horizontal" | "vertical", unknown>;
    readonly class: import("../../utils/props").BuildPropReturn<import("../../utils/props").PropWrapper<string | string[] | Record<string, boolean>>, "", unknown, unknown, unknown>;
    readonly style: import("../../utils/props").BuildPropReturn<import("../../utils/props").PropWrapper<import("vue").StyleValue>, "", unknown, unknown, unknown>;
    readonly alignment: import("../../utils/props").BuildPropReturn<import("../../utils/props").PropWrapper<string>, "center", unknown, unknown, unknown>;
    readonly prefixCls: import("../../utils/props").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
    readonly spacer: import("../../utils/props").BuildPropReturn<import("../../utils/props").PropWrapper<import("vue").VNodeChild>, null, unknown, unknown, unknown>;
    readonly wrap: import("../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly fill: import("../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly fillRatio: import("../../utils/props").BuildPropReturn<NumberConstructor, 100, unknown, unknown, unknown>;
    readonly size: import("../../utils/props").BuildPropReturn<readonly [StringConstructor, ArrayConstructor, NumberConstructor], unknown, unknown, "small" | "default" | "large", number | [number, number]>;
}, () => string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | {
    [name: string]: unknown;
    $stable?: boolean | undefined;
} | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly direction?: unknown;
    readonly class?: unknown;
    readonly style?: unknown;
    readonly alignment?: unknown;
    readonly prefixCls?: unknown;
    readonly spacer?: unknown;
    readonly wrap?: unknown;
    readonly fill?: unknown;
    readonly fillRatio?: unknown;
    readonly size?: unknown;
} & {
    fill: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    style: import("vue").StyleValue;
    class: import("../../utils/props").BuildPropType<import("../../utils/props").PropWrapper<string | string[] | Record<string, boolean>>, unknown, unknown>;
    direction: import("../../utils/props").BuildPropType<StringConstructor, "horizontal" | "vertical", unknown>;
    wrap: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    alignment: string;
    spacer: import("vue").VNodeChild;
    fillRatio: number;
} & {
    size?: import("../../utils/props").BuildPropType<readonly [StringConstructor, ArrayConstructor, NumberConstructor], "small" | "default" | "large", number | [number, number]> | undefined;
    prefixCls?: string | undefined;
}>, {
    size: import("../../utils/props").BuildPropType<readonly [StringConstructor, ArrayConstructor, NumberConstructor], "small" | "default" | "large", number | [number, number]>;
    fill: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    style: import("vue").StyleValue;
    class: import("../../utils/props").BuildPropType<import("../../utils/props").PropWrapper<string | string[] | Record<string, boolean>>, unknown, unknown>;
    direction: import("../../utils/props").BuildPropType<StringConstructor, "horizontal" | "vertical", unknown>;
    wrap: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    alignment: string;
    prefixCls: string;
    spacer: import("vue").VNodeChild;
    fillRatio: number;
}>> & Record<string, any>;
export default ElSpace;
export * from './src/space';
export * from './src/use-space';
