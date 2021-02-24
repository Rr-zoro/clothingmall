<template>
  <div class="detail-navbar">
    <nav-bar>
      <div slot="left" class="back-btn" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) in titles"
          :key="item"
          class="title-item"
          :class="{ active: currentIndex == index }"
          @click="titleClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "",
  props: {},
  components: { NavBar },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {
    titleClick(index) {
      this.currentIndex = index;
    },
    backClick() {
      this.$router.back();
    },
  },
};
</script>
<style scoped>
.detail-navbar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.title {
  display: flex;
}
.title .title-item {
  flex: 1;
  font-size: 14px;
}
.active {
  color: #e99a00;
}
.back-btn {
  margin: 6px 0 0 10px;
}
</style>
