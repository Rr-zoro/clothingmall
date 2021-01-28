<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>
        <div>购物车</div>
      </template>
    </nav-bar>
    <swiper>
      <swiper-item v-for="item in banners" :key="item.acm">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata } from "network/home";
import { Swiper, SwiperItem } from "components/common/swiper/";
export default {
  name: "Home",
  props: {},
  components: {
    NavBar,
    Swiper,
    SwiperItem,
  },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
  methods: {},
};
</script>
<style scoped>
.home-nav {
  background-color: #e99a00;
  font-size: 20px;
  font-weight: 500;
  color: aliceblue;
}
</style>
