<template>
    <div class="loader__wrap" v-if="isShowLoader">
        <b-spinner type="grow" variant="light"> </b-spinner>
        <p>Loading...</p>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "Loader",
    computed: {
        ...mapGetters(["isShowLoader"])
    }
};
</script>

<style scoped>
.loader__wrap{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.7);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 5;
}
.loader__wrap p{
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    margin-top: 10px;
}
</style>