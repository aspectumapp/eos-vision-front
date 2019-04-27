const path = require('path');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const constants = require('./constants');

module.exports = {
  entry: {
    notifications: path.join(constants.ASSETS_ROOT, 'js', 'brandbook.js')
  },
  output: {
    path: constants.ASSETS_DIST,
    filename: 'js/[name].js'
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
        test: /\.pug$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'html/[name].html'
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
    new SVGSpritemapPlugin(path.join(constants.ASSETS_ROOT, 'sprite-svg-source', '**/*.svg'), {
      output: {
        svg: {
          // Disable `width` and `height` attributes on the root SVG element
          // as these will skew the sprites when using the <view> via fragment identifiers
          sizes: false
        }
      },
      sprite: {
        generate: {
          // Generate <use> tags within the spritemap as the <view> tag will use this
          use: true,

          // Generate <view> tags within the svg to use in css via fragment identifier url
          // and add -fragment suffix for the identifier to prevent naming colissions with the symbol identifier
          view: '-fragment',

          // Generate <symbol> tags within the SVG to use in HTML via <use> tag
          symbol: true
        },
      },
      styles: {
        // Specifiy that we want to use URLs with fragment identifiers in a styles file as well
        format: 'fragment',

        // Path to the styles file, note that this method uses the `output.publicPath` webpack option
        // to generate the path/URL to the spritemap itself so you might have to look into that
        filename: path.join(constants.ASSETS_ROOT, 'less', 'sprite.css')
      }
    })
  ]
};
