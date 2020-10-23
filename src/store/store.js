import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

 

export default new Vuex.Store({

  state:{

   count:[]

  },

  mutations:{
    join(state,stark){
      state.count.push(stark)
    },
    ipt(state,stark){
      state.count.splice(stark,1)
    }
   

  }
})