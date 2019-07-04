module.exports = {
  extends: [
    '@studiometa/eslint-config/vue',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          [ '@', './src/' ],
        ],
      },
    },
  },
};
