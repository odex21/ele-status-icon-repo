export declare const ElTag: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    readonly closable: BooleanConstructor;
    readonly type: import("../../utils/props").BuildPropReturn<StringConstructor, "", unknown, "" | "success" | "warning" | "info" | "danger", unknown>;
    readonly hit: BooleanConstructor;
    readonly disableTransitions: BooleanConstructor;
    readonly color: import("../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly size: import("../../utils/props").BuildPropReturn<StringConstructor, unknown, unknown, "small" | "default" | "large", unknown>;
    readonly effect: import("../../utils/props").BuildPropReturn<StringConstructor, "light", unknown, "plain" | "light" | "dark", unknown>;
}, {
    classes: import("vue").ComputedRef<(string | false)[]>;
    handleClose: (event: MouseEvent) => void;
    handleClick: (event: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: (evt: MouseEvent) => boolean;
    click: (evt: MouseEvent) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly closable?: unknown;
    readonly type?: unknown;
    readonly hit?: unknown;
    readonly disableTransitions?: unknown;
    readonly color?: unknown;
    readonly size?: unknown;
    readonly effect?: unknown;
} & {
    type: import("../../utils/props").BuildPropType<StringConstructor, "" | "success" | "warning" | "info" | "danger", unknown>;
    color: string;
    closable: boolean;
    effect: import("../../utils/props").BuildPropType<StringConstructor, "plain" | "light" | "dark", unknown>;
    hit: boolean;
    disableTransitions: boolean;
} & {
    size?: import("../../utils/props").BuildPropType<StringConstructor, "small" | "default" | "large", unknown> | undefined;
}> & {
    onClick?: ((evt: MouseEvent) => any) | undefined;
    onClose?: ((evt: MouseEvent) => any) | undefined;
}, {
    type: import("../../utils/props").BuildPropType<StringConstructor, "" | "success" | "warning" | "info" | "danger", unknown>;
    size: import("../../utils/props").BuildPropType<StringConstructor, "small" | "default" | "large", unknown>;
    color: string;
    closable: boolean;
    effect: import("../../utils/props").BuildPropType<StringConstructor, "plain" | "light" | "dark", unknown>;
    hit: boolean;
    disableTransitions: boolean;
}>> & Record<string, any>;
export default ElTag;
export * from './src/tag';
