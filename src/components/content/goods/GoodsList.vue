<template>
  <div id="goodsList">
    <goods-list-item
      v-for="item in goods"
      :key="item.acm"
      :goods-item="item"
      class="goodsListItem"
    />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: { GoodsListItem },
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
#goodsList {
  overflow: hidden;
  margin-bottom: 50px;
}
.goodsListItem {
  /* flex: 20%; */
  /* float: left;
  width: 50%; */
}
</style>
