<template>
    <h1>测试页面一</h1>
    <my-header :text="info" @say="saySonTool"></my-header>
    <!-- <my-input :text="myText"></my-input> -->
    <two-input v-model:text="myText" class="twoInput"></two-input>
    <button @click="isShow = !isShow">挂载/卸载组件</button>
    <life-tool v-if="isShow"></life-tool>
    <keep-alive>
        <test-tab v-if="isShow"></test-tab>
    </keep-alive>
</template>

<script>
import myHeader from './../../components/test/Header.vue'
import myInput from './../../components/test/Input.vue'
import lifeTool from './../../components/test/LifeTool.vue'
import TestTab from '../../components/test/TestTab.vue'
import twoInput from '../../components/test/myInput.vue'

export default {
    data() {
        return {
            info: '这是父组件给子组件的值',
            info2: '哈哈哈',
            myText: '',
            isShow: true,
        }
    },
    methods: {
        saySonTool(obj) {
            alert('姓名：' + obj.name + '年龄：' + obj.age)
        },
        showLoading(...texts){
            // console.log(texts);
            this.$emit('showLoading', texts[0])
        },
        hideLoading() {
            this.$emit('hideLoading')
        }
    },
    // mounted() {
    //     this.$emit('showLoading', '等会我的小短腿...')
    // },
    components: {
    "my-header": myHeader,
    myInput,
    lifeTool,
    TestTab,
    twoInput
}
}
</script>

<style lang="sass" scoped>
h1
    text-align: center

.twoInput
    width: 70%
    margin: auto
</style>