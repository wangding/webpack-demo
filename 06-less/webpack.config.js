const MiniCssExtractPlugin = require("mini-css-extract-plugin");
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
      test: /\.less$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'less-loader'
      ]  
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'hello webpack',
      inject: 'body'
    }),
    new MiniCssExtractPlugin()]
};
