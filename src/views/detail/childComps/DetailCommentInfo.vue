<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <p class="comment-top">
      <span>用户评价</span>
      <span class="more">更多</span>
    </p>
    <div class="user">
      <img :src="commentInfo.user.avatar" alt="" />
      <span class="userName">{{ commentInfo.user.uname }}</span>
    </div>
    <p class="commentContent">{{ commentInfo.content }}</p>
    <p class="style">
      <span class="time">{{ commentInfo.created | showDate }}</span>
      <span class="goodsStyle">{{ commentInfo.style }}</span>
    </p>
    <div class="commentImg">
      <img
        :src="item"
        alt=""
        v-for="(item, index) in commentInfo.images"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import { dateFormat } from "common/utils";

export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
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
  filters: {
    showDate(value) {
      const date = new Date(value * 1000);
      return dateFormat(date, "yyyy/MM/dd");
    },
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {},
};
</script>
<style scoped>
.comment-info {
  height: 500px;
  padding: 15px 20px;
  border-bottom: 5px solid #f2f5f8;
}
.comment-top {
  overflow: hidden;
  border-bottom: 2px solid #f2f5f8;
  font-size: 14px;
}
.comment-top span {
  float: left;
}
.comment-top .more {
  margin-right: 2px;
  margin-bottom: 15px;
  float: right;
}
.more::after {
  content: "";
  display: inline-block;
  width: 9px;
  height: 9px;
  border-top: 2px solid red;
  border-right: 2px solid red;
  transform: rotate(45deg);
}
.user {
  margin: 15px 0;
}
.user img {
  width: 45px;
  margin-right: 10px;
  border-radius: 23px;
  vertical-align: middle;
}
.user span {
  font-size: 14px;
}
.commentContent {
  font-size: 12px;
  margin-bottom: 10px;
}
.style {
  font-size: 12px;
  margin-bottom: 10px;
}
.style .time {
  margin-right: 15px;
}
.commentImg {
  height: 100px;
  overflow: hidden;
}
.commentImg img {
  width: 100px;
}
</style>
