const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const baseConfig = require('./webpack.base.config')

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: false,
  resolve: {
    unsafeCache: true,
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      }),
    ],
  },
  entry: {
    index: path.resolve(__dirname, '../example/src/index.tsx'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../example/dist'),
    libraryTarget: 'commonjs2',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new MiniCssExtractPlugin({
      ignoreOrder: true,
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  optimization: {
    minimizer: [new TerserJSPlugin({ extractComments: false })],
  },
})
