const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DEBUG = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './app/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract(
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        ),
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(DEBUG ? 'development' : 'production'),
    }),
    new ExtractTextPlugin('styles.css'),
  ],
};
