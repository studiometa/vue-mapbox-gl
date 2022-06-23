module.exports = {
  extends: ['@studiometa/eslint-config'],
  overrides: [
    {
      files: '**/*.vue',
      globals: {
        defineProps: false,
        defineEmits: false,
        defineExpose: false,
      },
      rules: {
        'vue/no-boolean-default': 'off',
        'import/first': 'off',
        'vue/valid-define-emits': 'off',
      },
    },
  ],
};
