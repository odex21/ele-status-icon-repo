'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defaults = require('./defaults.js');
require('./packages/components/index.js');
require('./packages/directives/index.js');
require('./packages/hooks/index.js');
require('./packages/tokens/index.js');
var makeInstaller = require('./make-installer.js');
var affix = require('./packages/components/affix/src/affix.js');
var index = require('./packages/components/affix/index.js');
var alert = require('./packages/components/alert/src/alert.js');
var index$1 = require('./packages/components/alert/index.js');
var index$2 = require('./packages/components/autocomplete/index.js');
var avatar = require('./packages/components/avatar/src/avatar2.js');
var index$3 = require('./packages/components/avatar/index.js');
var backtop = require('./packages/components/backtop/src/backtop.js');
var index$4 = require('./packages/components/backtop/index.js');
var badge = require('./packages/components/badge/src/badge2.js');
var index$5 = require('./packages/components/badge/index.js');
var breadcrumb = require('./packages/components/breadcrumb/src/breadcrumb2.js');
var breadcrumbItem = require('./packages/components/breadcrumb/src/breadcrumb-item2.js');
var index$6 = require('./packages/components/breadcrumb/index.js');
var button = require('./packages/components/button/src/button2.js');
var index$7 = require('./packages/components/button/index.js');
var calendar = require('./packages/components/calendar/src/calendar.js');
var index$8 = require('./packages/components/calendar/index.js');
var card = require('./packages/components/card/src/card2.js');
var index$9 = require('./packages/components/card/index.js');
var index$a = require('./packages/components/carousel/index.js');
var index$b = require('./packages/components/cascader/index.js');
var types = require('./packages/components/cascader-panel/src/types.js');
var config = require('./packages/components/cascader-panel/src/config.js');
var index$c = require('./packages/components/cascader-panel/index.js');
var index$d = require('./packages/components/check-tag/index.js');
var index$e = require('./packages/components/checkbox/index.js');
var col = require('./packages/components/col/src/col.js');
var index$f = require('./packages/components/col/index.js');
var index$g = require('./packages/components/collapse/index.js');
var index$h = require('./packages/components/collapse-transition/index.js');
var index$i = require('./packages/components/color-picker/index.js');
var configProvider = require('./packages/components/config-provider/src/config-provider.js');
var index$j = require('./packages/components/config-provider/index.js');
var index$k = require('./packages/components/container/index.js');
var index$l = require('./packages/components/date-picker/index.js');
var index$m = require('./packages/components/descriptions/index.js');
var useDialog = require('./packages/components/dialog/src/use-dialog.js');
var dialog = require('./packages/components/dialog/src/dialog.js');
var index$n = require('./packages/components/dialog/index.js');
var divider = require('./packages/components/divider/src/divider.js');
var index$o = require('./packages/components/divider/index.js');
var drawer = require('./packages/components/drawer/src/drawer.js');
var index$p = require('./packages/components/drawer/index.js');
var index$q = require('./packages/components/dropdown/index.js');
var empty = require('./packages/components/empty/src/empty2.js');
var index$r = require('./packages/components/empty/index.js');
var index$s = require('./packages/components/form/index.js');
var icon = require('./packages/components/icon/src/icon.js');
var index$t = require('./packages/components/icon/index.js');
var image = require('./packages/components/image/src/image2.js');
var index$u = require('./packages/components/image/index.js');
var imageViewer = require('./packages/components/image-viewer/src/image-viewer.js');
var index$v = require('./packages/components/image-viewer/index.js');
var input = require('./packages/components/input/src/input2.js');
var index$w = require('./packages/components/input/index.js');
var inputNumber = require('./packages/components/input-number/src/input-number2.js');
var index$x = require('./packages/components/input-number/index.js');
var link = require('./packages/components/link/src/link2.js');
var index$y = require('./packages/components/link/index.js');
var menu = require('./packages/components/menu/src/menu.js');
var menuItem = require('./packages/components/menu/src/menu-item.js');
var menuItemGroup = require('./packages/components/menu/src/menu-item-group2.js');
var subMenu = require('./packages/components/menu/src/sub-menu.js');
var index$z = require('./packages/components/menu/index.js');
var overlay = require('./packages/components/overlay/src/overlay.js');
var index$A = require('./packages/components/overlay/index.js');
var pageHeader = require('./packages/components/page-header/src/page-header2.js');
var index$B = require('./packages/components/page-header/index.js');
var pagination = require('./packages/components/pagination/src/pagination.js');
var index$C = require('./packages/components/pagination/index.js');
var popconfirm = require('./packages/components/popconfirm/src/popconfirm.js');
var index$D = require('./packages/components/popconfirm/index.js');
var defaults$1 = require('./packages/components/popper/src/use-popper/defaults.js');
var index$F = require('./packages/components/popper/src/use-popper/index.js');
var popper = require('./packages/components/popper/src/renderers/popper.js');
var trigger = require('./packages/components/popper/src/renderers/trigger.js');
var arrow = require('./packages/components/popper/src/renderers/arrow.js');
var index$E = require('./packages/components/popper/index.js');
var progress = require('./packages/components/progress/src/progress.js');
var index$G = require('./packages/components/progress/index.js');
var radio = require('./packages/components/radio/src/radio.js');
var radioGroup = require('./packages/components/radio/src/radio-group.js');
var radioButton = require('./packages/components/radio/src/radio-button2.js');
var index$H = require('./packages/components/radio/index.js');
var rate = require('./packages/components/rate/src/rate2.js');
var index$I = require('./packages/components/rate/index.js');
var result = require('./packages/components/result/src/result2.js');
var index$J = require('./packages/components/result/index.js');
var row = require('./packages/components/row/src/row.js');
var index$K = require('./packages/components/row/index.js');
var util = require('./packages/components/scrollbar/src/util.js');
var scrollbar = require('./packages/components/scrollbar/src/scrollbar2.js');
var bar = require('./packages/components/scrollbar/src/bar.js');
var index$L = require('./packages/components/scrollbar/index.js');
var token = require('./packages/components/select/src/token.js');
var index$M = require('./packages/components/select/index.js');
var token$1 = require('./packages/components/select-v2/src/token.js');
var index$N = require('./packages/components/select-v2/index.js');
var skeleton = require('./packages/components/skeleton/src/skeleton.js');
var skeletonItem = require('./packages/components/skeleton/src/skeleton-item2.js');
var index$O = require('./packages/components/skeleton/index.js');
var index$P = require('./packages/components/slider/index.js');
var space = require('./packages/components/space/src/space.js');
var useSpace = require('./packages/components/space/src/use-space.js');
var index$Q = require('./packages/components/space/index.js');
var index$R = require('./packages/components/steps/index.js');
var _switch = require('./packages/components/switch/src/switch.js');
var index$S = require('./packages/components/switch/index.js');
var index$T = require('./packages/components/table/index.js');
var tabs = require('./packages/components/tabs/src/tabs.js');
var tabBar = require('./packages/components/tabs/src/tab-bar.js');
var tabNav = require('./packages/components/tabs/src/tab-nav.js');
var tabPane = require('./packages/components/tabs/src/tab-pane.js');
var index$U = require('./packages/components/tabs/index.js');
var tag = require('./packages/components/tag/src/tag2.js');
var index$V = require('./packages/components/tag/index.js');
var dateUtils = require('./packages/components/time-picker/src/common/date-utils.js');
var constant = require('./packages/components/time-picker/src/common/constant.js');
var props = require('./packages/components/time-picker/src/common/props.js');
var picker_vue_vue_type_script_lang = require('./packages/components/time-picker/src/common/picker.vue_vue_type_script_lang.js');
var panelTimePick_vue_vue_type_script_lang = require('./packages/components/time-picker/src/time-picker-com/panel-time-pick.vue_vue_type_script_lang.js');
var index$W = require('./packages/components/time-picker/index.js');
var index$X = require('./packages/components/time-select/index.js');
var index$Y = require('./packages/components/timeline/index.js');
var index$Z = require('./packages/components/tooltip/index.js');
var constants = require('./packages/utils/constants.js');
var index$_ = require('./packages/components/transfer/index.js');
var index$$ = require('./packages/components/tree/index.js');
var index$10 = require('./packages/components/tree-v2/index.js');
var index$11 = require('./packages/components/upload/index.js');
var fixedSizeList = require('./packages/components/virtual-list/src/components/fixed-size-list.js');
var dynamicSizeList = require('./packages/components/virtual-list/src/components/dynamic-size-list.js');
var fixedSizeGrid = require('./packages/components/virtual-list/src/components/fixed-size-grid.js');
var dynamicSizeGrid = require('./packages/components/virtual-list/src/components/dynamic-size-grid.js');
var props$1 = require('./packages/components/virtual-list/src/props.js');
var index$12 = require('./packages/components/infinite-scroll/index.js');
var index$13 = require('./packages/components/loading/index.js');
var message = require('./packages/components/message/src/message2.js');
var index$14 = require('./packages/components/message/index.js');
var index$15 = require('./packages/components/message-box/index.js');
var notification = require('./packages/components/notification/src/notification2.js');
var index$16 = require('./packages/components/notification/index.js');
var index$17 = require('./packages/components/popover/index.js');
var index$18 = require('./packages/directives/click-outside/index.js');
var index$19 = require('./packages/directives/repeat-click/index.js');
var index$1a = require('./packages/directives/trap-focus/index.js');
var index$1b = require('./packages/directives/mousewheel/index.js');
var index$1c = require('./packages/directives/resize/index.js');
var index$1d = require('./packages/hooks/use-attrs/index.js');
var index$1e = require('./packages/hooks/use-common-props/index.js');
var index$1f = require('./packages/hooks/use-focus/index.js');
var index$1g = require('./packages/hooks/use-form-item/index.js');
var index$1h = require('./packages/hooks/use-global-config/index.js');
var index$1i = require('./packages/hooks/use-locale/index.js');
var index$1j = require('./packages/hooks/use-lockscreen/index.js');
var index$1k = require('./packages/hooks/use-modal/index.js');
var index$1l = require('./packages/hooks/use-model-toggle/index.js');
var index$1m = require('./packages/hooks/use-popper/index.js');
var index$1n = require('./packages/hooks/use-prevent-global/index.js');
var index$1o = require('./packages/hooks/use-prop/index.js');
var index$1p = require('./packages/hooks/use-restore-active/index.js');
var index$1q = require('./packages/hooks/use-same-target/index.js');
var index$1r = require('./packages/hooks/use-teleport/index.js');
var index$1s = require('./packages/hooks/use-throttle-render/index.js');
var index$1t = require('./packages/hooks/use-timeout/index.js');
var form = require('./packages/tokens/form.js');
var button$1 = require('./packages/tokens/button.js');
var breadcrumb$1 = require('./packages/tokens/breadcrumb.js');
var pagination$1 = require('./packages/tokens/pagination.js');
var configProvider$1 = require('./packages/tokens/config-provider.js');
var radio$1 = require('./packages/tokens/radio.js');
var tabs$1 = require('./packages/tokens/tabs.js');
var scrollbar$1 = require('./packages/tokens/scrollbar.js');

