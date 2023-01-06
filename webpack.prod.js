// @ts-check
const webpack = require("webpack");
const path = require("path");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = /** @type { import('webpack').Configuration } */ ({
  entry: "./lib/index.ts",
  mode: "production",
  optimization: {
    minimize: true,
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.[tj]s?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      // {
      //   test: /\.ts?$/,
      //   use: "ts-loader",
      //   exclude: /node_modules/,
      // },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: false,
    }),
    new CleanWebpackPlugin(),
  ],
});
