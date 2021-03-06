declare const _default: import("vue").DefineComponent<{
    manual: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: BooleanConstructor;
        validator: (val: unknown) => boolean;
        default: undefined;
    };
    openDelay: {
        type: NumberConstructor;
        default: number;
    };
    visibleArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    tabindex: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    arrowOffset: {
        type: NumberConstructor;
        default: number;
    };
    appendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoClose: {
        type: NumberConstructor;
        default: number;
    };
    boundariesPadding: {
        type: NumberConstructor;
        default: number;
    };
    content: {
        type: StringConstructor;
        default: string;
    };
    class: {
        type: StringConstructor;
        default: string;
    };
    style: ObjectConstructor;
    hideAfter: {
        type: NumberConstructor;
        default: number;
    };
    cutoff: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    effect: {
        type: import("vue").PropType<import("element-plus/es/components/popper").Effect>;
        default: import("element-plus/es/components/popper").Effect;
    };
    enterable: {
        type: BooleanConstructor;
        default: boolean;
    };
    manualMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    showAfter: {
        type: NumberConstructor;
        default: number;
    };
    offset: {
        type: NumberConstructor;
        default: number;
    };
    placement: {
        type: import("vue").PropType<import("element-plus/es/components/popper").Placement>;
        default: import("element-plus/es/components/popper").Placement;
    };
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    pure: {
        type: BooleanConstructor;
        default: boolean;
    };
    popperOptions: {
        type: import("vue").PropType<Partial<import("element-plus/es/components/popper").Options>>;
        default: () => null;
    };
    showArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    strategy: {
        type: import("vue").PropType<import("@popperjs/core").PositioningStrategy>;
        default: import("@popperjs/core").PositioningStrategy;
    };
    transition: {
        type: StringConstructor;
        default: string;
    };
    trigger: {
        type: import("vue").PropType<import("../../popper/src/use-popper").Trigger>;
        default: string;
    };
    visible: {
        type: BooleanConstructor;
        default: undefined;
    };
    stopPopperMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    gpuAcceleration: {
        type: BooleanConstructor;
        default: boolean;
    };
    fallbackPlacements: {
        type: import("vue").PropType<import("element-plus/es/components/popper").Placement[]>;
        default: never[];
    };
}, {
    popper: import("vue").Ref<null>;
    onUpdateVisible: (val: any) => void;
    updatePopper: () => any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    manual?: unknown;
    modelValue?: unknown;
    openDelay?: unknown;
    visibleArrow?: unknown;
    tabindex?: unknown;
    arrowOffset?: unknown;
    appendToBody?: unknown;
    autoClose?: unknown;
    boundariesPadding?: unknown;
    content?: unknown;
    class?: unknown;
    style?: unknown;
    hideAfter?: unknown;
    cutoff?: unknown;
    disabled?: unknown;
    effect?: unknown;
    enterable?: unknown;
    manualMode?: unknown;
    showAfter?: unknown;
    offset?: unknown;
    placement?: unknown;
    popperClass?: unknown;
    pure?: unknown;
    popperOptions?: unknown;
    showArrow?: unknown;
    strategy?: unknown;
    transition?: unknown;
    trigger?: unknown;
    visible?: unknown;
    stopPopperMouseEvent?: unknown;
    gpuAcceleration?: unknown;
    fallbackPlacements?: unknown;
} & {
    disabled: boolean;
    class: string;
    transition: string;
    placement: import("element-plus/es/components/popper").Placement;
    strategy: import("@popperjs/core").PositioningStrategy;
    manual: boolean;
    autoClose: number;
    content: string;
    hideAfter: number;
    effect: import("element-plus/es/components/popper").Effect;
    enterable: boolean;
    manualMode: boolean;
    showAfter: number;
    pure: boolean;
    showArrow: boolean;
    trigger: import("../../popper/src/use-popper").Trigger;
    stopPopperMouseEvent: boolean;
    appendToBody: boolean;
    arrowOffset: number;
    popperOptions: Partial<import("element-plus/es/components/popper").Options>;
    popperClass: string;
    fallbackPlacements: import("element-plus/es/components/popper").Placement[];
    offset: number;
    gpuAcceleration: boolean;
    boundariesPadding: number;
    cutoff: boolean;
    tabindex: string | number;
    openDelay: number;
    visibleArrow: boolean;
} & {
    modelValue?: boolean | undefined;
    style?: Record<string, any> | undefined;
    visible?: boolean | undefined;
}> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    modelValue: boolean;
    class: string;
    transition: string;
    placement: import("element-plus/es/components/popper").Placement;
    strategy: import("@popperjs/core").PositioningStrategy;
    manual: boolean;
    autoClose: number;
    content: string;
    hideAfter: number;
    effect: import("element-plus/es/components/popper").Effect;
    enterable: boolean;
    manualMode: boolean;
    showAfter: number;
    pure: boolean;
    showArrow: boolean;
    trigger: import("../../popper/src/use-popper").Trigger;
    visible: boolean;
    stopPopperMouseEvent: boolean;
    appendToBody: boolean;
    arrowOffset: number;
    popperOptions: Partial<import("element-plus/es/components/popper").Options>;
    popperClass: string;
    fallbackPlacements: import("element-plus/es/components/popper").Placement[];
    offset: number;
    gpuAcceleration: boolean;
    boundariesPadding: number;
    cutoff: boolean;
    tabindex: string | number;
    openDelay: number;
    visibleArrow: boolean;
}>;
/**
 * ElTooltip
 * Tooltip is essentially an upper layer for Popper, due to popper has already implemented so many functionalities and Popper is essentially a component shared internally
 * Tooltip also does the API translation work for popper.
 * Tooltip shares the exact same API which v2 has, so that the user should be able to
 */
export default _default;
