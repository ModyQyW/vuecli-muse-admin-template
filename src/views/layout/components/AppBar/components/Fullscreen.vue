<template>
  <mu-button
    icon
    class="col-item btn"
    @click="toggleFullscreen"
    :title="$t('appbar.fullscreen.toggle')">
    <mu-icon :value="icon"></mu-icon>
  </mu-button>
</template>

<script>
import screenfull from 'screenfull';

export default {
  data() {
    return {
      isFullscreen: false,
    };
  },
  methods: {
    toggleFullscreen() {
      if (screenfull.enabled) {
        screenfull.toggle(document.querySelector('html'));
      } else {
        this.$alert(
          this.$t('message.alertScreenFullDisable'),
          this.$t('alertTitle'),
          {
            okLabel: this.$t('message.okLabel'),
            type: 'warning',
          },
        );
      }
    },
    onChange() {
      this.isFullscreen = screenfull.isFullscreen;
    },
  },
  mounted() {
    screenfull.on('change', this.onChange);
  },
  computed: {
    icon() {
      return this.isFullscreen ? 'fullscreen_exit' : 'fullscreen';
    },
  },
};
</script>
