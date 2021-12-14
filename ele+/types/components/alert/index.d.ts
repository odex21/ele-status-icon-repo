export declare const ElAlert: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    readonly title: import("../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly description: import("../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly type: import("../../utils/props").BuildPropReturn<StringConstructor, "info", unknown, "success" | "warning" | "info" | "error", unknown>;
    readonly closable: import("../../utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly closeText: import("../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly showIcon: BooleanConstructor;
    readonly center: BooleanConstructor;
    readonly effect: import("../../utils/props").BuildPropReturn<StringConstructor, "light", unknown, "light" | "dark", unknown>;
}, {
    visible: import("vue").Ref<boolean>;
    typeClass: import("vue").ComputedRef<string>;
    iconComponent: import("vue").ComputedRef<import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{}>, {}>>;
    isBigIcon: import("vue").ComputedRef<"" | "is-big">;
    isBoldTitle: import("vue").ComputedRef<"" | "is-bold">;
    close: (evt: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: (evt: MouseEvent) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly title?: unknown;
    readonly description?: unknown;
    readonly type?: unknown;
    readonly closable?: unknown;
    readonly closeText?: unknown;
    readonly showIcon?: unknown;
    readonly center?: unknown;
    readonly effect?: unknown;
} & {
    type: import("../../utils/props").BuildPropType<StringConstructor, "success" | "warning" | "info" | "error", unknown>;
    closable: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    title: string;
    effect: import("../../utils/props").BuildPropType<StringConstructor, "light" | "dark", unknown>;
    center: boolean;
    description: string;
    closeText: string;
    showIcon: boolean;
} & {}> & {
    onClose?: ((evt: MouseEvent) => any) | undefined;
}, {
    type: import("../../utils/props").BuildPropType<StringConstructor, "success" | "warning" | "info" | "error", unknown>;
    closable: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    title: string;
    effect: import("../../utils/props").BuildPropType<StringConstructor, "light" | "dark", unknown>;
    center: boolean;
    description: string;
    closeText: string;
    showIcon: boolean;
}>> & Record<string, any>;
export default ElAlert;
export * from './src/alert';
