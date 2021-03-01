<template>
  <div class="param-info">
    <table class="size" v-for="(table, index) in paramInfo.sizes" :key="index" >
      <tr v-for="(tr, i1) in table" :key="i1">
        <td v-for="(td, i2) in tr" :key="i2">{{td}}</td>
      </tr>
    </table>
    <table class="params">
      <tr v-for="(item, index) in paramInfo.infos" :key="index">
        <td class="info-param-key">{{item.key}}</td>
        <td class="info-param-value">{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DetailParamInfo',
  props: {
    paramInfo: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    
  },
  watch: {},
  mounted() {},
  created() {},
  methods: {}
};
</script>
<style scoped>
.param-info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}
.param-info table {
  width: 100%;
  border-collapse: collapse;
}
.param-info tr {
  height: 40px;

}
.param-info  td {
  border-bottom: 1px solid rgba(100,100,100,.1);
}
.info-param-key {
  width: 95px;
}
.info-param-value {
  color:  #e9003a;
}
</style>
