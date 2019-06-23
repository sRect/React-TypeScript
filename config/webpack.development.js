// console.log("======development");

const webpack = require("webpack");
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin'); // 错误友好提示
const WebpackBuildNotifierPlugin = require('webpack-build-notifier'); //成功提示
const {join} = require('path');
module.exports = {
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new WebpackBuildNotifierPlugin({
      title: "编译成功 🏮",
      // logo: path.resolve("./img/favicon.png"),
      suppressSuccess: true
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: join(__dirname, '../dist'),
    port: 3000,
    compress: true,
    hot: true,
    open: true,
    host: 'localhost',
    historyApiFallback: true, // 该选项的作用所有的404都连接到index.html
    proxy: {
      // 代理到后端的服务地址，会拦截所有以api开头的请求地址
      "/api": "http://localhost:3000"
    }
  }
}