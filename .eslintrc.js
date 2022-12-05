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
        'vue/html-self-closing': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'import/extensions': ['error', 'ignorePackages'],
      },
    },
  ],
};
