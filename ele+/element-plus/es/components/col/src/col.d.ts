import type { ExtractPropTypes } from 'vue';
declare type SizeObject = {
    span?: number;
    offset?: number;
};
declare type Size = number | SizeObject;
export declare const colProps: {
    readonly tag: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "div", unknown, unknown, unknown>;
    readonly span: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, 24, unknown, unknown, unknown>;
    readonly offset: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly pull: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly push: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly xs: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<Size>, () => import("../../../utils/types").Mutable<{}>, unknown, unknown, unknown>;
    readonly sm: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<Size>, () => import("../../../utils/types").Mutable<{}>, unknown, unknown, unknown>;
    readonly md: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<Size>, () => import("../../../utils/types").Mutable<{}>, unknown, unknown, unknown>;
    readonly lg: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<Size>, () => import("../../../utils/types").Mutable<{}>, unknown, unknown, unknown>;
    readonly xl: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<Size>, () => import("../../../utils/types").Mutable<{}>, unknown, unknown, unknown>;
};
export declare type ColProps = ExtractPropTypes<typeof colProps>;
declare const _default: import("vue").DefineComponent<{
    readonly tag: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "div", unknown, unknown, unknown>;
    readonly span: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, 24, unknown, unknown, unknown>;
    readonly offset: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly pull: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly push: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly xs: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<Size>, () => import("../../../utils/types").Mutable<{}>, unknown, unknown, unknown>;
    readonly sm: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<Size>, () => import("../../../utils/types").Mutable<{}>, unknown, unknown, unknown>;
    readonly md: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<Size>, () => import("../../../utils/types").Mutable<{}>, unknown, unknown, unknown>;
    readonly lg: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<Size>, () => import("../../../utils/types").Mutable<{}>, unknown, unknown, unknown>;
    readonly xl: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<Size>, () => import("../../../utils/types").Mutable<{}>, unknown, unknown, unknown>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly tag?: unknown;
    readonly span?: unknown;
    readonly offset?: unknown;
    readonly pull?: unknown;
    readonly push?: unknown;
    readonly xs?: unknown;
    readonly sm?: unknown;
    readonly md?: unknown;
    readonly lg?: unknown;
    readonly xl?: unknown;
} & {
    span: number;
    push: number;
    offset: number;
    tag: string;
    pull: number;
    xs: import("element-plus/es/utils/props").BuildPropType<import("element-plus/es/utils/props").PropWrapper<Size>, unknown, unknown>;
    sm: import("element-plus/es/utils/props").BuildPropType<import("element-plus/es/utils/props").PropWrapper<Size>, unknown, unknown>;
    md: import("element-plus/es/utils/props").BuildPropType<import("element-plus/es/utils/props").PropWrapper<Size>, unknown, unknown>;
    lg: import("element-plus/es/utils/props").BuildPropType<import("element-plus/es/utils/props").PropWrapper<Size>, unknown, unknown>;
    xl: import("element-plus/es/utils/props").BuildPropType<import("element-plus/es/utils/props").PropWrapper<Size>, unknown, unknown>;
} & {}>, {
    span: number;
    push: number;
    offset: number;
    tag: string;
    pull: number;
    xs: import("element-plus/es/utils/props").BuildPropType<import("element-plus/es/utils/props").PropWrapper<Size>, unknown, unknown>;
    sm: import("element-plus/es/utils/props").BuildPropType<import("element-plus/es/utils/props").PropWrapper<Size>, unknown, unknown>;
    md: import("element-plus/es/utils/props").BuildPropType<import("element-plus/es/utils/props").PropWrapper<Size>, unknown, unknown>;
    lg: import("element-plus/es/utils/props").BuildPropType<import("element-plus/es/utils/props").PropWrapper<Size>, unknown, unknown>;
    xl: import("element-plus/es/utils/props").BuildPropType<import("element-plus/es/utils/props").PropWrapper<Size>, unknown, unknown>;
}>;
export default _default;
