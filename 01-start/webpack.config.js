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
  module: {},
  plugins: [
    new HtmlWebpackPlugin({
      title: 'hello webpack',
      inject: 'body'
    })
  ]
};
