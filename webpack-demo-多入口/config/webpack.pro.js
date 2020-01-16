// production 生产环境的配置
// 导入公共的配置
const base = require('./webpack.base.js')

// 导入一个用于合并的包
const merge = require('webpack-merge')

// 导出生产环境的配置
// merge可以传入多个参数, 会将多个参数合并成一个对象
// 如果有重复的属性名, 后面的对象属性会覆盖前面的
module.exports = merge(base, { 
  // 模式 mode  development未压缩的, production压缩
  mode: 'production'
})