<template>
    <div class="box">
        <ul>
            <li v-for="(item, index) in list" :key="index" :class="{'selected': select === index}" @click="select = index">
                {{item.title}}
            </li>
        </ul>

        <div v-html="content" class="content"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            select: 0,
            list: [
                {
                    index: 0,
                    title: 'vue简介',
                    content: `<p>Vue是一套用于构建用户界面的渐进式的js框架，发布于2014年2月。与其它大型框架不同的是，Vue被设计为可以自底向上逐层应用。Vue的核心库只关注视图层，不仅易于上手，还便于与第三方库( 如: vue-router,vue-resource,vuex)或既有项目整合</p>`,
                },{
                    index: 0,
                    title: 'java简介',
                    content: `<p>Java是一门面向对象的编程语言，不仅吸收了C++语言的各种优点，还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强大和简单易用两个特征。Java语言作为静态面向对象编程语言的代表，极好地实现了面向对象理论，允许程序员以优雅的思维方式进行复杂的编程</p>`,
                },{
                    index: 0,
                    title: 'python简介',
                    content: `<p>Python由荷兰数学和计算机科学研究学会的吉多·范罗苏姆于1990年代初设计，作为一门叫做ABC语言的替代品。 [1]  Python提供了高效的高级数据结构，还能简单有效地面向对象编程。</p>
                    <p>Python语法和动态类型，以及解释型语言的本质，使它成为多数平台上写脚本和快速开发应用的编程语言， [2]  随着版本的不断更新和语言新功能的添加，逐渐被用于独立的、大型项目的开发。</p>
                    `,
                }
            ]
        }
    },
    computed: {
        content() {
            return this.list[this.select].content
        }
    }
}
</script>

<style lang="less" scoped>
@textHeight: 1.6rem;
@bigWidth: 60%;

.box{
    width: @bigWidth;
    margin: auto;
}

ul{
    height: @textHeight;
    background-color: #eee;
    border: .1rem solid #eee;
    border-bottom: 0;

    li{
        display: inline;
        text-align: center;
        padding: 0 .5rem;
        font-size: .8rem;
        transition: all 0.5s;
        cursor: pointer;
    }
}

.content{
    // width: auto;
    // height: 5rem;
    margin: auto;
    border: .1rem solid #eee;
    border-top: 0;
    margin-bottom: 2rem;
    font-size: .7rem;
    padding: .4rem .8rem;
    p{
        text-indent: 2em;
    }
}

.selected {
    font-weight: 800;
    font-style: italic;
    border-bottom: .1rem solid rgb(51, 235, 189);
}
</style>