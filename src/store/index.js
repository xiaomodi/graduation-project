import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isactive: 1
  },
  mutations: {
  },
  actions: {
    changNumber (ctx, num) {
      console.log(ctx, num)
      this.state.isactive = num
    }
  },
  modules: {
  }
})
