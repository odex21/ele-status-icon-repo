import type { SFCWithInstall } from 'element-plus/es/utils/types';
declare const _TimeSelect: SFCWithInstall<import("vue").DefineComponent<{
    modelValue: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    editable: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<import("element-plus/es/utils/types").ComponentSize>;
        default: string;
        validator: (value: string) => boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    start: {
        type: StringConstructor;
        default: string;
    };
    end: {
        type: StringConstructor;
        default: string;
    };
    step: {
        type: StringConstructor;
        default: string;
    };
    minTime: {
        type: StringConstructor;
        default: string;
    };
    maxTime: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    prefixIcon: {
        type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{}>, {}>;
    };
    clearIcon: {
        type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{}>, {}>;
    };
}, {
    select: import("vue").Ref<null>;
    value: import("vue").ComputedRef<string | undefined>;
    items: import("vue").ComputedRef<never[]>;
    blur: () => void;
    focus: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "blur" | "focus")[], "update:modelValue" | "change" | "blur" | "focus", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    disabled?: unknown;
    editable?: unknown;
    clearable?: unknown;
    size?: unknown;
    placeholder?: unknown;
    start?: unknown;
    end?: unknown;
    step?: unknown;
    minTime?: unknown;
    maxTime?: unknown;
    name?: unknown;
    prefixIcon?: unknown;
    clearIcon?: unknown;
} & {
    size: import("element-plus/es/utils/types").ComponentSize;
    disabled: boolean;
    name: string;
    editable: boolean;
    placeholder: string;
    end: string;
    start: string;
    clearable: boolean;
    prefixIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    clearIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    step: string;
    minTime: string;
    maxTime: string;
} & {
    modelValue?: string | undefined;
}> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    size: import("element-plus/es/utils/types").ComponentSize;
    disabled: boolean;
    name: string;
    editable: boolean;
    placeholder: string;
    end: string;
    start: string;
    clearable: boolean;
    prefixIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    clearIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    step: string;
    minTime: string;
    maxTime: string;
}>>;
export default _TimeSelect;
export declare const ElTimeSelect: SFCWithInstall<import("vue").DefineComponent<{
    modelValue: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    editable: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<import("element-plus/es/utils/types").ComponentSize>;
        default: string;
        validator: (value: string) => boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    start: {
        type: StringConstructor;
        default: string;
    };
    end: {
        type: StringConstructor;
        default: string;
    };
    step: {
        type: StringConstructor;
        default: string;
    };
    minTime: {
        type: StringConstructor;
        default: string;
    };
    maxTime: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    prefixIcon: {
        type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{}>, {}>;
    };
    clearIcon: {
        type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{}>, {}>;
    };
}, {
    select: import("vue").Ref<null>;
    value: import("vue").ComputedRef<string | undefined>;
    items: import("vue").ComputedRef<never[]>;
    blur: () => void;
    focus: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "blur" | "focus")[], "update:modelValue" | "change" | "blur" | "focus", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    disabled?: unknown;
    editable?: unknown;
    clearable?: unknown;
    size?: unknown;
    placeholder?: unknown;
    start?: unknown;
    end?: unknown;
    step?: unknown;
    minTime?: unknown;
    maxTime?: unknown;
    name?: unknown;
    prefixIcon?: unknown;
    clearIcon?: unknown;
} & {
    size: import("element-plus/es/utils/types").ComponentSize;
    disabled: boolean;
    name: string;
    editable: boolean;
    placeholder: string;
    end: string;
    start: string;
    clearable: boolean;
    prefixIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    clearIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    step: string;
    minTime: string;
    maxTime: string;
} & {
    modelValue?: string | undefined;
}> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    size: import("element-plus/es/utils/types").ComponentSize;
    disabled: boolean;
    name: string;
    editable: boolean;
    placeholder: string;
    end: string;
    start: string;
    clearable: boolean;
    prefixIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    clearIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    step: string;
    minTime: string;
    maxTime: string;
}>>;
