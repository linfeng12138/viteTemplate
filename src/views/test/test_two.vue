<template>
    <h1>网络请求测试</h1>

    <button @click="baidu">百度请求</button>


    <input type="text" v-model="selectText">

    <br>
    <my-login></my-login>
    <br>

    <test-watch></test-watch>
</template>

<script>
import testWatch from './../../components/test/TestWatch.vue'
import myLogin from './../../components/test/Login.vue'
export default {
    data() {
        return {
            selectText: '',
        }
    },

    mounted() {
        this.axios.post('userWeb/getSelfInfo')
        .then(res => {
            console.log(res);
            // alert(res.data.info)
        })
        .catch(err => {
            console.err(err);
        })
    },

    methods: {
        // 测试fetch-jsonp
        baidu() {
            this.fetchJsonp(`https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&wd=${this.selectText}`, {
                jsonpCallback: 'cb'
            })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.error(err);
            })
        }
    },

    components: {
        myLogin,
        testWatch,
    }
}
</script>