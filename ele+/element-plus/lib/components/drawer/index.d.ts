export declare const ElDrawer: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    readonly direction: import("../../utils/props").BuildPropReturn<StringConstructor, "rtl", unknown, "ltr" | "rtl" | "ttb" | "btt", unknown>;
    readonly size: import("../../utils/props").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "30%", unknown, unknown, unknown>;
    readonly withHeader: import("../../utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly modalFade: import("../../utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly appendToBody: import("../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly beforeClose: import("../../utils/props").BuildPropReturn<import("../../utils/props").PropWrapper<(...args: any[]) => void>, unknown, unknown, unknown, unknown>;
    readonly destroyOnClose: import("../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly center: import("../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly customClass: import("../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly closeIcon: import("../../utils/props").BuildPropReturn<import("../../utils/props").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, "", unknown, unknown, unknown>;
    readonly closeOnClickModal: import("../../utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly closeOnPressEscape: import("../../utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly fullscreen: import("../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly lockScroll: import("../../utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly modal: import("../../utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly showClose: import("../../utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly title: import("../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly openDelay: import("../../utils/props").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly closeDelay: import("../../utils/props").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly top: import("../../utils/props").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
    readonly modelValue: import("../../utils/props").BuildPropReturn<BooleanConstructor, unknown, true, unknown, unknown>;
    readonly modalClass: StringConstructor;
    readonly width: import("../../utils/props").BuildPropReturn<readonly [StringConstructor, NumberConstructor], unknown, unknown, unknown, unknown>;
    readonly zIndex: import("../../utils/props").BuildPropReturn<NumberConstructor, unknown, unknown, unknown, unknown>;
}, {
    drawerRef: import("vue").Ref<HTMLElement | undefined>;
    isHorizontal: import("vue").ComputedRef<boolean>;
    drawerSize: import("vue").ComputedRef<string>;
    afterEnter: () => void;
    afterLeave: () => void;
    beforeLeave: () => void;
    handleClose: () => void;
    onModalClick: () => void;
    close: () => void;
    doClose: () => void;
    closed: import("vue").Ref<boolean>;
    style: import("vue").ComputedRef<import("vue").CSSProperties>;
    rendered: import("vue").Ref<boolean>;
    visible: import("vue").Ref<boolean>;
    zIndex: import("vue").Ref<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    open: () => boolean;
    opened: () => boolean;
    close: () => boolean;
    closed: () => boolean;
    "update:modelValue": (value: boolean) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly direction?: unknown;
    readonly size?: unknown;
    readonly withHeader?: unknown;
    readonly modalFade?: unknown;
    readonly appendToBody?: unknown;
    readonly beforeClose?: unknown;
    readonly destroyOnClose?: unknown;
    readonly center?: unknown;
    readonly customClass?: unknown;
    readonly closeIcon?: unknown;
    readonly closeOnClickModal?: unknown;
    readonly closeOnPressEscape?: unknown;
    readonly fullscreen?: unknown;
    readonly lockScroll?: unknown;
    readonly modal?: unknown;
    readonly showClose?: unknown;
    readonly title?: unknown;
    readonly openDelay?: unknown;
    readonly closeDelay?: unknown;
    readonly top?: unknown;
    readonly modelValue?: unknown;
    readonly modalClass?: unknown;
    readonly width?: unknown;
    readonly zIndex?: unknown;
} & {
    size: import("../../utils/props").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    modelValue: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    title: string;
    appendToBody: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    direction: import("../../utils/props").BuildPropType<StringConstructor, "ltr" | "rtl" | "ttb" | "btt", unknown>;
    center: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    showClose: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    destroyOnClose: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    customClass: string;
    closeIcon: import("../../utils/props").BuildPropType<import("../../utils/props").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
    closeOnClickModal: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    closeOnPressEscape: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    fullscreen: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    lockScroll: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    modal: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    openDelay: number;
    closeDelay: number;
    withHeader: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    modalFade: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
} & {
    top?: string | undefined;
    zIndex?: number | undefined;
    width?: import("../../utils/props").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
    beforeClose?: ((...args: any[]) => void) | undefined;
    modalClass?: string | undefined;
}> & {
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onClose?: (() => any) | undefined;
    onOpen?: (() => any) | undefined;
    onOpened?: (() => any) | undefined;
    onClosed?: (() => any) | undefined;
}, {
    size: import("../../utils/props").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    top: string;
    title: string;
    zIndex: number;
    width: import("../../utils/props").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    appendToBody: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    direction: import("../../utils/props").BuildPropType<StringConstructor, "ltr" | "rtl" | "ttb" | "btt", unknown>;
    center: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    showClose: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    beforeClose: (...args: any[]) => void;
    destroyOnClose: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    customClass: string;
    closeIcon: import("../../utils/props").BuildPropType<import("../../utils/props").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
    closeOnClickModal: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    closeOnPressEscape: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    fullscreen: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    lockScroll: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    modal: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    openDelay: number;
    closeDelay: number;
    withHeader: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    modalFade: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
}>> & Record<string, any>;
export default ElDrawer;
export * from './src/drawer';