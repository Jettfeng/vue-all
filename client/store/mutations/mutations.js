export default {
    updatedCount(state,obj){//只接收2个参数，如果有多个参数，可以将第二个参数包装成Object对象
        state.count = obj.num
    }
}