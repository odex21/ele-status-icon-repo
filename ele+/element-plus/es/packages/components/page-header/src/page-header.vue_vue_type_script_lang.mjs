import { defineComponent } from 'vue';
import { ElIcon } from '../../icon/index.mjs';
import '../../../hooks/index.mjs';
import { pageHeaderProps, pageHeaderEmits } from './page-header2.mjs';
import { useLocale } from '../../../hooks/use-locale/index.mjs';

var script = defineComponent({
  name: "ElPageHeader",
  components: {
    ElIcon
  },
  props: pageHeaderProps,
  emits: pageHeaderEmits,
  setup(_, { emit }) {
    const { t } = useLocale();
    function handleClick() {
      emit("back");
    }
    return {
      handleClick,
      t
    };
  }
});

export { script as default };
//# sourceMappingURL=page-header.vue_vue_type_script_lang.mjs.map
