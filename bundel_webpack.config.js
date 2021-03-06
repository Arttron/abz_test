var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var SpritePlugin = require('svg-sprite-loader/plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var webpack = require('webpack');
//************ PATH ******************
var PATH_DIST = path.resolve(__dirname, "dist");
var PATH_SRC = path.resolve(__dirname, "src");

console.log(PATH_SRC);
console.log(PATH_DIST);

module.exports = {
  entry: { 
    index: './src/index.js',
    register: './src/register.js'
  },
    output: {
      path: PATH_DIST,
      filename: '[name].js'
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
      chunks: ['index'],
      template: PATH_SRC +'/html/temp.html',
      files:{
        css: PATH_DIST + '/style.css',
          js: PATH_DIST + '/index.js'
    }
    }),
    new HtmlWebpackPlugin({
      filename: 'reg_form.html',
      title: 'Output Management',
      chunks: ['register'],
      template: PATH_SRC +'/html/reg.html',
      files:{
        css: PATH_DIST + '/style.css',
          js: PATH_DIST + '/register.js'
    }
    }),
    new SpritePlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
};