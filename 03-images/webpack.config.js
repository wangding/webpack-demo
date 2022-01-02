const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].js',
    clean: true
  },
  mode: 'none',
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader'
      ]},{
      test: /\.(png|svg|jpg|gif)$/,
      loader: 'url-loader',
      options: {
        limit: 1024
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'hello webpack',
      inject: 'body'
    }),
    new MiniCssExtractPlugin()
  ]
};
