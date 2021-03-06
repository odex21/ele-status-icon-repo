export declare const ElRadio: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    readonly modelValue: import("../../utils/props").BuildPropReturn<readonly [StringConstructor, NumberConstructor, BooleanConstructor], "", unknown, unknown, unknown>;
    readonly name: import("../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly border: BooleanConstructor;
    readonly size: import("../../utils/props").BuildPropReturn<StringConstructor, "", false, "" | "small" | "default" | "large", never>;
    readonly disabled: BooleanConstructor;
    readonly label: import("../../utils/props").BuildPropReturn<(BooleanConstructor | StringConstructor | NumberConstructor)[], string, unknown, unknown, unknown>;
}, {
    focus: import("vue").Ref<boolean>;
    isGroup: import("vue").ComputedRef<boolean>;
    modelValue: import("vue").WritableComputedRef<import("../../utils/props").BuildPropType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>>;
    tabIndex: import("vue").ComputedRef<0 | -1>;
    size: import("vue").ComputedRef<"" | "medium" | "mini" | import("../../utils/types").ComponentSize>;
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
    size: import("../../utils/props").BuildPropType<StringConstructor, "" | "small" | "default" | "large", never>;
    disabled: boolean;
    name: string;
    modelValue: import("../../utils/props").BuildPropType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>;
    label: import("../../utils/props").BuildPropType<(BooleanConstructor | StringConstructor | NumberConstructor)[], unknown, unknown>;
    border: boolean;
} & {}> & {
    "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
    onChange?: ((val: string | number | boolean) => any) | undefined;
}, {
    size: import("../../utils/props").BuildPropType<StringConstructor, "" | "small" | "default" | "large", never>;
    disabled: boolean;
    name: string;
    modelValue: import("../../utils/props").BuildPropType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>;
    label: import("../../utils/props").BuildPropType<(BooleanConstructor | StringConstructor | NumberConstructor)[], unknown, unknown>;
    border: boolean;
}>> & {
    RadioButton: import("vue").DefineComponent<{
        readonly name: import("../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly size: import("../../utils/props").BuildPropReturn<StringConstructor, "", false, "" | "small" | "default" | "large", never>;
        readonly disabled: BooleanConstructor;
        readonly label: import("../../utils/props").BuildPropReturn<(BooleanConstructor | StringConstructor | NumberConstructor)[], string, unknown, unknown, unknown>;
    }, {
        isGroup: import("vue").ComputedRef<boolean>;
        size: import("vue").ComputedRef<"" | "medium" | "mini" | import("../../utils/types").ComponentSize>;
        disabled: import("vue").ComputedRef<boolean>;
        tabIndex: import("vue").ComputedRef<0 | -1>;
        modelValue: import("vue").WritableComputedRef<import("../../utils/props").BuildPropType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>>;
        focus: import("vue").Ref<boolean>;
        activeStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
        radioRef: import("vue").Ref<HTMLInputElement | undefined>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        readonly name?: unknown;
        readonly size?: unknown;
        readonly disabled?: unknown;
        readonly label?: unknown;
    } & {
        size: import("../../utils/props").BuildPropType<StringConstructor, "" | "small" | "default" | "large", never>;
        disabled: boolean;
        name: string;
        label: import("../../utils/props").BuildPropType<(BooleanConstructor | StringConstructor | NumberConstructor)[], unknown, unknown>;
    } & {}>, {
        size: import("../../utils/props").BuildPropType<StringConstructor, "" | "small" | "default" | "large", never>;
        disabled: boolean;
        name: string;
        label: import("../../utils/props").BuildPropType<(BooleanConstructor | StringConstructor | NumberConstructor)[], unknown, unknown>;
    }>;
    RadioGroup: import("vue").DefineComponent<{
        readonly size: import("../../utils/props").BuildPropReturn<StringConstructor, "", false, "" | "small" | "default" | "large", never>;
        readonly disabled: BooleanConstructor;
        readonly modelValue: import("../../utils/props").BuildPropReturn<readonly [StringConstructor, NumberConstructor, BooleanConstructor], "", unknown, unknown, unknown>;
        readonly fill: import("../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly textColor: import("../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    }, {
        radioGroupRef: import("vue").Ref<HTMLDivElement | undefined>;
        handleKeydown: (e: KeyboardEvent) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (val: string | number | boolean) => boolean;
        change: (val: string | number | boolean) => boolean;
    }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        readonly size?: unknown;
        readonly disabled?: unknown;
        readonly modelValue?: unknown;
        readonly fill?: unknown;
        readonly textColor?: unknown;
    } & {
        size: import("../../utils/props").BuildPropType<StringConstructor, "" | "small" | "default" | "large", never>;
        disabled: boolean;
        modelValue: import("../../utils/props").BuildPropType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>;
        fill: string;
        textColor: string;
    } & {}> & {
        "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
        onChange?: ((val: string | number | boolean) => any) | undefined;
    }, {
        size: import("../../utils/props").BuildPropType<StringConstructor, "" | "small" | "default" | "large", never>;
        disabled: boolean;
        modelValue: import("../../utils/props").BuildPropType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>;
        fill: string;
        textColor: string;
    }>;
};
export default ElRadio;
export declare const ElRadioGroup: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    readonly size: import("../../utils/props").BuildPropReturn<StringConstructor, "", false, "" | "small" | "default" | "large", never>;
    readonly disabled: BooleanConstructor;
    readonly modelValue: import("../../utils/props").BuildPropReturn<readonly [StringConstructor, NumberConstructor, BooleanConstructor], "", unknown, unknown, unknown>;
    readonly fill: import("../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly textColor: import("../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
}, {
    radioGroupRef: import("vue").Ref<HTMLDivElement | undefined>;
    handleKeydown: (e: KeyboardEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (val: string | number | boolean) => boolean;
    change: (val: string | number | boolean) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly size?: unknown;
    readonly disabled?: unknown;
    readonly modelValue?: unknown;
    readonly fill?: unknown;
    readonly textColor?: unknown;
} & {
    size: import("../../utils/props").BuildPropType<StringConstructor, "" | "small" | "default" | "large", never>;
    disabled: boolean;
    modelValue: import("../../utils/props").BuildPropType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>;
    fill: string;
    textColor: string;
} & {}> & {
    "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
    onChange?: ((val: string | number | boolean) => any) | undefined;
}, {
    size: import("../../utils/props").BuildPropType<StringConstructor, "" | "small" | "default" | "large", never>;
    disabled: boolean;
    modelValue: import("../../utils/props").BuildPropType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>;
    fill: string;
    textColor: string;
}>>;
export declare const ElRadioButton: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    readonly name: import("../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly size: import("../../utils/props").BuildPropReturn<StringConstructor, "", false, "" | "small" | "default" | "large", never>;
    readonly disabled: BooleanConstructor;
    readonly label: import("../../utils/props").BuildPropReturn<(BooleanConstructor | StringConstructor | NumberConstructor)[], string, unknown, unknown, unknown>;
}, {
    isGroup: import("vue").ComputedRef<boolean>;
    size: import("vue").ComputedRef<"" | "medium" | "mini" | import("../../utils/types").ComponentSize>;
    disabled: import("vue").ComputedRef<boolean>;
    tabIndex: import("vue").ComputedRef<0 | -1>;
    modelValue: import("vue").WritableComputedRef<import("../../utils/props").BuildPropType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>>;
    focus: import("vue").Ref<boolean>;
    activeStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    radioRef: import("vue").Ref<HTMLInputElement | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly name?: unknown;
    readonly size?: unknown;
    readonly disabled?: unknown;
    readonly label?: unknown;
} & {
    size: import("../../utils/props").BuildPropType<StringConstructor, "" | "small" | "default" | "large", never>;
    disabled: boolean;
    name: string;
    label: import("../../utils/props").BuildPropType<(BooleanConstructor | StringConstructor | NumberConstructor)[], unknown, unknown>;
} & {}>, {
    size: import("../../utils/props").BuildPropType<StringConstructor, "" | "small" | "default" | "large", never>;
    disabled: boolean;
    name: string;
    label: import("../../utils/props").BuildPropType<(BooleanConstructor | StringConstructor | NumberConstructor)[], unknown, unknown>;
}>>;
export * from './src/radio';
export * from './src/radio-group';
export * from './src/radio-button';
