<template>
    <input type="text" v-model="one">
    <input type="text" v-model="two">
    <div>{{one}}--{{two}}</div>
    <!-- <div>{{all}}</div> -->
    <input type="text" v-model="firstName">
    <input type="text" v-model="lastName">
    <div>{{resultName}}</div>

</template>

<script>
import {
    computed,
    reactive,
    ref,
    toRefs
} from 'vue'
export default{
    setup() {
        let one = ref("one")
        let two = ref("two")
        let name = reactive({
            firstName: "aaa",
            lastName: "bbb"
        })
        let all = computed(() => {
            return one + " " + two
        })
        let resultName = computed(() => name.firstName + ' ' + name.lastName)

        return{
            one,
            two,
            all,
            name,
            ...toRefs(name),
            resultName
        }
    }
}
</script>