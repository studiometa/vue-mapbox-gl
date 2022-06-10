<script setup>
  import { h } from 'vue';

  function DataElement(props, { attrs, slots }) {
    return h(
      'div',
      {
        class: `shadow-lg rounded p-4 ${props.color} ${attrs.class ? data.class : ''}`,
        'data-element': props.el
      },
      slots
    );
  }
  DataElement.props = ['el', 'color', 'class'];

  function createDataComponent(name, color) {
    function Component(props, { slots }) {
      return h(DataElement, { el: `${name} → ${props.name}`, color }, slots);
    }

    Component.props = ['name'];

    return Component;
  };

  const DataRegion = createDataComponent('region', 'bg-blue-200');
  const DataSlot = createDataComponent('slot', 'bg-green-300');
  const DataRender = createDataComponent('render', 'bg-indigo-300');
  const DataTransition = createDataComponent('transition', 'bg-purple-300');
</script>

<template>
  <div class="store-locator-architecture space-y-4 text-xs font-mono">
    <DataElement el="root (classes.root)" color="bg-gray-200">
      <DataRegion name="map (classes.region.map)">
        <DataTransition name="loader.map">
          <DataSlot name="map-loader">
            <DataTransition name="loader.default">
              <DataSlot name="loader" />
            </DataTransition>
          </DataSlot>
        </DataTransition>
        <DataSlot name="before-map" />
        <DataRender name="MapboxMap">
          <DataSlot name="map" />
        </DataRender>
        <DataSlot name="after-map" />
      </DataRegion>
      <DataRegion name="search (classes.region.search)">
        <DataTransition name="loader.search">
          <DataSlot name="search-loader">
            <DataTransition name="loader.default">
              <DataSlot name="loader" />
            </DataTransition>
          </DataSlot>
        </DataTransition>
        <DataSlot name="before-search" />
        <DataRender name="MapboxGeocoder (classes.search)" />
        <DataSlot name="after-search" />
      </DataRegion>
      <DataRegion name="list (classes.region.list)">
        <DataTransition name="loader.list">
          <DataSlot name="list-loader">
            <DataTransition name="loader.default">
              <DataSlot name="loader" />
            </DataTransition>
          </DataSlot>
        </DataTransition>
        <DataSlot name="before-list" />
        <DataRender name="VueScroller">
          <DataRender name="ul (classes.list)">
            <DataRender name="li (classes.listItem)">
              <DataSlot name="list-item" />
            </DataRender>
          </DataRender>
        </DataRender>
        <DataSlot name="after-list" />
      </DataRegion>
      <DataRegion name="panel (classes.region.panel)">
        <DataRender name="div (classes.panel)">
          <DataSlot name="panel" />
        </DataRender>
      </DataRegion>
    </DataElement>
  </div>
</template>

<style lang="scss">
  @import 'tailwindcss/components';
  @import 'tailwindcss/utilities';

  .store-locator-architecture {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;

    [data-element]::before {
      content: attr(data-element);
      display: block;
      color: #000;
      opacity: 0.75;
    }

    [data-element] > div {
      margin-top: 1rem;
    }
  }
</style>
