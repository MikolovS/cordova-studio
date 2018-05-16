export const mutations = {
    SET_USER(state) {
        state.user = JSON.parse(localStorage.getItem('user'))
    },
    DELETE_USER(state) {
        state.user = null
    }
};