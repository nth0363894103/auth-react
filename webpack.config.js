const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const getTop = (dir) => {return path.resolve(__dirname, dir)};
const config = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/index.js',
  output: {
    // File đầu ra
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'), // OUTPUT
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults' }]],
            plugins: [
              '@babel/plugin-proposal-optional-chaining',
              '@babel/plugin-proposal-nullish-coalescing-operator'
            ]
          }
        }
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "less-loader",
            options: {
                javascriptEnabled: true
            }
        }]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|jpg)$/i,
        use: ['file-loader']
      },
      {
        test: /\.svg$/,
        use: [{
          loader: "svg-url-loader",
          options: {
            limit: 10000,
          },
        }]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    fallback: {
      process: require.resolve('process/browser'),
      zlib: require.resolve('browserify-zlib'),
      stream: require.resolve('stream-browserify'),
      util: require.resolve('util'),
      buffer: false,
      assert: require.resolve('assert')
    },
    alias: {
      '@': getTop('./src'),
      'antd': 'antd',
      'fetch': getTop('./src/Utils/fetch.js'),
      '@hook': getTop('./src/Hooks/index.js'),
      '@redux': getTop('./src/Redux')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Index page",
      template: './public/index.html',
      favicon: "./public/favicon.ico",
      manifest: "./public/manifest.json",
    }),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser'
    }),
  ]
};

module.exports = config;