const install = defaults["default"].install;
const version = defaults["default"].version;

exports["default"] = defaults["default"];
exports.makeInstaller = makeInstaller.makeInstaller;
exports.affixEmits = affix.affixEmits;
exports.affixProps = affix.affixProps;
exports.ElAffix = index.ElAffix;
exports.alertEmits = alert.alertEmits;
exports.alertProps = alert.alertProps;
exports.ElAlert = index$1.ElAlert;
exports.ElAutocomplete = index$2.ElAutocomplete;
exports.avatarEmits = avatar.avatarEmits;
exports.avatarProps = avatar.avatarProps;
exports.ElAvatar = index$3.ElAvatar;
exports.backtopEmits = backtop.backtopEmits;
exports.backtopProps = backtop.backtopProps;
exports.ElBacktop = index$4.ElBacktop;
exports.badgeProps = badge.badgeProps;
exports.ElBadge = index$5.ElBadge;
exports.breadcrumbProps = breadcrumb.breadcrumbProps;
exports.breadcrumbItemProps = breadcrumbItem.breadcrumbItemProps;
exports.ElBreadcrumb = index$6.ElBreadcrumb;
exports.ElBreadcrumbItem = index$6.ElBreadcrumbItem;
exports.buttonEmits = button.buttonEmits;
exports.buttonNativeType = button.buttonNativeType;
exports.buttonProps = button.buttonProps;
exports.buttonSize = button.buttonSize;
exports.buttonType = button.buttonType;
exports.ElButton = index$7.ElButton;
exports.ElButtonGroup = index$7.ElButtonGroup;
exports.calendarEmits = calendar.calendarEmits;
exports.calendarProps = calendar.calendarProps;
exports.ElCalendar = index$8.ElCalendar;
exports.cardProps = card.cardProps;
exports.ElCard = index$9.ElCard;
exports.ElCarousel = index$a.ElCarousel;
exports.ElCarouselItem = index$a.ElCarouselItem;
exports.ElCascader = index$b.ElCascader;
exports.CASCADER_PANEL_INJECTION_KEY = types.CASCADER_PANEL_INJECTION_KEY;
exports.ExpandTrigger = types.ExpandTrigger;
exports.CommonProps = config.CommonProps;
exports.DefaultProps = config.DefaultProps;
exports.useCascaderConfig = config.useCascaderConfig;
exports.ElCascaderPanel = index$c.ElCascaderPanel;
exports.ElCheckTag = index$d.ElCheckTag;
exports.ElCheckbox = index$e.ElCheckbox;
exports.ElCheckboxButton = index$e.ElCheckboxButton;
exports.ElCheckboxGroup = index$e.ElCheckboxGroup;
exports.colProps = col.colProps;
exports.ElCol = index$f.ElCol;
exports.ElCollapse = index$g.ElCollapse;
exports.ElCollapseItem = index$g.ElCollapseItem;
exports.ElCollapseTransition = index$h.ElCollapseTransition;
exports.ElColorPicker = index$i.ElColorPicker;
exports.configProviderProps = configProvider.configProviderProps;
exports.ElConfigProvider = index$j.ElConfigProvider;
exports.ElAside = index$k.ElAside;
exports.ElContainer = index$k.ElContainer;
exports.ElFooter = index$k.ElFooter;
exports.ElHeader = index$k.ElHeader;
exports.ElMain = index$k.ElMain;
exports.ElDatePicker = index$l.ElDatePicker;
exports.ElDescriptions = index$m.ElDescriptions;
exports.ElDescriptionsItem = index$m.ElDescriptionsItem;
exports.useDialog = useDialog.useDialog;
exports.dialogEmits = dialog.dialogEmits;
exports.dialogProps = dialog.dialogProps;
exports.ElDialog = index$n.ElDialog;
exports.dividerProps = divider.dividerProps;
exports.ElDivider = index$o.ElDivider;
exports.drawerEmits = drawer.drawerEmits;
exports.drawerProps = drawer.drawerProps;
exports.ElDrawer = index$p.ElDrawer;
exports.ElDropdown = index$q.ElDropdown;
exports.ElDropdownItem = index$q.ElDropdownItem;
exports.ElDropdownMenu = index$q.ElDropdownMenu;
exports.emptyProps = empty.emptyProps;
exports.ElEmpty = index$r.ElEmpty;
exports.ElForm = index$s.ElForm;
exports.ElFormItem = index$s.ElFormItem;
exports.iconProps = icon.iconProps;
exports.ElIcon = index$t.ElIcon;
exports.imageEmits = image.imageEmits;
exports.imageProps = image.imageProps;
exports.ElImage = index$u.ElImage;
exports.imageViewerEmits = imageViewer.imageViewerEmits;
exports.imageViewerProps = imageViewer.imageViewerProps;
exports.ElImageViewer = index$v.ElImageViewer;
exports.inputEmits = input.inputEmits;
exports.inputProps = input.inputProps;
exports.ElInput = index$w.ElInput;
exports.inputNumberEmits = inputNumber.inputNumberEmits;
exports.inputNumberProps = inputNumber.inputNumberProps;
exports.ElInputNumber = index$x.ElInputNumber;
exports.linkEmits = link.linkEmits;
exports.linkProps = link.linkProps;
exports.ElLink = index$y.ElLink;
exports.menuEmits = menu.menuEmits;
exports.menuProps = menu.menuProps;
exports.menuItemEmits = menuItem.menuItemEmits;
exports.menuItemProps = menuItem.menuItemProps;
exports.menuItemGroupProps = menuItemGroup.menuItemGroupProps;
exports.subMenuProps = subMenu.subMenuProps;
exports.ElMenu = index$z.ElMenu;
exports.ElMenuItem = index$z.ElMenuItem;
exports.ElMenuItemGroup = index$z.ElMenuItemGroup;
exports.ElSubMenu = index$z.ElSubMenu;
exports.overlayEmits = overlay.overlayEmits;
exports.overlayProps = overlay.overlayProps;
exports.ElOverlay = index$A.ElOverlay;
exports.pageHeaderEmits = pageHeader.pageHeaderEmits;
exports.pageHeaderProps = pageHeader.pageHeaderProps;
exports.ElPageHeader = index$B.ElPageHeader;
exports.paginationEmits = pagination.paginationEmits;
exports.paginationProps = pagination.paginationProps;
exports.ElPagination = index$C.ElPagination;
exports.popconfirmEmits = popconfirm.popconfirmEmits;
exports.popconfirmProps = popconfirm.popconfirmProps;
exports.ElPopconfirm = index$D.ElPopconfirm;
exports.Effect = defaults$1.Effect;
exports.popperDefaultProps = defaults$1["default"];
exports.usePopper = index$F["default"];
exports.renderPopper = popper["default"];
exports.renderTrigger = trigger["default"];
exports.renderArrow = arrow["default"];
exports.ElPopper = index$E.ElPopper;
exports.progressProps = progress.progressProps;
exports.ElProgress = index$G.ElProgress;
exports.radioEmits = radio.radioEmits;
exports.radioProps = radio.radioProps;
exports.radioPropsBase = radio.radioPropsBase;
exports.useRadio = radio.useRadio;
exports.radioGroupEmits = radioGroup.radioGroupEmits;
exports.radioGroupProps = radioGroup.radioGroupProps;
exports.radioButtonProps = radioButton.radioButtonProps;
exports.ElRadio = index$H.ElRadio;
exports.ElRadioButton = index$H.ElRadioButton;
exports.ElRadioGroup = index$H.ElRadioGroup;
exports.rateEmits = rate.rateEmits;
exports.rateProps = rate.rateProps;
exports.ElRate = index$I.ElRate;
exports.IconComponentMap = result.IconComponentMap;
exports.IconMap = result.IconMap;
exports.resultProps = result.resultProps;
exports.ElResult = index$J.ElResult;
exports.rowProps = row.rowProps;
exports.ElRow = index$K.ElRow;
exports.BAR_MAP = util.BAR_MAP;
exports.renderThumbStyle = util.renderThumbStyle;
exports.scrollbarEmits = scrollbar.scrollbarEmits;
exports.scrollbarProps = scrollbar.scrollbarProps;
exports.barProps = bar.barProps;
exports.ElScrollbar = index$L.ElScrollbar;
exports.selectGroupKey = token.selectGroupKey;
exports.selectKey = token.selectKey;
exports.ElOption = index$M.ElOption;
exports.ElOptionGroup = index$M.ElOptionGroup;
exports.ElSelect = index$M.ElSelect;
exports.selectV2InjectionKey = token$1.selectV2InjectionKey;
exports.ElSelectV2 = index$N.ElSelectV2;
exports.skeletonProps = skeleton.skeletonProps;
exports.skeletonItemProps = skeletonItem.skeletonItemProps;
exports.ElSkeleton = index$O.ElSkeleton;
exports.ElSkeletonItem = index$O.ElSkeletonItem;
exports.ElSlider = index$P.ElSlider;
exports.spaceProps = space.spaceProps;
exports.useSpace = useSpace.useSpace;
exports.ElSpace = index$Q.ElSpace;
exports.ElStep = index$R.ElStep;
exports.ElSteps = index$R.ElSteps;
exports.switchEmits = _switch.switchEmits;
exports.switchProps = _switch.switchProps;
exports.ElSwitch = index$S.ElSwitch;
exports.ElTable = index$T.ElTable;
exports.ElTableColumn = index$T.ElTableColumn;
exports.tabsEmits = tabs.tabsEmits;
exports.tabsProps = tabs.tabsProps;
exports.tabBar = tabBar.tabBar;
exports.tabNavProps = tabNav.tabNavProps;
exports.tabPaneProps = tabPane.tabPaneProps;
exports.ElTabPane = index$U.ElTabPane;
exports.ElTabs = index$U.ElTabs;
exports.tagEmits = tag.tagEmits;
exports.tagProps = tag.tagProps;
exports.ElTag = index$V.ElTag;
exports.extractDateFormat = dateUtils.extractDateFormat;
exports.extractTimeFormat = dateUtils.extractTimeFormat;
exports.rangeArr = dateUtils.rangeArr;
exports.DEFAULT_FORMATS_DATE = constant.DEFAULT_FORMATS_DATE;
exports.DEFAULT_FORMATS_DATEPICKER = constant.DEFAULT_FORMATS_DATEPICKER;
exports.DEFAULT_FORMATS_TIME = constant.DEFAULT_FORMATS_TIME;
exports.timePickerDefaultProps = props.timePickerDefaultProps;
exports.CommonPicker = picker_vue_vue_type_script_lang["default"];
exports.TimePickPanel = panelTimePick_vue_vue_type_script_lang["default"];
exports.ElTimePicker = index$W.ElTimePicker;
exports.ElTimeSelect = index$X.ElTimeSelect;
exports.ElTimeline = index$Y.ElTimeline;
exports.ElTimelineItem = index$Y.ElTimelineItem;
exports.ElTooltip = index$Z.ElTooltip;
exports.CHANGE_EVENT = constants.CHANGE_EVENT;
exports.ElTransfer = index$_.ElTransfer;
exports.ElTree = index$$.ElTree;
exports.ElTreeV2 = index$10.ElTreeV2;
exports.ElUpload = index$11.ElUpload;
exports.FixedSizeList = fixedSizeList["default"];
exports.DynamicSizeList = dynamicSizeList["default"];
exports.FixedSizeGrid = fixedSizeGrid["default"];
exports.DynamicSizeGrid = dynamicSizeGrid["default"];
exports.virtualizedGridProps = props$1.virtualizedGridProps;
exports.virtualizedListProps = props$1.virtualizedListProps;
exports.virtualizedProps = props$1.virtualizedProps;
exports.virtualizedScrollbarProps = props$1.virtualizedScrollbarProps;
exports.ElInfiniteScroll = index$12.ElInfiniteScroll;
exports.ElLoading = index$13.ElLoading;
exports.ElLoadingDirective = index$13.ElLoadingDirective;
exports.ElLoadingService = index$13.ElLoadingService;
exports.messageEmits = message.messageEmits;
exports.messageProps = message.messageProps;
exports.messageTypes = message.messageTypes;
exports.ElMessage = index$14.ElMessage;
exports.ElMessageBox = index$15.ElMessageBox;
exports.notificationEmits = notification.notificationEmits;
exports.notificationProps = notification.notificationProps;
exports.notificationTypes = notification.notificationTypes;
exports.ElNotification = index$16.ElNotification;
exports.ElPopover = index$17.ElPopover;
exports.ElPopoverDirective = index$17.ElPopoverDirective;
exports.ClickOutside = index$18["default"];
exports.RepeatClick = index$19["default"];
exports.TrapFocus = index$1a["default"];
exports.Mousewheel = index$1b["default"];
exports.Resize = index$1c["default"];
exports.useAttrs = index$1d.useAttrs;
exports.useDisabled = index$1e.useDisabled;
exports.useSize = index$1e.useSize;
exports.useSizeProp = index$1e.useSizeProp;
exports.useFocus = index$1f.useFocus;
exports.useFormItem = index$1g.useFormItem;
exports.useGlobalConfig = index$1h.useGlobalConfig;
exports.buildTranslator = index$1i.buildTranslator;
exports.localeContextKey = index$1i.localeContextKey;
exports.localeProviderMaker = index$1i.localeProviderMaker;
exports.provideLocale = index$1i.provideLocale;
exports.translate = index$1i.translate;
exports.useLocale = index$1i.useLocale;
exports.useLocaleProps = index$1i.useLocaleProps;
exports.useLockscreen = index$1j.useLockscreen;
exports.useModal = index$1k.useModal;
exports.useModelToggle = index$1l.useModelToggle;
exports.useModelToggleEmits = index$1l.useModelToggleEmits;
exports.useModelToggleProps = index$1l.useModelToggleProps;
exports.DARK_EFFECT = index$1m.DARK_EFFECT;
exports.LIGHT_EFFECT = index$1m.LIGHT_EFFECT;
exports.usePopperControlProps = index$1m.usePopperControlProps;
exports.usePopperHook = index$1m.usePopperHook;
exports.usePopperProps = index$1m.usePopperProps;
exports.usePreventGlobal = index$1n.usePreventGlobal;
exports.useProp = index$1o.useProp;
exports.useRestoreActive = index$1p.useRestoreActive;
exports.useSameTarget = index$1q.useSameTarget;
exports.useTeleport = index$1r.useTeleport;
exports.useThrottleRender = index$1s.useThrottleRender;
exports.useTimeout = index$1t.useTimeout;
exports.elFormItemKey = form.elFormItemKey;
exports.elFormKey = form.elFormKey;
exports.buttonGroupContextKey = button$1.buttonGroupContextKey;
exports.elBreadcrumbKey = breadcrumb$1.elBreadcrumbKey;
exports.elPaginationKey = pagination$1.elPaginationKey;
exports.configProviderContextKey = configProvider$1.configProviderContextKey;
exports.radioGroupKey = radio$1.radioGroupKey;
exports.tabsRootContextKey = tabs$1.tabsRootContextKey;
exports.scrollbarContextKey = scrollbar$1.scrollbarContextKey;
exports.install = install;
exports.version = version;
//# sourceMappingURL=index.js.map
