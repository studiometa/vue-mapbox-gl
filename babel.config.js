module.exports = {
  presets: [
    [
      '@vue/app',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: [ '@babel/plugin-proposal-export-default-from' ],
};
