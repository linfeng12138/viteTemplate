# vite模板

本模板已进行下面优化

1. 添加并初始化了router
2. 注册并引入了ElementPlus
3. 注册并引入了ElementIcon
4. 注册并引入了axios
5. 注册并引入了fetch-jsonp
6. 注册并引入了mixins



package.json文件内容如下：

```json
{
  "name": "10testvite",
  "version": "0.0.0",
  "scripts": {
    "serve": "vite",
    "build": "vite build"
  },
  "dependencies": {
    "@element-plus/icons-vue": "^2.0.9",
    "axios": "^0.27.2",
    "element-plus": "^2.2.15",
    "fetch-jsonp": "^1.2.3",
    "vue": "^3.0.4"
  },
  "devDependencies": {
    "@vue/compiler-sfc": "^3.0.4",
    "electron": "^21.2.0",
    "less": "^4.1.3",
    "less-loader": "^11.1.0",
    "sass": "^1.54.8",
    "sass-loader": "^13.0.2",
    "vite": "^1.0.0-rc.13",
    "vue-router": "^4.1.5"
  }
}

```

