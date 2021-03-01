<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="content" ref="scroll">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods" />
      <div class="gray-line"></div>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <div class="gray-line"></div>
      <detail-goods-info
        :detail-info="detailInfo"
        @imageLoad="imageLoad"
      ></detail-goods-info>
      <detail-param-info :paramInfo="paramInfo"></detail-param-info>
      <detail-comment-info :commentInfo="commentInfo"></detail-comment-info>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";

import Scroll from "components/common/scroll/Scroll";

import { getDetail, Goods, Shop, GoodsParams } from "network/detail";
export default {
  name: "Detail",
  props: {},
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
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
      paramInfo: {},
      commentInfo: {},
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

      // 获取商品参数数据
      this.paramInfo = new GoodsParams(
        data.itemParams.info,
        data.itemParams.rule
      );

      // 获取用户评论数据
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
  },
  mounted() {
    // this.index = this.goods.services.length - 1;
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
    },
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
