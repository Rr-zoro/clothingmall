<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
/**
@description:
@createTime:2021-01-18
@create:改成你自己的名字
*/
export default {
  name: "TabBar",
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
#tab-bar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f6f6f6;
  box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.1);
}
</style>
