import { computed } from 'vue';
import '../../../../node_modules/.pnpm/@ctrl_tinycolor@3.4.0/node_modules/@ctrl/tinycolor/dist/module/public_api.mjs';
import { TinyColor } from '../../../../node_modules/.pnpm/@ctrl_tinycolor@3.4.0/node_modules/@ctrl/tinycolor/dist/module/index.mjs';

function useMenuColor(props) {
  const menuBarColor = computed(() => {
    const color = props.backgroundColor;
    if (!color) {
      return "";
    } else {
      return new TinyColor(color).shade(20).toString();
    }
  });
  return menuBarColor;
}

export { useMenuColor as default };
//# sourceMappingURL=use-menu-color.mjs.map
