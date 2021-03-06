import type { PropType, VNode } from 'vue';
import type { DataItem, Format, Key, Props, TargetOrder } from './transfer';
declare const _default: import("vue").DefineComponent<{
    data: {
        type: PropType<DataItem[]>;
        default: () => never[];
    };
    titles: {
        type: PropType<[string, string]>;
        default: () => never[];
    };
    buttonTexts: {
        type: PropType<[string, string]>;
        default: () => never[];
    };
    filterPlaceholder: {
        type: StringConstructor;
        default: string;
    };
    filterMethod: PropType<(query: string, item: DataItem) => boolean>;
    leftDefaultChecked: {
        type: PropType<Key[]>;
        default: () => never[];
    };
    rightDefaultChecked: {
        type: PropType<Key[]>;
        default: () => never[];
    };
    renderContent: PropType<(h: any, option: any) => VNode>;
    modelValue: {
        type: PropType<Key[]>;
        default: () => never[];
    };
    format: {
        type: PropType<Format>;
        default: () => {};
    };
    filterable: {
        type: BooleanConstructor;
        default: boolean;
    };
    props: {
        type: PropType<Props>;
        default: () => {
            label: string;
            key: string;
            disabled: string;
        };
    };
    targetOrder: {
        type: PropType<TargetOrder>;
        default: string;
        validator: (val: string) => boolean;
    };
}, {
    hasButtonTexts: import("vue").ComputedRef<boolean>;
    leftPanelTitle: import("vue").ComputedRef<string>;
    rightPanelTitle: import("vue").ComputedRef<string>;
    panelFilterPlaceholder: import("vue").ComputedRef<string>;
    clearQuery: (which: 'left' | 'right') => void;
    optionRender: import("vue").ComputedRef<(option: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[]>;
    leftChecked: import("vue").Ref<never[]>;
    rightChecked: import("vue").Ref<never[]>;
    sourceData: import("vue").ComputedRef<DataItem[]>;
    targetData: import("vue").ComputedRef<DataItem[]>;
    onSourceCheckedChange: (val: Key[], movedKeys: Key[]) => void;
    onTargetCheckedChange: (val: Key[], movedKeys: Key[]) => void;
    addToLeft: () => void;
    addToRight: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "left-check-change" | "right-check-change")[], "update:modelValue" | "change" | "left-check-change" | "right-check-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    data?: unknown;
    titles?: unknown;
    buttonTexts?: unknown;
    filterPlaceholder?: unknown;
    filterMethod?: unknown;
    leftDefaultChecked?: unknown;
    rightDefaultChecked?: unknown;
    renderContent?: unknown;
    modelValue?: unknown;
    format?: unknown;
    filterable?: unknown;
    props?: unknown;
    targetOrder?: unknown;
} & {
    modelValue: Key[];
    props: Props;
    data: DataItem[];
    titles: [string, string];
    filterPlaceholder: string;
    filterable: boolean;
    format: Format;
    buttonTexts: [string, string];
    leftDefaultChecked: Key[];
    rightDefaultChecked: Key[];
    targetOrder: TargetOrder;
} & {
    filterMethod?: ((query: string, item: DataItem) => boolean) | undefined;
    renderContent?: ((h: any, option: any) => VNode) | undefined;
}> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    "onLeft-check-change"?: ((...args: any[]) => any) | undefined;
    "onRight-check-change"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: Key[];
    props: Props;
    data: DataItem[];
    titles: [string, string];
    filterPlaceholder: string;
    filterable: boolean;
    format: Format;
    buttonTexts: [string, string];
    leftDefaultChecked: Key[];
    rightDefaultChecked: Key[];
    targetOrder: TargetOrder;
}>;
export default _default;
