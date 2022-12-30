<template>
    <h3>测试头部父子传值组件</h3>
    <h4>父向子传递的值：{{text}}</h4>
    <button @click="fatherData">子传父并调方法</button>
</template>

<script>
export default {
    props: {
        text: String,
    },
    data() {
        return {
            obj: {
                name: 'linfeng',
                age: 666
            }
        }
    },
    methods: {
        fatherData() {
            alert('父组件中的info2：' + this.$parent.info2)
            this.$emit('say', this.obj)
        }
    }
}
</script>