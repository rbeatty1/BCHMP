const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

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
  // resolve: {
  //       extensions: [ '.html', '.js', '.json', '.scss', '.css'],
  //       alias: {
  //           leaflet_css: __dirname + "/node_modules/leaflet/dist/leaflet.css",
  //           leaflet_marker: __dirname + "/node_modules/leaflet/dist/images/marker-icon.png",
  //           leaflet_marker_2x: __dirname + "/node_modules/leaflet/dist/images/marker-icon-2x.png",
  //           leaflet_marker_shadow: __dirname + "/node_modules/leaflet/dist/images/marker-shadow.png"
  //       }
  //   },
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
                use: "file-loader?name=img/[name].[ext]"
              },
              {
            // HTML LOADER
            test: /\.html$/,
            loader: 'html-loader'
          },
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
          template: 'index.html'
        })
    ]  

}

module.exports = config;