export declare const ElMenu: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    readonly mode: import("../../utils/props").BuildPropReturn<StringConstructor, "vertical", unknown, "horizontal" | "vertical", unknown>;
    readonly defaultActive: import("../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly defaultOpeneds: import("../../utils/props").BuildPropReturn<import("../../utils/props").PropWrapper<string[]>, () => [], unknown, unknown, unknown>;
    readonly uniqueOpened: BooleanConstructor;
    readonly router: BooleanConstructor;
    readonly menuTrigger: import("../../utils/props").BuildPropReturn<StringConstructor, "hover", unknown, "click" | "hover", unknown>;
    readonly collapse: BooleanConstructor;
    readonly backgroundColor: StringConstructor;
    readonly textColor: StringConstructor;
    readonly activeTextColor: StringConstructor;
    readonly collapseTransition: import("../../utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly ellipsis: import("../../utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: (index: string, indexPath: string[]) => boolean;
    open: (index: string, indexPath: string[]) => boolean;
    select: (index: string, indexPath: string[], item: import("./src/types").MenuItemClicked, routerResult?: Promise<void | import("vue-router").NavigationFailure> | undefined) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly mode?: unknown;
    readonly defaultActive?: unknown;
    readonly defaultOpeneds?: unknown;
    readonly uniqueOpened?: unknown;
    readonly router?: unknown;
    readonly menuTrigger?: unknown;
    readonly collapse?: unknown;
    readonly backgroundColor?: unknown;
    readonly textColor?: unknown;
    readonly activeTextColor?: unknown;
    readonly collapseTransition?: unknown;
    readonly ellipsis?: unknown;
} & {
    mode: import("../../utils/props").BuildPropType<StringConstructor, "horizontal" | "vertical", unknown>;
    ellipsis: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    collapse: boolean;
    defaultActive: string;
    defaultOpeneds: string[];
    menuTrigger: import("../../utils/props").BuildPropType<StringConstructor, "click" | "hover", unknown>;
    collapseTransition: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    uniqueOpened: boolean;
    router: boolean;
} & {
    textColor?: string | undefined;
    backgroundColor?: string | undefined;
    activeTextColor?: string | undefined;
}> & {
    onClose?: ((index: string, indexPath: string[]) => any) | undefined;
    onSelect?: ((index: string, indexPath: string[], item: import("./src/types").MenuItemClicked, routerResult?: Promise<void | import("vue-router").NavigationFailure> | undefined) => any) | undefined;
    onOpen?: ((index: string, indexPath: string[]) => any) | undefined;
}, {
    mode: import("../../utils/props").BuildPropType<StringConstructor, "horizontal" | "vertical", unknown>;
    ellipsis: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    collapse: boolean;
    defaultActive: string;
    defaultOpeneds: string[];
    menuTrigger: import("../../utils/props").BuildPropType<StringConstructor, "click" | "hover", unknown>;
    collapseTransition: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    uniqueOpened: boolean;
    router: boolean;
}>> & {
    MenuItem: import("vue").DefineComponent<{
        readonly index: import("../../utils/props").BuildPropReturn<import("../../utils/props").PropWrapper<string | null>, null, unknown, unknown, unknown>;
        readonly route: import("../../utils/props").BuildPropReturn<import("../../utils/props").PropWrapper<import("vue-router").RouteLocationRaw>, unknown, unknown, unknown, unknown>;
        readonly disabled: BooleanConstructor;
    }, {
        Effect: typeof import("..").Effect;
        parentMenu: import("vue").ComputedRef<import("vue").ComponentInternalInstance>;
        rootMenu: import("./src/types").MenuProvider;
        paddingStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
        active: import("vue").ComputedRef<boolean>;
        handleClick: () => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (item: import("./src/types").MenuItemRegistered) => boolean;
    }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        readonly index?: unknown;
        readonly route?: unknown;
        readonly disabled?: unknown;
    } & {
        disabled: boolean;
        index: import("../../utils/props").BuildPropType<import("../../utils/props").PropWrapper<string | null>, unknown, unknown>;
    } & {
        route?: import("../../utils/props").BuildPropType<import("../../utils/props").PropWrapper<import("vue-router").RouteLocationRaw>, unknown, unknown> | undefined;
    }> & {
        onClick?: ((item: import("./src/types").MenuItemRegistered) => any) | undefined;
    }, {
        disabled: boolean;
        index: import("../../utils/props").BuildPropType<import("../../utils/props").PropWrapper<string | null>, unknown, unknown>;
        route: import("../../utils/props").BuildPropType<import("../../utils/props").PropWrapper<import("vue-router").RouteLocationRaw>, unknown, unknown>;
    }>;
    MenuItemGroup: import("vue").DefineComponent<{
        readonly title: StringConstructor;
    }, {
        levelPadding: import("vue").ComputedRef<number>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        readonly title?: unknown;
    } & {} & {
        title?: string | undefined;
    }>, {}>;
    SubMenu: import("vue").DefineComponent<{
        readonly index: import("../../utils/props").BuildPropReturn<StringConstructor, unknown, true, unknown, unknown>;
        readonly showTimeout: import("../../utils/props").BuildPropReturn<NumberConstructor, 300, unknown, unknown, unknown>;
        readonly hideTimeout: import("../../utils/props").BuildPropReturn<NumberConstructor, 300, unknown, unknown, unknown>;
        readonly popperClass: StringConstructor;
        readonly disabled: BooleanConstructor;
        readonly popperAppendToBody: import("../../utils/props").BuildPropReturn<BooleanConstructor, undefined, unknown, unknown, unknown>;
    }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        readonly index?: unknown;
        readonly showTimeout?: unknown;
        readonly hideTimeout?: unknown;
        readonly popperClass?: unknown;
        readonly disabled?: unknown;
        readonly popperAppendToBody?: unknown;
    } & {
        disabled: boolean;
        index: string;
        showTimeout: number;
        hideTimeout: number;
    } & {
        popperClass?: string | undefined;
        popperAppendToBody?: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown> | undefined;
    }>, {
        disabled: boolean;
        popperAppendToBody: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
        showTimeout: number;
        hideTimeout: number;
    }>;
};
export default ElMenu;
export declare const ElMenuItem: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    readonly index: import("../../utils/props").BuildPropReturn<import("../../utils/props").PropWrapper<string | null>, null, unknown, unknown, unknown>;
    readonly route: import("../../utils/props").BuildPropReturn<import("../../utils/props").PropWrapper<import("vue-router").RouteLocationRaw>, unknown, unknown, unknown, unknown>;
    readonly disabled: BooleanConstructor;
}, {
    Effect: typeof import("..").Effect;
    parentMenu: import("vue").ComputedRef<import("vue").ComponentInternalInstance>;
    rootMenu: import("./src/types").MenuProvider;
    paddingStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    active: import("vue").ComputedRef<boolean>;
    handleClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (item: import("./src/types").MenuItemRegistered) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly index?: unknown;
    readonly route?: unknown;
    readonly disabled?: unknown;
} & {
    disabled: boolean;
    index: import("../../utils/props").BuildPropType<import("../../utils/props").PropWrapper<string | null>, unknown, unknown>;
} & {
    route?: import("../../utils/props").BuildPropType<import("../../utils/props").PropWrapper<import("vue-router").RouteLocationRaw>, unknown, unknown> | undefined;
}> & {
    onClick?: ((item: import("./src/types").MenuItemRegistered) => any) | undefined;
}, {
    disabled: boolean;
    index: import("../../utils/props").BuildPropType<import("../../utils/props").PropWrapper<string | null>, unknown, unknown>;
    route: import("../../utils/props").BuildPropType<import("../../utils/props").PropWrapper<import("vue-router").RouteLocationRaw>, unknown, unknown>;
}>>;
export declare const ElMenuItemGroup: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    readonly title: StringConstructor;
}, {
    levelPadding: import("vue").ComputedRef<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly title?: unknown;
} & {} & {
    title?: string | undefined;
}>, {}>>;
export declare const ElSubMenu: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    readonly index: import("../../utils/props").BuildPropReturn<StringConstructor, unknown, true, unknown, unknown>;
    readonly showTimeout: import("../../utils/props").BuildPropReturn<NumberConstructor, 300, unknown, unknown, unknown>;
    readonly hideTimeout: import("../../utils/props").BuildPropReturn<NumberConstructor, 300, unknown, unknown, unknown>;
    readonly popperClass: StringConstructor;
    readonly disabled: BooleanConstructor;
    readonly popperAppendToBody: import("../../utils/props").BuildPropReturn<BooleanConstructor, undefined, unknown, unknown, unknown>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly index?: unknown;
    readonly showTimeout?: unknown;
    readonly hideTimeout?: unknown;
    readonly popperClass?: unknown;
    readonly disabled?: unknown;
    readonly popperAppendToBody?: unknown;
} & {
    disabled: boolean;
    index: string;
    showTimeout: number;
    hideTimeout: number;
} & {
    popperClass?: string | undefined;
    popperAppendToBody?: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown> | undefined;
}>, {
    disabled: boolean;
    popperAppendToBody: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    showTimeout: number;
    hideTimeout: number;
}>>;
export * from './src/menu';
export * from './src/menu-item';
export * from './src/menu-item-group';
export * from './src/sub-menu';
export * from './src/types';
