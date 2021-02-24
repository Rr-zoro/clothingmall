<template>
  <div class="shop-info">
    <div class="logo">
      <img :src="shop.logo" alt="" />
      <span>{{ shop.name }}</span>
    </div>
    <div class="left-text">
      <span styl="font-size: 18px">{{ sells }}</span>
      <span>{{ shop.goodsCount }}</span>
      <span>总销量</span>
      <span>全部宝贝</span>
    </div>
    <div class="line"></div>
    <div class="right-text">
      <table>
        <tr v-for="item in shop.score" :key="item.name">
          <td>{{ item.name }}</td>
          <td class="middle-td">{{ item.score }}</td>
          <td class="better core" v-if="item.isBetter">高</td>
          <td class="bad core" v-else>低</td>
        </tr>
      </table>
    </div>
    <div class="btn">进店逛逛</div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    sells() {
      if (this.shop.sells > 10000) {
        return (this.shop.sells / 10000).toFixed(1) + "万";
      } else {
        return this.shop.sells;
      }
    },
  },
};
</script>
<style scoped>
.shop-info {
  position: relative;
  height: 220px;
  font-size: 14px;
}
.logo {
  position: absolute;
  top: 23px;
  left: 7px;
}
.shop-info .logo img {
  width: 47px;
  margin-right: 7px;
  vertical-align: middle;
  border-radius: 23px;
  border: 1px solid #f7f5f7;
}
.shop-info .logo span {
  color: #828082;
}
.left-text {
  display: flex;
  position: absolute;
  top: 100px;
  left: 35px;
  text-align: center;
  flex-wrap: wrap;
  width: 129px;
  height: 44px;
}
.left-text span {
  flex: 50%;
}
.line {
  position: absolute;
  top: 100px;
  left: 187px;
  width: 1px;
  height: 44px;
  background-color: #edeced;
}
.right-text {
  position: absolute;
  top: 91px;
  left: 219px;
  font-size: 12px;
}
.right-text tr {
  height: 16px;
  line-height: 16px;
}
.middle-td {
  display: inline-block;
  margin: 0 10px;
}
.core {
  color: #fff;
  width: 13px;
  height: 13px;
  text-align: center;
}
.better {
  background-color: #e10700;
}
.bad {
  background-color: #6b9838;
}
.btn {
  position: absolute;
  top: 177px;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: #f4f4fb;
  border-radius: 5px;
}
</style>
