<script setup>
  import { MapboxImagesDemo } from '../../.vitepress/components/index.js';
</script>

# MapboxImages

Add multiple images at once to be used used in `icon-image`, `background-pattern`, `fill-pattern`, and `line-pattern`. This component is a wrapper around the [`MapboxImage`](./MapboxImage.md) component.

<h2>Table of contents</h2>

[[toc]]

## Examples

### Add multiple icons to the map

<ClientOnly>
  <MapboxImagesDemo style="margin-top: 1rem;" api-key="MAPBOX_API_KEY" />
</ClientOnly>

<<< @/.vitepress/components/MapboxImagesDemo.vue{4-13,15-49,59-61}

## Props

### `sources`

- Type `Array`
- Required `true`

A list of images to add to the map.

### `source.id`

- Type `String`
- Required `true`

The ID of the image. This will be used to refer to this image.

### `source.src`

- Type `[ String, HTMLImageElement, ImageData, Object ]`
- Required `true`

The image as String, an HTMLImageElement, ImageData, or object with width, height, and data properties with the same format as ImageData.

### `source.options`

- Type `Object`
- Default `{ pixelRatio: 1, sdf: false }`

This options object will be passed directly to the `addImage` method.

## Events


### `add`

Emitted for each image being added to the map with the [`addImage`](https://docs.mapbox.com/mapbox-gl-js/api/#map#addimage) method.

**Properties**

- `image` _(`Object`)_ The image's informations, directly passed from the `add` event of the `MapboxImage component
- `image.id` _(`String`)_ The ID given to the image
- `image.src` _(`HTMLImageElement | ImageData | Object`)_ The generated source of the image when the given source is a string; the given source otherwise
- `image.options` _(`Object`)_ The options object used with the `addImage` method
- `index` _(`Number`)_ The index of the image which has been added
- `total` _(`Number`)_ The total number of images to add

### `ready`

Emitted when all images have been added to the map.

**Properties**

- `images` _(`Array`)_ An array containing all the added images' object emitted by the `add` event

## Slots

### `default`

The default slot will be rendered _after_ the images have been added to the map — when the `ready` event is emitted.
