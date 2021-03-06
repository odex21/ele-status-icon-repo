declare const _default: import("vue").DefineComponent<{
    readonly size: import("../../../utils/props").BuildPropReturn<StringConstructor, "", false, "" | "small" | "default" | "large", never>;
    readonly disabled: BooleanConstructor;
    readonly modelValue: import("../../../utils/props").BuildPropReturn<readonly [StringConstructor, NumberConstructor, BooleanConstructor], "", unknown, unknown, unknown>;
    readonly fill: import("../../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly textColor: import("../../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
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
    size: import("../../../utils/props").BuildPropType<StringConstructor, "" | "small" | "default" | "large", never>;
    disabled: boolean;
    modelValue: import("../../../utils/props").BuildPropType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>;
    fill: string;
    textColor: string;
} & {}> & {
    "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
    onChange?: ((val: string | number | boolean) => any) | undefined;
}, {
    size: import("../../../utils/props").BuildPropType<StringConstructor, "" | "small" | "default" | "large", never>;
    disabled: boolean;
    modelValue: import("../../../utils/props").BuildPropType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>;
    fill: string;
    textColor: string;
}>;
export default _default;
