# Changelog

All notable changes to this project will be documented in this file. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [v2.4.0](https://github.com/studiometa/vue-mapbox-gl/compare/2.3.4...2.4.0) (2024-02-23)

### Added

- Add support for mapbox-gl ^3.0.0 ([f8a9b21](https://github.com/studiometa/vue-mapbox-gl/commit/f8a9b21))

### Fixed

- Fix a warning when using MapboxGeocoder outside MapboxMap ([e4202ea](https://github.com/studiometa/vue-mapbox-gl/commit/e4202ea))

## [v2.3.4](https://github.com/studiometa/vue-mapbox-gl/compare/2.3.3...2.3.4) (2024-01-30)

### Fixed

- Fix Geocoder proximity props default ([#133](https://github.com/studiometa/vue-mapbox-gl/pull/133))

## [v2.3.3](https://github.com/studiometa/vue-mapbox-gl/compare/2.3.2...2.3.3) (2024-01-12)

### Fixed

- Fix NPM publication ([#131](https://github.com/studiometa/vue-mapbox-gl/pull/131))

## [v2.3.2](https://github.com/studiometa/vue-mapbox-gl/compare/2.3.1...2.3.2) (2024-01-11)

### Fixed

- Fix NPM publication

## [v2.3.1](https://github.com/studiometa/vue-mapbox-gl/compare/2.3.0...2.3.1) (2024-01-11)

### Fixed

- Fix NPM critical dependencies ([#130](https://github.com/studiometa/vue-mapbox-gl/pull/130))

## [v2.3.0](https://github.com/studiometa/vue-mapbox-gl/compare/2.2.0...2.3.0) (2024-01-11)

### Added

- Add `filterItemsCallback` props to `StoreLocator` component to enable filtering the items list ([#128](https://github.com/studiometa/vue-mapbox-gl/pull/128))

## [v2.2.0](https://github.com/studiometa/vue-mapbox-gl/compare/2.1.1...2.2.0) (2023-09-15)

### Added

- Add support for the `clusterProperties` option ([4a55844](https://github.com/studiometa/vue-mapbox-gl/commit/4a55844), [#119](https://github.com/studiometa/vue-mapbox-gl/pull/119), fix [#117](https://github.com/studiometa/vue-mapbox-gl/issues/117))
- Add support for the `clusterMinPoints` option ([4e403c7](https://github.com/studiometa/vue-mapbox-gl/commit/4e403c7), [#119](https://github.com/studiometa/vue-mapbox-gl/pull/119))
- Add props to the `MapboxMap` component ([79d2929](https://github.com/studiometa/vue-mapbox-gl/commit/79d2929), [#121](https://github.com/studiometa/vue-mapbox-gl/pull/121), fix [#108](https://github.com/studiometa/vue-mapbox-gl/issues/108))

### Fixed

- Fix a bug where the geolocate control could be accessed before being added to the map ([3f8eaef](https://github.com/studiometa/vue-mapbox-gl/commit/3f8eaef), [#106](https://github.com/studiometa/vue-mapbox-gl/pull/106), fix [#77](https://github.com/studiometa/vue-mapbox-gl/issues/77))

## [v2.1.1](https://github.com/studiometa/vue-mapbox-gl/compare/2.1.0...2.1.1) (2023-04-17)

### Changed

- Add search to the docs (1c92956)

## [v2.1.0](https://github.com/studiometa/vue-mapbox-gl/compare/2.0.4...2.1.0) (2023-04-08)

### Added

- **MapboxCluster:** add support for preventing the default behavior when clicking on a cluster ([#88](https://github.com/studiometa/vue-mapbox-gl/pull/88), fix [#87](https://github.com/studiometa/vue-mapbox-gl/issues/87), [@asanmiguel-nodrizatech](https://github.com/asanmiguel-nodrizatech))
- **MapboxGeolocateControl:** add support for the `trackUserLocation` option ([#93](https://github.com/studiometa/vue-mapbox-gl/pull/93), [@kayrunm](https://github.com/kayrunm))

### Fixed

- **MapboxGeocoder:** fix a JavaScript error when used outside of a map ([#98](https://github.com/studiometa/vue-mapbox-gl/pull/98), fix [#91](https://github.com/studiometa/vue-mapbox-gl/issues/91))

### Changed

- Update NPM dependencies ([#89](https://github.com/studiometa/vue-mapbox-gl/pull/89), [#92](https://github.com/studiometa/vue-mapbox-gl/pull/92), [#86](https://github.com/studiometa/vue-mapbox-gl/pull/86), [#80](https://github.com/studiometa/vue-mapbox-gl/pull/80), [#99](https://github.com/studiometa/vue-mapbox-gl/pull/99))
- Update docs with center as ref ([#95](https://github.com/studiometa/vue-mapbox-gl/pull/95), [@michaelklopf](https://github.com/michaelklopf))

## [v2.0.4](https://github.com/studiometa/vue-mapbox-gl/compare/2.0.3...2.0.4) (2023-01-11)

### Fixed

- Fix a bug where controls could be accessed before being added to the map ([eefaee2](https://github.com/studiometa/vue-mapbox-gl/commit/eefaee2), fix [#77](https://github.com/studiometa/vue-mapbox-gl/issues/77))
- Fix doc regarding access token ([#78](https://github.com/studiometa/vue-mapbox-gl/pull/78), fix [#67](https://github.com/studiometa/vue-mapbox-gl/issues/67))

## [v2.0.3](https://github.com/studiometa/vue-mapbox-gl/compare/2.0.2...2.0.3) (2023-01-10)

### Fixed

- Fix cluster IDs not being incremented ([#83](https://github.com/studiometa/vue-mapbox-gl/pull/83), fix [#75](https://github.com/studiometa/vue-mapbox-gl/issues/75))
- Fix a bug where controls could be accessed before being added to the map ([#82](https://github.com/studiometa/vue-mapbox-gl/pull/82), fix [#77](https://github.com/studiometa/vue-mapbox-gl/issues/77))
- Fix Node warning about package.json fields ([3b5e4e7](https://github.com/studiometa/vue-mapbox-gl/commit/3b5e4e7), fix [#74](https://github.com/studiometa/vue-mapbox-gl/issues/74))
- Fix CSS build file containing an invalid comment ([612c9e8](https://github.com/studiometa/vue-mapbox-gl/commit/612c9e8))

### Changed

- Update NPM dependencies ([#81](https://github.com/studiometa/vue-mapbox-gl/pull/81))

## [v2.0.2](https://github.com/studiometa/vue-mapbox-gl/compare/2.0.1...2.0.2) (2022-12-05)

### Fixed

- Fix links in the README.md ([#65](https://github.com/studiometa/vue-mapbox-gl/pull/65))

### Changed

- Move release notes to the [CHANGELOG.md](https://github.com/studiometa/vue-mapbox-gl/blob/develop/CHANGELOG.md) file
