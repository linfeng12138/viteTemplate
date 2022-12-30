<template>
    <h1>ToDoList</h1>
    <div class="bigBox">
        <input type="text" v-model="tmp" @keyup.enter="addList" placeholder="在此键入内容回车添加" class="input_text">
        <h3>正在进行</h3>
        <div class="todoBlock" v-for="(item, index) in loadingList" :key="index">
            <input type="checkbox" class="checkBox" @click.prevent="updateInfo(item.index)">
            <span class="text">{{item.text}}</span>
            <el-button @click="removeList(item.index)" class="deleteBtn" type="danger" circle><el-icon><Delete /></el-icon></el-button>
        </div>
        <h3>已经完成</h3>
        <div class="successList todoBlock" v-for="(item, index) in successList" :key="index">
            <input type="checkbox" checked="true" class="checkBox" @click.prevent="updateInfo(item.index)">
            <span class="text">{{item.text}}</span>
            <el-button @click="removeList(item.index)" class="deleteBtn" type="danger" circle><el-icon><Delete /></el-icon></el-button>
        </div>
    </div>
    <!-- <pre>{{list}}</pre> -->
</template>

<script>
export default {
    data() {
        return {
            tmp: '',
            list: [],
            index: 0,
        }
    },
    mounted() {
        this.onReload()
    },
    methods: {
        // 添加元素
        addList() {
            if(this.tmp.trim() != ''){
                const tmpObj = {
                    text: this.tmp,
                    check: false,
                    index: this.index++
                }
                this.list = [...this.list, tmpObj]
                this.tmp = ''
            }else{
                this.$message({
                  message: '内容不可为空',
                  type: 'warning'
                });
            }
            this.save()
        },
        // 删除元素
        removeList(index) {
            this.list = this.list.filter((item,i) => {
                if(item.index != index) return item
            })
            this.save()
        },
        // 更改元素状态
        updateInfo(index) {
            this.list.map(item => {
                if(item.index === index)
                    item.check = !item.check
            })
            this.save()
        },
        // 保存数据
        save() {
            localStorage.setItem('list', JSON.stringify(this.list))
            localStorage.setItem('index', this.index)
        },
        // 加载数据
        onReload() {
            const list = localStorage.getItem('list')
            if(list != null && list  != undefined && list.trim() != ''){
                this.list = JSON.parse(list)
                this.index = Number(localStorage.getItem('index'))
            }
        }
    },
    computed: {
        loadingList() {
            return this.list.filter(item => {
                if(!item.check) return item
            })
        },
        successList() {
            return this.list.filter(item => {
                if(item.check) return item
            })
        }
    }
}
</script>

<style lang="less" scoped>
h1 {
    text-align: center;
}

.bigBox{
    width: 60%;
    margin: auto;
    margin-top: 1rem;
    // background-color: red;
    padding: 0 10%;
    overflow: hidden;

    .input_text{
        width: 80%;
        height: 1.5rem;
        margin-left: 10%;
        padding: 0 .5rem;
        background-color: transparent;
        border: 0;
        border-bottom: 1px solid #000;
        font-size: .7rem;
    }

    h3{
        font-size: .8rem;
        padding-left: 10%;
        margin: .5rem 0;
    }
}

.todoBlock {
    position: relative;
    width: 77%;
    height: 1.4rem;
    line-height: 1.2rem;
    margin: auto;
    margin-left: 10%;
    padding-left: 5.5%;
    border-left: .3rem solid #48828d;
    border-radius: .1rem;
    background: rgba(140, 203, 237, 0.5);
    margin-bottom: .4rem;
    .checkBox {
        position: absolute;
        left: .5rem;top: .25rem;
        width: .9rem;
        height: .9rem;
    }
    .deleteBtn {
        position: absolute;
        right: 1%;top: .2rem;
        width: 1rem;
        height: 1rem;
    }
    .text {
        font-size: .7rem;
    }
}

.successList {
    border-left: .3rem solid #a8a8a8;
    background: rgba(170, 182, 190, 0.5);
}
</style>
