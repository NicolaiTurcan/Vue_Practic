<template>
    <section class="content_container">
        <h1 class="list_title">{{ listTitle }}</h1>
        <BRow>
            <template v-if="isExist">
                <BCol cols="2" class="list_movie" v-for="(movie, key) in list" :key="key">
                    <MovieItem :movie="movie" @removeItem="onRemoveItem" @showModal="onShowMovieInfo"/>
                </BCol>
            </template>
            <template v-else>
                <div class="empty"></div>
            </template>
        </BRow>
        <BModal body-class="modal_window '.modal-content" :id="movieInfoModalID" size="xl" hide-footer hide-header>
            <MovieInfoModal :movie="selectedMovie" @closeMod="onCloseModal"/>
        </BModal>
    </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MovieItem from "./MovieItem.vue";
import MovieInfoModal from "./MovieInfoModal.vue";

export default {
    name: "MoviesList",
    data: () => ({
        movieInfoModalID: "movie-info", 
        selectedMovieID: "",
    }),
    props: {
        list:{
            type: Object,
            default: () => ({})
        }
    },
    components:{
        MovieItem,
        MovieInfoModal,
    },
    computed:{
        ...mapGetters("movies", ["isSearch"]),
        isExist(){
            return Boolean(Object.keys(this.list).length);
        },
        listTitle(){
            if (this.isSearch) {
                return "Search Result";
            } else {
                return "IMDB Movies";
            }
        },
        selectedMovie(){
            return this.selectedMovieID ? this.list[this.selectedMovieID] : null;
        }
    },
    methods:{
        ...mapActions('movies', ["removeMovie"]),

        async onRemoveItem({id, title}){
            const isConfirmed = await this.$bvModal.msgBoxConfirm(`Are you sure you want to delete ${title}?`);
            if(isConfirmed) {
                this.removeMovie(id);
            }
        },
        onShowMovieInfo(id){
            this.selectedMovieID = id;
            this.$bvModal.show(this.movieInfoModalID);
        },
        onCloseModal(){
            this.$bvModal.hide(this.movieInfoModalID);
        }
    },
};
</script>

<style scoped>
.content_container{
    margin: 0 3%;
}
.list_movie{
    display: flex;
    margin-bottom: 20px;
}
.list_title{
    font-size: 50px;
    margin: 40px;
}
@media (max-width:1750px){
    .list_movie{
        width: 20%;
    }
}
@media (max-width:1400px){
    .list_movie{
        width: 25%;
    }
}
@media (max-width:1150px){
    .list_movie{
        width: 33.33333%;
    }
}
@media (max-width:850px){
    .list_movie{
        width: 50%;
    }
}
@media (max-width:525px){
    .list_movie{
        width: 100%;
        justify-content: center;
    }
}
</style>

<style>
.modal_window{
    padding: 0 !important;
}
.modal-content{
    border-radius: 0 !important;
    border: none !important;
}
</style>
