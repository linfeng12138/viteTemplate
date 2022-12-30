<template>
    <my-header :text="title"></my-header>
</template>

<script>
import MyHeader from './../../components/test/Header.vue'
export default {
    data() {
        return {
            title: "so you will be like them?"
        }
    },

    components: {
        MyHeader,
    }
}
</script>