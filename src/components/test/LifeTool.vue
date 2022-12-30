<template>
    <h2>{{title}}</h2>
    <button @click="title = title + 'a'">变更title</button>
</template>

<script>
import { provide } from '@vue/runtime-core';
export default{
    data() {
        return{
            title: '生命周期测试组件',
        }
    },
    inject: ["app"],
    beforeCreate() {
        console.log('beforeCreate：我是被创建前的函数');
    },
    created() {
        console.log('created：我是创建成功的函数');
    },
    beforeMount() {
        console.log('beforeMount：我是编译前的函数');
    },
    mounted() {
        console.log('mounted：我是编译后的函数');
    },
    beforeUpdate() {
        this.$parent.showLoading('更新数据前测试...')
    },
    updated() {
        setTimeout(() => {
            this.$parent.hideLoading()
            this.$message({
                message: '数据变更完成',
                type: 'success'
            })
        }, 500)
    },
    beforeUnmount() {
        // 注意：下面parent方法不可用
        this.$parent.showLoading('组件卸载中...')
    },
    unmounted() {
        setTimeout(() => {
            // this.$parent.hideLoading()
            console.log(this.app);
            this.app.loading = false
            this.$message({
                message: '组件卸载成功',
                type: 'success'
            })
        }, 500)
    },
}
</script>

<style lang="less" scoped>
h2{
    text-align: center;
    color: red;
}
</style>