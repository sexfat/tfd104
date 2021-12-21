const path = require('path');


module.exports = {
    entry: {
      app1 : './src/app.js' ,
      app2 :  './src/app2.js'
    }, // 入口文件
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
    },               // 出口文件
   // module: {},              // 處裡對應模組
   // plugins: [],             // 對應的插件
   // devServer: {},           // 服務器配置
   mode: 'development'      // 開發模式配置
}