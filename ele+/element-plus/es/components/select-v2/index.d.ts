import type { SFCWithInstall } from 'element-plus/es/utils/types';
declare const _Select: SFCWithInstall<import("vue").DefineComponent<{
    allowCreate: BooleanConstructor;
    autocomplete: {
        type: import("vue").PropType<"none" | "both" | "inline" | "list">;
        default: string;
    };
    automaticDropdown: BooleanConstructor;
    clearable: BooleanConstructor;
    clearIcon: {
        type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{}>, {}>;
    };
    collapseTags: BooleanConstructor;
    defaultFirstOption: BooleanConstructor;
    disabled: BooleanConstructor;
    estimatedOptionHeight: {
        type: NumberConstructor;
        default: undefined;
    };
    filterable: BooleanConstructor;
    filterMethod: FunctionConstructor;
    height: {
        type: NumberConstructor;
        default: number;
    };
    itemHeight: {
        type: NumberConstructor;
        default: number;
    };
    id: StringConstructor;
    loading: BooleanConstructor;
    loadingText: StringConstructor;
    label: StringConstructor;
    modelValue: import("vue").PropType<any>;
    multiple: BooleanConstructor;
    multipleLimit: {
        type: NumberConstructor;
        default: number;
    };
    name: StringConstructor;
    noDataText: StringConstructor;
    noMatchText: StringConstructor;
    remoteMethod: FunctionConstructor;
    reserveKeyword: BooleanConstructor;
    options: {
        type: import("vue").PropType<import("./src/select.types").OptionType<any>[]>;
        required: boolean;
    };
    placeholder: {
        type: StringConstructor;
    };
    popperAppendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    popperOptions: {
        type: import("vue").PropType<Partial<import("@popperjs/core").Options>>;
        default: () => Partial<import("@popperjs/core").Options>;
    };
    remote: BooleanConstructor;
    size: {
        type: import("vue").PropType<import("element-plus/es/utils/types").ComponentSize>;
        validator: (val: string) => boolean;
    };
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    scrollbarAlwaysOn: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    collapseTagSize: import("vue").ComputedRef<"" | "small">;
    currentPlaceholder: import("vue").ComputedRef<string>;
    expanded: import("vue").Ref<boolean>;
    emptyText: import("vue").ComputedRef<string | false | null>;
    popupHeight: import("vue").ComputedRef<number>;
    debounce: import("vue").ComputedRef<0 | 300>;
    filteredOptions: import("vue").ComputedRef<never[]>;
    iconComponent: import("vue").ComputedRef<"" | import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{}>, {}>>;
    iconReverse: import("vue").ComputedRef<"" | "is-reverse">;
    inputWrapperStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    popperSize: import("vue").Ref<number>;
    dropdownMenuVisible: import("vue").ComputedRef<boolean>;
    hasModelValue: import("vue").ComputedRef<boolean>;
    shouldShowPlaceholder: import("vue").ComputedRef<boolean>;
    selectDisabled: import("vue").ComputedRef<boolean | undefined>;
    selectSize: import("vue").ComputedRef<"" | "medium" | "mini" | import("element-plus/es/utils/types").ComponentSize>;
    showClearBtn: import("vue").ComputedRef<boolean>;
    states: {
        inputValue: string;
        displayInputValue: string;
        calculatedWidth: number;
        cachedPlaceholder: string;
        cachedOptions: {
            [x: string]: any;
            label: string;
            created?: boolean | undefined;
            value: any;
        }[];
        createdOptions: {
            [x: string]: any;
            label: string;
            created?: boolean | undefined;
            value: any;
        }[];
        createdLabel: string;
        createdSelected: boolean;
        currentPlaceholder: string;
        hoveringIndex: number;
        comboBoxHovering: boolean;
        isOnComposition: boolean;
        isSilentBlur: boolean;
        isComposing: boolean;
        inputLength: number;
        selectWidth: number;
        initialInputHeight: number;
        previousQuery: null;
        previousValue: string;
        query: string;
        selectedLabel: string;
        softFocus: boolean;
        tagInMultiLine: boolean;
    };
    tagMaxWidth: import("vue").ComputedRef<number>;
    calculatorRef: import("vue").Ref<HTMLElement>;
    controlRef: import("vue").Ref<null>;
    inputRef: import("vue").Ref<null>;
    menuRef: import("vue").Ref<null>;
    popper: import("vue").Ref<null>;
    selectRef: import("vue").Ref<null>;
    selectionRef: import("vue").Ref<null>;
    popperRef: import("vue").ComputedRef<any>;
    Effect: typeof import("..").Effect;
    debouncedOnInputChange: import("lodash").DebouncedFunc<() => Promise<void>>;
    deleteTag: (event: MouseEvent, tag: import("./src/select.types").Option<any>) => Promise<void> | undefined;
    getLabel: (item: unknown) => any;
    getValueKey: (item: unknown) => unknown;
    handleBlur: () => Promise<void>;
    handleClear: () => Promise<void>;
    handleClickOutside: () => Promise<void>;
    handleDel: (e: KeyboardEvent) => void;
    handleEsc: () => void;
    handleFocus: (event: FocusEvent) => void;
    handleMenuEnter: () => Promise<void>;
    handleResize: () => Promise<void> | undefined;
    toggleMenu: () => Promise<void> | undefined;
    scrollTo: (index: number) => void;
    onInput: (event: any) => Promise<void> | undefined;
    onKeyboardNavigate: (direction: "forward" | "backward", hoveringIndex?: number) => any;
    onKeyboardSelect: () => Promise<void> | undefined;
    onSelect: (option: import("./src/select.types").Option<any>, idx: number, byClick?: boolean) => void;
    onHover: (idx: number) => void;
    onUpdateInputValue: (val: string) => void;
    handleCompositionStart: () => void;
    handleCompositionEnd: (event: any) => void;
    handleCompositionUpdate: (event: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "blur" | "focus" | "clear" | "visible-change" | "remove-tag")[], "update:modelValue" | "change" | "blur" | "focus" | "clear" | "visible-change" | "remove-tag", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    allowCreate?: unknown;
    autocomplete?: unknown;
    automaticDropdown?: unknown;
    clearable?: unknown;
    clearIcon?: unknown;
    collapseTags?: unknown;
    defaultFirstOption?: unknown;
    disabled?: unknown;
    estimatedOptionHeight?: unknown;
    filterable?: unknown;
    filterMethod?: unknown;
    height?: unknown;
    itemHeight?: unknown;
    id?: unknown;
    loading?: unknown;
    loadingText?: unknown;
    label?: unknown;
    modelValue?: unknown;
    multiple?: unknown;
    multipleLimit?: unknown;
    name?: unknown;
    noDataText?: unknown;
    noMatchText?: unknown;
    remoteMethod?: unknown;
    reserveKeyword?: unknown;
    options?: unknown;
    placeholder?: unknown;
    popperAppendToBody?: unknown;
    popperClass?: unknown;
    popperOptions?: unknown;
    remote?: unknown;
    size?: unknown;
    valueKey?: unknown;
    scrollbarAlwaysOn?: unknown;
} & {
    disabled: boolean;
    loading: boolean;
    height: number;
    popperOptions: Partial<import("@popperjs/core").Options>;
    popperClass: string;
    multiple: boolean;
    autocomplete: "none" | "both" | "inline" | "list";
    clearable: boolean;
    valueKey: string;
    popperAppendToBody: boolean;
    filterable: boolean;
    collapseTags: boolean;
    clearIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    automaticDropdown: boolean;
    allowCreate: boolean;
    remote: boolean;
    multipleLimit: number;
    defaultFirstOption: boolean;
    reserveKeyword: boolean;
    itemHeight: number;
    scrollbarAlwaysOn: boolean;
} & {
    size?: import("element-plus/es/utils/types").ComponentSize | undefined;
    name?: string | undefined;
    modelValue?: any;
    label?: string | undefined;
    id?: string | undefined;
    placeholder?: string | undefined;
    options?: import("./src/select.types").OptionType<any>[] | undefined;
    filterMethod?: Function | undefined;
    loadingText?: string | undefined;
    noMatchText?: string | undefined;
    noDataText?: string | undefined;
    remoteMethod?: Function | undefined;
    estimatedOptionHeight?: number | undefined;
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
    height: number;
    popperOptions: Partial<import("@popperjs/core").Options>;
    popperClass: string;
    multiple: boolean;
    autocomplete: "none" | "both" | "inline" | "list";
    clearable: boolean;
    valueKey: string;
    popperAppendToBody: boolean;
    filterable: boolean;
    collapseTags: boolean;
    clearIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    automaticDropdown: boolean;
    allowCreate: boolean;
    remote: boolean;
    multipleLimit: number;
    defaultFirstOption: boolean;
    reserveKeyword: boolean;
    estimatedOptionHeight: number;
    itemHeight: number;
    scrollbarAlwaysOn: boolean;
}>>;
export default _Select;
export declare const ElSelectV2: SFCWithInstall<import("vue").DefineComponent<{
    allowCreate: BooleanConstructor;
    autocomplete: {
        type: import("vue").PropType<"none" | "both" | "inline" | "list">;
        default: string;
    };
    automaticDropdown: BooleanConstructor;
    clearable: BooleanConstructor;
    clearIcon: {
        type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{}>, {}>;
    };
    collapseTags: BooleanConstructor;
    defaultFirstOption: BooleanConstructor;
    disabled: BooleanConstructor;
    estimatedOptionHeight: {
        type: NumberConstructor;
        default: undefined;
    };
    filterable: BooleanConstructor;
    filterMethod: FunctionConstructor;
    height: {
        type: NumberConstructor;
        default: number;
    };
    itemHeight: {
        type: NumberConstructor;
        default: number;
    };
    id: StringConstructor;
    loading: BooleanConstructor;
    loadingText: StringConstructor;
    label: StringConstructor;
    modelValue: import("vue").PropType<any>;
    multiple: BooleanConstructor;
    multipleLimit: {
        type: NumberConstructor;
        default: number;
    };
    name: StringConstructor;
    noDataText: StringConstructor;
    noMatchText: StringConstructor;
    remoteMethod: FunctionConstructor;
    reserveKeyword: BooleanConstructor;
    options: {
        type: import("vue").PropType<import("./src/select.types").OptionType<any>[]>;
        required: boolean;
    };
    placeholder: {
        type: StringConstructor;
    };
    popperAppendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    popperOptions: {
        type: import("vue").PropType<Partial<import("@popperjs/core").Options>>;
        default: () => Partial<import("@popperjs/core").Options>;
    };
    remote: BooleanConstructor;
    size: {
        type: import("vue").PropType<import("element-plus/es/utils/types").ComponentSize>;
        validator: (val: string) => boolean;
    };
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    scrollbarAlwaysOn: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    collapseTagSize: import("vue").ComputedRef<"" | "small">;
    currentPlaceholder: import("vue").ComputedRef<string>;
    expanded: import("vue").Ref<boolean>;
    emptyText: import("vue").ComputedRef<string | false | null>;
    popupHeight: import("vue").ComputedRef<number>;
    debounce: import("vue").ComputedRef<0 | 300>;
    filteredOptions: import("vue").ComputedRef<never[]>;
    iconComponent: import("vue").ComputedRef<"" | import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{}>, {}>>;
    iconReverse: import("vue").ComputedRef<"" | "is-reverse">;
    inputWrapperStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    popperSize: import("vue").Ref<number>;
    dropdownMenuVisible: import("vue").ComputedRef<boolean>;
    hasModelValue: import("vue").ComputedRef<boolean>;
    shouldShowPlaceholder: import("vue").ComputedRef<boolean>;
    selectDisabled: import("vue").ComputedRef<boolean | undefined>;
    selectSize: import("vue").ComputedRef<"" | "medium" | "mini" | import("element-plus/es/utils/types").ComponentSize>;
    showClearBtn: import("vue").ComputedRef<boolean>;
    states: {
        inputValue: string;
        displayInputValue: string;
        calculatedWidth: number;
        cachedPlaceholder: string;
        cachedOptions: {
            [x: string]: any;
            label: string;
            created?: boolean | undefined;
            value: any;
        }[];
        createdOptions: {
            [x: string]: any;
            label: string;
            created?: boolean | undefined;
            value: any;
        }[];
        createdLabel: string;
        createdSelected: boolean;
        currentPlaceholder: string;
        hoveringIndex: number;
        comboBoxHovering: boolean;
        isOnComposition: boolean;
        isSilentBlur: boolean;
        isComposing: boolean;
        inputLength: number;
        selectWidth: number;
        initialInputHeight: number;
        previousQuery: null;
        previousValue: string;
        query: string;
        selectedLabel: string;
        softFocus: boolean;
        tagInMultiLine: boolean;
    };
    tagMaxWidth: import("vue").ComputedRef<number>;
    calculatorRef: import("vue").Ref<HTMLElement>;
    controlRef: import("vue").Ref<null>;
    inputRef: import("vue").Ref<null>;
    menuRef: import("vue").Ref<null>;
    popper: import("vue").Ref<null>;
    selectRef: import("vue").Ref<null>;
    selectionRef: import("vue").Ref<null>;
    popperRef: import("vue").ComputedRef<any>;
    Effect: typeof import("..").Effect;
    debouncedOnInputChange: import("lodash").DebouncedFunc<() => Promise<void>>;
    deleteTag: (event: MouseEvent, tag: import("./src/select.types").Option<any>) => Promise<void> | undefined;
    getLabel: (item: unknown) => any;
    getValueKey: (item: unknown) => unknown;
    handleBlur: () => Promise<void>;
    handleClear: () => Promise<void>;
    handleClickOutside: () => Promise<void>;
    handleDel: (e: KeyboardEvent) => void;
    handleEsc: () => void;
    handleFocus: (event: FocusEvent) => void;
    handleMenuEnter: () => Promise<void>;
    handleResize: () => Promise<void> | undefined;
    toggleMenu: () => Promise<void> | undefined;
    scrollTo: (index: number) => void;
    onInput: (event: any) => Promise<void> | undefined;
    onKeyboardNavigate: (direction: "forward" | "backward", hoveringIndex?: number) => any;
    onKeyboardSelect: () => Promise<void> | undefined;
    onSelect: (option: import("./src/select.types").Option<any>, idx: number, byClick?: boolean) => void;
    onHover: (idx: number) => void;
    onUpdateInputValue: (val: string) => void;
    handleCompositionStart: () => void;
    handleCompositionEnd: (event: any) => void;
    handleCompositionUpdate: (event: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "blur" | "focus" | "clear" | "visible-change" | "remove-tag")[], "update:modelValue" | "change" | "blur" | "focus" | "clear" | "visible-change" | "remove-tag", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    allowCreate?: unknown;
    autocomplete?: unknown;
    automaticDropdown?: unknown;
    clearable?: unknown;
    clearIcon?: unknown;
    collapseTags?: unknown;
    defaultFirstOption?: unknown;
    disabled?: unknown;
    estimatedOptionHeight?: unknown;
    filterable?: unknown;
    filterMethod?: unknown;
    height?: unknown;
    itemHeight?: unknown;
    id?: unknown;
    loading?: unknown;
    loadingText?: unknown;
    label?: unknown;
    modelValue?: unknown;
    multiple?: unknown;
    multipleLimit?: unknown;
    name?: unknown;
    noDataText?: unknown;
    noMatchText?: unknown;
    remoteMethod?: unknown;
    reserveKeyword?: unknown;
    options?: unknown;
    placeholder?: unknown;
    popperAppendToBody?: unknown;
    popperClass?: unknown;
    popperOptions?: unknown;
    remote?: unknown;
    size?: unknown;
    valueKey?: unknown;
    scrollbarAlwaysOn?: unknown;
} & {
    disabled: boolean;
    loading: boolean;
    height: number;
    popperOptions: Partial<import("@popperjs/core").Options>;
    popperClass: string;
    multiple: boolean;
    autocomplete: "none" | "both" | "inline" | "list";
    clearable: boolean;
    valueKey: string;
    popperAppendToBody: boolean;
    filterable: boolean;
    collapseTags: boolean;
    clearIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    automaticDropdown: boolean;
    allowCreate: boolean;
    remote: boolean;
    multipleLimit: number;
    defaultFirstOption: boolean;
    reserveKeyword: boolean;
    itemHeight: number;
    scrollbarAlwaysOn: boolean;
} & {
    size?: import("element-plus/es/utils/types").ComponentSize | undefined;
    name?: string | undefined;
    modelValue?: any;
    label?: string | undefined;
    id?: string | undefined;
    placeholder?: string | undefined;
    options?: import("./src/select.types").OptionType<any>[] | undefined;
    filterMethod?: Function | undefined;
    loadingText?: string | undefined;
    noMatchText?: string | undefined;
    noDataText?: string | undefined;
    remoteMethod?: Function | undefined;
    estimatedOptionHeight?: number | undefined;
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
    height: number;
    popperOptions: Partial<import("@popperjs/core").Options>;
    popperClass: string;
    multiple: boolean;
    autocomplete: "none" | "both" | "inline" | "list";
    clearable: boolean;
    valueKey: string;
    popperAppendToBody: boolean;
    filterable: boolean;
    collapseTags: boolean;
    clearIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    automaticDropdown: boolean;
    allowCreate: boolean;
    remote: boolean;
    multipleLimit: number;
    defaultFirstOption: boolean;
    reserveKeyword: boolean;
    estimatedOptionHeight: number;
    itemHeight: number;
    scrollbarAlwaysOn: boolean;
}>>;
export * from './src/token';
