<script>
  let index = 0;

  function getId() {
    index += 1;
    return `store-locator-demo-${index}`;
  }
</script>

<script setup>
  import { ref } from 'vue';
  import '@mapbox/mapbox-gl-geocoder/lib/mapbox-gl-geocoder.css';
  import { StoreLocator } from '@studiometa/vue-mapbox-gl';
  import data from '../assets/earthquakes.json';

  const items = ref(
    data.features.map(({ properties, geometry }) => ({
      lat: geometry.coordinates[1],
      lng: geometry.coordinates[0],
      id: getId(),
      ...properties,
    })),
  );
</script>

<template>
  <div class="store-locator-demo">
    <div class="store-locator-demo__inner">
      <div class="relative w-full h-full">
        <StoreLocator
          :items="items"
          :access-token="MAPBOX_API_KEY"
          :mapbox-map="{ mapStyle: 'mapbox://styles/mapbox/streets-v11' }">
          <template #loader>
            <div class="z-50 absolute inset-0 bg-vp flex items-center justify-center">
              <div class="absolute inset-0 bg-vp-mute rounded animate-pulse" />
              <svg
                class="animate-spin h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
          </template>
          <template #before-list="{ filteredItems }">
            <p class="m-0">Total: {{ filteredItems.length }}</p>
          </template>
          <template #after-list="{ filteredItems }">
            <p v-if="filteredItems.length <= 0">No result.</p>
          </template>
          <template #panel="{ close, item }">
            <button @click="close">Close</button>
            <pre>{{ item }}</pre>
          </template>
        </StoreLocator>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @use 'tailwindcss/components';
  @use 'tailwindcss/utilities';

  .bg-vp {
    background-color: var(--vp-c-bg);
  }

  .bg-vp-mute {
    background-color: var(--vp-c-bg-mute);
  }

  .store-locator-demo {
    z-index: 10;
    position: relative;
    left: 50%;
    width: 96vw;
    padding-left: calc((100vw - var(--vp-layout-max-width)) / 2 + var(--vp-sidebar-width));
    padding-right: calc((100vw - var(--vp-layout-max-width)) / 4);
    transform: translateX(-50%);
    pointer-events: none;

    ul,
    ol {
      padding: 0;
      margin: 0;
    }

    li {
      display: block;
    }

    * {
      box-sizing: border-box;
    }
  }

  .store-locator-demo__inner {
    border-radius: 0.25rem;
    position: relative;
    width: 100%;
    height: 80vh;
    padding: 1rem;
    background-color: var(--vp-c-bg-soft);
    pointer-events: painted;
  }

  /*============================================================================*\
     Store locator
  \*============================================================================*/

  $gap: 1rem;
  $side-width: 30rem;

  /*============================================================================*\
     Store locator block
  \*============================================================================*/

  .store-locator {
    position: absolute;
    top: 0;
    left: 0;
    display: grid;
    grid-template-areas:
      'map search'
      'map list';
    grid-template-rows: fit-content(100%);
    grid-template-columns: 1fr $side-width;
    width: 100%;
    height: 100%;
    gap: $gap;
  }

  /*============================================================================*\
     Region element
  \*============================================================================*/

  .store-locator__region {
    border-radius: 0.25rem;
    position: relative;
  }

  /* Region modifiers
  \*============================================================================*/

  .store-locator__region--map {
    grid-area: map;
    height: 100%;
    overflow: hidden;
  }

  .store-locator__region--search {
    grid-area: search;
  }

  .store-locator__region--list {
    display: flex;
    flex-direction: column;
    grid-area: list;
    height: 100%;
    overflow: hidden;
  }

  .store-locator__region--panel {
    z-index: 100;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 0;
  }

  /*============================================================================*\
     Panel element
  \*============================================================================*/

  .store-locator__panel {
    z-index: 100;
    position: absolute;
    top: 0;
    right: 0;
    width: $side-width;
    height: 100%;
    padding: $gap;
    background-color: var(--vp-c-bg-alt);
  }

  /* Transition modifiers.
  \*============================================================================*/

  .store-locator__panel--enter,
  .store-locator__panel--leave-to {
    transform: translateX(100%);
  }

  .store-locator__panel--enter-active,
  .store-locator__panel--leave-active {
    transition: transform 0.4s ease-out;
  }

  /*============================================================================*\
     Map element
  \*============================================================================*/

  .store-locator__map {
    width: 100%;
    height: 100%;
  }

  /*============================================================================*\
     Search element
  \*============================================================================*/

  .store-locator__search {
    .mapboxgl-ctrl-geocoder {
      width: 100%;
      max-width: none;
      background-color: var(--vp-c-bg-mute);

      &,
      * {
        font: inherit !important;
        box-shadow: none !important;
        color: inherit !important;
      }
    }
  }

  /*============================================================================*\
     List element
  \*============================================================================*/

  // .store-locator__list {}

  /*============================================================================*\
     List item element
  \*============================================================================*/

  .store-locator__list-item {
    padding: calc(#{$gap} / 2);
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0);
    transition: background-color 0.2s ease-out;
    margin: 0 !important;

    &:hover {
      background-color: var(--vp-c-bg-mute);
    }

    + .store-locator__list-item {
      border-top: 1px solid rgba(black, 0.1);
    }
  }

  /*============================================================================*\
     Loader element
  \*============================================================================*/

  .store-locator__loader--enter,
  .store-locator__loader--leave-to {
    opacity: 0;
  }

  .store-locator__loader--enter-active,
  .store-locator__loader--leave-active {
    transition: opacity 0.4s ease-out;
  }
</style>
