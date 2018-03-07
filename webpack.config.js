const path = require('path'),
    webpack = require('webpack');

const config = {
  context: path.resolve(__dirname, 'src'),  
  entry: {
    app: './js/app.js',
    vendor: [
            'jquery',
            'bootstrap',
            'leaflet',
            'esri-leaflet',
            'esri-leaflet-renderers'
        ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/[name].bundle.js'
  },
  plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor'),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],

}

module.exports = config;