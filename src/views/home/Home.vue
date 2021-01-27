<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>
        <div>购物车</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata } from "network/home";
export default {
  name: "Home",
  props: {},
  components: {
    NavBar,
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
