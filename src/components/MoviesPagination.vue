<template>
    <div class="pagination">
        <BPagination 
            v-model="currentPageModel"
            :per-page="perPage"
            :total-rows="total"
            prev-text="Prev"
            next-text="Next"
        />
    </div>
</template>

<script>
export default {
    name: 'MoviesPagination',
    props: {
        currentPage:{
            type: Number,
            default: 1
        },
        total: {
            type: Number,
            default: 1
        },
        perPage: {
            type: Number,
            default: 1
        }
    },
    computed: {
        currentPageModel: {
            get() {
                return this.currentPage;
            },
            set(value) {
                this.$emit("pagechanged", value);
            }
        }
    }
}
</script>

<style scoped>
    .pagination{
        justify-content: center;
        margin-top: 30px;
    }
    .pagination >>> .pagination .page-item .page-link {
        background-color: transparent;
        color: white;
        font-size: 16px;
        box-shadow: none;
    }
    .pagination >>> .pagination .page-item.active .page-link {
        background-color: #fff;
        border-color: #fff;
        color: black;
    }
</style>