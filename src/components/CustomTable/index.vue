<template>
  <div></div>
</template>

<script>
export default {
  props: {
    // has border or not, default false
    // 是否有边框，默认为否
    border: {
      type: Boolean,
      default: false,
      required: false,
    },
    // striped or not, default false
    striped: {
      type: Boolean,
      default: false,
      required: false,
    },
  },

};
</script>

<style lang="less" scoped>

</style>
