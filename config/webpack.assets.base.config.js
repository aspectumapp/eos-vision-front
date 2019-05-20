const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const constants = require('./constants');

module.exports = {
  entry: {
    index: path.join(constants.ASSETS_ROOT, 'js', 'index.js')
  },
  output: {
    path: constants.ASSETS_DIST,
    filename: 'js/[name].js'
  },
  devServer: {
    contentBase: constants.ASSETS_DIST,
    port: 9000,
    host: '0.0.0.0',
  },
  resolve: {
    extensions: ['.js', '.less', '.pug'],
    modules: [
      "node_modules"
    ]
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader'
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use:[
          {
            loader:'url-loader',
            options: {
              name: '[name].[ext]',
              limit: 10000,
              mimetype: 'application/image/font-woff'
            }
          }
        ]
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use:[
          {
            loader:'url-loader',
            options: {
              name: '[name].[ext]',
              limit: 10000,
              mimetype: 'application/octet-stream'
            }
          }
        ]
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use:[
          {
            loader:'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use:[
          {
            loader:'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].html'
            }
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true,
              exports: false
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.join(constants.ASSETS_DIST, 'index.html'),
      template: path.join(constants.ASSETS_ROOT, 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ]
};
