// @ts-check
const webpack = require("webpack");
const path = require("path");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { devDependencies } = require("./package.json");
const { merge } = require("webpack-merge");

module.exports = (env, argv) => {
  /** @type { import('webpack').Configuration } */
  const standard = {
    entry: "./lib/index.ts",
    mode: "production",
    optimization: {
      minimize: false,
    },
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
      // filename: "server.js",
      path: path.resolve(__dirname, "dist/cjs"),
      library: {
        name: "twilio-node",
        type: "global",
      },
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: env.analyzerMode || "none",
        openAnalyzer: !!env.analyzerMode,
      }),
      new CleanWebpackPlugin(),
    ],
    externals: Object.keys(devDependencies),
  };
  /** @type { import('webpack').Configuration } */
  const common = {
    entry: "./lib/index.ts",
    mode: "production",
    optimization: {
      minimize: true,
      sideEffects: false,
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
      // you cant make this a proper library cuz REST is weird.
      // library: {
      //   name: "twilio-node",
      //   type: "commonjs",
      // },
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: env.analyzerMode || "none",
        openAnalyzer: !!env.analyzerMode,
      }),
      new CleanWebpackPlugin(),
    ],
    externals: [...Object.keys(devDependencies), "lodash"],
  };
  if (process.env.COMPILE_MODE === "MULTI") {
    return [standard, common];
  }
  return common;
};
