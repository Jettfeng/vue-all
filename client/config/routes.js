// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

export default [
    {
      path: '/',
      redirect: '/app'
    },
    {
      name:'app',
      path: '/app',
     // props:true,//将路由的params传递给组件内的props
    //  props: (route) => ({ id: route.query.b }),
      component: ()=> import('../views/todo/todo.vue'),
      // components:{ //命名视图
      //   default:Todo,
      //   a:Login
      // },
      mata:{
          title:' app',
          description:'this is app'
      },
    //   children:[ 
    //       {
    //           path:'test',
    //           component:Login
    //       }
    //   ]
      // beforeEnter: (to, from, next) => {
      //   console.log('beforeEnter')
      //   next()
      // }
    },
    {
      name:'login',
      path: '/login',
      // component: Login,
      component:()=>import('../views/login/login.vue'),
      mata:{
        title:'login',
        description:'this is login'
    }
    }
  ]
  