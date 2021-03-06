import type { CSSProperties } from 'vue';
declare const _default: import("vue").DefineComponent<{
    readonly customClass: import("../../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly dangerouslyUseHTMLString: import("../../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly duration: import("../../../utils/props").BuildPropReturn<NumberConstructor, 4500, unknown, unknown, unknown>;
    readonly icon: import("../../../utils/props").BuildPropReturn<import("../../../utils/props").PropWrapper<string | Comment>, "", unknown, unknown, unknown>;
    readonly id: import("../../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly message: import("../../../utils/props").BuildPropReturn<import("../../../utils/props").PropWrapper<string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>, "", unknown, unknown, unknown>;
    readonly offset: import("../../../utils/props").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly onClick: import("../../../utils/props").BuildPropReturn<import("../../../utils/props").PropWrapper<() => void>, () => undefined, unknown, unknown, unknown>;
    readonly onClose: import("../../../utils/props").BuildPropReturn<import("../../../utils/props").PropWrapper<() => void>, unknown, true, unknown, unknown>;
    readonly position: import("../../../utils/props").BuildPropReturn<StringConstructor, "top-right", unknown, "top-right" | "top-left" | "bottom-right" | "bottom-left", unknown>;
    readonly showClose: import("../../../utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly title: import("../../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly type: import("../../../utils/props").BuildPropReturn<StringConstructor, "", unknown, "" | "success" | "warning" | "info" | "error", unknown>;
    readonly zIndex: import("../../../utils/props").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
}, {
    horizontalClass: import("vue").ComputedRef<"right" | "left">;
    typeClass: import("vue").ComputedRef<string>;
    iconComponent: import("vue").ComputedRef<any>;
    positionStyle: import("vue").ComputedRef<CSSProperties>;
    visible: import("vue").Ref<boolean>;
    close: () => void;
    clearTimer: () => void;
    startTimer: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    destroy: () => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly customClass?: unknown;
    readonly dangerouslyUseHTMLString?: unknown;
    readonly duration?: unknown;
    readonly icon?: unknown;
    readonly id?: unknown;
    readonly message?: unknown;
    readonly offset?: unknown;
    readonly onClick?: unknown;
    readonly onClose?: unknown;
    readonly position?: unknown;
    readonly showClose?: unknown;
    readonly title?: unknown;
    readonly type?: unknown;
    readonly zIndex?: unknown;
} & {
    type: import("../../../utils/props").BuildPropType<StringConstructor, "" | "success" | "warning" | "info" | "error", unknown>;
    icon: import("../../../utils/props").BuildPropType<import("../../../utils/props").PropWrapper<string | Comment>, unknown, unknown>;
    title: string;
    zIndex: number;
    message: import("../../../utils/props").BuildPropType<import("../../../utils/props").PropWrapper<string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>, unknown, unknown>;
    id: string;
    offset: number;
    position: import("../../../utils/props").BuildPropType<StringConstructor, "top-right" | "top-left" | "bottom-right" | "bottom-left", unknown>;
    onClose: () => void;
    showClose: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    customClass: string;
    duration: number;
    dangerouslyUseHTMLString: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
} & {
    onClick?: (() => void) | undefined;
}> & {
    onDestroy?: (() => any) | undefined;
}, {
    type: import("../../../utils/props").BuildPropType<StringConstructor, "" | "success" | "warning" | "info" | "error", unknown>;
    icon: import("../../../utils/props").BuildPropType<import("../../../utils/props").PropWrapper<string | Comment>, unknown, unknown>;
    title: string;
    zIndex: number;
    message: import("../../../utils/props").BuildPropType<import("../../../utils/props").PropWrapper<string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>, unknown, unknown>;
    id: string;
    offset: number;
    position: import("../../../utils/props").BuildPropType<StringConstructor, "top-right" | "top-left" | "bottom-right" | "bottom-left", unknown>;
    onClick: () => void;
    showClose: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    customClass: string;
    duration: number;
    dangerouslyUseHTMLString: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
}>;
export default _default;
