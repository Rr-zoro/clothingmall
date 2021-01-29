<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.acm" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
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
.recommend {
  display: flex;
  text-align: center;
  font-size: 12px;
  border-bottom: 10px solid #eee;
}
.recommend-item {
  flex: 1;
  margin: 10px 0 20px 0;
}
.recommend-item img {
  width: 65px;
  height: 65px;
}
</style>
