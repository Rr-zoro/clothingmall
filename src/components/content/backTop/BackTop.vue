<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
/**
@description:
@createTime:2021-02-03
@create:改成你自己的名字
*/
export default {
  name: "BackTop",
};
</script>
<style scoped>
.back-top {
  position: fixed;
  right: 10px;
  bottom: 65px;
  height: 50px;
  width: 50px;
  z-index: 10;
  opacity: 0.5;
}
.back-top img {
  width: 100%;
}
</style>
