<template>
  <mu-drawer
    class="app-drawer"
    :open.sync="open"
    :docked="docked">
    <scroll-container :data="routes">
      <mu-list
        toggle-nested
        :value="value"
        @change="onChange">

        <template v-for="route in routes">
          <keep-alive
            v-if="route.cached&&!route.meta.hidden"
            :key="route.path">
            <app-drawer-item
              :item="route"
              :defaultOpen="route.meta && route.meta.defaultOpen !== undefined" />
          </keep-alive>
          <app-drawer-item
            v-else-if="!route.meta.hidden"
            :key="route.path"
            :item="route"
            :defaultOpen="route.meta && route.meta.defaultOpen !== undefined" />
        </template>

      </mu-list>
    </scroll-container>
  </mu-drawer>
</template>

<script>
// eslint-disable-next-line
import ScrollContainer from '@c/ScrollContainer.vue';
import AppDrawerItem from './AppDrawerItem.vue';

export default {
  components: {
    ScrollContainer,
    AppDrawerItem,
  },
  computed: {
    open: {
      /* eslint-disable */
      get: function () {
        return this.$store.getters['app/drawerOpen'];
      },
      set: function (val) {
        this.$store.commit('app/setDrawerOpen', val);
      },
      /* eslint-enable */
    },
    docked() {
      return this.$store.getters['app/drawerDocked'];
    },
    routes() {
      return this.$store.getters['app/routes'];
    },
    value: {
      /* eslint-disable */
      get: function () {
        console.log('name', this.$route.name);
        return this.$route.name;
      },
      set: function (val) {

      }
      /* eslint-enable */
    },
  },
  methods: {
    onChange(val) {
      this.value = val || this.value;
    },
  },
};
</script>

<style lang="less" scoped>
</style>
