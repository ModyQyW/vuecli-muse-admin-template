<template>
  <div class="container">
    <mu-flex class="row-item">
      <mu-text-field v-model="input" placeholder="input here" />
    </mu-flex>
    <mu-flex class="row-item">
      <mu-text-field v-model="test" placeholder="paste here" />
    </mu-flex>
    <mu-flex class="row-item">
      <mu-button color="primary"
        v-clipboard:copy="input"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError">
        Copy
      </mu-button>
    </mu-flex>
    <mu-flex class="row-item" direction="column">
      <p>Use unpkg's material-design-icons css may lose some icons...</p>
      <p>使用 unpkg 的 material-design-icons css 可能会丢失某些图标……</p>
    </mu-flex>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      test: '',
    };
  },
  methods: {
    onCopy(e) {
      this.$alert(`Copied succeeded: ${e.text}`);
    },
    onError() {
      this.$alert('Failed to copy texts');
    },
  },
};
</script>

<style lang="less" scoped>

</style>
