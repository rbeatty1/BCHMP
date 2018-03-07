const path = require('path');

const config = {
  context: path.resolve(__dirname, 'src'),  
  entry: {
    app: './js/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/[name].bundle.js'
  }
}

module.exports = config;