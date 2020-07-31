const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path  = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.vue', '.json'],
  },
  entry: {
    app: path.join(__dirname, 'main.js'),
  },
  module: {
    rules: [
      { test: /\.vue$/,
        loader: 'vue-loader'},
      { test: /\.svg$/,
        loader: 'vue-svg-loader' },
      { test: /\.css$/,
        use: ['style-loader', 'css-loader']},
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },
};
