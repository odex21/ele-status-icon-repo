import type { Table, TableProps } from './defaults';
import type { Store } from '../store';
import type TableLayout from '../table-layout';
declare function useStyle<T>(props: TableProps<T>, layout: TableLayout<T>, store: Store<T>, table: Table<T>): {
    isHidden: import("vue").Ref<boolean>;
    renderExpanded: import("vue").Ref<null>;
    setDragVisible: (visible: boolean) => void;
    isGroup: import("vue").Ref<boolean>;
    handleMouseLeave: () => void;
    handleHeaderFooterMousewheel: (event: any, data: any) => void;
    tableSize: import("vue").ComputedRef<"" | "medium" | "mini" | import("../../../../utils/types").ComponentSize>;
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
    resizeProxyVisible: import("vue").Ref<boolean>;
    bodyWidth: import("vue").ComputedRef<string>;
    resizeState: import("vue").Ref<{
        width: null;
        height: null;
    }>;
    doLayout: () => void;
};
export default useStyle;
