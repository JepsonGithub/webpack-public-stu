import $ from 'jquery'
console.log($('div'))

const app = document.querySelector('#app')
const h2 = document.createElement('h2')
h2.innerText = '大家好, 我是about.js'
app.appendChild(h2)