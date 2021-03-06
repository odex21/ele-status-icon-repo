import dayjs from 'dayjs';
import type { ComputedRef } from 'vue';
import type { Dayjs } from 'dayjs';
declare type DateType = 'prev-month' | 'next-month' | 'prev-year' | 'next-year' | 'today';
declare const _default: import("vue").DefineComponent<{
    readonly modelValue: import("../../../utils/props").BuildPropReturn<DateConstructor, unknown, unknown, unknown, unknown>;
    readonly range: import("../../../utils/props").BuildPropReturn<import("../../../utils/props").PropWrapper<[Date, Date]>, unknown, unknown, unknown, [Date, Date]>;
}, {
    selectedDay: import("vue").Ref<dayjs.Dayjs | undefined>;
    curMonthDatePrefix: ComputedRef<string>;
    i18nDate: ComputedRef<string>;
    realSelectedDay: import("vue").WritableComputedRef<dayjs.Dayjs | undefined>;
    date: ComputedRef<dayjs.Dayjs>;
    validatedRange: ComputedRef<[dayjs.Dayjs, dayjs.Dayjs][]>;
    pickDay: (day: Dayjs) => void;
    selectDate: (type: DateType) => void;
    t: import("element-plus/es/hooks").Translator;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: Date) => boolean;
    input: (value: Date) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly modelValue?: unknown;
    readonly range?: unknown;
} & {} & {
    modelValue?: Date | undefined;
    range?: [Date, Date] | undefined;
}> & {
    "onUpdate:modelValue"?: ((value: Date) => any) | undefined;
    onInput?: ((value: Date) => any) | undefined;
}, {
    modelValue: Date;
    range: [Date, Date];
}>;
export default _default;
