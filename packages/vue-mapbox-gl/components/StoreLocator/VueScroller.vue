<script setup>
  import { ref, unref, onUpdated, onMounted, onBeforeUnmount, nextTick } from 'vue';
  import { debounce } from '@studiometa/js-toolkit/utils';

  const emit = defineEmits(['scroll-top', 'scroll-bottom']);

  const scroller = ref();
  const scrollTop = ref(0);
  const scrollMax = ref(Number.POSITIVE_INFINITY);

  /**
   * Set variable values and emit events.
   */
  function setVars() {
    if (!unref(scroller)) {
      return;
    }

    const unrefScroller = unref(scroller);
    scrollTop.value = unrefScroller.scrollTop;
    scrollMax.value = unrefScroller.scrollHeight - unrefScroller.clientHeight;

    if (scrollTop.value === 0) {
      emit('scroll-top');
    }

    if (scrollTop.value === scrollMax.value) {
      emit('scroll-bottom');
    }
  }

  const debouncedSetVars = debounce(setVars);

  onUpdated(() => {
    setVars();
  });

  onMounted(async () => {
    unref(scroller).addEventListener('scroll', setVars, { passive: true });
    window.addEventListener('resized', debouncedSetVars);
    await nextTick();
    setVars();
  });

  onBeforeUnmount(() => {
    unref(scroller).removeEventListener('scroll', setVars);
    window.removeEventListener('resized', debouncedSetVars);
  });
</script>

<template>
  <div
    class="scroller"
    :class="{
      'scroller--is-top': scrollTop === 0,
      'scroller--is-bottom': scrollTop === scrollMax,
      'scroller--has-no-scroll': scrollTop === 0 && scrollMax === 0,
    }">
    <div ref="scroller" class="scroller__inner">
      <div class="scroller__content">
        <!-- @slot Use this slot to display the scroller content. -->
        <slot />
      </div>
    </div>
  </div>
</template>

<style>
  .scroller,
  .scroller__inner {
    width: 100%;
    height: 100%;
  }

  .scroller {
    position: relative;
    overflow: hidden;
  }

  /* Pseudo element */
  .scroller::after,
  .scroller::before {
    content: '';
    z-index: 1;
    position: absolute;
    left: 0;
    width: 100%;
    height: 5em;
    pointer-events: none;
    border-radius: 30%;
    box-shadow:
      0 0 1em rgba(0, 0, 0, 0.25),
      0 0 2em rgba(0, 0, 0, 0.05);
    transition: opacity 1s cubic-bezier(0.19, 1, 0.22, 1);
  }

  .scroller::before {
    bottom: 100%;
  }

  .scroller::after {
    top: 100%;
  }

  .scroller--is-top::before,
  .scroller--has-no-scroll::before {
    opacity: 0;
  }

  .scroller--is-bottom::after,
  .scroller--has-no-scroll::after {
    opacity: 0;
  }

  .scroller__inner {
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
