import { defineComponent, ref, computed, watch, provide, reactive, onMounted, nextTick } from 'vue';
import { useResizeObserver, useEventListener } from '@vueuse/core';
import { addUnit, isNumber } from '../../../utils/util.mjs';
import { debugWarn } from '../../../utils/error.mjs';
import '../../../tokens/index.mjs';
import './bar2.mjs';
import { scrollbarProps, scrollbarEmits } from './scrollbar2.mjs';
import script$1 from './bar.vue_vue_type_script_lang.mjs';
import { scrollbarContextKey } from '../../../tokens/scrollbar.mjs';

var script = defineComponent({
  name: "ElScrollbar",
  components: {
    Bar: script$1
  },
  props: scrollbarProps,
  emits: scrollbarEmits,
  setup(props, { emit }) {
    let stopResizeObserver = void 0;
    let stopResizeListener = void 0;
    const scrollbar$ = ref();
    const wrap$ = ref();
    const resize$ = ref();
    const sizeWidth = ref("0");
    const sizeHeight = ref("0");
    const moveX = ref(0);
    const moveY = ref(0);
    const ratioY = ref(1);
    const ratioX = ref(1);
    const SCOPE = "ElScrollbar";
    const GAP = 4;
    const style = computed(() => {
      const style2 = {};
      if (props.height)
        style2.height = addUnit(props.height);
      if (props.maxHeight)
        style2.maxHeight = addUnit(props.maxHeight);
      return [props.wrapStyle, style2];
    });
    const handleScroll = () => {
      if (wrap$.value) {
        const offsetHeight = wrap$.value.offsetHeight - GAP;
        const offsetWidth = wrap$.value.offsetWidth - GAP;
        moveY.value = wrap$.value.scrollTop * 100 / offsetHeight * ratioY.value;
        moveX.value = wrap$.value.scrollLeft * 100 / offsetWidth * ratioX.value;
        emit("scroll", {
          scrollTop: wrap$.value.scrollTop,
          scrollLeft: wrap$.value.scrollLeft
        });
      }
    };
    const setScrollTop = (value) => {
      if (!isNumber(value)) {
        debugWarn(SCOPE, "value must be a number");
        return;
      }
      wrap$.value.scrollTop = value;
    };
    const setScrollLeft = (value) => {
      if (!isNumber(value)) {
        debugWarn(SCOPE, "value must be a number");
        return;
      }
      wrap$.value.scrollLeft = value;
    };
    const update = () => {
      if (!wrap$.value)
        return;
      const offsetHeight = wrap$.value.offsetHeight - GAP;
      const offsetWidth = wrap$.value.offsetWidth - GAP;
      const originalHeight = offsetHeight ** 2 / wrap$.value.scrollHeight;
      const originalWidth = offsetWidth ** 2 / wrap$.value.scrollWidth;
      const height = Math.max(originalHeight, props.minSize);
      const width = Math.max(originalWidth, props.minSize);
      ratioY.value = originalHeight / (offsetHeight - originalHeight) / (height / (offsetHeight - height));
      ratioX.value = originalWidth / (offsetWidth - originalWidth) / (width / (offsetWidth - width));
      sizeHeight.value = height + GAP < offsetHeight ? `${height}px` : "";
      sizeWidth.value = width + GAP < offsetWidth ? `${width}px` : "";
    };
    watch(() => props.noresize, (noresize) => {
      if (noresize) {
        stopResizeObserver == null ? void 0 : stopResizeObserver();
        stopResizeListener == null ? void 0 : stopResizeListener();
      } else {
        ;
        ({ stop: stopResizeObserver } = useResizeObserver(resize$, update));
        stopResizeListener = useEventListener("resize", update);
      }
    }, { immediate: true });
    provide(scrollbarContextKey, reactive({
      scrollbarElement: scrollbar$,
      wrapElement: wrap$
    }));
    onMounted(() => {
      if (!props.native)
        nextTick(() => update());
    });
    return {
      scrollbar$,
      wrap$,
      resize$,
      moveX,
      moveY,
      ratioX,
      ratioY,
      sizeWidth,
      sizeHeight,
      style,
      update,
      handleScroll,
      setScrollTop,
      setScrollLeft
    };
  }
});

export { script as default };
//# sourceMappingURL=scrollbar.vue_vue_type_script_lang.mjs.map
