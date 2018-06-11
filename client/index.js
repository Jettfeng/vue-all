import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'

import './assets/styles/global.styl'
import createRouter from './config/router'

Vue.use(VueRouter)

const router = createRouter()
const root = document.createElement('div')
document.body.appendChild(root)
// 导航守卫
// router.beforeEach((to,from,next)=>{
//   console.log('beforeEach')
//   // if(to.fullPath == '/login'){
//   //   next()
//   // }else{
    
//   // }
// })
// router.beforeResolve((to,from,next)=>{
//   console.log('beforeResolve')
//   next()
// })
// router.afterEach((to,from)=>{
//   console.log('afterEach')
// })
new Vue({
  router,
  render: (h) => h(App)
}).$mount(root)
