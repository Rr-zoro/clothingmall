<template>
  <div id="goodsListItem">
    <img :src="goodsItem.show.img" alt="" />
    <div class="text">
      <p class="title">{{ goodsItem.title }}</p>
      <span class="yuan">￥</span>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="kuang">
        <span class="iconfont icon-wujiaoxing star"></span>
        <span class="collect">{{ goodsItem.cfav }}</span>
      </span>
    </div>
  </div>
</template>

<script>
/**
@description:
@createTime:2021-01-31
@create:改成你自己的名字
*/
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
#goodsListItem {
  float: left;
  width: 50%;
}
#goodsListItem:nth-child(2n + 1) {
  padding: 10px 5px 10px 10px;
}
#goodsListItem:nth-child(2n) {
  padding: 10px 10px 10px 5px;
}
#goodsListItem img {
  border-radius: 7px;
  width: 100%;
  height: 259px;
}
.title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 5px;
}
.yuan {
  margin-left: 15px;
}
.price {
  color: #e99a00;
}
.text {
  position: relative;
}
.kuang {
  position: absolute;
  top: 28px;
  left: 69px;
  overflow: hidden;
  display: inline-block;
  height: 18px;
  margin-left: 10px;
  padding: 0 5px 0 10px;
  border: 1px solid #e99a00;
}

.star {
  position: absolute;
  top: -4px;
  left: 0;
  display: inline-block;
  font-size: 20px !important;
  /* color: red; */
}
.collect {
  display: inline-block;
  margin-left: 8px;
  /* position: absolute;
  top: -4px;
  left: 0; */
}
</style>
