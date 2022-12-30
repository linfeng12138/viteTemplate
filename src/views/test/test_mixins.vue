<template>
    <h1>{{ msg }}</h1>
    <button @click="testAlert">testMixins</button>
    <div class="box">
        <button @click="show = true">弹窗</button>
    </div>
    <my-modal v-show="show"></my-modal>
    <my-testcom></my-testcom>
</template>

<script>
    import myModal from './../../components/objTools/Modal.vue'
    import myTestcom from './../../components/test/TestCom.vue'
    export default {
        // mixins: [defaultInfo],
        data() {
            return {
                msg: "this is testMixins data",
                show: false,
            }
        },
        created() {
            console.log(this.defaultPage);
        },
        components: {
            myModal,
            myTestcom,
        }
    }
</script>

<style lang="less" scoped>
.box{
    position: relative;
    width: 70%;
    height: 5rem;
}
</style>