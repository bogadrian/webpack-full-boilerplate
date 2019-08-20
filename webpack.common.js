// webpack common js, a common file for prod and dev mode to be merged in both devg and prod webpack config 
module.exports = {
    entry: {
      babel: '@babel/polyfill',
      index: './src/js/index.js',
      vendor: './src/js/vendor.js',
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.html$/,
            use: ['html-loader']
          },
          {
            test: /\.(svg|png|gif|jpeg|jpg)$/,
            use: {
              loader: 'file-loader',
              options: {
                name: '[name].[hash].[ext]',
                outputPath: 'imgs'
              }
            }
          },
          {
            test: /\.js$/,
            use: ["source-map-loader"],
            enforce: "pre"
          }
          //private css loader just in case boostrap is not enough
          // {
          //   test: /\.css$/i,
          //   use: ['style-loader', 'css-loader'],
          // }
        ]
      }

}