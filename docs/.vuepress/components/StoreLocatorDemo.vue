<template>
  <div class="store-locator-demo">
    <div class="store-locator-demo__inner">
      <StoreLocator
        :items="items"
        :access-token="MAPBOX_API_KEY"
        :mapbox-map="{ mapStyle: 'mapbox://styles/mapbox/streets-v11' }">
        <template #loader>
          <div class="z-50 absolute inset-0 bg-white flex items-center justify-center">
            <div class="absolute inset-0 bg-gray-300 rounded animate-pulse" />
            <svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        </template>
        <template #before-list="{ filteredItems }">
          <p class="m-0">Total: {{ filteredItems.length }}</p>
        </template>
        <template #after-list="{ filteredItems }">
          <p v-if="filteredItems.length <= 0">
            No result.
          </p>
        </template>
        <template #panel="{ close, item }">
          <button @click="close">Close</button>
          <p>{{ item }}</p>
        </template>
      </StoreLocator>
    </div>
  </div>
</template>

<script>
  import '@mapbox/mapbox-gl-geocoder/lib/mapbox-gl-geocoder.css';
  import data from '../public/earthquakes.json';

  // @from nanoid/non-secure
  const urlAlphabet = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW';
  const nanoid = (size = 21) => {
    let id = '';
    let i = size;
    while (i--) {
      id += urlAlphabet[(Math.random() * 64) | 0];
    }
    return id;
  };

  export default {
    data: () => ({
      items: data.features.map(({ properties, geometry }) => ({
        lat: geometry.coordinates[1],
        lng: geometry.coordinates[0],
        id: nanoid(),
        ...properties,
      })),
    }),
  };
</script>

<style lang="scss">
  @import '~tailwindcss/components';
  @import '~tailwindcss/utilities';

  .store-locator-demo {

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
    position: relative;
    left: 50%;
    width: calc(100vw - 24rem);
    min-width: 100%;
    height: 80vh;
    transform: translateX(-50%);
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
    @apply rounded;
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
    background-color: #fff;
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
      @apply bg-gray-300;
      width: 100%;
      max-width: none;

      &,
      * {
        font: inherit !important;
        box-shadow: none !important;
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
    padding: $gap / 2;
    cursor: pointer;
    background-color: #fff;
    transition: background-color 0.2s ease-out;

    &:hover {
      background-color: #f5f5f5;
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
