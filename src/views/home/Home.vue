<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
    <scroll
      class="content"
      ref="scroll"
      @scroll="contentScroll"
      :probeType="3"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control
        :titles="['流行', '新款', '精选']"
        class="tab-control"
        @tabClick="tabClick"
      ></tab-control>
      <goods-list :goods="showGood"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";

import { getHomeMultidata, getHomeGoods } from "network/home";
export default {
  name: "Home",
  props: {},
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShow: false,
    };
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    const refresh = this.debounce(this.$refs.scroll.refresh, 300);
    this.$bus.$on("itemImageLoad", () => {
      refresh();
    });
  },
  computed: {
    showGood() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    /*网络请求*/
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        setTimeout(() => {
          this.$refs.scroll.finishPullUp();
        }, 1000);
      });
    },
    // 防抖函数
    debounce(fn, delay) {
      let timeout = null;
      return function () {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
          fn.apply(this, arguments);
        }, delay);
      };
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      this.isShow = -position.y > 1500;
    },
    loadMore() {
      // console.log("上拉加载更多");
      this.getHomeGoods(this.currentType);
    },
  },
};
</script>
<style scoped>
#home {
  position: relative;
  height: 100vh;
}
.home-nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  background-color: #e99a00;
  font-size: 20px;
  font-weight: 500;
  color: aliceblue;
}
.tab-control {
  /* 当元素距离页面顶部44px时，让该元素位置固定 */
  position: sticky;
  top: 44px;
  z-index: 9;
}
.content {
  position: absolute;
  width: 100%;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
