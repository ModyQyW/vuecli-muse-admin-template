<template>
  <!-- event change returns source not value... -->
  <editor
    class="markdown-editor"
    ref="markdown-editor"
    v-model="value"
    :options="options"
    :height="height"
    :previewStyle="previewStyle"
    :mode="mode"
    :html="html"
    :visible="visible" />
</template>

<script>
import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import 'codemirror/lib/codemirror.css';
import Editor from '@toast-ui/vue-editor/src/Editor.vue';

export default {
  props: {
    eventbus: {
      required: true,
    },
    val: {
      type: String,
      default: '',
    },
    options: {
      type: Object,
      default: () => ({
        minHeight: '200px',
        language: 'zh_CN',
        useCommandShortcut: true,
        useDefaultHTMLSanitizer: true,
        usageStatistics: true,
        hideModeSwitch: false,
        toolbarItems: [
          'heading',
          'bold',
          'italic',
          'strike',
          'divider',
          'hr',
          'quote',
          'divider',
          'ul',
          'ol',
          'task',
          'indent',
          'outdent',
          'divider',
          'table',
          'image',
          'link',
          'divider',
          'code',
          'codeblock',
        ],
      }),
    },
    height: {
      type: String,
      default: '100%',
    },
    previewStyle: {
      type: String,
      default: 'vertical',
    },
    mode: {
      type: String,
      default: 'markdown',
    },
    html: {
      type: String,
      default: '',
    },
    visible: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      value: this.val,
    };
  },
  components: {
    Editor,
  },
  watch: {
    value(newValue) {
      this.eventbus.$emit('change', newValue);
    },
  },
};
</script>

<style lang="less" scoped>
.markdown-editor {
  width: 100%;

  /deep/ .CodeMirror {
    font-family: 'Roboto', 'Avenir', Helvetica, monospace, Arial, sans-serif;
  }

  /deep/ .te-preview {
    background: white;
  }
}
</style>
