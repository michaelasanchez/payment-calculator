const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');


var ENV = process.env.npm_lifecycle_event;
// var isTest = ENV === 'test' || ENV === 'test-watch';
var isProd = ENV === 'build';

const pageTitle = 'Payment Calculator';

module.exports = function makeWebpackConfig() {

  var config = {
    mode: isProd ? 'production' : 'development',
  };

  config.resolve = {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.tsx', '.ts', '.js']
  };

  // Enable sourcemaps for debugging webpack's output.
  if (!isProd)
    config.devtool = 'source-map';

  config.output = {
    // Filename for entry points
    // Only adds hash in build mode
    filename: isProd ? '[name].[hash].js' : '[name].bundle.js',
  };

  config.module = {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      }, {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: function () {
                  return [
                    require('autoprefixer'),
                  ]
                }
              }
            }
          },
          {
            loader: 'sass-loader',
          }
        ]
      },
      {
          test: /\.(png|jpe?g|svg)$/,
          loader: 'file-loader',
          options: {
              name: 'assets/[name].[ext]',
          }
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  };

  config.plugins = [
    new HtmlWebpackPlugin({
      template: './src/public/index.html',
      title: pageTitle,
      inject: 'body'
    }),
    new MiniCssExtractPlugin(),
    new webpack.LoaderOptionsPlugin({
      test: /\.scss$/i,
      options: {
        postcss: {
          plugins: [autoprefixer]
        }
      }
    }),
  ]

  config.devServer = {
    contentBase: path.join(__dirname, './dist/'),
    // // Public path is root of content base
    publicPath: '/',
    port: 9000
  };

  return config;
}();