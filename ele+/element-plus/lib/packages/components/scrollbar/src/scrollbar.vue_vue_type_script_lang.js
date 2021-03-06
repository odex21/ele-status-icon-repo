'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var core = require('@vueuse/core');
var util = require('../../../utils/util.js');
var error = require('../../../utils/error.js');
require('../../../tokens/index.js');
require('./bar2.js');
var scrollbar = require('./scrollbar2.js');
var bar_vue_vue_type_script_lang = require('./bar.vue_vue_type_script_lang.js');
var scrollbar$1 = require('../../../tokens/scrollbar.js');

var script = vue.defineComponent({
  name: "ElScrollbar",
  components: {
    Bar: bar_vue_vue_type_script_lang["default"]
  },
  props: scrollbar.scrollbarProps,
  emits: scrollbar.scrollbarEmits,
  setup(props, { emit }) {
    let stopResizeObserver = void 0;
    let stopResizeListener = void 0;
    const scrollbar$ = vue.ref();
    const wrap$ = vue.ref();
    const resize$ = vue.ref();
    const sizeWidth = vue.ref("0");
    const sizeHeight = vue.ref("0");
    const moveX = vue.ref(0);
    const moveY = vue.ref(0);
    const ratioY = vue.ref(1);
    const ratioX = vue.ref(1);
    const SCOPE = "ElScrollbar";
    const GAP = 4;
    const style = vue.computed(() => {
      const style2 = {};
      if (props.height)
        style2.height = util.addUnit(props.height);
      if (props.maxHeight)
        style2.maxHeight = util.addUnit(props.maxHeight);
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
      if (!util.isNumber(value)) {
        error.debugWarn(SCOPE, "value must be a number");
        return;
      }
      wrap$.value.scrollTop = value;
    };
    const setScrollLeft = (value) => {
      if (!util.isNumber(value)) {
        error.debugWarn(SCOPE, "value must be a number");
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
    vue.watch(() => props.noresize, (noresize) => {
      if (noresize) {
        stopResizeObserver == null ? void 0 : stopResizeObserver();
        stopResizeListener == null ? void 0 : stopResizeListener();
      } else {
        ;
        ({ stop: stopResizeObserver } = core.useResizeObserver(resize$, update));
        stopResizeListener = core.useEventListener("resize", update);
      }
    }, { immediate: true });
    vue.provide(scrollbar$1.scrollbarContextKey, vue.reactive({
      scrollbarElement: scrollbar$,
      wrapElement: wrap$
    }));
    vue.onMounted(() => {
      if (!props.native)
        vue.nextTick(() => update());
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

exports["default"] = script;
//# sourceMappingURL=scrollbar.vue_vue_type_script_lang.js.map
