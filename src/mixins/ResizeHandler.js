const WIDTH = 768;

export default {
  data() {
    return {
      // alertShowed: false,
      width: window.innerWidth,
    };
  },
  mounted() {
    this.toggleDrawer();
  },
  methods: {
    resize() {
      this.width = window.innerWidth;
    },
    toggleDrawer() {
      if (this.width < WIDTH) {
        if (!this.mobile) {
          this.$store.commit('app/setMobile', true);
        }
        if (this.drawerOpen) {
          this.$store.commit('app/setDrawerOpen', false);
        }
        if (this.drawerDocked) {
          this.$store.commit('app/setDrawerDocked', false);
        }
        // if (!this.alertShowed) {
        //   this.alertShowed = true;
        //   this.$alert(
        //     this.$t('message.alertInnerWidthTooSmall'),
        //     this.$t('message.alertTitle'),
        //     {
        //       okLabel: this.$t('message.okLabel'),
        //       type: 'warning',
        //     },
        //   ).then(() => { this.alertShowed = false; });
        // }
      } else if (this.width >= WIDTH) {
        if (this.mobile) {
          this.$store.commit('app/setMobile', false);
        }
        if (!this.drawerDocked) {
          this.$store.commit('app/setDrawerDocked', true);
        }
      }
    },
  },
  computed: {
    mobile() {
      return this.$store.getters['app/mobile'];
    },
    drawerOpen() {
      return this.$store.getters['app/drawerOpen'];
    },
    drawerDocked() {
      return this.$store.getters['app/drawerDocked'];
    },
  },
  watch: {
    width() {
      this.toggleDrawer();
    },
  },
};
