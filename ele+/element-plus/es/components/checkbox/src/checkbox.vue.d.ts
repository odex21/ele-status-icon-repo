import type { PropType } from 'vue';
import type { ComponentSize } from 'element-plus/es/utils/types';
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
        type: PropType<ComponentSize>;
        validator: (val: string) => boolean;
    };
    tabindex: (StringConstructor | NumberConstructor)[];
}, {
    isChecked: import("vue").ComputedRef<boolean>;
    isDisabled: import("vue").ComputedRef<boolean | undefined>;
    checkboxSize: import("vue").ComputedRef<"" | "medium" | "mini" | ComponentSize>;
    model: import("vue").WritableComputedRef<any>;
    handleChange: (e: InputEvent) => void;
    focus: import("vue").Ref<boolean>;
    size: import("vue").ComputedRef<"" | "medium" | "mini" | ComponentSize>;
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
    size?: ComponentSize | undefined;
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
}>;
export default _default;
