var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//var DashboardPlugin = require('webpack-dashboard/plugin');
const SpritePlugin = require('svg-sprite-loader/plugin');
//************ PATH ******************
var PATH_DIST = path.resolve(__dirname, "dist");
var PATH_SRC = path.resolve(__dirname, "src");

console.log(PATH_SRC+ 'fonts');
console.log(PATH_DIST);

// "babel-core"
// "babel-loader"
// "css-loader"
// "file-loader"
// "react"
// "react-dom"
// "style-loader"
// "webpack"
// "webpack-dev-server"

module.exports = {
  entry: './src/index.js',
    output: {
      path: PATH_DIST,
      filename: 'bundle.js'
  },
  devServer: {
      contentBase: PATH_DIST,
      port: 8080
  },
  module: {
    rules: [
      //JS
      {
        test: /\.(js|jsx)$/,
        include: PATH_SRC,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env','es2015', 'react']
          }
        }
      },
      //SASS
      {
        test: /\.s[ac]ss$/,
        include: PATH_SRC,
        use: ExtractTextPlugin.extract({
          use: ['css-loader',
              'sass-loader'],
          fallback: 'style-loader' 
        })
      },
      //FONTS
      {
          test: /\.(eot|ttf|woff)$/,
          include: PATH_SRC,
          use: {
              loader: 'file-loader',
              options: {
                  name: '[name].[ext]',
                  outputPath: 'fonts/'
              }
          }
      },
      //IMAGES
      {
          test: /\.(jpg|png|svg)$/,
          include: PATH_SRC,
          use: {
              loader: 'file-loader',
              options: {
                  name: '[name].[ext]',
                  outputPath: 'img/'
              }
          }
      },
      //SVG
      // {
          
      //     test: /\.svg$/,
      //     include: PATH_SRC,
      //     use: [
      //       {
      //         loader: 'file-loader',
      //         options: {
      //             name: '[name].[ext]',
      //             outputPath: 'img/'
      //         }
      //       },
      //       {
      //         loader: 'svg-sprite-loader',
      //         options: {
      //           "esModule" : false
      //         }
      //       }
            
      //     ]
         
          
      // }
      ]
  },
  plugins: [ 
    new CleanWebpackPlugin(PATH_DIST),
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Output Management',
      template: PATH_SRC +'/html/temp.html',
      files:{
        css: PATH_DIST + '/css/style.css',
          js: PATH_DIST + '/bundle.js'
    }
    }),
    new SpritePlugin(),
    //new DashboardPlugin()
  ]
};