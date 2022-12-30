// 图片基地址
const imgBaseUrl = 'https://guanlinfeng.oss-cn-beijing.aliyuncs.com/blog/system/bgi/'

// 登陆信息
const login = {
    token: 'akgheiwabiwfdsafhi',
    bgi: imgBaseUrl + '5.jpg',
    uname: 'root',
    pwd: '12138'
}

// 方法暴露
export default {
    imgBaseUrl,
    login,
    token: login.token,
    loginBgi: login.bgi,
}