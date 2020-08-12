module.exports = {
  extends: ['@studiometa/eslint-config'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src/']],
      },
    },
  },
};
