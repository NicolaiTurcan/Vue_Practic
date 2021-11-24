<template>
    <div class="modal_info_wrap">
        <header class="modal_info_header">
            <h3 class="modal_info_title">Movie view</h3>
            <div class="modal_button">
                <b-button variant="dark" @click="closeModal">X</b-button>
            </div>
        </header>
        <div class="modal_info_content">
            <BRow>
                <BCol sm="4">
                    <div class="movie_poster">
                        <img :src="movie.Poster" :alt="movie.Title">
                    </div>
                </BCol>
                <BCol sm="8">
                    <h3 class="movie_title">{{movie.Title}}</h3>
                    <p class="movie_raiting">{{movie.imdbRating}}</p>
                    <p class="movie_description">{{movie.Plot}}</p>
                    <div class="mt-3 mb-4">
                        <BBadge variant="success" class="mr-2">{{movie.Year}}</BBadge>
                        <BBadge variant="success" class="mr-2">{{movie.Language}}</BBadge>
                        <BBadge variant="success" class="mr-2">{{movie.Genre}}</BBadge>
                        <BBadge variant="success" class="mr-2">{{movie.Runtime}}</BBadge>
                    </div>
                    <table class="table small">
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
                    </table>
                </BCol>
            </BRow>
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
    background: rgba(0,0,0,0.6);
    padding: 10px;
}
.modal_info_content{
    padding: 10px;
}
.movie_poster{
    width: 300px;
    height: 420px;
}
.movie_poster img{
    width: 100%;
    height: 100%;
}

</style>