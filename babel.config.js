module.exports = {
  presets: [
    [
      '@vue/app',
      {
        useBuiltIns: false,
      },
    ],
  ],
  plugins: [ '@babel/plugin-proposal-export-default-from' ],
};
