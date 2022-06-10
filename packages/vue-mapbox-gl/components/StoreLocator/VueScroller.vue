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

<script>
  export default {
    data() {
      return {
        scrollTop: 0,
        scrollMax: Number.POSITIVE_INFINITY,
      };
    },
    updated() {
      this.setVars();
    },
    async mounted() {
      this.$refs.scroller.addEventListener('scroll', () => this.setVars(), { passive: true });

      let timer;
      this.debouncedSetVars = () => {
        clearTimeout(timer);
        timer = setTimeout(() => this.setVars(), 300);
      };
      window.addEventListener('resize', this.debouncedSetVars);

      await this.$nextTick();
      this.setVars();
    },
    beforeUnmount() {
      this.$refs.scroller.removeEventListener('scroll', this.setVars);
      window.removeEventListener('resize', this.debouncedSetVars);
    },
    methods: {
      setVars() {
        const { scroller } = this.$refs;

        if (!scroller) {
          return;
        }

        this.scrollTop = scroller.scrollTop;
        this.scrollMax = scroller.scrollHeight - scroller.clientHeight;

        if (this.scrollTop === 0) {
          this.$emit('scroll-top');
        }

        if (this.scrollTop === this.scrollMax) {
          this.$emit('scoll-bottom');
        }
      },
    },
  };
</script>

<style lang="scss">
  .scroller,
  .scroller__inner {
    width: 100%;
    height: 100%;
  }

  .scroller {
    position: relative;
    overflow: hidden;

    // Pseudo element
    &::after,
    &::before {
      content: '';
      z-index: 1;
      position: absolute;
      left: 0;
      width: 100%;
      height: 5em;
      pointer-events: none;
      border-radius: 30%;
      box-shadow: 0 0 1em rgba(black, 0.25), 0 0 2em rgba(black, 0.05);
      transition: opacity 1s cubic-bezier(0.19, 1, 0.22, 1);
    }

    &::before {
      bottom: 100%;
    }

    &::after {
      top: 100%;
    }
  }

  .scroller--is-top,
  .scroller--has-no-scroll {
    &::before {
      opacity: 0;
    }
  }

  .scroller--is-bottom,
  .scroller--has-no-scroll {
    &::after {
      opacity: 0;
    }
  }

  .scroller__inner {
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
