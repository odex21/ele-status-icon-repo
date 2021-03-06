import type { StyleValue } from 'vue';
declare const _default: import("vue").DefineComponent<{
    readonly height: import("../../../utils/props").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
    readonly maxHeight: import("../../../utils/props").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
    readonly native: import("../../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly wrapStyle: import("../../../utils/props").BuildPropReturn<import("../../../utils/props").PropWrapper<StyleValue>, "", unknown, unknown, unknown>;
    readonly wrapClass: import("../../../utils/props").BuildPropReturn<readonly [StringConstructor, ArrayConstructor], "", unknown, unknown, unknown>;
    readonly viewClass: import("../../../utils/props").BuildPropReturn<readonly [StringConstructor, ArrayConstructor], "", unknown, unknown, unknown>;
    readonly viewStyle: import("../../../utils/props").BuildPropReturn<readonly [StringConstructor, ArrayConstructor], "", unknown, unknown, unknown>;
    readonly noresize: BooleanConstructor;
    readonly tag: import("../../../utils/props").BuildPropReturn<StringConstructor, "div", unknown, unknown, unknown>;
    readonly always: import("../../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly minSize: import("../../../utils/props").BuildPropReturn<NumberConstructor, 20, unknown, unknown, unknown>;
}, {
    scrollbar$: import("vue").Ref<HTMLDivElement | undefined>;
    wrap$: import("vue").Ref<HTMLDivElement | undefined>;
    resize$: import("vue").Ref<HTMLElement | undefined>;
    moveX: import("vue").Ref<number>;
    moveY: import("vue").Ref<number>;
    ratioX: import("vue").Ref<number>;
    ratioY: import("vue").Ref<number>;
    sizeWidth: import("vue").Ref<string>;
    sizeHeight: import("vue").Ref<string>;
    style: import("vue").ComputedRef<StyleValue>;
    update: () => void;
    handleScroll: () => void;
    setScrollTop: (value: number) => void;
    setScrollLeft: (value: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    scroll: ({ scrollTop, scrollLeft, }: {
        scrollTop: number;
        scrollLeft: number;
    }) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly height?: unknown;
    readonly maxHeight?: unknown;
    readonly native?: unknown;
    readonly wrapStyle?: unknown;
    readonly wrapClass?: unknown;
    readonly viewClass?: unknown;
    readonly viewStyle?: unknown;
    readonly noresize?: unknown;
    readonly tag?: unknown;
    readonly always?: unknown;
    readonly minSize?: unknown;
} & {
    height: import("../../../utils/props").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    maxHeight: import("../../../utils/props").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    always: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    native: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    wrapStyle: StyleValue;
    wrapClass: import("../../../utils/props").BuildPropType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
    viewClass: import("../../../utils/props").BuildPropType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
    viewStyle: import("../../../utils/props").BuildPropType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
    tag: string;
    minSize: number;
    noresize: boolean;
} & {}> & {
    onScroll?: ((args_0: {
        scrollTop: number;
        scrollLeft: number;
    }) => any) | undefined;
}, {
    height: import("../../../utils/props").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    maxHeight: import("../../../utils/props").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    always: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    native: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    wrapStyle: StyleValue;
    wrapClass: import("../../../utils/props").BuildPropType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
    viewClass: import("../../../utils/props").BuildPropType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
    viewStyle: import("../../../utils/props").BuildPropType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
    tag: string;
    minSize: number;
    noresize: boolean;
}>;
export default _default;
