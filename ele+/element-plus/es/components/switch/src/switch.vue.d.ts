declare const _default: import("vue").DefineComponent<{
    readonly modelValue: import("../../../utils/props").BuildPropReturn<readonly [BooleanConstructor, StringConstructor, NumberConstructor], false, unknown, unknown, unknown>;
    readonly value: import("../../../utils/props").BuildPropReturn<readonly [BooleanConstructor, StringConstructor, NumberConstructor], false, unknown, unknown, unknown>;
    readonly disabled: import("../../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly width: import("../../../utils/props").BuildPropReturn<NumberConstructor, 40, unknown, unknown, unknown>;
    readonly inlinePrompt: import("../../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly activeIcon: import("../../../utils/props").BuildPropReturn<import("../../../utils/props").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, "", unknown, unknown, unknown>;
    readonly inactiveIcon: import("../../../utils/props").BuildPropReturn<import("../../../utils/props").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, "", unknown, unknown, unknown>;
    readonly activeText: import("../../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly inactiveText: import("../../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly activeColor: import("../../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly inactiveColor: import("../../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly borderColor: import("../../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly activeValue: import("../../../utils/props").BuildPropReturn<readonly [BooleanConstructor, StringConstructor, NumberConstructor], true, unknown, unknown, unknown>;
    readonly inactiveValue: import("../../../utils/props").BuildPropReturn<readonly [BooleanConstructor, StringConstructor, NumberConstructor], false, unknown, unknown, unknown>;
    readonly name: import("../../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly validateEvent: import("../../../utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly id: StringConstructor;
    readonly loading: import("../../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly beforeChange: import("../../../utils/props").BuildPropReturn<import("../../../utils/props").PropWrapper<() => boolean | Promise<boolean>>, unknown, unknown, unknown, unknown>;
}, {
    input: import("vue").Ref<HTMLInputElement | undefined>;
    core: import("vue").Ref<HTMLSpanElement | undefined>;
    switchDisabled: import("vue").ComputedRef<boolean>;
    checked: import("vue").ComputedRef<boolean>;
    handleChange: () => void;
    switchValue: () => void;
    focus: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (val: string | number | boolean) => boolean;
    change: (val: string | number | boolean) => boolean;
    input: (val: string | number | boolean) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly modelValue?: unknown;
    readonly value?: unknown;
    readonly disabled?: unknown;
    readonly width?: unknown;
    readonly inlinePrompt?: unknown;
    readonly activeIcon?: unknown;
    readonly inactiveIcon?: unknown;
    readonly activeText?: unknown;
    readonly inactiveText?: unknown;
    readonly activeColor?: unknown;
    readonly inactiveColor?: unknown;
    readonly borderColor?: unknown;
    readonly activeValue?: unknown;
    readonly inactiveValue?: unknown;
    readonly name?: unknown;
    readonly validateEvent?: unknown;
    readonly id?: unknown;
    readonly loading?: unknown;
    readonly beforeChange?: unknown;
} & {
    disabled: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    loading: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    name: string;
    modelValue: import("../../../utils/props").BuildPropType<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown>;
    width: number;
    borderColor: string;
    value: import("../../../utils/props").BuildPropType<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown>;
    validateEvent: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    inlinePrompt: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    activeIcon: import("../../../utils/props").BuildPropType<import("../../../utils/props").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
    inactiveIcon: import("../../../utils/props").BuildPropType<import("../../../utils/props").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
    activeText: string;
    inactiveText: string;
    activeColor: string;
    inactiveColor: string;
    activeValue: import("../../../utils/props").BuildPropType<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown>;
    inactiveValue: import("../../../utils/props").BuildPropType<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown>;
} & {
    id?: string | undefined;
    beforeChange?: (() => boolean | Promise<boolean>) | undefined;
}> & {
    "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
    onChange?: ((val: string | number | boolean) => any) | undefined;
    onInput?: ((val: string | number | boolean) => any) | undefined;
}, {
    disabled: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    loading: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    name: string;
    modelValue: import("../../../utils/props").BuildPropType<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown>;
    width: number;
    borderColor: string;
    value: import("../../../utils/props").BuildPropType<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown>;
    validateEvent: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    inlinePrompt: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    activeIcon: import("../../../utils/props").BuildPropType<import("../../../utils/props").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
    inactiveIcon: import("../../../utils/props").BuildPropType<import("../../../utils/props").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
    activeText: string;
    inactiveText: string;
    activeColor: string;
    inactiveColor: string;
    activeValue: import("../../../utils/props").BuildPropType<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown>;
    inactiveValue: import("../../../utils/props").BuildPropType<readonly [BooleanConstructor, StringConstructor, NumberConstructor], unknown, unknown>;
    beforeChange: () => boolean | Promise<boolean>;
}>;
export default _default;
