const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')


module.exports = merge(common, {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MomentLocalesPlugin(),
    ],
    devtool: 'inline-sourse-map',
    module: {
        rules: [
          {
            test: /\.scss$/,
            use: [
              "style-loader", //3. Inject styles into DOM
              "css-loader", //2. Turns css into commonjs
              "sass-loader" //1. Turns sass into css
            ]
          }
        ]
      }
});