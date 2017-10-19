const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(gif|png|jpe?g)$/i,
      use: [{
        loader: 'image-trace-loader'
      }, {
        loader: 'file-loader',
        options: {
          limit: 8192,
          outputPath: 'assets/'
        }
      }]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Using Trace to Lazy Load Images',
      template: './index.html',
      filename: 'index.html',
      showErrors: false,
      xhtml: true
    })
  ]
};
