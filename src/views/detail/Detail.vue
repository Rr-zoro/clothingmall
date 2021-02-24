<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="content">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods" />
      <div class="gray-line"></div>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <div class="gray-line"></div>
      <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";

import Scroll from "components/common/scroll/Scroll";

import { getDetail, Goods, Shop } from "network/detail";
export default {
  name: "Detail",
  props: {},
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    Scroll,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      index: 0,
      shop: {},
      detailInfo: {},
    };
  },
  created() {
    // 保存传入的iid
    this.iid = this.$route.params.id;

    getDetail(this.iid).then((res) => {
      console.log(res);
      // 获取顶部轮播图数据
      const data = res.result;
      this.topImages = data.itemInfo.topImages;

      // 获取商品信息数据，创建Goods类的实例来获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 获取店铺信息数据
      this.shop = new Shop(data.shopInfo);

      // 获取商品详情数据
      this.detailInfo = data.detailInfo;
    });
  },
  mounted() {
    // this.index = this.goods.services.length - 1;
  },
};
</script>
<style scoped>
#detail {
  /* 让详情页覆盖底部的tabbar */
  position: relative;
  height: 100vh;
  background-color: #fff;
  z-index: 9;
}
.content {
  /* 这里的减号两侧必须要有空格 */
  height: calc(100% - 44px);
}
.gray-line {
  height: 5px;
  background-color: #f7f5f7;
  margin-top: 15px;
}
</style>
