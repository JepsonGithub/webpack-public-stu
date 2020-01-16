import $ from 'jquery'
console.log($('div'))

const app = document.querySelector('#app')
const h1 = document.createElement('h1')
h1.innerText = '大家好, 我是index.js'
app.appendChild(h1)