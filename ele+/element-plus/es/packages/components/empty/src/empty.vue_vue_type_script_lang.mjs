import { defineComponent, computed } from 'vue';
import '../../../hooks/index.mjs';
import './img-empty.mjs';
import { emptyProps } from './empty2.mjs';
import script$1 from './img-empty.vue_vue_type_script_lang.mjs';
import { useLocale } from '../../../hooks/use-locale/index.mjs';

var script = defineComponent({
  name: "ElEmpty",
  components: {
    ImgEmpty: script$1
  },
  props: emptyProps,
  setup(props) {
    const { t } = useLocale();
    const emptyDescription = computed(() => props.description || t("el.table.emptyText"));
    const imageStyle = computed(() => ({
      width: props.imageSize ? `${props.imageSize}px` : ""
    }));
    return {
      emptyDescription,
      imageStyle
    };
  }
});

export { script as default };
//# sourceMappingURL=empty.vue_vue_type_script_lang.mjs.map
