import type { PropType, Ref } from 'vue';
import type { ComponentSize, Nullable } from 'element-plus/es/utils/types';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<number | number[]>;
        default: number;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    step: {
        type: NumberConstructor;
        default: number;
    };
    showInput: {
        type: BooleanConstructor;
        default: boolean;
    };
    showInputControls: {
        type: BooleanConstructor;
        default: boolean;
    };
    inputSize: {
        type: PropType<ComponentSize>;
        default: string;
    };
    showStops: {
        type: BooleanConstructor;
        default: boolean;
    };
    showTooltip: {
        type: BooleanConstructor;
        default: boolean;
    };
    formatTooltip: {
        type: PropType<(val: number) => number | string>;
        default: undefined;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    range: {
        type: BooleanConstructor;
        default: boolean;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    debounce: {
        type: NumberConstructor;
        default: number;
    };
    label: {
        type: StringConstructor;
        default: undefined;
    };
    tooltipClass: {
        type: StringConstructor;
        default: undefined;
    };
    marks: ObjectConstructor;
}, {
    firstValue: Ref<number>;
    secondValue: Ref<number>;
    oldValue: Ref<number>;
    dragging: Ref<boolean>;
    sliderSize: Ref<number>;
    slider: import("@vue/reactivity").ShallowRef<Nullable<HTMLElement>>;
    firstButton: Ref<null>;
    secondButton: Ref<null>;
    sliderDisabled: import("vue").ComputedRef<boolean>;
    runwayStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    barStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    emitChange: () => Promise<void>;
    onSliderClick: (event: MouseEvent) => void;
    getStopStyle: (position: number) => import("vue").CSSProperties;
    setFirstValue: (firstValue: number) => void;
    setSecondValue: (secondValue: number) => void;
    stops: import("vue").ComputedRef<number[]>;
    markList: import("vue").ComputedRef<import("./slider.type").Mark[]>;
    sliderWrapper: Ref<Nullable<HTMLElement>>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("input" | "update:modelValue" | "change")[], "input" | "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    min?: unknown;
    max?: unknown;
    step?: unknown;
    showInput?: unknown;
    showInputControls?: unknown;
    inputSize?: unknown;
    showStops?: unknown;
    showTooltip?: unknown;
    formatTooltip?: unknown;
    disabled?: unknown;
    range?: unknown;
    vertical?: unknown;
    height?: unknown;
    debounce?: unknown;
    label?: unknown;
    tooltipClass?: unknown;
    marks?: unknown;
} & {
    disabled: boolean;
    modelValue: number | number[];
    height: string;
    vertical: boolean;
    range: boolean;
    inputSize: ComponentSize;
    debounce: number;
    max: number;
    min: number;
    step: number;
    showTooltip: boolean;
    showInput: boolean;
    showInputControls: boolean;
    showStops: boolean;
} & {
    label?: string | undefined;
    tooltipClass?: string | undefined;
    formatTooltip?: ((val: number) => number | string) | undefined;
    marks?: Record<string, any> | undefined;
}> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    modelValue: number | number[];
    label: string;
    height: string;
    vertical: boolean;
    range: boolean;
    inputSize: ComponentSize;
    debounce: number;
    max: number;
    min: number;
    step: number;
    tooltipClass: string;
    showTooltip: boolean;
    showInput: boolean;
    showInputControls: boolean;
    showStops: boolean;
    formatTooltip: (val: number) => number | string;
}>;
export default _default;
