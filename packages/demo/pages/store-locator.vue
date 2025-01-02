<script setup>
  import { shallowRef, unref } from 'vue';
  import { useFetch } from '#app';
  import '@mapbox/mapbox-gl-geocoder/lib/mapbox-gl-geocoder.css';
  import { StoreLocator, MapboxImage } from '@studiometa/vue-mapbox-gl';
  import dataUrl from '/earthquakes.json?url';

  const accessToken =
    'pk.eyJ1IjoiYWdlbmNlc3R1ZGlvbWV0YSIsImEiOiJjanh5ZW81aHEwOHV3M2lwZzhhNW1vdXl5In0.3hbV2QKVzZWf511JK9xCug';

  const { data } = await useFetch(dataUrl);

  const items = shallowRef(
    unref(data).features?.map(({ properties, geometry }, index) => ({
      lat: geometry.coordinates[1],
      lng: geometry.coordinates[0],
      id: `store-locator-demo-${index}`,
      ...properties,
    })) ?? []
  );
</script>

<template>
  <div class="store-locator-demo">
    <div class="store-locator-demo__inner">
      <div class="relative w-full h-full">
        <StoreLocator
          :items="items"
          :access-token="accessToken"
          :mapbox-map="{ mapStyle: 'mapbox://styles/mapbox/streets-v11' }"
          :mapbox-cluster="{
            unclusteredPointLayout: {
              'icon-image': 'cat',
              'icon-size': 0.1,
            },
          }">
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
          <template #map>
            <MapboxImage
              id="cat"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png" />
          </template>
        </StoreLocator>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import 'tailwindcss/base';
  @import 'tailwindcss/components';
  @import 'tailwindcss/utilities';

  .store-locator-demo {
    z-index: 10;
    position: relative;
    width: 96vw;
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
    @apply rounded;
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
