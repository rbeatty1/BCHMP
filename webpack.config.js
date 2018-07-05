const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin")

var extractPlugin = new ExtractTextPlugin({
   filename: './bundle.styles.css'
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
                    loader: "file-loader?name=fonts/[name].[ext]"
                }]
            },
            {
               test: /\.scss$/,
                  use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|jpg)$/, 
                use: [{
                  loader: "file-loader",
                  options: {
                    name: "img/[name].[ext]",
                    limit: 1000
                  }
                }]
              }
        ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/[name].bundle.js'
  },
  watch: true,
  devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      port: 9000
  },
  plugins: [
        new HtmlWebpackPlugin({
          title: 'Custom template',
          template: 'index.html',
          hash: true
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor'),
        extractPlugin,
        //make jquery global
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }) 
    ]  

}

module.exports = config;