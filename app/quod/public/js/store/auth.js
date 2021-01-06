export default {
    namespaced: true,
    state: {
        user: Pckg.auth.user || {},
    },
    getters: {
        isLoggedIn: function (state) {
            return state.user && state.user.id > 0;
        }
    }
}