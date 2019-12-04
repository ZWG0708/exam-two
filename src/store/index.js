import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    val: "",
    list: [],
  },
  getters: {
    change(state, params) {
      let arr = [];
      state.list.forEach((item) => {
        if (item.title.indexOf(state.val) !== -1) {
          arr.push(item);
        }
      });
      return arr;
    },
    getList(state, params) {
      return state.list ;
    }
  },
  mutations: {
    getList(state, params) {
      state.list = params.data;
    }
  },
  actions: {
    getList({ commit }) {
      Axios.get('/api/list').then(res => {
        commit({ type: "getList", data: res.data.data });
      })
    }
  },
  modules: {
  }
})
