export default {
    updatedCountAsync(store,data){
        console.log('xxxx')
        setTimeout(()=>{
            store.commit('updatedCount',{num:data.num})
        },data.time)
    }
}