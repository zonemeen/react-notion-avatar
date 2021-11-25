const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const baseConfig = require('./webpack.base.config')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  resolve: {
    unsafeCache: true,
  },
  entry: {
    app:
      process.env.NODE_ENV === 'production'
        ? path.resolve(__dirname, '../example/src/index.js')
        : [
            'react-hot-loader/patch',
            path.resolve(__dirname, '../example/src/index.js'),
          ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../example/dist'),
    publicPath: '/',
  },
  devServer: {
    hot: true,
    hotOnly: true,
    contentBase: path.resolve(__dirname, '../example/dist'),
    publicPath: '/',
    historyApiFallback: true,
    stats: 'minimal',
    port: 8080,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new HtmlWebpackPlugin({
      title: 'web',
      template: path.resolve(__dirname, '../example/index.html'),
    }),
    new MiniCssExtractPlugin({
      ignoreOrder: true,
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
})
