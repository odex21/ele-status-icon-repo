declare const _default: import("vue").DefineComponent<{
    readonly modelValue: import("../../../utils/props").BuildPropReturn<readonly [StringConstructor, NumberConstructor, BooleanConstructor], "", unknown, unknown, unknown>;
    readonly name: import("../../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly border: BooleanConstructor;
    readonly size: import("../../../utils/props").BuildPropReturn<StringConstructor, "", false, "" | "small" | "default" | "large", never>;
    readonly disabled: BooleanConstructor;
    readonly label: import("../../../utils/props").BuildPropReturn<(BooleanConstructor | StringConstructor | NumberConstructor)[], string, unknown, unknown, unknown>;
}, {
    focus: import("vue").Ref<boolean>;
    isGroup: import("vue").ComputedRef<boolean>;
    modelValue: import("vue").WritableComputedRef<import("../../../utils/props").BuildPropType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>>;
    tabIndex: import("vue").ComputedRef<0 | -1>;
    size: import("vue").ComputedRef<"" | "medium" | "mini" | import("../../../utils/types").ComponentSize>;
    disabled: import("vue").ComputedRef<boolean>;
    radioRef: import("vue").Ref<HTMLInputElement | undefined>;
    handleChange: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (val: string | number | boolean) => boolean;
    change: (val: string | number | boolean) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly modelValue?: unknown;
    readonly name?: unknown;
    readonly border?: unknown;
    readonly size?: unknown;
    readonly disabled?: unknown;
    readonly label?: unknown;
} & {
    size: import("../../../utils/props").BuildPropType<StringConstructor, "" | "small" | "default" | "large", never>;
    disabled: boolean;
    name: string;
    modelValue: import("../../../utils/props").BuildPropType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>;
    label: import("../../../utils/props").BuildPropType<(BooleanConstructor | StringConstructor | NumberConstructor)[], unknown, unknown>;
    border: boolean;
} & {}> & {
    "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
    onChange?: ((val: string | number | boolean) => any) | undefined;
}, {
    size: import("../../../utils/props").BuildPropType<StringConstructor, "" | "small" | "default" | "large", never>;
    disabled: boolean;
    name: string;
    modelValue: import("../../../utils/props").BuildPropType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>;
    label: import("../../../utils/props").BuildPropType<(BooleanConstructor | StringConstructor | NumberConstructor)[], unknown, unknown>;
    border: boolean;
}>;
export default _default;
