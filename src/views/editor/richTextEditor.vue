<template>
  <mu-flex
    class="container"
    direction="column">
    <mu-alert color="info">
      Based on vue-quill-editor. A simple demo below. Check the document for more information.&nbsp;<a href="https://github.com/surmon-china/vue-quill-editor">link to vue-quill-editor</a>
    </mu-alert>
    <rich-text-editor
      :eventbus="eventbus"
      :contentOrigin="content" />
  </mu-flex>
</template>

<script>
import Vue from 'vue';
import RichTextEditor from '@/components/RichTextEditor.vue';

export default {
  components: {
    RichTextEditor,
  },
  data() {
    return {
      eventbus: new Vue(),
      content: '',
    };
  },
  mounted() {
    this.eventbus.$on('change', (newContent) => {
      this.content = newContent;
    });
  },
};
</script>

<style lang="less" scoped>
.rich-text-editor {
  flex: 1;
  display: flex;
  flex-direction: column;

  /deep/ .ql-container {
    flex: 1 1 auto;
  }
}
</style>
