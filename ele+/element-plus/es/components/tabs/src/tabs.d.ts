import type { TabsPaneContext } from 'element-plus/es/tokens';
import type { ComponentInternalInstance, VNode, ExtractPropTypes } from 'vue';
export declare const tabsProps: {
    readonly type: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "", unknown, "" | "card" | "border-card", unknown>;
    readonly activeName: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly closable: BooleanConstructor;
    readonly addable: BooleanConstructor;
    readonly modelValue: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly editable: BooleanConstructor;
    readonly tabPosition: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "top", unknown, "top" | "right" | "bottom" | "left", unknown>;
    readonly beforeLeave: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<(newTabName: string, oldTabName: string) => void | boolean | Promise<void | boolean>>, () => boolean, unknown, unknown, unknown>;
    readonly stretch: BooleanConstructor;
};
export declare type TabsProps = ExtractPropTypes<typeof tabsProps>;
export declare const tabsEmits: {
    "update:modelValue": (tabName: string) => boolean;
    input: (tabName: string) => boolean;
    'tab-click': (pane: TabsPaneContext, ev: Event) => boolean;
    edit: (paneName: string | null, action: 'remove' | 'add') => boolean;
    'tab-remove': (paneName: string) => boolean;
    'tab-add': () => boolean;
};
export declare type TabsEmits = typeof tabsEmits;
declare const _default: import("vue").DefineComponent<{
    readonly type: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "", unknown, "" | "card" | "border-card", unknown>;
    readonly activeName: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly closable: BooleanConstructor;
    readonly addable: BooleanConstructor;
    readonly modelValue: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly editable: BooleanConstructor;
    readonly tabPosition: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "top", unknown, "top" | "right" | "bottom" | "left", unknown>;
    readonly beforeLeave: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<(newTabName: string, oldTabName: string) => boolean | void | Promise<boolean | void>>, () => boolean, unknown, unknown, unknown>;
    readonly stretch: BooleanConstructor;
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (tabName: string) => boolean;
    input: (tabName: string) => boolean;
    'tab-click': (pane: {
        uid: number;
        instance: import("vue").ShallowReactive<ComponentInternalInstance>;
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
    type: import("element-plus/es/utils/props").BuildPropType<StringConstructor, "" | "card" | "border-card", unknown>;
    modelValue: string;
    closable: boolean;
    activeName: string;
    tabPosition: import("element-plus/es/utils/props").BuildPropType<StringConstructor, "top" | "right" | "bottom" | "left", unknown>;
    beforeLeave: (newTabName: string, oldTabName: string) => boolean | void | Promise<boolean | void>;
    addable: boolean;
    editable: boolean;
    stretch: boolean;
} & {}> & {
    "onUpdate:modelValue"?: ((tabName: string) => any) | undefined;
    onInput?: ((tabName: string) => any) | undefined;
    "onTab-click"?: ((pane: {
        uid: number;
        instance: import("vue").ShallowReactive<ComponentInternalInstance>;
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
    type: import("element-plus/es/utils/props").BuildPropType<StringConstructor, "" | "card" | "border-card", unknown>;
    modelValue: string;
    closable: boolean;
    activeName: string;
    tabPosition: import("element-plus/es/utils/props").BuildPropType<StringConstructor, "top" | "right" | "bottom" | "left", unknown>;
    beforeLeave: (newTabName: string, oldTabName: string) => boolean | void | Promise<boolean | void>;
    addable: boolean;
    editable: boolean;
    stretch: boolean;
}>;
export default _default;
