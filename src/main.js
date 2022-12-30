import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
const Vue = createApp(App)

// 引入路由
import router from './router/index'
Vue.use(router)

// 使用elementPlus
import ElementPlus from 'element-plus'
import ElementPlusCss from 'element-plus/dist/index.css'
// import './../node_modules/element-plus/dist/index.css'
Vue.use(ElementPlus)
Vue.use(ElementPlusCss)

// 注册elementPlus图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  Vue.component(key, component)
}

// 引入axios
import axiosDefault from 'axios'
const axios = axiosDefault.create({
  baseURL: 'https://linfeng.vip/',
  timeout: 1000,
  //headers: {'X-Custom-Header': 'foobar'}
});
Vue.config.globalProperties.axios = axios // this.axios

// 引入fetch-jsonp
import fetchJsonp from 'fetch-jsonp'
Vue.config.globalProperties.fetchJsonp = fetchJsonp

// 全局配置mixins
import defaultInfo from './mixins/baseMixins'
Vue.mixin(defaultInfo)


Vue.mount('#app')

// 点击浮出文字
const {animat} = linfengTools
animat.text([0,1])

// 启用title文字变换
const {titleText} = linfengTools
titleText()