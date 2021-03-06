import { defineComponent, ref, computed, nextTick, watch, onMounted } from 'vue';
import { isString } from '@vue/shared';
import { isClient, useThrottleFn, useEventListener } from '@vueuse/core';
import '../../../hooks/index.mjs';
import { ElImageViewer } from '../../image-viewer/index.mjs';
import { isInContainer, getScrollContainer } from '../../../utils/dom.mjs';
import { imageProps, imageEmits } from './image2.mjs';
import { useLocale } from '../../../hooks/use-locale/index.mjs';
import { useAttrs } from '../../../hooks/use-attrs/index.mjs';

const isHtmlElement = (e) => e && e.nodeType === Node.ELEMENT_NODE;
let prevOverflow = "";
var script = defineComponent({
  name: "ElImage",
  components: {
    ImageViewer: ElImageViewer
  },
  inheritAttrs: false,
  props: imageProps,
  emits: imageEmits,
  setup(props, { emit, attrs: rawAttrs }) {
    const { t } = useLocale();
    const attrs = useAttrs();
    const hasLoadError = ref(false);
    const loading = ref(true);
    const imgWidth = ref(0);
    const imgHeight = ref(0);
    const showViewer = ref(false);
    const container = ref();
    const _scrollContainer = ref();
    let stopScrollListener;
    let stopWheelListener;
    const containerStyle = computed(() => rawAttrs.style);
    const imageStyle = computed(() => {
      const { fit } = props;
      if (isClient && fit) {
        return { objectFit: fit };
      }
      return {};
    });
    const preview = computed(() => {
      const { previewSrcList } = props;
      return Array.isArray(previewSrcList) && previewSrcList.length > 0;
    });
    const imageIndex = computed(() => {
      const { src, previewSrcList, initialIndex } = props;
      let previewIndex = initialIndex;
      const srcIndex = previewSrcList.indexOf(src);
      if (srcIndex >= 0) {
        previewIndex = srcIndex;
      }
      return previewIndex;
    });
    const loadImage = () => {
      if (!isClient)
        return;
      loading.value = true;
      hasLoadError.value = false;
      const img = new Image();
      img.addEventListener("load", (e) => handleLoad(e, img));
      img.addEventListener("error", handleError);
      Object.entries(attrs.value).forEach(([key, value]) => {
        if (key.toLowerCase() === "onload")
          return;
        img.setAttribute(key, value);
      });
      img.src = props.src;
    };
    function handleLoad(e, img) {
      imgWidth.value = img.width;
      imgHeight.value = img.height;
      loading.value = false;
      hasLoadError.value = false;
    }
    function handleError(event) {
      loading.value = false;
      hasLoadError.value = true;
      emit("error", event);
    }
    function handleLazyLoad() {
      if (isInContainer(container.value, _scrollContainer.value)) {
        loadImage();
        removeLazyLoadListener();
      }
    }
    const lazyLoadHandler = useThrottleFn(handleLazyLoad, 200);
    async function addLazyLoadListener() {
      var _a;
      if (!isClient)
        return;
      await nextTick();
      const { scrollContainer } = props;
      if (isHtmlElement(scrollContainer)) {
        _scrollContainer.value = scrollContainer;
      } else if (isString(scrollContainer) && scrollContainer !== "") {
        _scrollContainer.value = (_a = document.querySelector(scrollContainer)) != null ? _a : void 0;
      } else if (container.value) {
        _scrollContainer.value = getScrollContainer(container.value);
      }
      if (_scrollContainer.value) {
        stopScrollListener = useEventListener(_scrollContainer, "scroll", lazyLoadHandler);
        setTimeout(() => handleLazyLoad(), 100);
      }
    }
    function removeLazyLoadListener() {
      if (!isClient || !_scrollContainer.value || !lazyLoadHandler)
        return;
      stopScrollListener();
      _scrollContainer.value = void 0;
    }
    function wheelHandler(e) {
      if (!e.ctrlKey)
        return;
      if (e.deltaY < 0) {
        e.preventDefault();
        return false;
      } else if (e.deltaY > 0) {
        e.preventDefault();
        return false;
      }
    }
    function clickHandler() {
      if (!preview.value)
        return;
      stopWheelListener = useEventListener("wheel", wheelHandler, {
        passive: false
      });
      prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      showViewer.value = true;
    }
    function closeViewer() {
      stopWheelListener == null ? void 0 : stopWheelListener();
      document.body.style.overflow = prevOverflow;
      showViewer.value = false;
      emit("close");
    }
    function switchViewer(val) {
      emit("switch", val);
    }
    watch(() => props.src, () => {
      if (props.lazy) {
        loading.value = true;
        hasLoadError.value = false;
        removeLazyLoadListener();
        addLazyLoadListener();
      } else {
        loadImage();
      }
    });
    onMounted(() => {
      if (props.lazy) {
        addLazyLoadListener();
      } else {
        loadImage();
      }
    });
    return {
      attrs,
      loading,
      hasLoadError,
      showViewer,
      containerStyle,
      imageStyle,
      preview,
      imageIndex,
      container,
      clickHandler,
      closeViewer,
      switchViewer,
      t
    };
  }
});

export { script as default };
//# sourceMappingURL=image.vue_vue_type_script_lang.mjs.map
