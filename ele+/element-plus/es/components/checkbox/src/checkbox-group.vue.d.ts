import type { PropType } from 'vue';
import type { ComponentSize } from 'element-plus/es/utils/types';
declare const _default: import("vue").DefineComponent<{
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
        type: PropType<ComponentSize>;
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
    size?: ComponentSize | undefined;
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
export default _default;
