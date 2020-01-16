// 使用 App组件, 渲染 index.html 中的视图
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// new Vue({
//   el: '#app',
//   // 使用vue底层的渲染方法
//   // 作用: 使用App组件, 作为根组件, 将来渲染视图
//   render: function(createElement) {
//     return createElement(App)
//   },
//   router
// })

new Vue({
  render: h => h(App),
  router
}).$mount('#app')