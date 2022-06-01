import { ref, unref, computed } from 'vue';

const log = console.log.bind(null, '[useGoTo]');

export default function useGoTo(initialIndex, length) {
  log('use', { initialIndex, length });
  const currentIndex = ref(initialIndex);
  const indexMax = computed(() => unref(length) - 1);

  function goPrev() {
    log('goPrev');
    goTo(unref(currentIndex) - 1);
  }

  function goNext() {
    log('goNext');
    goTo(unref(currentIndex) + 1)
  }

  function goTo(index) {
    if (index < 0) {
      index = unref(indexMax);
    } else if (index > unref(indexMax)) {
      index = 0;
    }

    log('goTo', index);

    currentIndex.value = index;
  }

  return {
    currentIndex,
    goPrev,
    goNext,
    goTo
  }
}
