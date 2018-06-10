import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'

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
      component: Todo,
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
    },
    {
      name:'login',
      path: '/login',
      component: Login,
      mata:{
        title:'login',
        description:'this is login'
    }
    }
  ]
  