const path = require('path');
const WebpackBar = require('webpackbar');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.tsx',
  output: {
    path: path.resolve('dist'),
    filename: '[name].[hash:6].bundle.js',
    publicPath: process.env.BASE_URL,
  },
  module: {
    rules: [
      {
        test: [/\.(ts|js)x?$/],
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.png',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash:6].css',
    }),
    new WebpackBar(),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  }
};
