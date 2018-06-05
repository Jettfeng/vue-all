import Vue from "vue";

//方式一
// new Vue({
//     el:'#root',
//     template:'<div>{{text}}</div>',
//     data:{
//        text:'text' 
//     }
// })


// 方式二
const app = new Vue({
    template:'<div ref="div">{{text}} {{obj.a}}</div>',
        data:{
            text:0,
            obj:{}
        }
})
app.$mount('#root')
//app.text = 'text1'
let i = 0
setInterval(()=>{
    app.text += 1
    i++
    app.obj.a = i
  //  app.$forceUpdate()//强制刷新
},1000)
// #属性
// console.log(app.$data)
// console.log(app.$props)
// console.log(app.$el)
//console.log(app.$options)//app.$options是修改后的数据，不能对数据进行修改

// app.$options.render= (h)=>{//下一次有值变化的时候才会执行
//     return h('div',{},'new render function')
// }

//console.log(app.$root===app) //app.$root为根节点，等于app对象

//console.log(app.$children) //子组件

//console.log(app.$slots) //插槽
//console.log(app.$scopedSlots)//

//console.log(app.$refs)//获取dom节点,如果是html节点就返回html节点，如果是组件就返回组件

//console.log(app.$isServer)//服务端渲染

// #方法
// app.$watch('text',(newText,oldText)=>{
//     console.log(`${newText}:${oldText}`)
// })

// app.$on('test',(a,b)=>{//监听事件
//     console.log(`test emited ${a}-${b}`)
// })
// app.$emit('test',1,2)//触发事件

// app.$once('test',(a,b)=>{
//     console.log(`test emited ${a}-${b}`)
// })
// setInterval(()=>{
//     app.$emit('test',1,2)//只触发一次
// },1000)

