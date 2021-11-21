<template>
    <div class="movie_item mb-3">
        <div class="movie_item_poster" :style="posterBg"></div>
        <div class="movie_info_wraper d-flex flex-column justify-content-between">
            <div class="movie_item_info">
                <h3 class="movie_title">{{movie.Title}}</h3>
                <span class="movie_year">{{movie.Year}}</span>
            </div>
            <div class="movie_item_controls row no-gutters">
                <div class="col">
                    <BButton size="md" block variant="outline-light">Edit</BButton>
                </div>
                <div class="col">
                    <BButton size="md" block variant="outline-light">Remove</BButton>
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
    computed: {
        posterBg(){
            return { 
                'background-image': `url(${this.movie.Poster})`
            }
        }
    }
}
</script>

<style scoped>
.movie_item{
    position: relative;
    cursor: pointer;
    border-radius: 5px;
    overflow: hidden;
    transition: all 0.4s ease-in;
    height: 300px;
}
.movie_item:hover{
    box-shadow: 0px 5px 30px rgba(0,0,0,0.7);
    transform: scale(1.05);
}
.movie_item_poster{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
}
.movie_info_wraper{
    padding: 10px;
    height: 100%;
}
</style>