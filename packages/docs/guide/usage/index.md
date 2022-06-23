# Usage

Import directly the pieces you need as well as the stylesheet for Mapbox GL:

```vue
<script setup>
  import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl';
  import 'mapbox-gl/dist/mapbox-gl.css';
</script>

<template>
  <MapboxMap access-token="...">
    <MapboxMarker position="[0, 0]" />
  </MapboxMap>
</template>
```

If you need to access to the Mapbox `map` instance, you can get it via the `mb-created` event on the `MapboxMap` component which is emitted when the map has been instantiated.

```vue {5,11}
<script setup>
  import { ref } from 'vue';
  import { MapboxMap } from '@studiometa/vue-mapbox-gl';

  const map = ref();
</script>

<template>
  <MapboxMap
    access-token="..."
    @mb-created="(mapboxInstance) => map = mapboxInstance" />
</template>
```

Or you can add a ref to the `MapboxMap` component and access it with the `map` property:

```vue
<script setup>
  import { ref } from 'vue';
  import { MapboxMap } from '@studiometa/vue-mapbox-gl';

  const mapboxMap = ref();
  const map = computed(() => mapboxMap.value.map);
</script>

<template>
  <MapboxMap
    ref="mapboxMap"
    access-token="..." />
</template>
```
