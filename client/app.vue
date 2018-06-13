<template>
    <div id="app">
        <div id="cover"></div>
         {{count}}
        <Header></Header>
        {{fullName}}
        <p>{{textA}}</p>
        <p>命名空间的fullName:{{fullName2}}</p>
        <p>命名空间中使用a模块的state和b模块的state: {{all}}</p>
        <!-- <router-link to="/app">app</router-link>
        <router-link to="/login">login</router-link> -->
        <router-link :to="{name:'app'}">app</router-link>
        <router-link :to="{name:'login'}">login</router-link>
        <!-- <todo></todo> -->
        <transition name="fade">
        <router-view/>
        </transition>
        <Footer></Footer>
        <!-- <router-view name="a"></router-view> -->
    </div>
</template>
<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
import Todo from './views/todo/todo.vue'

export default {
  data () {
    return {

    }
  },
  computed:{
    // textA(){
    //   return this.$store.state.b.text
    // },
    // 方法一
    // ...mapState(['count']),
    // 方法二
    // ...mapState({
    //   count:'count'
    // }),
    // 方法三
     ...mapState({
      count:(state)=>state.count+'a',
      textA:(state)=>state.a.text
    }),
    // 方法四
    // count(){
    //     return this.$store.state.count
    // },

    // ...mapGetters(['fullName']),
    ...mapGetters({
       'fullName':'fullName',
       'fullName2':'a/fullName',
       'all':'a/all'
    }),
    // fullName(){
    //   return this.$store.getters.fullName
    // }
  },
  mounted(){
    //let i = 0
    // setInterval(()=>{
    //     i++
    //     this.$store.commit('updatedCount',i)
    // },1000)
    // actions改变count
    // this.$store.dispatch('updatedCountAsync',{num:100,time:1000})
    this.updatedCountAsync({num:100,time:3000})//使用mapActions
    setTimeout(()=>{
      // this.updateText('module a text has been changed')
       this['a/updateText']('module a text has been changed')
    },2000)
  },
  methods:{
   // ...mapMutations(['updatedCount','updateText']),//vuex没分模块的情况
   ...mapMutations(['updatedCount','a/updateText']),//分模块，a模块下的mutations里面的updateText方法
    ...mapActions(['updatedCountAsync'])
  },
  components: {
    Header,
    Footer,
    Todo
  }
}
</script>
<style lang="stylus" scoped>
#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

#cover {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #999;
  opacity: 0.9;
  z-index: -1;
}
</style>

