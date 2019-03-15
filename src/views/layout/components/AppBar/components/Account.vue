<template>
  <mu-menu flat open-on-hover>
    <mu-button icon class="col-item btn">
      <img :src="avatar" />
    </mu-button>
    <mu-list slot="content" @change="onClickMenu">
      <mu-list-item button value="personalCenter">
        <mu-list-item-content>
          <mu-list-item-title>{{ $t('appbar.account.personalCenter') }}</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-list-item button value="signout">
        <mu-list-item-content>
          <mu-list-item-title>{{ $t('appbar.account.signout') }}</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
    </mu-list>
  </mu-menu>
</template>

<script>
export default {
  methods: {
    onClickMenu(val) {
      console.log('val', val);
      switch (val) {
        case 'personalCenter': break;
        case 'signout': break;
        default:
          this.$alert(
            this.$t('message.alertIllegalOperation'),
            this.$t('message.alertTitle'),
            {
              type: 'error',
            },
          );
      }
    },
  },
  computed: {
    avatar() {
      return this.$store.getters['user/avatar'];
    },
  },
};
</script>
