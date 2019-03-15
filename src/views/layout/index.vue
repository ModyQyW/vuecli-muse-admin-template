<template>
  <div class="wrapper app-wrapper">
    <app-drawer></app-drawer>
    <app-bar></app-bar>
    <app-content></app-content>
  </div>
</template>

<script>
import AppDrawer from './components/AppDrawer/index.vue';
import AppBar from './components/AppBar/index.vue';
import AppContent from './components/AppContent.vue';

export default {
  components: {
    AppDrawer,
    AppBar,
    AppContent,
  },
};
</script>

<style lang="less" scoped>
</style>
