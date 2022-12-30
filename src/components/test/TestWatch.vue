<template>
    <div>search</div>
    <input type="text" v-model="data">
</template>

<script>
import { onMounted } from 'vue'
export default {
    setup() {
        onMounted(() => {
            console.log("ok");
        })
    }
}
</script>