import type { SFCWithInstall } from 'element-plus/es/utils/types';
declare const _PopoverDirective: SFCWithInstall<import("vue").ObjectDirective<any, any>>;
declare const _Popover: SFCWithInstall<import("vue").DefineComponent<{
    content: {
        type: StringConstructor;
    };
    trigger: {
        type: import("vue").PropType<import("..").TriggerType>;
        default: string;
    };
    title: {
        type: StringConstructor;
    };
    transition: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    appendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    tabindex: (StringConstructor | NumberConstructor)[];
    arrowOffset: {
        type: NumberConstructor;
        default: number;
    };
    autoClose: {
        type: NumberConstructor;
        default: number;
    };
    boundariesPadding: {
        type: NumberConstructor;
        default: number;
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
        type: import("vue").PropType<import("..").Effect>;
        default: import("..").Effect;
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
        type: import("vue").PropType<import("@popperjs/core").Placement>;
        default: import("@popperjs/core").Placement;
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
        type: import("vue").PropType<Partial<import("@popperjs/core").Options>>;
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
        type: import("vue").PropType<import("@popperjs/core").Placement[]>;
        default: never[];
    };
}, {
    popperStyle: import("vue").ComputedRef<{
        width: string;
        zIndex: number;
    }>;
    update: () => void;
    doDestroy: (forceDestroy?: boolean | undefined) => void;
    show: () => void;
    hide: () => void;
    onPopperMouseEnter: () => void;
    onPopperMouseLeave: () => void;
    onAfterEnter: () => void;
    onAfterLeave: () => void;
    onBeforeEnter: () => void;
    onBeforeLeave: () => void;
    initializePopper: () => void;
    isManualMode: () => boolean;
    arrowRef: import("vue").Ref<import("../popper/src/use-popper").RefElement>;
    events: import("../popper/src/use-popper").PopperEvents;
    popperId: string;
    popperInstance: null;
    popperRef: import("vue").Ref<import("../popper/src/use-popper").RefElement>;
    triggerRef: import("vue").Ref<import("../popper/src/use-popper").ElementType>;
    visibility: import("vue").WritableComputedRef<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    content?: unknown;
    trigger?: unknown;
    title?: unknown;
    transition?: unknown;
    width?: unknown;
    appendToBody?: unknown;
    tabindex?: unknown;
    arrowOffset?: unknown;
    autoClose?: unknown;
    boundariesPadding?: unknown;
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
    visible?: unknown;
    stopPopperMouseEvent?: unknown;
    gpuAcceleration?: unknown;
    fallbackPlacements?: unknown;
} & {
    disabled: boolean;
    class: string;
    width: string | number;
    transition: string;
    placement: import("@popperjs/core").Placement;
    strategy: import("@popperjs/core").PositioningStrategy;
    autoClose: number;
    hideAfter: number;
    effect: import("..").Effect;
    enterable: boolean;
    manualMode: boolean;
    showAfter: number;
    pure: boolean;
    showArrow: boolean;
    trigger: import("..").TriggerType;
    stopPopperMouseEvent: boolean;
    appendToBody: boolean;
    arrowOffset: number;
    popperOptions: Partial<import("@popperjs/core").Options>;
    popperClass: string;
    fallbackPlacements: import("@popperjs/core").Placement[];
    offset: number;
    gpuAcceleration: boolean;
    boundariesPadding: number;
    cutoff: boolean;
} & {
    style?: Record<string, any> | undefined;
    title?: string | undefined;
    content?: string | undefined;
    visible?: boolean | undefined;
    tabindex?: string | number | undefined;
}> & {
    [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    class: string;
    width: string | number;
    transition: string;
    placement: import("@popperjs/core").Placement;
    strategy: import("@popperjs/core").PositioningStrategy;
    autoClose: number;
    hideAfter: number;
    effect: import("..").Effect;
    enterable: boolean;
    manualMode: boolean;
    showAfter: number;
    pure: boolean;
    showArrow: boolean;
    trigger: import("..").TriggerType;
    visible: boolean;
    stopPopperMouseEvent: boolean;
    appendToBody: boolean;
    arrowOffset: number;
    popperOptions: Partial<import("@popperjs/core").Options>;
    popperClass: string;
    fallbackPlacements: import("@popperjs/core").Placement[];
    offset: number;
    gpuAcceleration: boolean;
    boundariesPadding: number;
    cutoff: boolean;
}>> & {
    directive: typeof _PopoverDirective;
};
export default _Popover;
export declare const ElPopover: SFCWithInstall<import("vue").DefineComponent<{
    content: {
        type: StringConstructor;
    };
    trigger: {
        type: import("vue").PropType<import("..").TriggerType>;
        default: string;
    };
    title: {
        type: StringConstructor;
    };
    transition: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    appendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    tabindex: (StringConstructor | NumberConstructor)[];
    arrowOffset: {
        type: NumberConstructor;
        default: number;
    };
    autoClose: {
        type: NumberConstructor;
        default: number;
    };
    boundariesPadding: {
        type: NumberConstructor;
        default: number;
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
        type: import("vue").PropType<import("..").Effect>;
        default: import("..").Effect;
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
        type: import("vue").PropType<import("@popperjs/core").Placement>;
        default: import("@popperjs/core").Placement;
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
        type: import("vue").PropType<Partial<import("@popperjs/core").Options>>;
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
        type: import("vue").PropType<import("@popperjs/core").Placement[]>;
        default: never[];
    };
}, {
    popperStyle: import("vue").ComputedRef<{
        width: string;
        zIndex: number;
    }>;
    update: () => void;
    doDestroy: (forceDestroy?: boolean | undefined) => void;
    show: () => void;
    hide: () => void;
    onPopperMouseEnter: () => void;
    onPopperMouseLeave: () => void;
    onAfterEnter: () => void;
    onAfterLeave: () => void;
    onBeforeEnter: () => void;
    onBeforeLeave: () => void;
    initializePopper: () => void;
    isManualMode: () => boolean;
    arrowRef: import("vue").Ref<import("../popper/src/use-popper").RefElement>;
    events: import("../popper/src/use-popper").PopperEvents;
    popperId: string;
    popperInstance: null;
    popperRef: import("vue").Ref<import("../popper/src/use-popper").RefElement>;
    triggerRef: import("vue").Ref<import("../popper/src/use-popper").ElementType>;
    visibility: import("vue").WritableComputedRef<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    content?: unknown;
    trigger?: unknown;
    title?: unknown;
    transition?: unknown;
    width?: unknown;
    appendToBody?: unknown;
    tabindex?: unknown;
    arrowOffset?: unknown;
    autoClose?: unknown;
    boundariesPadding?: unknown;
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
    visible?: unknown;
    stopPopperMouseEvent?: unknown;
    gpuAcceleration?: unknown;
    fallbackPlacements?: unknown;
} & {
    disabled: boolean;
    class: string;
    width: string | number;
    transition: string;
    placement: import("@popperjs/core").Placement;
    strategy: import("@popperjs/core").PositioningStrategy;
    autoClose: number;
    hideAfter: number;
    effect: import("..").Effect;
    enterable: boolean;
    manualMode: boolean;
    showAfter: number;
    pure: boolean;
    showArrow: boolean;
    trigger: import("..").TriggerType;
    stopPopperMouseEvent: boolean;
    appendToBody: boolean;
    arrowOffset: number;
    popperOptions: Partial<import("@popperjs/core").Options>;
    popperClass: string;
    fallbackPlacements: import("@popperjs/core").Placement[];
    offset: number;
    gpuAcceleration: boolean;
    boundariesPadding: number;
    cutoff: boolean;
} & {
    style?: Record<string, any> | undefined;
    title?: string | undefined;
    content?: string | undefined;
    visible?: boolean | undefined;
    tabindex?: string | number | undefined;
}> & {
    [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    class: string;
    width: string | number;
    transition: string;
    placement: import("@popperjs/core").Placement;
    strategy: import("@popperjs/core").PositioningStrategy;
    autoClose: number;
    hideAfter: number;
    effect: import("..").Effect;
    enterable: boolean;
    manualMode: boolean;
    showAfter: number;
    pure: boolean;
    showArrow: boolean;
    trigger: import("..").TriggerType;
    visible: boolean;
    stopPopperMouseEvent: boolean;
    appendToBody: boolean;
    arrowOffset: number;
    popperOptions: Partial<import("@popperjs/core").Options>;
    popperClass: string;
    fallbackPlacements: import("@popperjs/core").Placement[];
    offset: number;
    gpuAcceleration: boolean;
    boundariesPadding: number;
    cutoff: boolean;
}>> & {
    directive: typeof _PopoverDirective;
};
export declare const ElPopoverDirective: SFCWithInstall<import("vue").ObjectDirective<any, any>>;
