import type { Nullable } from 'element-plus/es/utils/types';
export declare const EVENT_CODE: {
    tab: string;
    enter: string;
    space: string;
    left: string;
    up: string;
    right: string;
    down: string;
    esc: string;
    delete: string;
    backspace: string;
    numpadEnter: string;
};
/**
 * Determine if the testing element is visible on screen no matter if its on the viewport or not
 */
export declare const isVisible: (element: HTMLElement) => boolean;
export declare const obtainAllFocusableElements: (element: HTMLElement) => HTMLElement[];
/**
 * @desc Determine if target element is focusable
 * @param element {HTMLElement}
 * @returns {Boolean} true if it is focusable
 */
export declare const isFocusable: (element: HTMLElement) => boolean;
/**
 * @desc Set Attempt to set focus on the current node.
 * @param element
 *          The node to attempt to focus on.
 * @returns
 *  true if element is focused.
 */
export declare const attemptFocus: (element: HTMLElement) => boolean;
/**
 * Trigger an event
 * mouseenter, mouseleave, mouseover, keyup, change, click, etc.
 * @param  {HTMLElement} elm
 * @param  {String} name
 * @param  {*} opts
 */
export declare const triggerEvent: (elm: HTMLElement, name: string, ...opts: Array<boolean>) => HTMLElement;
export declare const isLeaf: (el: HTMLElement) => boolean;
export declare const getSibling: (el: HTMLElement, distance: number, elClass: string) => Nullable<Element>;
export declare const focusNode: (el: any) => void;
declare const Utils: {
    IgnoreUtilFocusChanges: boolean;
    /**
     * @desc Set focus on descendant nodes until the first focusable element is
     *       found.
     * @param {HTMLElement} element
     *          DOM node for which to find the first focusable descendant.
     * @returns {Boolean}
     *  true if a focusable element is found and focus is set.
     */
    focusFirstDescendant(element: HTMLElement): boolean;
    /**
     * @desc Find the last descendant node that is focusable.
     * @param {HTMLElement} element
     *          DOM node for which to find the last focusable descendant.
     * @returns {Boolean}
     *  true if a focusable element is found and focus is set.
     */
    focusLastDescendant(element: HTMLElement): boolean;
};
export default Utils;
