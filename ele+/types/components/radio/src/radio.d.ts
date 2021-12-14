import type { ExtractPropTypes, SetupContext } from 'vue';
export declare const radioPropsBase: {
    size: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "", false, "" | "small" | "default" | "large", never>;
    disabled: BooleanConstructor;
    label: import("element-plus/es/utils/props").BuildPropReturn<(BooleanConstructor | StringConstructor | NumberConstructor)[], string, unknown, unknown, unknown>;
};
export declare const radioProps: {
    readonly modelValue: import("element-plus/es/utils/props").BuildPropReturn<readonly [StringConstructor, NumberConstructor, BooleanConstructor], "", unknown, unknown, unknown>;
    readonly name: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly border: BooleanConstructor;
    readonly size: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "", false, "" | "small" | "default" | "large", never>;
    readonly disabled: BooleanConstructor;
    readonly label: import("element-plus/es/utils/props").BuildPropReturn<(BooleanConstructor | StringConstructor | NumberConstructor)[], string, unknown, unknown, unknown>;
};
export declare type RadioProps = ExtractPropTypes<typeof radioProps>;
export declare const radioEmits: {
    "update:modelValue": (val: string | number | boolean) => boolean;
    change: (val: string | number | boolean) => boolean;
};
export declare type RadioEmits = typeof radioEmits;
export declare const useRadio: (props: {
    label: RadioProps['label'];
    modelValue?: RadioProps['modelValue'];
}, emit: SetupContext<RadioEmits>['emit']) => {
    radioRef: import("vue").Ref<HTMLInputElement | undefined>;
    isGroup: import("vue").ComputedRef<boolean>;
    radioGroup: import("element-plus/es/tokens").RadioGroupContext | undefined;
    focus: import("vue").Ref<boolean>;
    size: import("vue").ComputedRef<"" | "medium" | "mini" | import("../../../utils/types").ComponentSize>;
    disabled: import("vue").ComputedRef<boolean>;
    tabIndex: import("vue").ComputedRef<0 | -1>;
    modelValue: import("vue").WritableComputedRef<import("element-plus/es/utils/props").BuildPropType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>>;
};
