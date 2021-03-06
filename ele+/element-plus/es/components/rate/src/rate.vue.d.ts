declare const _default: import("vue").DefineComponent<{
    readonly modelValue: import("../../../utils/props").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly lowThreshold: import("../../../utils/props").BuildPropReturn<NumberConstructor, 2, unknown, unknown, unknown>;
    readonly highThreshold: import("../../../utils/props").BuildPropReturn<NumberConstructor, 4, unknown, unknown, unknown>;
    readonly max: import("../../../utils/props").BuildPropReturn<NumberConstructor, 5, unknown, unknown, unknown>;
    readonly colors: import("../../../utils/props").BuildPropReturn<import("../../../utils/props").PropWrapper<string[] | Record<number, string>>, () => ["#F7BA2A", "#F7BA2A", "#F7BA2A"], unknown, unknown, unknown>;
    readonly voidColor: import("../../../utils/props").BuildPropReturn<StringConstructor, "#C6D1DE", unknown, unknown, unknown>;
    readonly disabledVoidColor: import("../../../utils/props").BuildPropReturn<StringConstructor, "#EFF2F7", unknown, unknown, unknown>;
    readonly icons: import("../../../utils/props").BuildPropReturn<import("../../../utils/props").PropWrapper<(string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>)[] | Record<number, string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>>, () => import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{}>, {}>[], unknown, unknown, unknown>;
    readonly voidIcon: import("../../../utils/props").BuildPropReturn<import("../../../utils/props").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, () => import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{}>, {}>, unknown, unknown, unknown>;
    readonly disabledvoidIcon: import("../../../utils/props").BuildPropReturn<import("../../../utils/props").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, () => import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{}>, {}>, unknown, unknown, unknown>;
    readonly disabled: import("../../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly allowHalf: import("../../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly showText: import("../../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly showScore: import("../../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly textColor: import("../../../utils/props").BuildPropReturn<StringConstructor, "#1f2d3d", unknown, unknown, unknown>;
    readonly texts: import("../../../utils/props").BuildPropReturn<import("../../../utils/props").PropWrapper<string[]>, () => ["Extremely bad", "Disappointed", "Fair", "Satisfied", "Surprise"], unknown, unknown, unknown>;
    readonly scoreTemplate: import("../../../utils/props").BuildPropReturn<StringConstructor, "{value}", unknown, unknown, unknown>;
}, {
    hoverIndex: import("vue").Ref<number>;
    currentValue: import("vue").Ref<number>;
    rateDisabled: import("vue").ComputedRef<boolean | undefined>;
    text: import("vue").ComputedRef<string>;
    decimalStyle: import("vue").ComputedRef<{
        color: string | {
            excluded?: boolean | undefined;
            value: string;
        };
        width: string;
    }>;
    decimalIconComponent: import("vue").ComputedRef<string | import("vue").ComponentOptions<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions, any, any, any> | import("vue").FunctionalComponent<any, any> | {
        new (...args: any[]): any;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } | {
        excluded?: boolean | undefined;
        value: string | import("vue").ComponentOptions<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions, any, any, any> | import("vue").FunctionalComponent<any, any> | {
            new (...args: any[]): any;
            __isFragment?: undefined;
            __isTeleport?: undefined;
            __isSuspense?: undefined;
        };
    }>;
    iconComponents: import("vue").ComputedRef<any[]>;
    showDecimalIcon: (item: number) => boolean;
    getIconStyle: (item: number) => {
        color: string | {
            excluded?: boolean | undefined;
            value: string;
        };
    };
    selectValue: (value: number) => void;
    handleKey: (e: KeyboardEvent) => number | undefined;
    setCurrentValue: (value: number, event: MouseEvent) => void;
    resetCurrentValue: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (value: number) => boolean;
    "update:modelValue": (value: number) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly modelValue?: unknown;
    readonly lowThreshold?: unknown;
    readonly highThreshold?: unknown;
    readonly max?: unknown;
    readonly colors?: unknown;
    readonly voidColor?: unknown;
    readonly disabledVoidColor?: unknown;
    readonly icons?: unknown;
    readonly voidIcon?: unknown;
    readonly disabledvoidIcon?: unknown;
    readonly disabled?: unknown;
    readonly allowHalf?: unknown;
    readonly showText?: unknown;
    readonly showScore?: unknown;
    readonly textColor?: unknown;
    readonly texts?: unknown;
    readonly scoreTemplate?: unknown;
} & {
    disabled: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    modelValue: number;
    textColor: string;
    max: number;
    colors: import("../../../utils/props").BuildPropType<import("../../../utils/props").PropWrapper<string[] | Record<number, string>>, unknown, unknown>;
    showText: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    lowThreshold: number;
    highThreshold: number;
    voidColor: string;
    disabledVoidColor: string;
    icons: import("../../../utils/props").BuildPropType<import("../../../utils/props").PropWrapper<(string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>)[] | Record<number, string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>>, unknown, unknown>;
    voidIcon: import("../../../utils/props").BuildPropType<import("../../../utils/props").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
    disabledvoidIcon: import("../../../utils/props").BuildPropType<import("../../../utils/props").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
    allowHalf: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    showScore: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    texts: string[];
    scoreTemplate: string;
} & {}> & {
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    onChange?: ((value: number) => any) | undefined;
}, {
    disabled: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    modelValue: number;
    textColor: string;
    max: number;
    colors: import("../../../utils/props").BuildPropType<import("../../../utils/props").PropWrapper<string[] | Record<number, string>>, unknown, unknown>;
    showText: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    lowThreshold: number;
    highThreshold: number;
    voidColor: string;
    disabledVoidColor: string;
    icons: import("../../../utils/props").BuildPropType<import("../../../utils/props").PropWrapper<(string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>)[] | Record<number, string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>>, unknown, unknown>;
    voidIcon: import("../../../utils/props").BuildPropType<import("../../../utils/props").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
    disabledvoidIcon: import("../../../utils/props").BuildPropType<import("../../../utils/props").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
    allowHalf: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    showScore: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    texts: string[];
    scoreTemplate: string;
}>;
export default _default;
