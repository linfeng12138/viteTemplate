<template>
  <div class="topBox">
    <el-breadcrumb separator="/" class="text">
      <el-breadcrumb-item
        v-for="(item, index) in getArrText"
        :key="index"
        :to="{ path: getArrPath[index] }"
        >{{ item }}</el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  props: {
    obj: Object,
  },
  data() {
    return {
      arrText: ["loading..."],
      arrPath: ["/"],
    };
  },
  computed: {
    getArrText() {
      return this.obj.text.split("/");
    },

    getArrPath() {
      // console.log(this.obj.path);
      if (this.obj.path.length === 1) {
        return (this.arrPath = ["/"]);
      } else {
        const arrTemp = this.obj.path.split("/");
        arrTemp[0] = "/";
        let tmpUrl = "";
        const arrPath = arrTemp.map((item, index) => {
          tmpUrl += item;
          if (index != 0) return (tmpUrl += "/");
          return tmpUrl;
        });
        // console.log(arrPath);
        return arrPath;
      }
    },
  },
};
</script>

<style lang="less" scoped>
@height: 1.5rem;
.topBox, .text{
    width: 100%;
    height: @height;
    line-height: @height;
    font-size: 0.6rem;
}
</style>