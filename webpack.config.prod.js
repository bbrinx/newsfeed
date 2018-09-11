const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',

  entry: {
    app: './src/client/index.js',
  },

  plugins: [
    new CleanWebpackPlugin(['app']),
    new HtmlWebpackPlugin({
      title: 'Minimum-Viable',
      filename: 'index.html',
      template: './public/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new UglifyJSPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: 'react-hot-loader'
      },
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/env', {
                targets: {
                  edge: "17",
                  firefox: "60",
                  chrome: "67",
                  safari: "11.1"
                },
                useBuiltIns: "usage"
              }
              ],
              '@babel/react',
            ],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/env', {
                targets: {
                  edge: "17",
                  firefox: "60",
                  chrome: "67",
                  safari: "11.1"
                },
                useBuiltIns: "usage"
              }
              ],
              '@babel/react',
            ],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[local]___[hash:base64:5]"
            }
          },
          {
            loader: "less-loader"
          }
        ]
      },
    ],
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'app'),
  },
};