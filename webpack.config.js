const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

let configHtmlWebpack = (name) => {
  return {
    filename: `${name}.html`,
    template: `./src/${name}.html`,
    chunks: [`${name}`]
  }
};

module.exports = ({mode}) => {
  return {
    entry: {
      'index': './src/index.js',
      'question3': './src/question3.js',
      'question4': './src/question4.js',
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    mode,
    plugins: [
      new HtmlWebpackPlugin(configHtmlWebpack('question3')),
      new HtmlWebpackPlugin(configHtmlWebpack('question4')),
      new HtmlWebpackPlugin(configHtmlWebpack('index')),
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ],
    },
  }
};