export declare const ElTabs: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    readonly type: import("../../utils/props").BuildPropReturn<StringConstructor, "", unknown, "" | "card" | "border-card", unknown>;
    readonly activeName: import("../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly closable: BooleanConstructor;
    readonly addable: BooleanConstructor;
    readonly modelValue: import("../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly editable: BooleanConstructor;
    readonly tabPosition: import("../../utils/props").BuildPropReturn<StringConstructor, "top", unknown, "top" | "right" | "bottom" | "left", unknown>;
    readonly beforeLeave: import("../../utils/props").BuildPropReturn<import("../../utils/props").PropWrapper<(newTabName: string, oldTabName: string) => boolean | void | Promise<boolean | void>>, () => boolean, unknown, unknown, unknown>;
    readonly stretch: BooleanConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (tabName: string) => boolean;
    input: (tabName: string) => boolean;
    'tab-click': (pane: {
        uid: number;
        instance: import("vue").ShallowReactive<import("vue").ComponentInternalInstance>;
        props: {
            label: string;
            name: string;
            closable: boolean;
            disabled: boolean;
            lazy: boolean;
        };
        paneName: string | undefined;
        active: boolean;
        index: string | undefined;
        isClosable: boolean;
    }, ev: Event) => boolean;
    edit: (paneName: string | null, action: "add" | "remove") => boolean;
    'tab-remove': (paneName: string) => boolean;
    'tab-add': () => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly type?: unknown;
    readonly activeName?: unknown;
    readonly closable?: unknown;
    readonly addable?: unknown;
    readonly modelValue?: unknown;
    readonly editable?: unknown;
    readonly tabPosition?: unknown;
    readonly beforeLeave?: unknown;
    readonly stretch?: unknown;
} & {
    type: import("../../utils/props").BuildPropType<StringConstructor, "" | "card" | "border-card", unknown>;
    modelValue: string;
    closable: boolean;
    activeName: string;
    tabPosition: import("../../utils/props").BuildPropType<StringConstructor, "top" | "right" | "bottom" | "left", unknown>;
    beforeLeave: (newTabName: string, oldTabName: string) => boolean | void | Promise<boolean | void>;
    addable: boolean;
    editable: boolean;
    stretch: boolean;
} & {}> & {
    "onUpdate:modelValue"?: ((tabName: string) => any) | undefined;
    onInput?: ((tabName: string) => any) | undefined;
    "onTab-click"?: ((pane: {
        uid: number;
        instance: import("vue").ShallowReactive<import("vue").ComponentInternalInstance>;
        props: {
            label: string;
            name: string;
            closable: boolean;
            disabled: boolean;
            lazy: boolean;
        };
        paneName: string | undefined;
        active: boolean;
        index: string | undefined;
        isClosable: boolean;
    }, ev: Event) => any) | undefined;
    onEdit?: ((paneName: string | null, action: "add" | "remove") => any) | undefined;
    "onTab-remove"?: ((paneName: string) => any) | undefined;
    "onTab-add"?: (() => any) | undefined;
}, {
    type: import("../../utils/props").BuildPropType<StringConstructor, "" | "card" | "border-card", unknown>;
    modelValue: string;
    closable: boolean;
    activeName: string;
    tabPosition: import("../../utils/props").BuildPropType<StringConstructor, "top" | "right" | "bottom" | "left", unknown>;
    beforeLeave: (newTabName: string, oldTabName: string) => boolean | void | Promise<boolean | void>;
    addable: boolean;
    editable: boolean;
    stretch: boolean;
}>> & {
    TabPane: import("vue").DefineComponent<{
        readonly label: import("../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly name: import("../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
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
};
export default ElTabs;
export declare const ElTabPane: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    readonly label: import("../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly name: import("../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
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
}>>;
export * from './src/tabs';
export * from './src/tab-bar';
export * from './src/tab-nav';
export * from './src/tab-pane';
