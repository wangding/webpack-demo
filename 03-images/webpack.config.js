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
  mode: 'development',
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader'
      ]},{
      test: /\.(png|svg|jpg|gif)$/,
        /* webpack 5 之前
      loader: 'url-loader',
      options: {
        limit: 1024,
        name: 'images/[hash].[ext]'
      }*/
      type: 'asset',
      generator: {
        filename: 'images/[hash].[ext]'
      },
      parser:{
        dataUrlCondition:{
          maxSize: 1024
        }
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'hello webpack',
      inject: 'body'
    }),
    new MiniCssExtractPlugin()
  ],
  devtool: 'eval-source-map'
};
