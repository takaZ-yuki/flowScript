var FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  module: {
    loaders: [
      {
        // 対象となるファイルの拡張子
        test: /\.js/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  output: {
    path: `${__dirname}/dist/`, //  出力ファイルのディレクトリ名
    filename: 'bundle.js'  // 出力ファイル名
  },
  plugins: [
    new FlowStatusWebpackPlugin({
      onSuccess: function (stdout) {
        // 成功したときのログ出力
        console.log(stdout);
      },
      onError: function (stdout) {
        // 失敗したときのログ出力
        console.error(stdout);
      }
    })
  ]
};