<template>
  <div class="json-editor">
    <textarea ref="jsonEditor" />
  </div>
</template>

<script>
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';

export default {
  props: {
    val: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      editor: null,
    };
  },
  mounted() {
    this.editor = CodeMirror.fromTextArea(
      this.$refs.jsonEditor,
      {
        mode: 'application/json',
        tabSize: 2,
        lineNumbers: true,
        lint: true,
      },
    );
    this.editor.setValue(JSON.stringify(this.val));
    this.editor.on('change', (instance) => {
      this.$emit('change', instance.getValue());
    });
  },
  watch: {
    val(newVal) {
      const editorVal = this.editor.getValue();
      if (newVal !== editorVal) {
        this.editor.setValue(JSON.stringify(this.val, null, 2));
      }
    },
  },
};
</script>

<style lang="less" scoped>
.json-editor {
  width: 100%;
  padding-top: 16px;

  /deep/ .CodeMirror {
    font-family: 'Roboto', 'Avenir', Helvetica, monospace, Arial, sans-serif;
    height: 100%;
  }
}
</style>
