import { defineConfig, js, vue, prettier, globals } from '@studiometa/eslint-config';

export default defineConfig(
  js,
  vue,
  prettier,
  {
    files: ['packages/{demo,vue-mapbox-gl}/**/*.{js,vue}'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    ignores: ['**/.nuxt/**', '**/.output/**'],
  },
);
