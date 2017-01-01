var webpack = require('webpack');
var path = require('path');

var env = 'production';

module.exports = {
   name: 'client',
   entry: "./src/app.js",
   output: {
      path: __dirname,
      filename: "./public/app.js"
   },
   module: {
      loaders: [{
         test: /\.js$/,
         loader: 'babel',
         query: {
            presets: ['es2015', 'react']
         },
         exclude: /node_modules/
      }, {
         test: /\.scss$/,
         loaders: ["style", "css", "scss", "sass"],
         exclude: /node_modules/
      }]
   },
   plugins: [
      new webpack.DefinePlugin({
         'process.env.NODE_ENV': JSON.stringify(env)
      }),
   ]
}
