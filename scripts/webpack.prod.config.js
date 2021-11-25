const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const TerserJSPlugin = require('terser-webpack-plugin')

const baseConfig = require('./webpack.base.config')

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: false,
  resolve: {
    unsafeCache: true,
  },
  entry: {
    index: path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'commonjs2',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
  optimization: {
    minimizer: [new TerserJSPlugin({ extractComments: false })],
  },
})
