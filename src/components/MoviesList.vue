<template>
    <section class="content_container">
        <h1 class="list_title">IMDB Movies</h1>
        <BRow>
            <template v-if="isExist">
                <BCol cols="2" class="list_movie" v-for="(movie, key) in list" :key="key">
                    <MovieItem :movie="movie" @removeItem="onRemoveItem"/>
                </BCol>
            </template>
            <template v-else>
                <div class="empty">Empty List</div>
            </template>
        </BRow>
    </section>
</template>

<script>
import { mapActions } from "vuex";
import MovieItem from "./MovieItem.vue";

export default {
    name: "MoviesList",
    props: {
        list:{
            type: Object,
            default: () => ({})
        }
    },
    components:{
        MovieItem
    },
    computed:{
        isExist(){
            return Boolean(Object.keys(this.list).length);
        }
    },
    methods:{
        ...mapActions('movies', ["removeMovie"]),

        async onRemoveItem({id, title}){
            const isConfirmed = await this.$bvModal.msgBoxConfirm(`Are you sure you want to delete ${title}?`);
            if(isConfirmed) {
                this.removeMovie(id);
            }
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
