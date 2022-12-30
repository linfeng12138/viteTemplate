<template>
    <div class="bigComBox">
        <h2>{{ title }}</h2>
        <table>
            <tr>
                <!-- <td>用户名：</td> -->
                <td class="wrapper">
                    <div class="input-data">
                        <input @keyup.enter="login" type="text" :value="uname" @input="$emit('update:uname', $event.target.value)" required>
                        <div class="underline"></div>
                        <label>用户名</label>
                    </div>
                </td>
            </tr>
            <tr>
                <!-- <td><span class="pwdText">密</span>码：</td> -->
                <td class="wrapper">
                    <div class="input-data">
                        <input @keyup.enter="login" type="password" :value="pwd" @input="$emit('update:pwd', $event.target.value)" required>
                        <div class="underline"></div>
                        <label>密码</label>
                    </div>
                </td>
            </tr>
        </table>
        <button class="loginBtn" @click="login">登陆</button>
    </div>
</template>

<script>
export default {
    props: {
        uname: String,
        pwd: String,
        token: String,
        title: String
    },methods: {
        login() {
            this.$parent.login()
        }
    }
}
</script>

<style lang="less" scoped>
.bigComBox{
    position: absolute;
    left: 50%;top: 50%;
    transform: translate(-50%, -50%);
    width: 40%;
    height: 20rem;
    padding: 1.5rem;
    padding-bottom: 1rem;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: .5rem;

    h2{
        text-align: center;
        font-size: 1.5rem;
    }

    table {
        width: 80%;
        margin: 1rem 0;
        margin-left: 10%;
        font-size: 1rem;

        tr {
            height: 3rem;

            .pwdText{
                letter-spacing: 1em;
            }
        }

        input{
            width:90%;
            padding: .2rem .5rem;
            border: 0;
            border-bottom: 2px solid rgb(245, 75, 228);
            background-color: transparent;
            font-size: .8rem;
        }
    }

    .loginBtn{
        width: 80%;
        height: 2rem;
        margin-top: .2rem;
        transition: all 0.5s;
        margin-left: 10%;
        background-color: rgba(50, 234, 222, 0.5);
        border: none;
        border-radius: .2rem;
        font-size: .9rem;
    }

    .loginBtn:hover{
        background-color: rgba(87, 246, 47, 0.5);
    }
}

@media screen and (max-width: 640px) {
    .bigComBox{
        width: 70%;
    }
}
</style>


<style scoped>
*{
    margin: 0;
    padding: 0;
    outline: none;
    /* 这个属性是告诉浏览器：你想要设置的边框和内边距的值是包含在总宽高内的 */
    box-sizing: border-box;
}
body{
    /* 弹性布局 水平垂直居中 */
    display: flex;
    justify-content: center;
    align-items: center;
    /* 设置body最小高度为100%窗口高度 */
    min-height: 100vh;
    /* 渐变背景 */
    background: linear-gradient(200deg,#0c3483,#a2b6df);
}
.wrapper{
    width: 400px;
    /* background-color: #fff; */
    /* 内边距（上下左右） */
    padding: 40px;
    /* 盒子阴影 */
    /* box-shadow: 0px 0px 10px rgba(0,0,0,0.1); */
    /* 圆角 */
    border-radius: 8px;
}
.wrapper .input-data{
    /* 相对定位 */
    position:relative;
    width: 100%;
    height: 40px;
}
.wrapper .input-data input{
    width: 100%;
    height: 100%;
    border:none;
    font-size: 17px;
    border-bottom: 2px solid #c0c0c0;
}
/* 输入框获得焦点时 */
.wrapper .input-data input:focus ~ label,
/* 输入框的值为合法时 */
.wrapper .input-data input:valid ~ label{
    /* label上移，同时改变字号、字体颜色 */
    transform: translateY(-25px);
    font-size: 15px;
    color: #2c6fdb;
}
.wrapper .input-data label{
    /* 绝对定位 */
    position: absolute;
    bottom: 10px;
    left: 0px;
    color: #808080;
    /* 这个属性可以使点击label穿透到输入框 */
    pointer-events: none;
    /* 现在动画有点生硬，在这里需要给动画加个过渡 */
    transition: all 0.3s ease;
}
.wrapper .input-data .underline{
    position: absolute;
    bottom: 0px;
    height: 2px;
    width: 100%;
    background-color: #2c6fdb;
    /* 沿X轴缩小 */
    transform: scaleX(0);
    /* 这里同样给动画加个过渡 */
    transition: all 0.3s ease;
}
.wrapper .input-data input:focus ~ .underline,
.wrapper .input-data input:valid ~ .underline{
    /* 沿X轴放大 */
    transform: scaleX(1);
}
</style>

<style scoped>
.loginBtn{
    /* 相对定位 */
    position: relative;
    width: 400px;
    height: 100px;
    line-height: 50px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 24px;
    color: #fff;
    /* 渐变背景 */
    background: linear-gradient(to right,#03a9f4,#f441a5,#ffeb3b,#09a8f4);
    /* 背景渐变色大小 */
    background-size: 400%;
    /* 圆角 */
    border-radius: 50px;
    z-index: 1;
}
/* 发光效果 */
.loginBtn::before{
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    bottom: -5px;
    right: -5px;
    /* 渐变背景 */
    background: linear-gradient(to right,#03a9f4,#f441a5,#ffeb3b,#09a8f4);
    /* 背景渐变色大小 */
    background-size: 400%;
    /* 圆角 */
    border-radius: 50px;
    /* 位于按钮之下 */
    z-index: -1;
    /* 设置模糊度 显示发光效果 */
    filter: blur(20px);
}
/* 鼠标移入执行动画 */
.loginBtn:hover{
    /* 动画：名称 时间 infinite是无限次播放 */
    animation: streamer 8s infinite;
}
.loginBtn:hover::before{
    animation: streamer 8s infinite;
}
/* 接下来定义动画 */
@keyframes streamer{
    100%{
        /* 背景位置 */
        background-position: -400% 0;
    }
}
</style>