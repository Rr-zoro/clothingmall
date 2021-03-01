<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <!-- 下拉时出现的文字效果 -->
      <div v-show="pullDownRefresh" class="pulldown-wrapper">
        <div v-show="beforePullDown">
          <span>下拉刷新</span>
        </div>
        <div v-show="!beforePullDown">
          <div v-show="isPullingDown">
            <span>加载中...</span>
          </div>
          <div v-show="!isPullingDown">
            <span>刷新成功</span>
          </div>
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
// import BScroll from "@better-scroll/core";
// import Pullup from "@better-scroll/pull-up";
// import PullDown from "@better-scroll/pull-down";
// BScroll.use(Pullup);
// BScroll.use(PullDown);
const TIME_BOUNCE = 500;
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
    pullDownRefresh: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
      beforePullDown: true,
      isPullingDown: false,
    };
  },
  mounted() {
    // 创建BScroll实例
    this.scroll = new BScroll(this.$refs.wrapper, {
      scrollY: true,
      bounceTime: 800,
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      pullDownRefresh: this.pullDownRefresh,
    });
    // 监听滚动的位置，向Home.vue发送 ‘scroll’事件
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });
    // 监听上拉事件
    this.scroll.on("pullingUp", () => {
      // console.log("上拉加载更多");
      this.$emit("pullingUp");
    });
    this.scroll.on("pullingDown", () => {
      this.beforePullDown = false;
      this.isPullingDown = true;
      setTimeout(() => {
        this.$emit("pullingDown");
      }, TIME_BOUNCE);
      setTimeout(() => {
        this.scroll.refresh();
      }, TIME_BOUNCE + 200);
    });
  },

  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    finishPullDown() {
      this.scroll && this.scroll.finishPullDown();
      this.isPullingDown = false;
      setTimeout(() => {
        this.beforePullDown = true;
      }, TIME_BOUNCE);
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    getScrollY() {
      // scroll.y 是向下滚动的距离
      return this.scroll ? this.scroll.y : 0;
    },
  },
};
</script>
<style scoped>
.pulldown-wrapper {
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  transform: translate(0, -100%);
  text-align: center;
  color: #999;
}
</style>
