// console.log("🍎", process.argv);
// console.log("🍎", process.argv.slice(2));

const argv = require('yargs-parser')(process.argv.slice(2));
const _mode = argv.mode || "development";
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const merge = require("webpack-merge");
const {
  CheckerPlugin
} = require('awesome-typescript-loader')
const {join, resolve} = require("path");
console.log("🍎", argv.mode);

const webpackBaseConfig = {
  entry: {
    app: resolve("./src/web/index.tsx")
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:20].js' // 多出口
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': resolve(__dirname, './src')
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
    new CheckerPlugin()
  ]
}

module.exports = merge(webpackBaseConfig, _mergeConfig);