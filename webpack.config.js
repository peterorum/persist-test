// const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
  },

  output: {
    path: path.join(__dirname, '/build'),
    filename: '[name].bundle.js',
    publicPath: `/`,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    usedExports: true,
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/favicon.png',
    }),
  ],
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/components/'),
      Containers: path.resolve(__dirname, 'src/containers/'),
      HOC: path.resolve(__dirname, 'src/hoc/'),
      Context: path.resolve(__dirname, 'src/context/'),
      Styles: path.resolve(__dirname, 'src/styles/'),
      Images: path.resolve(__dirname, 'images/'),
      Redux: path.resolve(__dirname, 'src/redux/'),
      Config: path.resolve(__dirname, 'config/'),
      Utils: path.resolve(__dirname, 'src/utils/'),
    },
  },
  devtool: 'source-map',
};
