export declare const ElButton: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    readonly size: import("../../utils/props").BuildPropReturn<StringConstructor, "", false, "" | "small" | "default" | "large", never>;
    readonly disabled: BooleanConstructor;
    readonly type: import("../../utils/props").BuildPropReturn<StringConstructor, "", unknown, "" | "default" | "primary" | "success" | "warning" | "info" | "danger" | "text", unknown>;
    readonly icon: import("../../utils/props").BuildPropReturn<import("../../utils/props").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, "", unknown, unknown, unknown>;
    readonly nativeType: import("../../utils/props").BuildPropReturn<StringConstructor, "button", unknown, "button" | "submit" | "reset", unknown>;
    readonly loading: BooleanConstructor;
    readonly plain: BooleanConstructor;
    readonly autofocus: BooleanConstructor;
    readonly round: BooleanConstructor;
    readonly circle: BooleanConstructor;
    readonly color: StringConstructor;
    readonly autoInsertSpace: import("../../utils/props").BuildPropReturn<BooleanConstructor, undefined, unknown, unknown, unknown>;
}, {
    buttonRef: import("vue").Ref<any>;
    buttonStyle: import("vue").ComputedRef<{}>;
    buttonSize: import("vue").ComputedRef<"" | "medium" | "mini" | import("../../utils/types").ComponentSize>;
    buttonType: import("vue").ComputedRef<"default" | "primary" | "success" | "warning" | "info" | "danger" | "text">;
    buttonDisabled: import("vue").ComputedRef<boolean>;
    shouldAddSpace: import("vue").ComputedRef<boolean>;
    handleClick: (evt: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (evt: MouseEvent) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly size?: unknown;
    readonly disabled?: unknown;
    readonly type?: unknown;
    readonly icon?: unknown;
    readonly nativeType?: unknown;
    readonly loading?: unknown;
    readonly plain?: unknown;
    readonly autofocus?: unknown;
    readonly round?: unknown;
    readonly circle?: unknown;
    readonly color?: unknown;
    readonly autoInsertSpace?: unknown;
} & {
    type: import("../../utils/props").BuildPropType<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger" | "text", unknown>;
    icon: import("../../utils/props").BuildPropType<import("../../utils/props").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
    nativeType: import("../../utils/props").BuildPropType<StringConstructor, "button" | "submit" | "reset", unknown>;
    size: import("../../utils/props").BuildPropType<StringConstructor, "" | "small" | "default" | "large", never>;
    disabled: boolean;
    loading: boolean;
    plain: boolean;
    autofocus: boolean;
    round: boolean;
    circle: boolean;
} & {
    autoInsertSpace?: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown> | undefined;
    color?: string | undefined;
}> & {
    onClick?: ((evt: MouseEvent) => any) | undefined;
}, {
    type: import("../../utils/props").BuildPropType<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger" | "text", unknown>;
    icon: import("../../utils/props").BuildPropType<import("../../utils/props").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
    nativeType: import("../../utils/props").BuildPropType<StringConstructor, "button" | "submit" | "reset", unknown>;
    autoInsertSpace: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    size: import("../../utils/props").BuildPropType<StringConstructor, "" | "small" | "default" | "large", never>;
    disabled: boolean;
    loading: boolean;
    plain: boolean;
    autofocus: boolean;
    round: boolean;
    circle: boolean;
}>> & {
    ButtonGroup: import("vue").DefineComponent<{
        readonly size: import("../../utils/props").BuildPropReturn<StringConstructor, "", false, "" | "small" | "default" | "large", never>;
        readonly type: import("../../utils/props").BuildPropReturn<StringConstructor, "", unknown, "" | "default" | "primary" | "success" | "warning" | "info" | "danger" | "text", unknown>;
    }, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        readonly size?: unknown;
        readonly type?: unknown;
    } & {
        type: import("../../utils/props").BuildPropType<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger" | "text", unknown>;
        size: import("../../utils/props").BuildPropType<StringConstructor, "" | "small" | "default" | "large", never>;
    } & {}>, {
        type: import("../../utils/props").BuildPropType<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger" | "text", unknown>;
        size: import("../../utils/props").BuildPropType<StringConstructor, "" | "small" | "default" | "large", never>;
    }>;
};
export declare const ElButtonGroup: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    readonly size: import("../../utils/props").BuildPropReturn<StringConstructor, "", false, "" | "small" | "default" | "large", never>;
    readonly type: import("../../utils/props").BuildPropReturn<StringConstructor, "", unknown, "" | "default" | "primary" | "success" | "warning" | "info" | "danger" | "text", unknown>;
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly size?: unknown;
    readonly type?: unknown;
} & {
    type: import("../../utils/props").BuildPropType<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger" | "text", unknown>;
    size: import("../../utils/props").BuildPropType<StringConstructor, "" | "small" | "default" | "large", never>;
} & {}>, {
    type: import("../../utils/props").BuildPropType<StringConstructor, "" | "default" | "primary" | "success" | "warning" | "info" | "danger" | "text", unknown>;
    size: import("../../utils/props").BuildPropType<StringConstructor, "" | "small" | "default" | "large", never>;
}>>;
export default ElButton;
export * from './src/button';
