module.exports = {
  extends: [
    require.resolve('../../.eslintrc.js'),
  ],
  env: {
    jest: true,
  },
  rules: {
    'global-require': 'off',
    'import/no-dynamic-require': 'off',
  },
};
