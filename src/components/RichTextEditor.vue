<template>
  <quill-editor
    ref="rich-text-editor"
    class="rich-text-editor"
    :content="content"
    @change="onEditorChange($event)">
  </quill-editor>
</template>

<script>
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import { quillEditor } from 'vue-quill-editor';

export default {
  props: {
    eventbus: {
      required: true,
    },
    contentOrigin: {
      type: String,
      default: '',
    },
  },
  components: {
    quillEditor,
  },
  data() {
    return {
      content: this.contentOrigin,
    };
  },
  methods: {
    onEditorChange({ html }) {
      this.content = html;
      this.eventbus.$emit('change', this.content);
    },
  },
  computed: {
    editor() {
      return this.$refs['rich-text-editor'].quill;
    },
  },
};
</script>

<style lang="less" scoped>

</style>
