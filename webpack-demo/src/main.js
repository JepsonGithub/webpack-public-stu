// 导入aa模块
require('./aa.js')

// 导入jquery
const $ = require('jquery')

// 导入css
require('./css/base.css')
require('./css/index.css')

// 导入less
require('./less/header.less')

console.log('这是main.js模块')

// 需求: 通过jquery实现隔行变色
$(function() {
  $('#app li:nth-child(odd)').css('color', 'red')
  $('#app li:nth-child(even)').css('color', 'green')
})

const fn = () => {
  console.log('嘎嘎')
}
fn()