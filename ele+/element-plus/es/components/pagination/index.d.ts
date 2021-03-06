export declare const ElPagination: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    readonly total: NumberConstructor;
    readonly pageSize: NumberConstructor;
    readonly defaultPageSize: NumberConstructor;
    readonly currentPage: NumberConstructor;
    readonly defaultCurrentPage: NumberConstructor;
    readonly pageCount: NumberConstructor;
    readonly pagerCount: import("../../utils/props").BuildPropReturn<NumberConstructor, 7, unknown, unknown, unknown>;
    readonly layout: import("../../utils/props").BuildPropReturn<StringConstructor, string, unknown, unknown, unknown>;
    readonly pageSizes: import("../../utils/props").BuildPropReturn<import("../../utils/props").PropWrapper<number[]>, () => [10, 20, 30, 40, 50, 100], unknown, unknown, unknown>;
    readonly popperClass: import("../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly prevText: import("../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly nextText: import("../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly small: BooleanConstructor;
    readonly background: BooleanConstructor;
    readonly disabled: BooleanConstructor;
    readonly hideOnSinglePage: BooleanConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:current-page': (val: number) => boolean;
    'update:page-size': (val: number) => boolean;
    'size-change': (val: number) => boolean;
    'current-change': (val: number) => boolean;
    'prev-click': (val: number) => boolean;
    'next-click': (val: number) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly total?: unknown;
    readonly pageSize?: unknown;
    readonly defaultPageSize?: unknown;
    readonly currentPage?: unknown;
    readonly defaultCurrentPage?: unknown;
    readonly pageCount?: unknown;
    readonly pagerCount?: unknown;
    readonly layout?: unknown;
    readonly pageSizes?: unknown;
    readonly popperClass?: unknown;
    readonly prevText?: unknown;
    readonly nextText?: unknown;
    readonly small?: unknown;
    readonly background?: unknown;
    readonly disabled?: unknown;
    readonly hideOnSinglePage?: unknown;
} & {
    small: boolean;
    disabled: boolean;
    popperClass: string;
    background: boolean;
    layout: string;
    pagerCount: number;
    pageSizes: number[];
    prevText: string;
    nextText: string;
    hideOnSinglePage: boolean;
} & {
    total?: number | undefined;
    pageSize?: number | undefined;
    defaultPageSize?: number | undefined;
    currentPage?: number | undefined;
    defaultCurrentPage?: number | undefined;
    pageCount?: number | undefined;
}> & {
    "onUpdate:current-page"?: ((val: number) => any) | undefined;
    "onUpdate:page-size"?: ((val: number) => any) | undefined;
    "onSize-change"?: ((val: number) => any) | undefined;
    "onCurrent-change"?: ((val: number) => any) | undefined;
    "onPrev-click"?: ((val: number) => any) | undefined;
    "onNext-click"?: ((val: number) => any) | undefined;
}, {
    small: boolean;
    disabled: boolean;
    popperClass: string;
    background: boolean;
    layout: string;
    pagerCount: number;
    pageSizes: number[];
    prevText: string;
    nextText: string;
    hideOnSinglePage: boolean;
}>> & Record<string, any>;
export default ElPagination;
export * from './src/pagination';
