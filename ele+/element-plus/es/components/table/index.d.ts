export declare const ElTable: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    data: {
        type: import("vue").PropType<any[]>;
        default: () => never[];
    };
    size: StringConstructor;
    width: (StringConstructor | NumberConstructor)[];
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    fit: {
        type: BooleanConstructor;
        default: boolean;
    };
    stripe: BooleanConstructor;
    border: BooleanConstructor;
    rowKey: import("vue").PropType<string | ((row: any) => string) | undefined>;
    showHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    showSummary: BooleanConstructor;
    sumText: StringConstructor;
    summaryMethod: import("vue").PropType<import("./src/table/defaults").SummaryMethod<any> | undefined>;
    rowClassName: import("vue").PropType<import("./src/table/defaults").ColumnCls<any> | undefined>;
    rowStyle: import("vue").PropType<import("./src/table/defaults").ColumnStyle<any> | undefined>;
    cellClassName: import("vue").PropType<(string | ((data: {
        row: any;
        rowIndex: number;
        column: import("./src/table-column/defaults").TableColumnCtx<any>;
        columnIndex: number;
    }) => string)) | undefined>;
    cellStyle: import("vue").PropType<(import("vue").CSSProperties | ((data: {
        row: any;
        rowIndex: number;
        column: import("./src/table-column/defaults").TableColumnCtx<any>;
        columnIndex: number;
    }) => import("vue").CSSProperties)) | undefined>;
    headerRowClassName: import("vue").PropType<import("./src/table/defaults").ColumnCls<any> | undefined>;
    headerRowStyle: import("vue").PropType<import("./src/table/defaults").ColumnStyle<any> | undefined>;
    headerCellClassName: import("vue").PropType<(string | ((data: {
        row: any;
        rowIndex: number;
        column: import("./src/table-column/defaults").TableColumnCtx<any>;
        columnIndex: number;
    }) => string)) | undefined>;
    headerCellStyle: import("vue").PropType<(import("vue").CSSProperties | ((data: {
        row: any;
        rowIndex: number;
        column: import("./src/table-column/defaults").TableColumnCtx<any>;
        columnIndex: number;
    }) => import("vue").CSSProperties)) | undefined>;
    highlightCurrentRow: BooleanConstructor;
    currentRowKey: (StringConstructor | NumberConstructor)[];
    emptyText: StringConstructor;
    expandRowKeys: import("vue").PropType<any[] | undefined>;
    defaultExpandAll: BooleanConstructor;
    defaultSort: import("vue").PropType<import("./src/table/defaults").Sort | undefined>;
    tooltipEffect: StringConstructor;
    spanMethod: import("vue").PropType<((data: {
        row: any;
        rowIndex: number;
        column: import("./src/table-column/defaults").TableColumnCtx<any>;
        columnIndex: number;
    }) => number[] | {
        rowspan: number;
        colspan: number;
    }) | undefined>;
    selectOnIndeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    indent: {
        type: NumberConstructor;
        default: number;
    };
    treeProps: {
        type: import("vue").PropType<{
            hasChildren?: string | undefined;
            children?: string | undefined;
        } | undefined>;
        default: () => {
            hasChildren: string;
            children: string;
        };
    };
    lazy: BooleanConstructor;
    load: import("vue").PropType<((row: any, treeNode: import("./src/table/defaults").TreeNode, resolve: (data: any[]) => void) => void) | undefined>;
    style: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: () => {};
    };
    className: {
        type: StringConstructor;
        default: string;
    };
}, {
    layout: import("./src/table-layout").default<any>;
    store: any;
    handleHeaderFooterMousewheel: (event: any, data: any) => void;
    handleMouseLeave: () => void;
    tableId: string;
    tableSize: import("vue").ComputedRef<"" | "medium" | "mini" | import("../../utils/types").ComponentSize>;
    isHidden: import("vue").Ref<boolean>;
    isEmpty: import("vue").ComputedRef<boolean>;
    renderExpanded: import("vue").Ref<null>;
    resizeProxyVisible: import("vue").Ref<boolean>;
    resizeState: import("vue").Ref<{
        width: null;
        height: null;
    }>;
    isGroup: import("vue").Ref<boolean>;
    bodyWidth: import("vue").ComputedRef<string>;
    bodyHeight: import("vue").ComputedRef<{
        height: string;
        'max-height'?: undefined;
    } | {
        'max-height': string;
        height?: undefined;
    } | {
        height?: undefined;
        'max-height'?: undefined;
    }>;
    emptyBlockStyle: import("vue").ComputedRef<{
        width: string;
        height: string;
    } | null>;
    debouncedUpdateLayout: import("lodash").DebouncedFunc<() => void>;
    handleFixedMousewheel: (event: any, data: any) => void;
    fixedHeight: import("vue").ComputedRef<{
        bottom: number;
        height?: undefined;
    } | {
        bottom: string;
        height?: undefined;
    } | {
        height: string;
        bottom?: undefined;
    }>;
    fixedBodyHeight: import("vue").ComputedRef<{
        height: string;
        'max-height'?: undefined;
    } | {
        'max-height': string;
        height?: undefined;
    } | {
        height?: undefined;
        'max-height'?: undefined;
    }>;
    setCurrentRow: (row: any) => void;
    toggleRowSelection: (row: any, selected: boolean) => void;
    clearSelection: () => void;
    clearFilter: (columnKeys: string[]) => void;
    toggleAllSelection: () => void;
    toggleRowExpansion: (row: any, expanded: boolean) => void;
    clearSort: () => void;
    doLayout: () => void;
    sort: (prop: string, order: string) => void;
    t: import("../..").Translator;
    setDragVisible: (visible: boolean) => void;
    context: import("./src/table/defaults").Table<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "select-all" | "expand-change" | "current-change" | "selection-change" | "cell-mouse-enter" | "cell-mouse-leave" | "cell-contextmenu" | "cell-click" | "cell-dblclick" | "row-click" | "row-contextmenu" | "row-dblclick" | "header-click" | "header-contextmenu" | "sort-change" | "filter-change" | "header-dragend")[], "select" | "select-all" | "expand-change" | "current-change" | "selection-change" | "cell-mouse-enter" | "cell-mouse-leave" | "cell-contextmenu" | "cell-click" | "cell-dblclick" | "row-click" | "row-contextmenu" | "row-dblclick" | "header-click" | "header-contextmenu" | "sort-change" | "filter-change" | "header-dragend", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    data?: unknown;
    size?: unknown;
    width?: unknown;
    height?: unknown;
    maxHeight?: unknown;
    fit?: unknown;
    stripe?: unknown;
    border?: unknown;
    rowKey?: unknown;
    showHeader?: unknown;
    showSummary?: unknown;
    sumText?: unknown;
    summaryMethod?: unknown;
    rowClassName?: unknown;
    rowStyle?: unknown;
    cellClassName?: unknown;
    cellStyle?: unknown;
    headerRowClassName?: unknown;
    headerRowStyle?: unknown;
    headerCellClassName?: unknown;
    headerCellStyle?: unknown;
    highlightCurrentRow?: unknown;
    currentRowKey?: unknown;
    emptyText?: unknown;
    expandRowKeys?: unknown;
    defaultExpandAll?: unknown;
    defaultSort?: unknown;
    tooltipEffect?: unknown;
    spanMethod?: unknown;
    selectOnIndeterminate?: unknown;
    indent?: unknown;
    treeProps?: unknown;
    lazy?: unknown;
    load?: unknown;
    style?: unknown;
    className?: unknown;
} & {
    lazy: boolean;
    data: any[];
    style: import("vue").CSSProperties;
    border: boolean;
    fit: boolean;
    className: string;
    stripe: boolean;
    treeProps: {
        hasChildren?: string | undefined;
        children?: string | undefined;
    } | undefined;
    showHeader: boolean;
    showSummary: boolean;
    highlightCurrentRow: boolean;
    defaultExpandAll: boolean;
    selectOnIndeterminate: boolean;
    indent: number;
} & {
    size?: string | undefined;
    load?: ((row: any, treeNode: import("./src/table/defaults").TreeNode, resolve: (data: any[]) => void) => void) | undefined;
    height?: string | number | undefined;
    width?: string | number | undefined;
    emptyText?: string | undefined;
    sumText?: string | undefined;
    maxHeight?: string | number | undefined;
    cellClassName?: (string | ((data: {
        row: any;
        rowIndex: number;
        column: import("./src/table-column/defaults").TableColumnCtx<any>;
        columnIndex: number;
    }) => string)) | undefined;
    defaultSort?: import("./src/table/defaults").Sort | undefined;
    rowClassName?: import("./src/table/defaults").ColumnCls<any> | undefined;
    rowStyle?: import("./src/table/defaults").ColumnStyle<any> | undefined;
    tooltipEffect?: string | undefined;
    summaryMethod?: import("./src/table/defaults").SummaryMethod<any> | undefined;
    rowKey?: string | ((row: any) => string) | undefined;
    cellStyle?: (import("vue").CSSProperties | ((data: {
        row: any;
        rowIndex: number;
        column: import("./src/table-column/defaults").TableColumnCtx<any>;
        columnIndex: number;
    }) => import("vue").CSSProperties)) | undefined;
    headerRowClassName?: import("./src/table/defaults").ColumnCls<any> | undefined;
    headerRowStyle?: import("./src/table/defaults").ColumnStyle<any> | undefined;
    headerCellClassName?: (string | ((data: {
        row: any;
        rowIndex: number;
        column: import("./src/table-column/defaults").TableColumnCtx<any>;
        columnIndex: number;
    }) => string)) | undefined;
    headerCellStyle?: (import("vue").CSSProperties | ((data: {
        row: any;
        rowIndex: number;
        column: import("./src/table-column/defaults").TableColumnCtx<any>;
        columnIndex: number;
    }) => import("vue").CSSProperties)) | undefined;
    expandRowKeys?: any[] | undefined;
    spanMethod?: ((data: {
        row: any;
        rowIndex: number;
        column: import("./src/table-column/defaults").TableColumnCtx<any>;
        columnIndex: number;
    }) => number[] | {
        rowspan: number;
        colspan: number;
    }) | undefined;
    currentRowKey?: string | number | undefined;
}> & {
    onSelect?: ((...args: any[]) => any) | undefined;
    "onExpand-change"?: ((...args: any[]) => any) | undefined;
    "onCurrent-change"?: ((...args: any[]) => any) | undefined;
    "onSelect-all"?: ((...args: any[]) => any) | undefined;
    "onSelection-change"?: ((...args: any[]) => any) | undefined;
    "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
    "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
    "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
    "onCell-click"?: ((...args: any[]) => any) | undefined;
    "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
    "onRow-click"?: ((...args: any[]) => any) | undefined;
    "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
    "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
    "onHeader-click"?: ((...args: any[]) => any) | undefined;
    "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
    "onSort-change"?: ((...args: any[]) => any) | undefined;
    "onFilter-change"?: ((...args: any[]) => any) | undefined;
    "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
}, {
    lazy: boolean;
    data: any[];
    style: import("vue").CSSProperties;
    border: boolean;
    fit: boolean;
    className: string;
    stripe: boolean;
    treeProps: {
        hasChildren?: string | undefined;
        children?: string | undefined;
    } | undefined;
    showHeader: boolean;
    showSummary: boolean;
    highlightCurrentRow: boolean;
    defaultExpandAll: boolean;
    selectOnIndeterminate: boolean;
    indent: number;
}>> & {
    TableColumn: import("vue").DefineComponent<{
        type: {
            type: StringConstructor;
            default: string;
        };
        label: StringConstructor;
        className: StringConstructor;
        labelClassName: StringConstructor;
        property: StringConstructor;
        prop: StringConstructor;
        width: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        minWidth: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        renderHeader: import("vue").PropType<(data: {
            column: import("./src/table-column/defaults").TableColumnCtx<any>;
            $index: number;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
        sortable: {
            type: (BooleanConstructor | StringConstructor)[];
            default: boolean;
        };
        sortMethod: import("vue").PropType<(a: any, b: any) => number>;
        sortBy: import("vue").PropType<string | string[] | ((row: any, index: number) => string)>;
        resizable: {
            type: BooleanConstructor;
            default: boolean;
        };
        columnKey: StringConstructor;
        align: StringConstructor;
        headerAlign: StringConstructor;
        showTooltipWhenOverflow: BooleanConstructor;
        showOverflowTooltip: BooleanConstructor;
        fixed: (BooleanConstructor | StringConstructor)[];
        formatter: import("vue").PropType<(row: any, column: import("./src/table-column/defaults").TableColumnCtx<any>, cellValue: any, index: number) => string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
        selectable: import("vue").PropType<(row: any, index: number) => boolean>;
        reserveSelection: BooleanConstructor;
        filterMethod: import("vue").PropType<import("./src/table-column/defaults").FilterMethods<any>>;
        filteredValue: import("vue").PropType<string[]>;
        filters: import("vue").PropType<import("./src/table-column/defaults").Filters>;
        filterPlacement: StringConstructor;
        filterMultiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        index: import("vue").PropType<number | ((index: number) => number)>;
        sortOrders: {
            type: import("vue").PropType<("ascending" | "descending" | null)[]>;
            default: () => (string | null)[];
            validator: (val: ("ascending" | "descending" | null)[]) => boolean;
        };
    }, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        type?: unknown;
        label?: unknown;
        className?: unknown;
        labelClassName?: unknown;
        property?: unknown;
        prop?: unknown;
        width?: unknown;
        minWidth?: unknown;
        renderHeader?: unknown;
        sortable?: unknown;
        sortMethod?: unknown;
        sortBy?: unknown;
        resizable?: unknown;
        columnKey?: unknown;
        align?: unknown;
        headerAlign?: unknown;
        showTooltipWhenOverflow?: unknown;
        showOverflowTooltip?: unknown;
        fixed?: unknown;
        formatter?: unknown;
        selectable?: unknown;
        reserveSelection?: unknown;
        filterMethod?: unknown;
        filteredValue?: unknown;
        filters?: unknown;
        filterPlacement?: unknown;
        filterMultiple?: unknown;
        index?: unknown;
        sortOrders?: unknown;
    } & {
        type: string;
        width: string | number;
        minWidth: string | number;
        sortOrders: ("ascending" | "descending" | null)[];
        sortable: string | boolean;
        resizable: boolean;
        showTooltipWhenOverflow: boolean;
        showOverflowTooltip: boolean;
        reserveSelection: boolean;
        filterMultiple: boolean;
    } & {
        fixed?: string | boolean | undefined;
        label?: string | undefined;
        index?: number | ((index: number) => number) | undefined;
        align?: string | undefined;
        prop?: string | undefined;
        filters?: import("./src/table-column/defaults").Filters | undefined;
        filterMethod?: import("./src/table-column/defaults").FilterMethods<any> | undefined;
        className?: string | undefined;
        labelClassName?: string | undefined;
        renderHeader?: ((data: {
            column: import("./src/table-column/defaults").TableColumnCtx<any>;
            $index: number;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) | undefined;
        sortMethod?: ((a: any, b: any) => number) | undefined;
        sortBy?: string | string[] | ((row: any, index: number) => string) | undefined;
        formatter?: ((row: any, column: import("./src/table-column/defaults").TableColumnCtx<any>, cellValue: any, index: number) => string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) | undefined;
        selectable?: ((row: any, index: number) => boolean) | undefined;
        filteredValue?: string[] | undefined;
        property?: string | undefined;
        columnKey?: string | undefined;
        headerAlign?: string | undefined;
        filterPlacement?: string | undefined;
    }>, {
        type: string;
        width: string | number;
        minWidth: string | number;
        sortOrders: ("ascending" | "descending" | null)[];
        sortable: string | boolean;
        resizable: boolean;
        showTooltipWhenOverflow: boolean;
        showOverflowTooltip: boolean;
        reserveSelection: boolean;
        filterMultiple: boolean;
    }>;
};
export default ElTable;
export declare const ElTableColumn: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        default: string;
    };
    label: StringConstructor;
    className: StringConstructor;
    labelClassName: StringConstructor;
    property: StringConstructor;
    prop: StringConstructor;
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    minWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    renderHeader: import("vue").PropType<(data: {
        column: import("./src/table-column/defaults").TableColumnCtx<any>;
        $index: number;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    sortable: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    sortMethod: import("vue").PropType<(a: any, b: any) => number>;
    sortBy: import("vue").PropType<string | string[] | ((row: any, index: number) => string)>;
    resizable: {
        type: BooleanConstructor;
        default: boolean;
    };
    columnKey: StringConstructor;
    align: StringConstructor;
    headerAlign: StringConstructor;
    showTooltipWhenOverflow: BooleanConstructor;
    showOverflowTooltip: BooleanConstructor;
    fixed: (BooleanConstructor | StringConstructor)[];
    formatter: import("vue").PropType<(row: any, column: import("./src/table-column/defaults").TableColumnCtx<any>, cellValue: any, index: number) => string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    selectable: import("vue").PropType<(row: any, index: number) => boolean>;
    reserveSelection: BooleanConstructor;
    filterMethod: import("vue").PropType<import("./src/table-column/defaults").FilterMethods<any>>;
    filteredValue: import("vue").PropType<string[]>;
    filters: import("vue").PropType<import("./src/table-column/defaults").Filters>;
    filterPlacement: StringConstructor;
    filterMultiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    index: import("vue").PropType<number | ((index: number) => number)>;
    sortOrders: {
        type: import("vue").PropType<("ascending" | "descending" | null)[]>;
        default: () => (string | null)[];
        validator: (val: ("ascending" | "descending" | null)[]) => boolean;
    };
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type?: unknown;
    label?: unknown;
    className?: unknown;
    labelClassName?: unknown;
    property?: unknown;
    prop?: unknown;
    width?: unknown;
    minWidth?: unknown;
    renderHeader?: unknown;
    sortable?: unknown;
    sortMethod?: unknown;
    sortBy?: unknown;
    resizable?: unknown;
    columnKey?: unknown;
    align?: unknown;
    headerAlign?: unknown;
    showTooltipWhenOverflow?: unknown;
    showOverflowTooltip?: unknown;
    fixed?: unknown;
    formatter?: unknown;
    selectable?: unknown;
    reserveSelection?: unknown;
    filterMethod?: unknown;
    filteredValue?: unknown;
    filters?: unknown;
    filterPlacement?: unknown;
    filterMultiple?: unknown;
    index?: unknown;
    sortOrders?: unknown;
} & {
    type: string;
    width: string | number;
    minWidth: string | number;
    sortOrders: ("ascending" | "descending" | null)[];
    sortable: string | boolean;
    resizable: boolean;
    showTooltipWhenOverflow: boolean;
    showOverflowTooltip: boolean;
    reserveSelection: boolean;
    filterMultiple: boolean;
} & {
    fixed?: string | boolean | undefined;
    label?: string | undefined;
    index?: number | ((index: number) => number) | undefined;
    align?: string | undefined;
    prop?: string | undefined;
    filters?: import("./src/table-column/defaults").Filters | undefined;
    filterMethod?: import("./src/table-column/defaults").FilterMethods<any> | undefined;
    className?: string | undefined;
    labelClassName?: string | undefined;
    renderHeader?: ((data: {
        column: import("./src/table-column/defaults").TableColumnCtx<any>;
        $index: number;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) | undefined;
    sortMethod?: ((a: any, b: any) => number) | undefined;
    sortBy?: string | string[] | ((row: any, index: number) => string) | undefined;
    formatter?: ((row: any, column: import("./src/table-column/defaults").TableColumnCtx<any>, cellValue: any, index: number) => string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) | undefined;
    selectable?: ((row: any, index: number) => boolean) | undefined;
    filteredValue?: string[] | undefined;
    property?: string | undefined;
    columnKey?: string | undefined;
    headerAlign?: string | undefined;
    filterPlacement?: string | undefined;
}>, {
    type: string;
    width: string | number;
    minWidth: string | number;
    sortOrders: ("ascending" | "descending" | null)[];
    sortable: string | boolean;
    resizable: boolean;
    showTooltipWhenOverflow: boolean;
    showOverflowTooltip: boolean;
    reserveSelection: boolean;
    filterMultiple: boolean;
}>>;
