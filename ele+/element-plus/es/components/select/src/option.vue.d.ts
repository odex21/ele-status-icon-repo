declare const _default: import("vue").DefineComponent<{
    value: {
        required: true;
        type: (BooleanConstructor | ObjectConstructor | StringConstructor | NumberConstructor)[];
    };
    label: (StringConstructor | NumberConstructor)[];
    created: BooleanConstructor;
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    currentLabel: import("vue").ComputedRef<any>;
    itemSelected: import("vue").ComputedRef<boolean>;
    isDisabled: import("vue").ComputedRef<any>;
    select: import("./token").SelectContext | undefined;
    hoverItem: () => void;
    visible: import("vue").Ref<boolean>;
    hover: import("vue").Ref<boolean>;
    selectOptionClick: () => void;
    states: {
        index: number;
        groupDisabled: boolean;
        visible: boolean;
        hitState: boolean;
        hover: boolean;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value?: unknown;
    label?: unknown;
    created?: unknown;
    disabled?: unknown;
} & {
    disabled: boolean;
    value: string | number | boolean | Record<string, any>;
    created: boolean;
} & {
    label?: string | number | undefined;
}>, {
    disabled: boolean;
    created: boolean;
}>;
export default _default;
