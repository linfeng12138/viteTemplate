<template>
  <div class="common-layout"
    v-loading="loading"
    :element-loading-text="loadingText"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    style="width: 100%">
    <el-container id="el-big-box">
      <el-aside id="el-left" v-if="token">
        <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
          @close="handleClose">
          <el-menu-item index="0" @click="openOff">
            <el-icon>
              <Operation />
            </el-icon>
            <template #title>
              <span>展开与收起</span>
            </template>
          </el-menu-item>
          <router-link to="/" @click="
            setUrl({
              text: '首页',
              path: '/',
            })
          ">
            <el-menu-item index="1">
              <el-icon>
                <House />
              </el-icon>
              <template #title>首页</template>
            </el-menu-item>
          </router-link>

          <!-- 以下为测试页面 -->
          <el-sub-menu index="2">
            <template #title>
              <el-icon>
                <Document />
              </el-icon>
              <span>测试页面</span>
            </template>
            <router-link to="/test" @click="
              setUrl({
                text: '首页/测试首页',
                path: '/test',
              })
            ">
              <el-menu-item index="2-1">测试首页</el-menu-item>
            </router-link>
            <el-menu-item-group>
              <template #title><span>基础测试</span></template>
              <router-link to="/test/testOne" @click="
                setUrl({
                  text: '首页/测试首页/测试1',
                  path: '/test/testOne',
                })
              ">
                <el-menu-item index="2-2-1">测试一</el-menu-item>
              </router-link>
              <router-link to="/test/testMixins" @click="
                setUrl({
                  text: '首页/测试首页/测试2',
                  path: '/test/testMixins',
                })
              ">
                <el-menu-item index="2-2-2">测试二</el-menu-item>
              </router-link>
              <router-link to="/test/testComposition" @click="
                setUrl({
                  text: '首页/测试首页/测试3',
                  path: '/test/testComposition',
                })
              ">
                <el-menu-item index="2-2-3">测试三</el-menu-item>
              </router-link>
              <router-link to="/test/testNew" @click="
                setUrl({
                  text: '首页/测试首页/测试4',
                  path: '/test/testNew',
                })
              ">
                <el-menu-item index="2-2-3">测试四</el-menu-item>
              </router-link>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <router-link to="/test/testTwo" @click="
                setUrl({
                  text: '首页/测试首页/请求测试',
                  path: '/test/testTwo',
                })
              ">
                <el-menu-item index="2-3">请求测试</el-menu-item>
              </router-link>
            </el-menu-item-group>
            <el-sub-menu index="2-4">
              <template #title><span>item four</span></template>
              <el-menu-item index="2-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>

          <!-- 下面为练习项目 -->
          <el-sub-menu index="3">
            <template #title>
              <el-icon>
                <Menu />
              </el-icon>
              <span>练习项目</span>
            </template>
            <router-link to="/obj" @click="
              setUrl({
                text: '首页/项目首页',
                path: '/obj',
              })
            ">
              <el-menu-item index="3-1">项目首页</el-menu-item>
            </router-link>
            <router-link to="/obj/todoList" @click="
              setUrl({
                text: '首页/项目首页/ToDoList',
                path: '/obj/todoList',
              })
            ">
              <el-menu-item index="3-2">ToDoList</el-menu-item>
            </router-link>
          </el-sub-menu>

          <!-- 下面为被禁展示 -->
          <el-menu-item index="4" disabled>
            <el-icon>
              <document />
            </el-icon>
            <template #title>被禁选项</template>
          </el-menu-item>

          <!-- 暂未定义 -->
          <el-menu-item index="5">
            <el-icon>
              <setting />
            </el-icon>
            <template #title>Navigator Four</template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main id="el-main" :style="mainStyle">
        <my-url :obj="titleObj" v-if="token"></my-url>
        <router-view @showLoading="showLoading" @hideLoading="hideLoading" />
      </el-main>
    </el-container>
  </div>
</template>


<script>
import myUrl from "./components/my_url.vue";
import config from './assets/config'

export default {
  data() {
    return {
      isCollapse: false,
      titleObj: { text: "首页", path: "/" },
      token: false,
      mainStyle: {
        padding: 0,
        margin: 0
      },
      loading: false,
      loadingText: '数据加载中...'
    };
  },
  provide() {
    return {
      app: this
    }
  },
  mounted() {
    this.loginTest()
  },

  methods: {
    handleOpen(key, keyPath) {
      //   console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      //   console.log(key, keyPath);
    },
    // 展开和收起
    openOff() {
      this.isCollapse = !this.isCollapse;
    },
    // 设置面包屑路径
    setUrl(obj) {
      this.titleObj = obj;
      //   console.log(this.titleObj);
    },
    // 加载中
    showLoading(...info) {
      // console.log(info);
      this.loadingText = info[0]
      this.loading = true
    },
    // 隐藏加载中
    hideLoading() {
      this.loadingText = '数据加载中...'
      this.loading = false
    },
    // 检测是否登陆
    loginTest() {
      const token = localStorage.getItem('token')
      this.$router.push('/login')
      if (token === config.token) {
        this.token = true;
        this.mainStyle = {
          padding: '0 1rem',
        }
      }
    }
  },
  components: {
    "my-url": myUrl,
  },
};
</script>


<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu-vertical-demo {
  height: 100%;
}

#el-big-box,
.common-layout {
  /* display: none; */
  width: 100%;
  height: 100%;
}

#el-left {
  width: auto;
  height: 100%;
  /* background-color: #efefef; */
}

#el-main {
  padding: 0 1rem;
  /* padding-left: 1rem; */
  margin: 0;
}
</style>