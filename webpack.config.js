const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

var extractPlugin = new ExtractTextPlugin({
   filename: './css/bundle.styles.css'
});


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
  module: {
        rules: [    
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
                use: [{
                    loader: "file-loader"
                }]
            },
            {
               test: /\.scss$/,
                  use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/[name].bundle.js'
  },
  plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor'),
        extractPlugin,
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new HtmlWebpackPlugin({
          title: 'Custom template',
          template: 'index.htm'
        })
    ]  

}

module.exports = config;