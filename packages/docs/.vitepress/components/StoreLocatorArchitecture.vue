<template>
  <div class="store-locator-architecture">
    <data-element el="root (classes.root)" color="gray-200" class="space-y-4 text-xs font-mono">
      <data-region name="map (classes.region.map)">
        <data-transition name="loader.map">
          <data-slot name="map-loader">
            <data-transition name="loader.default">
              <data-slot name="loader" />
            </data-transition>
          </data-slot>
        </data-transition>
        <data-slot name="before-map" />
        <data-render name="MapboxMap">
          <data-slot name="map" />
        </data-render>
        <data-slot name="after-map" />
      </data-region>
      <data-region name="search (classes.region.search)">
        <data-transition name="loader.search">
          <data-slot name="search-loader">
            <data-transition name="loader.default">
              <data-slot name="loader" />
            </data-transition>
          </data-slot>
        </data-transition>
        <data-slot name="before-search" />
        <data-render name="MapboxGeocoder (classes.search)" />
        <data-slot name="after-search" />
      </data-region>
      <data-region name="list (classes.region.list)">
        <data-transition name="loader.list">
          <data-slot name="list-loader">
            <data-transition name="loader.default">
              <data-slot name="loader" />
            </data-transition>
          </data-slot>
        </data-transition>
        <data-slot name="before-list" />
        <data-render name="VueScroller">
          <data-render name="ul (classes.list)">
            <data-render name="li (classes.listItem)">
              <data-slot name="list-item" />
            </data-render>
          </data-render>
        </data-render>
        <data-slot name="after-list" />
      </data-region>
      <data-region name="panel (classes.region.panel)">
        <data-render name="div (classes.panel)">
          <data-slot name="panel" />
        </data-render>
      </data-region>
    </data-element>
  </div>
</template>

<script>
  const createDataComponent = (name, color) => ({
    functional: true,
    props: ['name'],
    render: (h, { props, children }) =>
      h('data-element', { props: { el: `${name} → ${props.name}`, color } }, children),
  });

  export default {
    components: {
      DataElement: {
        functional: true,
        props: ['el', 'color', 'class'],
        render: (h, { props, children, data }) =>
          h(
            'div',
            {
              class: `shadow-lg rounded p-4 bg-${props.color} ${
                data.staticClass ? data.staticClass : ''
              }`,
              attrs: { 'data-element': props.el },
            },
            children
          ),
      },
      DataRegion: createDataComponent('region', 'blue-200'),
      DataSlot: createDataComponent('slot', 'green-400'),
      DataRender: createDataComponent('render', 'indigo-400'),
      DataTransition: createDataComponent('transition', 'purple-400'),
    },
  };
</script>

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
