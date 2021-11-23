import mutations from "@/store/mutations";

const { TOGGGLE_LOADER } = mutations;
const loaderStore = {
    state: {
        isShowLoader: false,
    },
    getters: {
        isShowLoader : ({ isShowLoader }) => isShowLoader,
    },
    mutations: {
        [TOGGGLE_LOADER](state, bool){
            state.isShowLoader = bool;
        },
    },
    actions: {
        toggleLoader({ commit }, bool){
            commit(TOGGGLE_LOADER, bool);
        }
    },
};

export default loaderStore;