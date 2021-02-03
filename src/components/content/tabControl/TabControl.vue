<template>
  <div class="Tab-control">
    <div v-for="(item, index) in titles" :key="item" class="Tab-control-item">
      <span
        @click="spanClick(index)"
        :class="{ active: activeIndex == index }"
        >{{ item }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {},
  data() {
    return {
      activeIndex: 0,
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {
    spanClick(index) {
      this.activeIndex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>
<style scoped>
.Tab-control {
  display: flex;
  line-height: 40px;
  font-size: 15px;
  background-color: #fff;
}
.Tab-control-item {
  flex: 1;
  text-align: center;
  height: 40px;
}
.Tab-control-item span {
  padding: 5px;
}

.active {
  color: #e99a00;
  border-bottom: 2px solid #e99a00;
}
</style>
