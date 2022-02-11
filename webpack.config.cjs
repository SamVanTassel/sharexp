// const webpack = require('webpack');
const path = require('path');
const process = require("process");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  mode: process.env.NODE_ENV || 'production',
  devServer: {
    compress: true,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'src/'),
      publicPath: '/',
    },
    host: 'localhost',
    port: 3000,
    proxy: { "/api": "http://localhost:8080" },
  },
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "index.html" }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      { // required to get react toolkit to load as esm module
        test: /\.m?js/,
        resolve: {
            fullySpecified: false
        }
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.s?[ac]ss$/i,
        use: [
          process.env.NODE_ENV === 'production'
            ? MiniCssExtractPlugin.loader
            : "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [
      '.jsx',
      '.js'
    ],
  }
};

module.exports = config;