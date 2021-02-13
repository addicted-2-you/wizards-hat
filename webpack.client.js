const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const sharedConfig = require('./webpack.shared');

module.exports = {
  ...sharedConfig,

  target: 'web',
  devtool: 'source-map',
  entry: ['./src/index.jsx', './src/styles/index.scss'],
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.((j|t)(s|sx))$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      { test: /\.html$/, use: ['html-loader'] },
      {
        test: /\.(sc|sa|c)ss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({ filename: 'index.css' }),
  ],
};
