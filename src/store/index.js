import Vue from 'vue'
import Vuex from 'vuex'
import post from './modules/post'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    post,
  }
})

export default store;