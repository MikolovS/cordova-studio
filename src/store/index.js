import Vue from 'vue'
import Vuex from 'vuex'
import {actions} from './actions'
import {getters} from './getters'
import {mutations} from './mutations'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        user: JSON.parse(localStorage.getItem('user'))
    },
    modules: {
    },
    actions: actions,
    getters: getters,
    mutations: mutations,
    strict: true

});