var path = require('path')

module.exports = {
  context: path.resolve(__dirname, 'js'),
  entry: './main',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.html$/, loaders: ['raw'], exclude: /node_modules/},
      {test: /\.css$/, loaders: ['style', 'css']},
    ],
  },
}

