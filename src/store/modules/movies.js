import IDs from "@/store/mock/imdb_top250.js";
import axios from "@/plugins/axios";
import mutations from "@/store/mutations";

function serializeRespons(movies) {
    return movies.reduce((acc, movie) =>{
        acc[movie.imdbID] = movie;
        return acc;
    }, {});
};

const { MOVIES, CURRENT_PAGE, REMOVE_MOVIE } = mutations;

const moviesStore = {
    namespaced: true,
    state: {
        top250IDs: IDs,
        moviesPerPage: 24,
        currentPage: 1,
        movies: {}
    },
    getters: {
        slicedIDs: ({ top250IDs }) => (from, to) => top250IDs.slice(from, to),
        currentPage: ({ currentPage }) => currentPage,
        moviesPerPage: ({ moviesPerPage }) => moviesPerPage,
        moviesList: ({ movies }) => movies,
        moviesTotal: ({ top250IDs}) => Object.keys(top250IDs).length,
    },
    mutations: {
        [MOVIES](state, value){
            state.movies = value;
        },
        [CURRENT_PAGE](state, value){
            state.currentPage = value;
        },
        [REMOVE_MOVIE](state, index){
            state.top250IDs.splice(index, 1);
        }
    },
    actions: {
        initMoviesStore: {
            handler({ dispatch }) {
                dispatch("fetchMovies");
            },
            root: true
        },
        async fetchMovies({ getters, commit, dispatch }) {
            try {
                dispatch("toggleLoader", true, { root: true })
                const { currentPage, moviesPerPage, slicedIDs } = getters;
                const from = currentPage * moviesPerPage - moviesPerPage;
                const to = currentPage * moviesPerPage;
                const moviesToFetch = slicedIDs(from, to);

                const requests = moviesToFetch.map(id => axios.get(`/?i=${id}`));
                const response = await Promise.all(requests);
                const movies = serializeRespons(response);
                commit(MOVIES, movies);
            } catch (error){
                console.log(error);
            } finally {
                dispatch("toggleLoader", false, { root: true });
            }
        },
        changeCurrentPage({ commit, dispatch}, page){
            commit(CURRENT_PAGE, page);
            dispatch("fetchMovies");
        },
        removeMovie({ commit, dispatch, state }, id){
            const index = state.top250IDs.findIndex(item => item == id);
            if (index !== -1){
                commit(REMOVE_MOVIE, index);
                dispatch("fetchMovies");
            }
        },
        async searchMovies({ dispatch }, query){
            try{
                dispatch("toggleLoader", true, { root: true });

                const response = await axios.get(`/?s=${query}`);
                console.log(response)
            } catch (error){
                console.log(error);
            } finally {
                dispatch("toggleLoader", false, { root: true });
            }
        }
    }
};

export default moviesStore;