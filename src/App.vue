<template>
  <div id="app">
    <keep-alive>
      <!-- 跳转到其他页面时，保持页面不销毁 -->
      <router-view />
    </keep-alive>
    <main-tab-bar />
  </div>
</template>
<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar";
export default {
  name: "app",
  components: {
    MainTabBar,
  },
};
</script>
<style>
@import "assets/css/base.css";
</style>
