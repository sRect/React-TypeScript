// console.log("🍎", process.argv);
// console.log("🍎", process.argv.slice(2));

const argv = require('yargs-parser')(process.argv.slice(2));
const _mode = argv.mode || "development";
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const merge = require("webpack-merge");
const {CheckerPlugin} = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 打包html
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {join, resolve} = require("path");
console.log("🍎", argv.mode);

const webpackBaseConfig = {
  entry: {
    app: resolve("./src/web/index.tsx")
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].[hash:20].js' // 多出口
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': resolve(__dirname, './src'),
      '@web': resolve(__dirname, './src/web')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: [resolve('src')],
        exclude: /node_modules/,
        loader: "awesome-typescript-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CheckerPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'hooks',
      hash: true,
      minify: {
        collapseWhitespace: true, // 折叠空行
        removeAttributeQuotes: true
      },
      template: join(__dirname, './src/web/index.html'),
      // chunks: ['index', 'a'] // index.html 引入index.js
    })
  ]
}

module.exports = merge(webpackBaseConfig, _mergeConfig);