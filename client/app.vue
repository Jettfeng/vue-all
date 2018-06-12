<template>
    <div id="app">
        <div id="cover"></div>
         {{count}}
        <Header></Header>
        {{fullName}}
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
import {mapState,mapGetters} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
import Todo from './views/todo/todo.vue'

export default {
  data () {
    return {

    }
  },
  computed:{
    // 方法一
    // ...mapState(['count']),
    // 方法二
    // ...mapState({
    //   count:'count'
    // }),
    // 方法三
     ...mapState({
      count:(state)=>state.count+'a'
    }),
    // 方法四
    // count(){
    //     return this.$store.state.count
    // },

    ...mapGetters(['fullName']),
    // fullName(){
    //   return this.$store.getters.fullName
    // }
  },
  mounted(){
    let i = 0
    setInterval(()=>{
        i++
        this.$store.commit('updatedCount',i)
    },1000)
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

