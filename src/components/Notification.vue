<template >
    <div class="b-toast" no-auto-hide: true>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "Notification",
    computed: {
        ...mapGetters(["messagePool"])
    },
    watch: {
        messagePool: "showNotification"
    },
    methods: {
        showNotification({ variant, message, title}){
            this.$bvToast.toast(message, {
                title : title,
                variant : variant,
                solid: true,
            });
        }
    },
};
</script>