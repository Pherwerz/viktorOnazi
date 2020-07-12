const path = require('path');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'js/script[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    minimizer: [new OptimizeCssAssetsWebpackPlugin(), new TerserPlugin()]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: './style.css' }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      minify: false,
      chunks: ['pageOne']
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: './src/about.html',
      minify: false,
      chunks: ['pageTwo']
    }),
    new HtmlWebpackPlugin({
      filename: 'message.html',
      template: './src/message.html',
      minify: false,
      chunks: ['pageThree']
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader, //3. extract css into files
          'css-loader', // 2. turns css to common javascript
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [autoprefixer()]
            }
          },
          'sass-loader' // 1. turns scss to css
        ]
      }
    ]
  }
});
