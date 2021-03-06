import { withInstall, withNoopInstall } from '../../utils/with-install.mjs';
import Menu from './src/menu.mjs';
export { menuEmits, menuProps } from './src/menu.mjs';
import './src/menu-item2.mjs';
import './src/menu-item-group.mjs';
import SubMenu from './src/sub-menu.mjs';
export { subMenuProps } from './src/sub-menu.mjs';
export { menuItemEmits, menuItemProps } from './src/menu-item.mjs';
export { menuItemGroupProps } from './src/menu-item-group2.mjs';
import './src/types.mjs';
import script from './src/menu-item.vue_vue_type_script_lang.mjs';
import script$1 from './src/menu-item-group.vue_vue_type_script_lang.mjs';

const ElMenu = withInstall(Menu, {
  MenuItem: script,
  MenuItemGroup: script$1,
  SubMenu
});
const ElMenuItem = withNoopInstall(script);
const ElMenuItemGroup = withNoopInstall(script$1);
const ElSubMenu = withNoopInstall(SubMenu);

export { ElMenu, ElMenuItem, ElMenuItemGroup, ElSubMenu, ElMenu as default };
//# sourceMappingURL=index.mjs.map
