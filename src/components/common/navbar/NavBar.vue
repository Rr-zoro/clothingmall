<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
/**
@description:
@createTime:2021-01-27
@create:改成你自己的名字
*/
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {},
};
</script>
<style scoped>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
  text-align: center;
}
</style>
