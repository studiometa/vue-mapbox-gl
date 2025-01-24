import { defineConfig, ts, vueTs, prettier, globals } from '@studiometa/eslint-config';

export default defineConfig(
  ts,
  vueTs,
  prettier,
  {
    files: ['packages/{demo,vue-mapbox-gl}/**/*.{js,vue}'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      'vue/valid-define-emits': 'off',
    },
  },
  {
    ignores: ['**/.nuxt/**', '**/.output/**'],
  },
);
