const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '../../client/index.js'),
  module: {
    rules: [
      {
        test: /\.m?js/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-proposal-object-rest-spread',
              '@babel/plugin-proposal-class-properties'
            ]
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Everyday Calendar',
      template: path.join(__dirname, '../../client/public/main.html')
      // filename: 'main.html'
    })
    // new WorkboxPlugin.GenerateSW({
    //   clientsClaim: true,
    //   skipWaiting: true
    // })
    // new WorkboxPlugin.InjectManifest({
    //   swSrc: './client/public/src-sw.js'
    //   // swDest: 'sw.js'
    // })
  ],
  devServer: {
    writeToDisk: true,
    historyApiFallback: true,
    hot: false,
    liveReload: false
  },
  output: {
    path: path.resolve(__dirname + '../../../bundle'),
    filename: 'bundle.js',
    publicPath: '/'
  }
};
