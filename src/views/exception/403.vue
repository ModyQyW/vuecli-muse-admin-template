<template>
<mu-flex
  class="container"
  justify-content="center"
  align-items="center">
  <mu-flex
    class="left"
    wrap="wrap">
    <mu-flex class="row-item" justify-content="center">403</mu-flex>
    <mu-flex class="row-item" justify-content="center">Forbidden</mu-flex>
  </mu-flex>
  <mu-flex
    class="right"
    wrap="wrap">
    <mu-flex class="row-item" justify-content="center">访问的路径不可用</mu-flex>
    <mu-flex class="row-item" justify-content="center">如有问题，请联系管理员</mu-flex>
    <mu-flex class="row-item" justify-content="center">
      <mu-button color="success" @click="onBack">
        <mu-icon left value="arrow_back"></mu-icon>
        返回首页
      </mu-button>
    </mu-flex>
  </mu-flex>
</mu-flex>
</template>

<script>
import back from './mixins/back';

export default {
  mixins: [back],
};
</script>

<style lang="less" scoped>
@import './mixins/style';
</style>
