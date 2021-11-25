<template>
    <div class="modal_info_wrap">
        <header class="modal_info_header">
            <h3 class="modal_info_title">Movie view</h3>
            <div class="modal_button">
                <b-button variant="dark" @click="closeModal">X</b-button>
            </div>
        </header>
        <div class="modal_info_content">
            <div class="movie_poster">
                <img :src="movie.Poster" :alt="movie.Title">
            </div>
            <div class="info_content">
                <h3 class="movie_title">{{movie.Title}}</h3>
                <p class="movie_raiting">{{movie.imdbRating}}</p>
                <p class="movie_description">{{movie.Plot}}</p>
                <div class="mt-3 mb-4 info_tags">
                    <BBadge variant="success" class="mr-2">{{movie.Year}}</BBadge>
                    <BBadge variant="success" class="mr-2">{{movie.Language}}</BBadge>
                    <BBadge variant="success" class="mr-2">{{movie.Genre}}</BBadge>
                    <BBadge variant="success" class="mr-2">{{movie.Runtime}}</BBadge>
                </div>
                <div class="table">
                    <tbody>
                        <tr>
                            <th>Country</th>
                            <td>{{ movie.Country }}</td>
                        </tr>
                        <tr>
                            <th>Director</th>
                            <td>{{ movie.Director }}</td>
                        </tr>
                        <tr>
                            <th>Writer</th>
                            <td>{{ movie.Writer }}</td>
                        </tr>
                        <tr>
                            <th>Actors</th>
                            <td>{{ movie.Actors }}</td>
                        </tr>
                    </tbody>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "MovieInfoModal",
    props: {
        movie: {
            type: Object,
            required: true,
        }
    },
    methods: {
        closeModal() {
           this.$emit("closeMod");
        }
    },
}
</script>

<style scoped>
.modal_info_header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    background-color: rgba(0,0,0,0.9);
    padding: 10px;
}
.modal_info_content{
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background: rgb(207, 191, 191);
}
.movie_poster{
    width: 30%;
    height: 420px;
}
.movie_poster img{
    width: 300px;
    height: 420px;
}
.info_content{
    width: 65%;
}
.movie_raiting{
    font-weight: 700;
    font-size: 16px;
}
@media (max-width:1200px){
    .info_content{
        width: 55%;
    }
}
@media (max-width:992px){
    .modal_info_content{
        flex-wrap: wrap;
    }
    .movie_poster{
        display: flex;
        justify-content: center;
        width: 100%;
    }
    .info_content{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .movie_title{
        margin: 10px 0 0 0;
    }
    .movie_raiting{
        margin: 0;
    }
    .movie_description{
        margin: 0 5px 5px 5px;
    }
    .info_tags{
        margin: 5px 5px 10px 5px !important;
    }
}

</style>