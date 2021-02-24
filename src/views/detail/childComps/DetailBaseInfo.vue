<template>
  <div v-if="Object.keys(goods).length !== 0" class="detail-baseinfo">
    <p class="title">{{ goods.title }}</p>
    <div class="price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span
        class="info-service-item"
        v-for="index in goods.services.length - 1"
        :key="index"
      >
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
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
.detail-baseinfo {
  padding: 0 8px 0 8px;
}
.title {
  margin-top: 16px;
  font-size: 16px;
}
.price {
  position: relative;
  margin: 15px 0 22px;
}
.n-price {
  margin-right: 8px;
  font-size: 24px;
  color: #ff6b79;
}
.o-price {
  text-decoration: line-through;
  font-size: 13px;
  color: #9999a6;
}
.discount {
  position: absolute;
  top: -3px;
  display: inline-block;
  padding: 0 8px;
  height: 22px;
  line-height: 22px;
  background-color: #ff6b79;
  border-radius: 10px;
  font-size: 12px;
  color: #fff;
  text-align: center;
  margin-left: 5px;
}
.info-other {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  font-size: 13px;
  color: #9999a6;
  border-bottom: 1px solid #eee;
}
.info-service {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #555;
}
.info-service-item {
  position: relative;
}
.info-service-item img {
  position: absolute;
  width: 13px;
  top: 2px;
}
.info-service-item span {
  margin-left: 13px;
}
</style>
