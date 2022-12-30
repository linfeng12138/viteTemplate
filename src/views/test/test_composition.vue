<template>
    <h2>{{title}}</h2>
    <ul>
        <li v-for="(item, index) in userInfo" :key="index">{{index}}:{{item}}</li>
    </ul>
    <pre>{{info}}</pre>
    <button @click="helloWorld">执行helloWorld</button>
    <button @click="getUserInfo">获取用户信息</button>
    <button @click="setUserInfo">修改用户信息</button>
    <br>
    <input type="text" v-model="title">
    <br>
    {{des}}---{{click}}
    <input type="text" v-model="des">
    <pre>{{test}}</pre>
</template>

<script>
import { reactive, ref, toRefs } from 'vue'
export default {
    setup() {
        // ref 定义字符串和number和Boolean和数组
        // reactive 定义对象
        // ref和reactive都是定义响应式数据的
        let title = ref("我是一个标题")
        let userInfo = reactive({
            uname: "linfeng",
            uage: 22,
        })
        let info = ref({
            a: 'hello',
            b: 10
        })
        let test = reactive({
            des: 'linfengGood',
            click: 2
        })

        const helloWorld = () => alert("Hello world")
        const getUserInfo = () => {
            alert(userInfo.uname)
            alert(userInfo.uage)
        }
        const setUserInfo = () => {
            userInfo = {
                uname: "linfeng2",
                uage: 666
            }
        }

        return{
            title,userInfo,info,
            helloWorld,
            getUserInfo,
            setUserInfo,
            // 注意：该方式将不再是响应式数据
            // ...test
            ...toRefs(test),
            test
        }
    },
    // data() {
    //     return {
    //         msg: 'Composition测试页面'
    //     }
    // },
    // methods: {
    //     run() {
    //         alert("this is run fun")
    //     }
    // }
}
</script>