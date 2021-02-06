<template>
  <div>
    <h2>{{ iid }}</h2>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: {},
  components: {},
  data() {
    return {
      iid: null,
    };
  },
  created() {
    this.iid = this.$route.params.id;
  },
};
</script>
<style scoped></style>
