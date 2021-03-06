declare const _default: import("vue").DefineComponent<{
    space: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    active: {
        type: NumberConstructor;
        default: number;
    };
    direction: {
        type: StringConstructor;
        default: string;
        validator: (val: string) => boolean;
    };
    alignCenter: {
        type: BooleanConstructor;
        default: boolean;
    };
    simple: {
        type: BooleanConstructor;
        default: boolean;
    };
    finishStatus: {
        type: StringConstructor;
        default: string;
        validator: (val: string) => boolean;
    };
    processStatus: {
        type: StringConstructor;
        default: string;
        validator: (val: string) => boolean;
    };
}, {
    steps: import("vue").Ref<never[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    space?: unknown;
    active?: unknown;
    direction?: unknown;
    alignCenter?: unknown;
    simple?: unknown;
    finishStatus?: unknown;
    processStatus?: unknown;
} & {
    active: number;
    direction: string;
    space: string | number;
    alignCenter: boolean;
    simple: boolean;
    finishStatus: string;
    processStatus: string;
} & {}> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    active: number;
    direction: string;
    space: string | number;
    alignCenter: boolean;
    simple: boolean;
    finishStatus: string;
    processStatus: string;
}>;
export default _default;
