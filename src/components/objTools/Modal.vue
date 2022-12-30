<template>
<!-- <teleport to="body"> -->
    <div class="bgc">
        <div class="content">
            <div class="title">
                <span>提示</span>
                <span class="close" @click="close()">x</span>
            </div>
            <div class="bottom">
                这是个弹窗提示
            </div>
        </div>
    </div>
<!-- </teleport> -->
</template>

<script>
export default {
    methods: {
        close() {
            this.$parent.show = false
            console.log(this.$parent.show);
        }
    }
}
</script>

<style lang="less" scoped>
.close{
    position: absolute;
    right: .5rem;
    top: -.05rem;
}

.close:hover{
    cursor: pointer;
}

.title{
    position: relative;
    border-bottom: 1px solid #aaa;
    font-size: .8rem;
}

.content{
    position: absolute;
    left: 50%;top: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 5rem;
    background: #fff;
}

.bgc{
    position: absolute;
    left: 0;top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}
</style>