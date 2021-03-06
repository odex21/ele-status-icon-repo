'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var core = require('@vueuse/core');
var aria = require('../../../utils/aria.js');
var index = require('../../badge/index.js');
var index$1 = require('../../icon/index.js');
var icon = require('../../../utils/icon.js');
var message = require('./message2.js');

var script = vue.defineComponent({
  name: "ElMessage",
  components: {
    ElBadge: index.ElBadge,
    ElIcon: index$1.ElIcon,
    ...icon.TypeComponents
  },
  props: message.messageProps,
  emits: message.messageEmits,
  setup(props) {
    const visible = vue.ref(false);
    const badgeType = vue.ref(props.type ? props.type === "error" ? "danger" : props.type : "info");
    let stopTimer = void 0;
    const typeClass = vue.computed(() => {
      const type = props.type;
      return type && icon.TypeComponentsMap[type] ? `el-message-icon--${type}` : "";
    });
    const iconComponent = vue.computed(() => {
      return props.icon || icon.TypeComponentsMap[props.type] || "";
    });
    const customStyle = vue.computed(() => ({
      top: `${props.offset}px`,
      zIndex: props.zIndex
    }));
    function startTimer() {
      if (props.duration > 0) {
        ;
        ({ stop: stopTimer } = core.useTimeoutFn(() => {
          if (visible.value)
            close();
        }, props.duration));
      }
    }
    function clearTimer() {
      stopTimer == null ? void 0 : stopTimer();
    }
    function close() {
      visible.value = false;
    }
    function keydown({ code }) {
      if (code === aria.EVENT_CODE.esc) {
        if (visible.value) {
          close();
        }
      } else {
        startTimer();
      }
    }
    vue.onMounted(() => {
      startTimer();
      visible.value = true;
    });
    vue.watch(() => props.repeatNum, () => {
      clearTimer();
      startTimer();
    });
    core.useEventListener(document, "keydown", keydown);
    return {
      typeClass,
      iconComponent,
      customStyle,
      visible,
      badgeType,
      close,
      clearTimer,
      startTimer
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=message.vue_vue_type_script_lang.js.map
