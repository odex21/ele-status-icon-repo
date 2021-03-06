import type { ComponentSize } from 'element-plus/es/utils/types';
import type { MaybeRef } from '@vueuse/core';
export declare const useSizeProp: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "", false, "" | "small" | "default" | "large", never>;
export declare const useSize: (fallback?: MaybeRef<ComponentSize | '' | undefined>, ignore?: Partial<Record<'prop' | 'form' | 'formItem' | 'global', boolean>>) => import("vue").ComputedRef<"" | "medium" | "mini" | ComponentSize>;
export declare const useDisabled: (fallback?: MaybeRef<boolean | undefined>) => import("vue").ComputedRef<boolean>;
