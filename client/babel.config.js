// Refer to: https://jestjs.io/docs/getting-started

module.exports = {
  presets: [
    "@babel/preset-react", // Add JSX support
    "@babel/preset-typescript", // Add TypeScript support
    ["@babel/preset-env", { targets: { node: "current" } }],
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-syntax-dynamic-import",
  ],
  env: {
    test: {
      plugins: [
        "transform-es2015-modules-commonjs", // For Jest compatability
      ],
    },
  },
};
