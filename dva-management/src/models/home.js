export default{
    namespace:'Home', //命名空间
    state:{
        count:0
    },
    subscriptions:{},
    effects:{  //action的集合
       
    },
    reducers:{
        saveCount(state,{payload}){
            return{
                ...state,
                count:payload
            }
        }
    }
}