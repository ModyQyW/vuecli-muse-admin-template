<template>
  <mu-appbar
    class="app-bar"
    :class="isOpen"
    color="primary">

    <!-- drawer toggle -->
    <mu-button icon slot="left" @click="toggleDrawerOpen">
      <mu-icon value="menu"></mu-icon>
    </mu-button>

    <!-- breadcrumb -->
    <!-- {{$t('mock.breadcrumb')}} -->
    <mu-breadcrumbs>
      <mu-breadcrumbs-item
        class="breadcrumbs-item"
        v-for="(item, index) in pathItems"
        :key="index"
        :disabled="index === pathItems.length - 1"
        :to="to(index)">
        {{$t(`routes.${item}`)}}
      </mu-breadcrumbs-item>
    </mu-breadcrumbs>

    <!-- fullscreen theme language account -->
    <fullscreen slot="right"/>
    <theme slot="right"/>
    <language slot="right"/>
    <account slot="right"/>
  </mu-appbar>
</template>

<script>
import Fullscreen from './components/Fullscreen.vue';
import Theme from './components/Theme.vue';
import Language from './components/Language.vue';
import Account from './components/Account.vue';

export default {
  components: {
    Fullscreen,
    Theme,
    Language,
    Account,
  },
  methods: {
    toggleDrawerOpen() {
      this.$store.commit('app/setDrawerOpen', !this.open);
    },
    to(index) {
      const route = { path: '/' };
      route.path += this.pathItems.slice(0, index + 1).join('/');
      return route;
    },
  },
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
    pathItems() {
      return this.$route.fullPath.split('/').slice(1);
    },
  },
};
</script>

<style lang="less" scoped>
.app-bar {
  width: 100%;
  padding-left: 0;
  text-align: left;

  /deep/ .btn {
    border-radius: 0;

    & img {
      width: 36px;
      height: 36px;
    }
  }
}

.is-open {
  padding-left: 256px;
}
</style>
