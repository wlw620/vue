import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const options = {
    state: {
        count : 0
    },
    mutations: {
        INCREMENT: function (state) {
            state.count = state.count + 1
        }
    }
}

const Store = new Vuex.Store(options);

export default Store
