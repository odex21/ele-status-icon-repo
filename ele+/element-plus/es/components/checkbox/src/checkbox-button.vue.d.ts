declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: () => undefined;
    };
    label: {
        type: (BooleanConstructor | ObjectConstructor | StringConstructor | NumberConstructor)[];
    };
    indeterminate: BooleanConstructor;
    disabled: BooleanConstructor;
    checked: BooleanConstructor;
    name: {
        type: StringConstructor;
        default: undefined;
    };
    trueLabel: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    falseLabel: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    tabindex: (StringConstructor | NumberConstructor)[];
    size: StringConstructor;
}, {
    focus: import("vue").Ref<boolean>;
    isChecked: import("vue").ComputedRef<boolean>;
    isDisabled: import("vue").ComputedRef<boolean | undefined>;
    model: import("vue").WritableComputedRef<any>;
    handleChange: (e: InputEvent) => void;
    activeStyle: import("vue").ComputedRef<{
        backgroundColor: string;
        borderColor: string;
        color: string;
        boxShadow: string | null;
    }>;
    size: import("vue").ComputedRef<"" | "medium" | "mini" | import("../../../utils/types").ComponentSize>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    label?: unknown;
    indeterminate?: unknown;
    disabled?: unknown;
    checked?: unknown;
    name?: unknown;
    trueLabel?: unknown;
    falseLabel?: unknown;
    tabindex?: unknown;
    size?: unknown;
} & {
    disabled: boolean;
    indeterminate: boolean;
    checked: boolean;
} & {
    size?: string | undefined;
    name?: string | undefined;
    modelValue?: string | number | boolean | undefined;
    label?: string | number | boolean | Record<string, any> | undefined;
    tabindex?: string | number | undefined;
    trueLabel?: string | number | undefined;
    falseLabel?: string | number | undefined;
}> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    name: string;
    modelValue: string | number | boolean;
    indeterminate: boolean;
    checked: boolean;
    trueLabel: string | number;
    falseLabel: string | number;
}>;
export default _default;
