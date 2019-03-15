<template>
  <mu-menu flat open-on-hover>
    <mu-button icon class="col-item btn">
      <mu-icon value="invert_colors"></mu-icon>
    </mu-button>
    <mu-list slot="content" @change="onChangeTheme">
      <mu-list-item button value="light">
        <mu-list-item-title>{{ $t('appbar.theme.light') }}</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button value="dark">
        <mu-list-item-title>{{ $t('appbar.theme.dark') }}</mu-list-item-title>
      </mu-list-item>
    </mu-list>
  </mu-menu>
</template>

<script>
export default {
  methods: {
    onChangeTheme(val) {
      this.$store.commit('app/setTheme', val);
    },
  },
};
</script>
