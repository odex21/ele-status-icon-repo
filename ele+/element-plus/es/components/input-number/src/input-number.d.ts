export declare const inputNumberProps: {
    readonly step: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, 1, unknown, unknown, unknown>;
    readonly stepStrictly: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly max: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, number, unknown, unknown, unknown>;
    readonly min: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, number, unknown, unknown, unknown>;
    readonly modelValue: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly disabled: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly size: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, unknown, unknown, "small" | "default" | "large", unknown>;
    readonly controls: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly controlsPosition: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "", unknown, "" | "right", unknown>;
    readonly name: StringConstructor;
    readonly label: StringConstructor;
    readonly placeholder: StringConstructor;
    readonly precision: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, unknown, unknown, unknown, unknown>;
};
export declare const inputNumberEmits: {
    change: (prev: number, cur: number) => boolean;
    blur: (e: FocusEvent) => boolean;
    focus: (e: FocusEvent) => boolean;
    input: (val: number) => boolean;
    'update:modelValue': (val: number) => boolean;
};
