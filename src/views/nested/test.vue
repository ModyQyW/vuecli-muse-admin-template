<template>
  <div>
    <p>nestedTest</p>
    <router-view :key="this.$route.fullPath" />
  </div>
</template>

<script>
export default {

};
</script>

<style lang="less" scoped>

</style>
