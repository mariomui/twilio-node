module.exports = {
  presets: [
    ["@babel/preset-env", {
      targets: {
        node: "current",
      },

      loose: true,
      modules: false,

    }],
    "@babel/preset-typescript",
  ],
  plugins: [
    "babel-plugin-replace-ts-export-assignment",
  ],
};
