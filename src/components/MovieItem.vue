<template>
    <div class="movie_item">
        <div class="movie_item_poster">
            <img class="movie_item_image" :src="movie.Poster" :alt="movie.Title">
        </div>
        <div class="movie_info_wraper d-flex flex-column justify-content-between">
            <div class="movie_item_info">
                <h3 class="movie_title">{{movie.Title}}</h3>
                <span class="movie_year">{{movie.Year}}</span>
            </div>
            <div class="movie_item_controls row no-gutters">
                <div class="col">
                    <BButton class="movie_item_button" size="md" block variant="outline-light">Edit</BButton>
                </div>
                <div class="col">
                    <BButton class="movie_item_button" size="md" block variant="outline-light" @click="removeFilm">Remove</BButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MovieItem",
    props: {
        movie: {
            type: Object,
            required: true
        }
    },
    methods: {
        removeFilm(){
            this.$emit('removeItem', { 
                id: this.movie.imdbID, 
                title: this.movie.Title
            });
        }
    },
};
</script>

<style scoped>
.movie_item{
    position: relative;
    cursor: pointer;
    border-radius: 5px;
    overflow: hidden;
    transition: all 0.3s ease-in;
    height: 400px;
    max-width: 320px;
    width: 100%;
    margin: 0;
}
.movie_item:hover{
    box-shadow: 0px 5px 30px rgba(0,0,0,0.5);
    transform: scale(1.05);
}
.movie_item:hover .movie_item_image{
    filter: brightness(0.1);
}
.movie_item:hover .movie_info_wraper{
    opacity: 1;
}
.movie_item_poster{
    width: 100%;
    height: 100%;
}
.movie_item_image{
    width: 100%;
    height: 100%;
    transition: 0.5s all;
}
.movie_info_wraper{
    position: absolute;
    left: 0;
    top: 0;
    padding: 40px 10px 30px 10px;
    height: 100%;
    width: 100%;
    z-index: 1;
    opacity: 0;
    color: white;
    transition: 0.5s all;
}
.movie_item_button{
    width: 100%;
}
</style>