<template>
    <div>
        <input :value="text" @input="$emit('update:text', $event.target.value)" type="text">
    </div>
    <div>{{text}}</div>
</template>

<script>
export default {
    props: {
        text: String
    }
}
</script>