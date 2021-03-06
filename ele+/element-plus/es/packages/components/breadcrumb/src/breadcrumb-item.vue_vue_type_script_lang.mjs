import { defineComponent, getCurrentInstance, inject, ref, onMounted } from 'vue';
import { ElIcon } from '../../icon/index.mjs';
import '../../../tokens/index.mjs';
import { breadcrumbItemProps } from './breadcrumb-item2.mjs';
import { elBreadcrumbKey } from '../../../tokens/breadcrumb.mjs';

const COMPONENT_NAME = "ElBreadcrumbItem";
var script = defineComponent({
  name: COMPONENT_NAME,
  components: {
    ElIcon
  },
  props: breadcrumbItemProps,
  setup(props) {
    const instance = getCurrentInstance();
    const router = instance.appContext.config.globalProperties.$router;
    const parent = inject(elBreadcrumbKey, void 0);
    const link = ref();
    onMounted(() => {
      link.value.setAttribute("role", "link");
      link.value.addEventListener("click", () => {
        if (!props.to || !router)
          return;
        props.replace ? router.replace(props.to) : router.push(props.to);
      });
    });
    return {
      link,
      separator: parent == null ? void 0 : parent.separator,
      separatorIcon: parent == null ? void 0 : parent.separatorIcon
    };
  }
});

export { script as default };
//# sourceMappingURL=breadcrumb-item.vue_vue_type_script_lang.mjs.map
