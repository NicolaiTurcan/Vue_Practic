<template>
    <section class="container">
        <h1 class="list_title">{{ listTitle }}</h1>
        <div class="content">
            <template v-if="isExist">
                <div class="list_movie" v-for="(movie, key) in list" :key="key">
                    <MovieItem :movie="movie" @removeItem="onRemoveItem" @showModal="onShowMovieInfo"/>
                </div>
            </template>
            <template v-else>
                <div class="empty"></div>
            </template>
        </div>
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
                return "IMDb Top 250 Movies";
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
.container{
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   max-width: 1600px;
}
.content{
    max-width: 1600px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}
.list_movie{
    height: 400px;
    width: 320px;

}
.list_title{
    font-size: 50px;
    font-weight: 600;
    margin: 40px;
    color: #FFF;
}
@media (max-width:950px){
    .list_title{
    font-size: 30px;
    margin: 15px;
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
