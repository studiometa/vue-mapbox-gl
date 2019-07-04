module.exports = {
  extends: ['@studiometa/eslint-config/prettier-es6'],
  env: {
    jest: true,
  },
  rules: {
    'global-require': 'off',
    'import/no-dynamic-require': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src/']],
      },
    },
  },
};
