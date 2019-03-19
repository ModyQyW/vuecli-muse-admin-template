<template>
  <mu-flex
    class="app-content"
    :class="isOpen">
    <mu-fade-transition mode="out-in">
      <router-view :key="this.$route.fullPath"/>
    </mu-fade-transition>
  </mu-flex>
</template>

<script>
export default {
  computed: {
    open() {
      return this.$store.getters['app/drawerOpen'];
    },
    docked() {
      return this.$store.getters['app/drawerDocked'];
    },
    isOpen() {
      return (this.open && this.docked) ? 'is-open' : '';
    },
  },
};
</script>

<style lang="less" scoped>
.app-content {
  width: 100%;
  height: calc(100% - 64px);
  padding: 16px;
  text-align: left;
  overflow-y: auto;
}

.is-open {
  padding-left: calc(256px + 16px);
}
</style>
