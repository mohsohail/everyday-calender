const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '../../client/index.js'),
  output: {
    path: path.join(__dirname, '../../build'),
    filename: 'bundle.js'
    // publicPath: '/'
  },
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
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Everyday Calendar',
      template: path.join(__dirname, '../../client/public/main.html')
      // filename: 'main.html'
    }),
    new CopyPlugin([
      {
        from: 'client/public',
        to: 'public'
      }
    ]),
    // new WorkboxPlugin.GenerateSW({
    //   clientsClaim: true,
    //   skipWaiting: true
    // })
    new WorkboxPlugin.InjectManifest({
      // swSrc: path.join(__dirname, '../../client/public/sw.js')
      swSrc: 'client/public/sw.js'
    })
  ],
  devServer: {
    writeToDisk: true,
    historyApiFallback: true,
    hot: false,
    liveReload: false
  }
};
