<template>
  <mu-menu flat open-on-hover>
    <mu-button icon class="col-item btn">
      <mu-icon value="language"></mu-icon>
    </mu-button>
    <mu-list slot="content" @change="onChangeLanguage">
      <mu-list-item button value="zh-CN">
        <mu-list-item-action>
          <img :src="zhcnIcon" style="height: 24px;"/>
        </mu-list-item-action>
        <mu-list-item-title>简体中文</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button value="en-US">
        <mu-list-item-action>
          <img :src="enusIcon" style="height: 24px;"/>
        </mu-list-item-action>
        <mu-list-item-title>English</mu-list-item-title>
      </mu-list-item>
    </mu-list>
  </mu-menu>
</template>

<script>
/* eslint-disable */
import enusIcon from '@a/icons/en-US.jpg';
import zhcnIcon from '@a/icons/zh-CN.jpg';
/* eslint-enable */

export default {
  data() {
    return {
      enusIcon,
      zhcnIcon,
    };
  },
  methods: {
    onChangeLanguage(val) {
      this.$store.commit('app/setLanguage', val);
    },
  },
};
</script>
