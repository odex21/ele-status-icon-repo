import { Effect } from 'element-plus/es/components/popper';
import Color from './color';
import type { PropType } from 'vue';
import type { ComponentSize } from 'element-plus/es/utils/types';
declare const _default: import("vue").DefineComponent<{
    modelValue: StringConstructor;
    showAlpha: BooleanConstructor;
    colorFormat: StringConstructor;
    disabled: BooleanConstructor;
    size: {
        type: PropType<ComponentSize>;
        validator: (val: string) => boolean;
    };
    popperClass: StringConstructor;
    predefine: ArrayConstructor;
}, {
    Effect: typeof Effect;
    color: Color;
    colorDisabled: import("vue").ComputedRef<boolean | undefined>;
    colorSize: import("vue").ComputedRef<"" | "medium" | "mini" | ComponentSize>;
    displayedColor: import("vue").ComputedRef<string>;
    showPanelColor: import("vue").Ref<boolean>;
    showPicker: import("vue").Ref<boolean>;
    customInput: import("vue").Ref<string>;
    handleConfirm: () => void;
    hide: () => void;
    handleTrigger: () => void;
    clear: () => void;
    confirmValue: () => void;
    t: import("element-plus/es/hooks").Translator;
    hue: import("vue").Ref<null>;
    svPanel: import("vue").Ref<null>;
    alpha: import("vue").Ref<null>;
    popper: import("vue").Ref<null>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "active-change")[], "update:modelValue" | "change" | "active-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    showAlpha?: unknown;
    colorFormat?: unknown;
    disabled?: unknown;
    size?: unknown;
    popperClass?: unknown;
    predefine?: unknown;
} & {
    disabled: boolean;
    showAlpha: boolean;
} & {
    size?: ComponentSize | undefined;
    modelValue?: string | undefined;
    popperClass?: string | undefined;
    colorFormat?: string | undefined;
    predefine?: unknown[] | undefined;
}> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    "onActive-change"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    showAlpha: boolean;
}>;
export default _default;
