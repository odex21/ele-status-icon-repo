import type { CSSProperties } from 'vue';
declare const _default: import("vue").DefineComponent<{
    readonly zIndex: import("../../../utils/props").BuildPropReturn<import("../../../utils/props").PropWrapper<import("csstype").ZIndexProperty>, 100, unknown, unknown, unknown>;
    readonly target: import("../../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly offset: import("../../../utils/props").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly position: import("../../../utils/props").BuildPropReturn<StringConstructor, "top", unknown, "top" | "bottom", unknown>;
}, {
    root: import("@vue/reactivity").ShallowRef<HTMLDivElement | undefined>;
    state: {
        fixed: boolean;
        height: number;
        width: number;
        scrollTop: number;
        clientHeight: number;
        transform: number;
    };
    rootStyle: import("vue").ComputedRef<CSSProperties>;
    affixStyle: import("vue").ComputedRef<CSSProperties | undefined>;
    update: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    scroll: ({ scrollTop, fixed }: {
        scrollTop: number;
        fixed: boolean;
    }) => boolean;
    change: (fixed: boolean) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly zIndex?: unknown;
    readonly target?: unknown;
    readonly offset?: unknown;
    readonly position?: unknown;
} & {
    zIndex: import("../../../utils/props").BuildPropType<import("../../../utils/props").PropWrapper<import("csstype").ZIndexProperty>, unknown, unknown>;
    target: string;
    offset: number;
    position: import("../../../utils/props").BuildPropType<StringConstructor, "top" | "bottom", unknown>;
} & {}> & {
    onChange?: ((fixed: boolean) => any) | undefined;
    onScroll?: ((args_0: {
        scrollTop: number;
        fixed: boolean;
    }) => any) | undefined;
}, {
    zIndex: import("../../../utils/props").BuildPropType<import("../../../utils/props").PropWrapper<import("csstype").ZIndexProperty>, unknown, unknown>;
    target: string;
    offset: number;
    position: import("../../../utils/props").BuildPropType<StringConstructor, "top" | "bottom", unknown>;
}>;
export default _default;
