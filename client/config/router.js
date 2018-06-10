import Router from 'vue-router'

import routes from './routes'

export default () => {
  return new Router({
    routes,
    mode: 'history',
    // base:'/base/',
    linkActiveClass:'activeLink',
    linkExactActiveClass:'extractActive',
    scrollBehavior (to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        if(savedPosition){
            return savedPosition //保存过的位置
        }else{
            return {x:0,y:0}
        }
      },
    //   parseQuery(query){

    //   },
    //   stringifyQuery(obj){

    //   }
    fallback:true//当浏览器不支持 history.pushState 控制路由是否应该回退到 hash 模式。默认值为 true。
  })
}
