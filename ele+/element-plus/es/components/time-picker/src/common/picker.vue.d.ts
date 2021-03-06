import dayjs from 'dayjs';
import { Effect } from 'element-plus/es/components/popper';
import type { Dayjs } from 'dayjs';
import type { Options } from '@popperjs/core';
interface PickerOptions {
    isValidValue: (date: Dayjs) => boolean;
    handleKeydown: (event: KeyboardEvent) => void;
    parseUserInput: (value: Dayjs) => dayjs.Dayjs;
    formatToString: (value: Dayjs) => string | string[];
    getRangeAvailableTime: (date: Dayjs) => dayjs.Dayjs;
    getDefaultValue: () => Dayjs;
    panelReady: boolean;
    handleClear: () => void;
}
declare const _default: import("vue").DefineComponent<{
    name: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    format: {
        type: StringConstructor;
    };
    valueFormat: {
        type: import("vue").PropType<string>;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearIcon: {
        type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{}>, {}>;
    };
    editable: {
        type: BooleanConstructor;
        default: boolean;
    };
    prefixIcon: {
        type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("../../../../utils/types").ComponentSize>;
        validator: (val: string) => boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    popperOptions: {
        type: import("vue").PropType<Partial<Options>>;
        default: () => {};
    };
    modelValue: {
        type: import("vue").PropType<string | Date | (number | Date)[]>;
        default: string;
    };
    rangeSeparator: {
        type: StringConstructor;
        default: string;
    };
    startPlaceholder: StringConstructor;
    endPlaceholder: StringConstructor;
    defaultValue: {
        type: import("vue").PropType<Date | Date[]>;
    };
    defaultTime: {
        type: import("vue").PropType<Date | Date[]>;
    };
    isRange: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledHours: {
        type: FunctionConstructor;
    };
    disabledMinutes: {
        type: FunctionConstructor;
    };
    disabledSeconds: {
        type: FunctionConstructor;
    };
    disabledDate: {
        type: FunctionConstructor;
    };
    cellClassName: {
        type: FunctionConstructor;
    };
    shortcuts: {
        type: ArrayConstructor;
        default: () => never[];
    };
    arrowControl: {
        type: BooleanConstructor;
        default: boolean;
    };
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    unlinkPanels: BooleanConstructor;
}, {
    Effect: typeof Effect;
    elPopperOptions: Options;
    isDatesPicker: import("vue").ComputedRef<boolean>;
    handleEndChange: () => void;
    handleStartChange: () => void;
    handleStartInput: (event: any) => void;
    handleEndInput: (event: any) => void;
    onUserInput: (e: any) => void;
    handleChange: () => void;
    handleKeydown: (event: any) => void;
    popperPaneRef: import("vue").ComputedRef<any>;
    onClickOutside: () => void;
    pickerSize: import("vue").ComputedRef<"" | "medium" | "mini" | import("../../../../utils/types").ComponentSize>;
    isRangeInput: import("vue").ComputedRef<boolean>;
    onMouseLeave: () => void;
    onMouseEnter: () => void;
    onClearIconClick: (event: any) => void;
    showClose: import("vue").Ref<boolean>;
    triggerIcon: import("vue").ComputedRef<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
    onPick: (date?: any, visible?: boolean) => void;
    handleFocus: (e: any) => void;
    handleBlur: () => void;
    pickerVisible: import("vue").Ref<boolean>;
    pickerActualVisible: import("vue").Ref<boolean>;
    displayValue: import("vue").ComputedRef<string | string[] | undefined>;
    parsedValue: import("vue").ComputedRef<any>;
    setSelectionRange: (start: any, end: any, pos: any) => void;
    refPopper: import("vue").Ref<null>;
    pickerDisabled: import("vue").ComputedRef<boolean | undefined>;
    onSetPickerOption: <T extends keyof PickerOptions>(e: [T, PickerOptions[T]]) => void;
    onCalendarChange: (e: any) => void;
    focus: (focusStartInput?: boolean) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "blur" | "focus" | "calendar-change")[], "update:modelValue" | "change" | "blur" | "focus" | "calendar-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    name?: unknown;
    popperClass?: unknown;
    format?: unknown;
    valueFormat?: unknown;
    type?: unknown;
    clearable?: unknown;
    clearIcon?: unknown;
    editable?: unknown;
    prefixIcon?: unknown;
    size?: unknown;
    readonly?: unknown;
    disabled?: unknown;
    placeholder?: unknown;
    popperOptions?: unknown;
    modelValue?: unknown;
    rangeSeparator?: unknown;
    startPlaceholder?: unknown;
    endPlaceholder?: unknown;
    defaultValue?: unknown;
    defaultTime?: unknown;
    isRange?: unknown;
    disabledHours?: unknown;
    disabledMinutes?: unknown;
    disabledSeconds?: unknown;
    disabledDate?: unknown;
    cellClassName?: unknown;
    shortcuts?: unknown;
    arrowControl?: unknown;
    validateEvent?: unknown;
    unlinkPanels?: unknown;
} & {
    type: string;
    disabled: boolean;
    name: string | unknown[];
    modelValue: string | Date | (number | Date)[];
    editable: boolean;
    placeholder: string;
    popperOptions: Partial<Options>;
    popperClass: string;
    readonly: boolean;
    clearable: boolean;
    prefixIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    validateEvent: boolean;
    clearIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    rangeSeparator: string;
    isRange: boolean;
    shortcuts: unknown[];
    arrowControl: boolean;
    unlinkPanels: boolean;
} & {
    size?: import("../../../../utils/types").ComponentSize | undefined;
    format?: string | undefined;
    valueFormat?: string | undefined;
    startPlaceholder?: string | undefined;
    endPlaceholder?: string | undefined;
    defaultValue?: Date | Date[] | undefined;
    defaultTime?: Date | Date[] | undefined;
    disabledHours?: Function | undefined;
    disabledMinutes?: Function | undefined;
    disabledSeconds?: Function | undefined;
    disabledDate?: Function | undefined;
    cellClassName?: Function | undefined;
}> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    "onCalendar-change"?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    disabled: boolean;
    name: string | unknown[];
    modelValue: string | Date | (number | Date)[];
    editable: boolean;
    placeholder: string;
    popperOptions: Partial<Options>;
    popperClass: string;
    readonly: boolean;
    clearable: boolean;
    prefixIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    validateEvent: boolean;
    clearIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    rangeSeparator: string;
    isRange: boolean;
    shortcuts: unknown[];
    arrowControl: boolean;
    unlinkPanels: boolean;
}>;
export default _default;
