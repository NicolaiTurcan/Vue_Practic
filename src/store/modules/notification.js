import mutations from "@/store/mutations";

const {SHOW_NOTIFY_TOAST} = mutations;

const notificationStore ={
    state: {
        messagePool: []
    },
    getters: {
        messagePool: ({ messagePool }) => messagePool[messagePool.length - 1],
    },
    mutations: {
        [SHOW_NOTIFY_TOAST](state, message){
            state.messagePool.push(message);
        },
    },
    actions:{
        showNotify({ commit }, message) {
            commit(SHOW_NOTIFY_TOAST, message);
        }
    }
};

export default notificationStore;