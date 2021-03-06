declare const _default: import("vue").DefineComponent<{
    readonly label: import("../../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly name: import("../../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly closable: BooleanConstructor;
    readonly disabled: BooleanConstructor;
    readonly lazy: BooleanConstructor;
}, {
    active: Readonly<import("vue").Ref<boolean>>;
    paneName: import("vue").ComputedRef<string | undefined>;
    shouldBeRender: Readonly<import("vue").Ref<boolean>>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly label?: unknown;
    readonly name?: unknown;
    readonly closable?: unknown;
    readonly disabled?: unknown;
    readonly lazy?: unknown;
} & {
    disabled: boolean;
    name: string;
    label: string;
    closable: boolean;
    lazy: boolean;
} & {}>, {
    disabled: boolean;
    name: string;
    label: string;
    closable: boolean;
    lazy: boolean;
}>;
export default _default;
