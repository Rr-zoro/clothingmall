<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="desc-info">
      <div class="start"></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{ detailInfo.detailImage[0].key }}</div>
    <div class="info-list">
      <img
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :key="index"
        :src="item"
        @load="imgLoad"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
    },
  },
  data() {
    return {
      counter: 0,
      imagesLength: 0,
    };
  },
  methods: {
    imgLoad() {
      // 每加载一个图片就让counter+1，当counter的值等于图片个数时，说明图片加载完成
      if (++this.counter === this.imagesLength) {
        this.$emit("imageLoad");
      }
    },
  },
  watch: {
    detailInfo() {
      // 求图片的个数，然后赋值给imagesLength
      this.imagesLength = this.detailInfo.detailImage[0].list.length;
    },
  },
};
</script>
<style scoped>
.goods-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}
.desc-info {
  padding: 0 20px;
  font-size: 14px;
}
.desc {
  padding: 15px 0;
}
.start,
.end {
  position: relative;
  width: 80px;
  height: 1px;
  background-color: #333333;
}
.start {
  float: left;
}
.end {
  float: right;
}
.start::before {
  content: "";
  position: absolute;
  bottom: 0;
  width: 5px;
  height: 5px;
  background-color: #333333;
}
.end::after {
  content: "";
  position: absolute;
  right: 0;
  width: 5px;
  height: 5px;
  background-color: #333333;
}
.info-key {
  margin: 10px 0 20px 20px;
}
.info-list img {
  width: 100%;
}
</style>
