import Vue from 'vue'
import Vuex from 'vuex'
import actionMovies from './modules/actionMovies'
import core from './modules/core'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        actionMovies,
        core
    },
    getters: {
        movies: state => state.actionMovies.movies
    }
})
