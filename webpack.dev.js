const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'script[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['pageOne']
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: './src/about.html',
      chunks: ['pageTwo']
    }),
    new HtmlWebpackPlugin({
      filename: 'message.html',
      template: './src/message.html',
      chunks: ['pageThree']
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader', //3. renders it to dom
          'css-loader', // 2. turns css to common javascript
          'sass-loader' // 1. turns scss to css
        ]
      }
    ]
  }
});
