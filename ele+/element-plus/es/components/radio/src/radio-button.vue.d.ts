import type { CSSProperties } from 'vue';
declare const _default: import("vue").DefineComponent<{
    readonly name: import("../../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly size: import("../../../utils/props").BuildPropReturn<StringConstructor, "", false, "" | "small" | "default" | "large", never>;
    readonly disabled: BooleanConstructor;
    readonly label: import("../../../utils/props").BuildPropReturn<(BooleanConstructor | StringConstructor | NumberConstructor)[], string, unknown, unknown, unknown>;
}, {
    isGroup: import("vue").ComputedRef<boolean>;
    size: import("vue").ComputedRef<"" | "medium" | "mini" | import("../../../utils/types").ComponentSize>;
    disabled: import("vue").ComputedRef<boolean>;
    tabIndex: import("vue").ComputedRef<0 | -1>;
    modelValue: import("vue").WritableComputedRef<import("../../../utils/props").BuildPropType<readonly [StringConstructor, NumberConstructor, BooleanConstructor], unknown, unknown>>;
    focus: import("vue").Ref<boolean>;
    activeStyle: import("vue").ComputedRef<CSSProperties>;
    radioRef: import("vue").Ref<HTMLInputElement | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly name?: unknown;
    readonly size?: unknown;
    readonly disabled?: unknown;
    readonly label?: unknown;
} & {
    size: import("../../../utils/props").BuildPropType<StringConstructor, "" | "small" | "default" | "large", never>;
    disabled: boolean;
    name: string;
    label: import("../../../utils/props").BuildPropType<(BooleanConstructor | StringConstructor | NumberConstructor)[], unknown, unknown>;
} & {}>, {
    size: import("../../../utils/props").BuildPropType<StringConstructor, "" | "small" | "default" | "large", never>;
    disabled: boolean;
    name: string;
    label: import("../../../utils/props").BuildPropType<(BooleanConstructor | StringConstructor | NumberConstructor)[], unknown, unknown>;
}>;
export default _default;
