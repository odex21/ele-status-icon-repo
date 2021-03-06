import { defineComponent, ref, computed, onMounted } from 'vue';
import { useTimeoutFn, useEventListener } from '@vueuse/core';
import { EVENT_CODE } from '../../../utils/aria.mjs';
import { ElIcon } from '../../icon/index.mjs';
import { TypeComponents, TypeComponentsMap } from '../../../utils/icon.mjs';
import { notificationProps, notificationEmits } from './notification2.mjs';

var script = defineComponent({
  name: "ElNotification",
  components: {
    ElIcon,
    ...TypeComponents
  },
  props: notificationProps,
  emits: notificationEmits,
  setup(props) {
    const visible = ref(false);
    let timer = void 0;
    const typeClass = computed(() => {
      const type = props.type;
      return type && TypeComponentsMap[props.type] ? `el-notification--${type}` : "";
    });
    const iconComponent = computed(() => {
      return TypeComponentsMap[props.type] || props.icon || "";
    });
    const horizontalClass = computed(() => props.position.endsWith("right") ? "right" : "left");
    const verticalProperty = computed(() => props.position.startsWith("top") ? "top" : "bottom");
    const positionStyle = computed(() => {
      return {
        [verticalProperty.value]: `${props.offset}px`,
        zIndex: props.zIndex
      };
    });
    function startTimer() {
      if (props.duration > 0) {
        ;
        ({ stop: timer } = useTimeoutFn(() => {
          if (visible.value)
            close();
        }, props.duration));
      }
    }
    function clearTimer() {
      timer == null ? void 0 : timer();
    }
    function close() {
      visible.value = false;
    }
    function onKeydown({ code }) {
      if (code === EVENT_CODE.delete || code === EVENT_CODE.backspace) {
        clearTimer();
      } else if (code === EVENT_CODE.esc) {
        if (visible.value) {
          close();
        }
      } else {
        startTimer();
      }
    }
    onMounted(() => {
      startTimer();
      visible.value = true;
    });
    useEventListener(document, "keydown", onKeydown);
    return {
      horizontalClass,
      typeClass,
      iconComponent,
      positionStyle,
      visible,
      close,
      clearTimer,
      startTimer
    };
  }
});

export { script as default };
//# sourceMappingURL=notification.vue_vue_type_script_lang.mjs.map
