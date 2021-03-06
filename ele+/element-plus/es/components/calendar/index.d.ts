export declare const ElCalendar: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    readonly modelValue: import("../../utils/props").BuildPropReturn<DateConstructor, unknown, unknown, unknown, unknown>;
    readonly range: import("../../utils/props").BuildPropReturn<import("../../utils/props").PropWrapper<[Date, Date]>, unknown, unknown, unknown, [Date, Date]>;
}, {
    selectedDay: import("vue").Ref<import("dayjs").Dayjs | undefined>;
    curMonthDatePrefix: import("vue").ComputedRef<string>;
    i18nDate: import("vue").ComputedRef<string>;
    realSelectedDay: import("vue").WritableComputedRef<import("dayjs").Dayjs | undefined>;
    date: import("vue").ComputedRef<import("dayjs").Dayjs>;
    validatedRange: import("vue").ComputedRef<[import("dayjs").Dayjs, import("dayjs").Dayjs][]>;
    pickDay: (day: import("dayjs").Dayjs) => void;
    selectDate: (type: "today" | "prev-month" | "next-month" | "prev-year" | "next-year") => void;
    t: import("../..").Translator;
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
}>> & Record<string, any>;
export default ElCalendar;
export * from './src/calendar';
