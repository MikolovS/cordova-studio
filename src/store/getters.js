export const getters = {
    user: state => {
        if (state.user) {
            return state.user
        } else {
            return JSON.parse(localStorage.getItem('user'));
        }
    }
};