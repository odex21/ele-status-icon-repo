export declare const ElCheckbox: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
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
    id: {
        type: StringConstructor;
        default: undefined;
    };
    controls: {
        type: StringConstructor;
        default: undefined;
    };
    border: BooleanConstructor;
    size: {
        type: import("vue").PropType<import("../../utils/types").ComponentSize>;
        validator: (val: string) => boolean;
    };
    tabindex: (StringConstructor | NumberConstructor)[];
}, {
    isChecked: import("vue").ComputedRef<boolean>;
    isDisabled: import("vue").ComputedRef<boolean | undefined>;
    checkboxSize: import("vue").ComputedRef<"" | "medium" | "mini" | import("../../utils/types").ComponentSize>;
    model: import("vue").WritableComputedRef<any>;
    handleChange: (e: InputEvent) => void;
    focus: import("vue").Ref<boolean>;
    size: import("vue").ComputedRef<"" | "medium" | "mini" | import("../../utils/types").ComponentSize>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    label?: unknown;
    indeterminate?: unknown;
    disabled?: unknown;
    checked?: unknown;
    name?: unknown;
    trueLabel?: unknown;
    falseLabel?: unknown;
    id?: unknown;
    controls?: unknown;
    border?: unknown;
    size?: unknown;
    tabindex?: unknown;
} & {
    disabled: boolean;
    border: boolean;
    indeterminate: boolean;
    checked: boolean;
} & {
    size?: import("../../utils/types").ComponentSize | undefined;
    name?: string | undefined;
    modelValue?: string | number | boolean | undefined;
    label?: string | number | boolean | Record<string, any> | undefined;
    id?: string | undefined;
    tabindex?: string | number | undefined;
    trueLabel?: string | number | undefined;
    falseLabel?: string | number | undefined;
    controls?: string | undefined;
}> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    name: string;
    modelValue: string | number | boolean;
    id: string;
    border: boolean;
    indeterminate: boolean;
    checked: boolean;
    trueLabel: string | number;
    falseLabel: string | number;
    controls: string;
}>> & {
    CheckboxButton: import("vue").DefineComponent<{
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
        size: import("vue").ComputedRef<"" | "medium" | "mini" | import("../../utils/types").ComponentSize>;
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
    CheckboxGroup: import("vue").DefineComponent<{
        modelValue: {
            type: (BooleanConstructor | ObjectConstructor | ArrayConstructor)[];
            default: () => undefined;
        };
        disabled: BooleanConstructor;
        min: {
            type: NumberConstructor;
            default: undefined;
        };
        max: {
            type: NumberConstructor;
            default: undefined;
        };
        size: {
            type: import("vue").PropType<import("../../utils/types").ComponentSize>;
            validator: (val: string) => boolean;
        };
        fill: {
            type: StringConstructor;
            default: undefined;
        };
        textColor: {
            type: StringConstructor;
            default: undefined;
        };
    }, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        modelValue?: unknown;
        disabled?: unknown;
        min?: unknown;
        max?: unknown;
        size?: unknown;
        fill?: unknown;
        textColor?: unknown;
    } & {
        disabled: boolean;
    } & {
        size?: import("../../utils/types").ComponentSize | undefined;
        modelValue?: boolean | unknown[] | Record<string, any> | undefined;
        fill?: string | undefined;
        textColor?: string | undefined;
        max?: number | undefined;
        min?: number | undefined;
    }> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onChange?: ((...args: any[]) => any) | undefined;
    }, {
        disabled: boolean;
        modelValue: boolean | unknown[] | Record<string, any>;
        fill: string;
        textColor: string;
        max: number;
        min: number;
    }>;
};
export default ElCheckbox;
export declare const ElCheckboxButton: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
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
    size: import("vue").ComputedRef<"" | "medium" | "mini" | import("../../utils/types").ComponentSize>;
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
}>>;
export declare const ElCheckboxGroup: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    modelValue: {
        type: (BooleanConstructor | ObjectConstructor | ArrayConstructor)[];
        default: () => undefined;
    };
    disabled: BooleanConstructor;
    min: {
        type: NumberConstructor;
        default: undefined;
    };
    max: {
        type: NumberConstructor;
        default: undefined;
    };
    size: {
        type: import("vue").PropType<import("../../utils/types").ComponentSize>;
        validator: (val: string) => boolean;
    };
    fill: {
        type: StringConstructor;
        default: undefined;
    };
    textColor: {
        type: StringConstructor;
        default: undefined;
    };
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    disabled?: unknown;
    min?: unknown;
    max?: unknown;
    size?: unknown;
    fill?: unknown;
    textColor?: unknown;
} & {
    disabled: boolean;
} & {
    size?: import("../../utils/types").ComponentSize | undefined;
    modelValue?: boolean | unknown[] | Record<string, any> | undefined;
    fill?: string | undefined;
    textColor?: string | undefined;
    max?: number | undefined;
    min?: number | undefined;
}> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    modelValue: boolean | unknown[] | Record<string, any>;
    fill: string;
    textColor: string;
    max: number;
    min: number;
}>>;
