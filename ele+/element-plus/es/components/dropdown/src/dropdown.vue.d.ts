import { Effect } from 'element-plus/es/components/popper';
import type { Placement } from 'element-plus/es/components/popper';
import type { PropType, ComponentPublicInstance, CSSProperties } from 'vue';
import type { TriggerType } from 'element-plus/es/hooks/use-popper/use-target-events';
declare type Nullable<T> = null | T;
declare const _default: import("vue").DefineComponent<{
    trigger: {
        type: PropType<"contextmenu" | TriggerType>;
        default: string;
    };
    type: PropType<ButtonType>;
    size: {
        type: StringConstructor;
        default: string;
    };
    splitButton: BooleanConstructor;
    hideOnClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    placement: {
        type: PropType<Placement>;
        default: string;
    };
    showTimeout: {
        type: NumberConstructor;
        default: number;
    };
    hideTimeout: {
        type: NumberConstructor;
        default: number;
    };
    tabindex: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    effect: {
        type: PropType<Effect>;
        default: Effect;
    };
    maxHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
}, {
    visible: import("vue").Ref<boolean>;
    scrollbar: import("vue").Ref<null>;
    wrapStyle: import("vue").ComputedRef<CSSProperties>;
    dropdownSize: import("vue").ComputedRef<"" | "medium" | "mini" | import("../../../utils/types").ComponentSize>;
    handlerMainButtonClick: (event: any) => void;
    triggerVnode: import("vue").Ref<Nullable<ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>>>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "visible-change" | "command")[], "click" | "visible-change" | "command", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    trigger?: unknown;
    type?: unknown;
    size?: unknown;
    splitButton?: unknown;
    hideOnClick?: unknown;
    placement?: unknown;
    showTimeout?: unknown;
    hideTimeout?: unknown;
    tabindex?: unknown;
    effect?: unknown;
    maxHeight?: unknown;
} & {
    size: string;
    placement: Placement;
    effect: Effect;
    trigger: "contextmenu" | TriggerType;
    maxHeight: string | number;
    tabindex: string | number;
    splitButton: boolean;
    hideOnClick: boolean;
    showTimeout: number;
    hideTimeout: number;
} & {
    type?: any;
}> & {
    onClick?: ((...args: any[]) => any) | undefined;
    "onVisible-change"?: ((...args: any[]) => any) | undefined;
    onCommand?: ((...args: any[]) => any) | undefined;
}, {
    size: string;
    placement: Placement;
    effect: Effect;
    trigger: "contextmenu" | TriggerType;
    maxHeight: string | number;
    tabindex: string | number;
    splitButton: boolean;
    hideOnClick: boolean;
    showTimeout: number;
    hideTimeout: number;
}>;
export default _default;
