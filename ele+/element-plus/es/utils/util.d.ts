import { camelize, capitalize, extend, hasOwn, isArray, isObject, isString, looseEqual } from '@vue/shared';
import type { ComponentPublicInstance, CSSProperties, Ref } from 'vue';
import type { TimeoutHandle, Nullable, ComponentSize } from './types';
export declare const SCOPE = "Util";
export declare function toObject<T>(arr: Array<T>): Record<string, T>;
export declare const getValueByPath: (obj: any, paths?: string) => unknown;
export declare function getPropByPath(obj: any, path: string, strict: boolean): {
    o: unknown;
    k: string;
    v: Nullable<unknown>;
};
/**
 * Generate random number in range [0, 1000]
 * Maybe replace with [uuid](https://www.npmjs.com/package/uuid)
 */
export declare const generateId: () => number;
export declare const escapeRegexpString: (value?: string) => string;
export declare const coerceTruthyValueToArray: (arr: any) => any[];
export declare const isFirefox: () => boolean;
export declare const autoprefixer: (style: CSSProperties) => CSSProperties;
export declare const kebabCase: (str: string) => string;
export { isVNode } from 'vue';
export { hasOwn, isObject, isArray, isString, capitalize, camelize, looseEqual, extend, };
export declare const isBool: (val: unknown) => val is boolean;
export declare const isNumber: (val: unknown) => val is number;
export declare const isHTMLElement: (val: unknown) => boolean;
export declare function rafThrottle<T extends (...args: any) => any>(fn: T): T;
export declare const clearTimer: (timer: Ref<TimeoutHandle>) => void;
/**
 * Generating a random int in range (0, max - 1)
 * @param max {number}
 */
export declare function getRandomInt(max: number): number;
export declare function isUndefined(val: any): val is undefined;
/**
 * @deprecated please use `useGlobalConfig` in hooks.
 */
export declare function useGlobalConfig(): {
    size?: ComponentSize;
    zIndex?: number;
};
export declare function isEmpty(val: unknown): boolean;
export declare function arrayFlat(arr: unknown[]): any;
export declare function deduplicate<T>(arr: T[]): T[];
export declare function addUnit(value: string | number): string;
/**
 * Enhance `lodash.isEqual` for it always return false even two functions have completely same statements.
 * @param obj The value to compare
 * @param other The other value to compare
 * @returns Returns `true` if the values are equivalent, else `false`.
 * @example
 *  lodash.isEqual(() => 1, () => 1)      // false
 *  isEqualWith(() => 1, () => 1)         // true
 */
export declare function isEqualWithFunction(obj: any, other: any): boolean;
/**
 * Generate function for attach ref for the h renderer
 * @param ref Ref<HTMLElement | ComponentPublicInstance>
 * @returns (val: T) => void
 */
export declare const refAttacher: <T extends HTMLElement | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>>(ref: Ref<T>) => (val: T) => void;
