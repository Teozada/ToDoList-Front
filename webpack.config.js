const path = require("path");
const plugin = require("html-webpack-plugin")
const webpack = require("webpack");

module.exports = {
  entry:"./index.js", 
  output:{
    filename:"bundle.js", 
    path: path.resolve("dist"), 
    publicPath: "/"
  },
  module:{
    rules:[
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /.html$/,
        use: "html-loader"
      },
      {
        test: /.css$/,
        use: ['css-loader','styled,loader']
      }
    ]
  },
  plugins:[
    new HTMLWebpackPlugins({template: "./public/index.html"})
  ]
}