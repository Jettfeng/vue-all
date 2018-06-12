import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

export default ()=>{
    return new Vuex.Store({
        state:{
            count:0
        },
        mutations:{
            updatedCount(state,num){
                state.count = num
            }
        }
    })
}

