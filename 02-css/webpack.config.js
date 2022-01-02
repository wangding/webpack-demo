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
  mode: 'development',
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
      //use: [MiniCssExtractPlugin.loader, 'css-loader']
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
