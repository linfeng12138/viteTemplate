<template>
    <div class="bigBox">
        <login-form  :title="title" v-model:uname="uname" v-model:pwd="pwd" :token="token"></login-form>
    </div>
</template>

<script>
import LoginForm from './../components/objTools/LoginForm.vue'
import config from './../assets/config'

export default {
    data() {
        return {
            title: '林风登陆认证',
            uname: '',
            pwd: '',
            token: config.token,
            // bgi: {
            //     backgroundImage: `url(${config.loginBgi})`
            // }
        }
    },
    methods: {
        login() {
            if(this.uname != config.login.uname){
                this.$message({
                    message: '用户名不正确',
                    type: 'warning'
                })
            }else if(this.pwd != config.login.pwd){
                this.$message({
                    message: '密码不正确',
                    type: 'error'
                })
            }else{
                localStorage.setItem('token', config.token)
                location.reload()
            }
        },
    },
    mounted() {
        if(localStorage.getItem('token') === config.token) {
            this.$router.push('/')
        }
    },
    components: {
        LoginForm,
    }
}
</script>

<style lang="less" scoped>
.bigBox {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>

<style scoped>
.bigBox{
    /* 初始化 取消内外边距 */
    margin: 0;
    padding: 0;
    /* 100%窗口高度 */
    height: 100vh;
    /* 弹性布局 水平垂直居中 */
    display: flex;
    justify-content: center;
    align-items: center;
    /* 渐变背景 */
    background: linear-gradient(125deg,#2c3e50,#27ae60,#2980b9,#e74c3c,#8e44ad);
    /* 指定背景图像的大小 */
    background-size: 500%;
    /* 执行动画：动画名 时长 线性的 无限次播放 */
    animation: bgAnimation 15s linear infinite;
}

/* 定义动画 */
@keyframes bgAnimation {
    0%{
        background-position: 0% 50%;
    }
    50%{
        background-position: 100% 50%;
    }
    100%{
        background-position: 0% 50%;
    }
}
</style>