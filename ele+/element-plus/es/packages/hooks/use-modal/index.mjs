import { watch } from 'vue';
import { isClient, useEventListener } from '@vueuse/core';
import { EVENT_CODE } from '../../utils/aria.mjs';

const modalStack = [];
const closeModal = (e) => {
  if (modalStack.length === 0)
    return;
  if (e.code === EVENT_CODE.esc) {
    e.stopPropagation();
    const topModal = modalStack[modalStack.length - 1];
    topModal.handleClose();
  }
};
const useModal = (instance, visibleRef) => {
  watch(visibleRef, (val) => {
    if (val) {
      modalStack.push(instance);
    } else {
      modalStack.splice(modalStack.findIndex((modal) => modal === instance), 1);
    }
  });
};
if (isClient)
  useEventListener(document, "keydown", closeModal);

export { useModal };
//# sourceMappingURL=index.mjs.map