<template>
<h1>获取用户信息</h1>
<ul>
    <li>
        <input type="text" v-model="firstName" placeholder="please enter first name">
    </li>
    <li>
        <input type="text" v-model="lastName" placeholder="please enter last name">
    </li>
</ul>

<h3>{{fullName}}</h3>


<br>
<input type="text" v-model="one" placeholder="readonly">
{{one}}
</template>

<script>
import {
    reactive,
    toRefs,
    computed,
    readonly
} from 'vue'

export default {
    setup() {
        let userInfo = reactive({
            firstName: 'lin',
            lastName: 'feng'
        })

        let fullName = computed(() => {
            return userInfo.firstName + ' ' + userInfo.lastName
        })

        let test = reactive({
            one: 'aaa',
            two: 'bbb'
        })

        test = readonly(test)

        return {
            ...toRefs(userInfo),
            fullName,
            ...toRefs(test)
        }
    }
}

</script>

<style lang="less" scoped>
h1{
    color: red;
    text-align: center;
}

ul{
    width: 7rem;
    margin: auto;
}

h3{
    text-align: center;
}
</style>