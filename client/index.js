import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './app.vue'

import './assets/styles/global.styl'
import createRouter from './config/router'
// import store from './store/store'
import createStore from './store/store'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = createRouter()
const store = createStore()

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
  store,
  render: (h) => h(App)
}).$mount(root)
