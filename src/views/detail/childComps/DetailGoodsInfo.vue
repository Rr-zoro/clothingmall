<template>
  <div v-if="Object.keys(detailInfo).lenght !== 0" class="goods-info"></div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
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
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {},
};
</script>
<style scoped></style>
