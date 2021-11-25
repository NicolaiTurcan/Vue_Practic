<template>
  <div id="app">
    <Header />
    <Loader />
    <Notification />
    <MoviesList :list="moviesList" />
    <MoviesPagination
      :current-page="currentPage"
      :per-page="moviesPerPage"
      :total="moviesTotal"
      @pagechanged="onPageChanged"
    />
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MoviesList from "@/components/MoviesList.vue";
import MoviesPagination from "@/components/MoviesPagination.vue";
import Loader from "@/components/Loader.vue";
import Header from "@/components/Header.vue";
import Notification from "@/components/Notification.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    MoviesList,
    MoviesPagination,
    Loader,
    Header,
    Notification,
    Footer,
  },
  computed: {
    ...mapGetters("movies", [
      "moviesList",
      "currentPage",
      "moviesPerPage",
      "moviesTotal",
    ]),
  },
  watch: {
    "$route.query": {
      handler: "onPageQueryChange",
      immediate: true,
      deep: true,
    },
  },
  methods: {
    ...mapActions("movies", ["changeCurrentPage"]),
    onPageQueryChange({ page = 1 } = {}) {
      this.changeCurrentPage(Number(page));
    },
    onPageChanged(page) {
      this.$router.push({ query: { page } });
    },
  },
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: #1A1A1D;
  min-height: 100vh;
}
</style>
