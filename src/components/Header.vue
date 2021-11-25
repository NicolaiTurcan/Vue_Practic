<template>
    <header class="header">
        <b-navbar type="dark" class="navbar" variant="dark">
            <b-container>
                <b-navbar-brand class="logo" href="https://www.imdb.com/" target="_blank">MovieIMDb</b-navbar-brand>
                <form @submit.prevent>
                    <b-form-input size="sm" class="search_input mr-sm-2"
                    placeholder="Search" 
                    v-model="searchValue"
                    debounce="500"></b-form-input>
                </form>
            </b-container>
        </b-navbar>
    </header>
</template>

<script>
import { mapActions } from "vuex"

export default {
    name: "Header",
    data: () => ({
        searchValue: ""
    }),
    watch: {
        searchValue: "onSearchValueChange"
    },
    methods: {
        ...mapActions('movies', ["searchMovies", "fetchMovies", "toggleSearchState"]),
        onSearchValueChange(value){
            if (value) {
                this.searchMovies(value);
                this.toggleSearchState(true);
            } else {
                this.fetchMovies(value);
                this.toggleSearchState(false);
            }
        }
    }
}
</script>

<style scoped>
.navbar{
    background-color: rgba(0,0,0,0.7) !important;
    height: 70px;
}
.logo{
    color: #fff !important;
    font-weight: 700;
}
.search_input{
    color: #fff !important;
    background: rgba(255,255,255,0.1);
    border-color: rgba(0,0,0,0.6);
}
.search_input:focus{
    box-shadow: none;
    background: rgba(255,255,255,0.3);
    border-color: rgba(0,0,0,0.6);
}
</style>