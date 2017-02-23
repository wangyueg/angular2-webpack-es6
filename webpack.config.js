var path = require('path');

var config = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "bundle.js"
  },

  module: {
    loaders: [
      // load and compile javascript
      { test: /\.js$/, exclude: /node_modules/, loader:"babel-loader" },
    ]
  },

  // webpack dev server configuration
  devServer: {
    inline: true,
    hot: false
  }
};

module.exports = config;