export declare const ElSelect: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    name: StringConstructor;
    id: StringConstructor;
    modelValue: {
        type: (BooleanConstructor | ObjectConstructor | StringConstructor | NumberConstructor | ArrayConstructor)[];
        default: undefined;
    };
    autocomplete: {
        type: StringConstructor;
        default: string;
    };
    automaticDropdown: BooleanConstructor;
    size: {
        type: import("vue").PropType<import("../../utils/types").ComponentSize>;
        validator: (val: string) => boolean;
    };
    disabled: BooleanConstructor;
    clearable: BooleanConstructor;
    filterable: BooleanConstructor;
    allowCreate: BooleanConstructor;
    loading: BooleanConstructor;
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    remote: BooleanConstructor;
    loadingText: StringConstructor;
    noMatchText: StringConstructor;
    noDataText: StringConstructor;
    remoteMethod: FunctionConstructor;
    filterMethod: FunctionConstructor;
    multiple: BooleanConstructor;
    multipleLimit: {
        type: NumberConstructor;
        default: number;
    };
    placeholder: {
        type: StringConstructor;
    };
    defaultFirstOption: BooleanConstructor;
    reserveKeyword: BooleanConstructor;
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    collapseTags: BooleanConstructor;
    popperAppendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearIcon: {
        type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{}>, {}>;
    };
    fitInputWidth: {
        type: BooleanConstructor;
        default: boolean;
    };
    suffixIcon: {
        type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{}>, {}>;
    };
    tagType: {
        type: StringConstructor;
        default: string;
    };
}, {
    Effect: typeof import("..").Effect;
    tagInMultiLine: import("vue").Ref<boolean>;
    prefixWidth: import("vue").Ref<null>;
    selectSize: import("vue").ComputedRef<"" | "medium" | "mini" | import("../../utils/types").ComponentSize>;
    readonly: import("vue").ComputedRef<any>;
    handleResize: () => void;
    collapseTagSize: import("vue").ComputedRef<"" | "small">;
    debouncedOnInputChange: import("lodash").DebouncedFunc<() => void>;
    debouncedQueryChange: import("lodash").DebouncedFunc<(e: any) => void>;
    deletePrevTag: (e: any) => void;
    deleteTag: (event: any, tag: any) => void;
    deleteSelected: (event: any) => void;
    handleOptionSelect: (option: any, byClick: any) => void;
    scrollToOption: (option: any) => void;
    inputWidth: import("vue").Ref<number>;
    selected: any;
    inputLength: import("vue").Ref<number>;
    filteredOptionsCount: import("vue").Ref<number>;
    visible: import("vue").Ref<boolean>;
    softFocus: import("vue").Ref<boolean>;
    selectedLabel: import("vue").Ref<string>;
    hoverIndex: import("vue").Ref<number>;
    query: import("vue").Ref<string>;
    inputHovering: import("vue").Ref<boolean>;
    currentPlaceholder: import("vue").Ref<string>;
    menuVisibleOnFocus: import("vue").Ref<boolean>;
    isOnComposition: import("vue").Ref<boolean>;
    isSilentBlur: import("vue").Ref<boolean>;
    options: import("vue").Ref<Map<any, any>>;
    resetInputHeight: () => void;
    managePlaceholder: () => void;
    showClose: import("vue").ComputedRef<any>;
    selectDisabled: import("vue").ComputedRef<any>;
    iconComponent: import("vue").ComputedRef<any>;
    iconReverse: import("vue").ComputedRef<"" | "is-reverse">;
    showNewOption: import("vue").ComputedRef<any>;
    emptyText: import("vue").ComputedRef<any>;
    toggleLastOptionHitState: (hit?: boolean | undefined) => any;
    resetInputState: (e: KeyboardEvent) => void;
    handleComposition: (event: any) => void;
    handleMenuEnter: () => void;
    handleFocus: (event: any) => void;
    blur: () => void;
    handleBlur: (event: Event) => void;
    handleClearClick: (event: Event) => void;
    handleClose: () => void;
    toggleMenu: () => void;
    selectOption: () => void;
    getValueKey: (item: any) => any;
    navigateOptions: (direction: any) => void;
    dropMenuVisible: import("vue").ComputedRef<boolean>;
    focus: () => void;
    reference: import("vue").Ref<null>;
    input: import("vue").Ref<null>;
    popper: import("vue").Ref<null>;
    popperPaneRef: import("vue").ComputedRef<any>;
    tags: import("vue").Ref<null>;
    selectWrapper: import("vue").Ref<HTMLElement | null>;
    scrollbar: import("vue").Ref<null>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "blur" | "focus" | "clear" | "visible-change" | "remove-tag")[], "update:modelValue" | "change" | "blur" | "focus" | "clear" | "visible-change" | "remove-tag", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    name?: unknown;
    id?: unknown;
    modelValue?: unknown;
    autocomplete?: unknown;
    automaticDropdown?: unknown;
    size?: unknown;
    disabled?: unknown;
    clearable?: unknown;
    filterable?: unknown;
    allowCreate?: unknown;
    loading?: unknown;
    popperClass?: unknown;
    remote?: unknown;
    loadingText?: unknown;
    noMatchText?: unknown;
    noDataText?: unknown;
    remoteMethod?: unknown;
    filterMethod?: unknown;
    multiple?: unknown;
    multipleLimit?: unknown;
    placeholder?: unknown;
    defaultFirstOption?: unknown;
    reserveKeyword?: unknown;
    valueKey?: unknown;
    collapseTags?: unknown;
    popperAppendToBody?: unknown;
    clearIcon?: unknown;
    fitInputWidth?: unknown;
    suffixIcon?: unknown;
    tagType?: unknown;
} & {
    disabled: boolean;
    loading: boolean;
    popperClass: string;
    multiple: boolean;
    autocomplete: string;
    clearable: boolean;
    suffixIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    valueKey: string;
    popperAppendToBody: boolean;
    filterable: boolean;
    collapseTags: boolean;
    clearIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    fitInputWidth: boolean;
    automaticDropdown: boolean;
    allowCreate: boolean;
    remote: boolean;
    multipleLimit: number;
    defaultFirstOption: boolean;
    reserveKeyword: boolean;
    tagType: string;
} & {
    size?: import("../../utils/types").ComponentSize | undefined;
    name?: string | undefined;
    modelValue?: string | number | boolean | unknown[] | Record<string, any> | undefined;
    id?: string | undefined;
    placeholder?: string | undefined;
    filterMethod?: Function | undefined;
    loadingText?: string | undefined;
    noMatchText?: string | undefined;
    noDataText?: string | undefined;
    remoteMethod?: Function | undefined;
}> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    onClear?: ((...args: any[]) => any) | undefined;
    "onVisible-change"?: ((...args: any[]) => any) | undefined;
    "onRemove-tag"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    loading: boolean;
    modelValue: string | number | boolean | unknown[] | Record<string, any>;
    popperClass: string;
    multiple: boolean;
    autocomplete: string;
    clearable: boolean;
    suffixIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    valueKey: string;
    popperAppendToBody: boolean;
    filterable: boolean;
    collapseTags: boolean;
    clearIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    fitInputWidth: boolean;
    automaticDropdown: boolean;
    allowCreate: boolean;
    remote: boolean;
    multipleLimit: number;
    defaultFirstOption: boolean;
    reserveKeyword: boolean;
    tagType: string;
}>> & {
    Option: import("vue").DefineComponent<{
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
        select: import("./src/token").SelectContext | undefined;
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
    OptionGroup: import("vue").DefineComponent<{
        label: StringConstructor;
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
    }, {
        visible: import("vue").Ref<boolean>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        label?: unknown;
        disabled?: unknown;
    } & {
        disabled: boolean;
    } & {
        label?: string | undefined;
    }>, {
        disabled: boolean;
    }>;
};
export default ElSelect;
export declare const ElOption: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
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
    select: import("./src/token").SelectContext | undefined;
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
}>>;
export declare const ElOptionGroup: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    label: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    visible: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    label?: unknown;
    disabled?: unknown;
} & {
    disabled: boolean;
} & {
    label?: string | undefined;
}>, {
    disabled: boolean;
}>>;
export * from './src/token';
