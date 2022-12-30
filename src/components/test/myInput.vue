<template>
    <div class="bigBox">
        <input type="text" placeholder="please enter your content" @input="$emit('update:text', $event.target.value)" :value="text">
        <br>
        <pre class="show">{{text}}</pre>
    </div>
</template>

<script>
export default{
    props: {
        text: String,
    }
}
</script>

<style lang="less" scoped>
.bigBox{
    width: 100%;
    height: 3rem;

    input{
        margin: .75rem 5%;
        border: 0;
        border-bottom: 1px solid #000;
        width: 90%;
        height: 1.5rem;
        font-size: .8rem;
        padding: 0 .5em;
    }
}
</style>