<template>
  <mu-flex
    class="container"
    direction="column">
    <mu-alert color="info">
      Based on CodeMirror. A simple demo below. Check the document for more information.&nbsp;<a href="https://codemirror.net/">link to CodeMirror</a>
    </mu-alert>
    <json-editor
      :val="val"
      @change="onChange"/>
  </mu-flex>
</template>

<script>
import JsonEditor from '@/components/JsonEditor.vue';

export default {
  components: {
    JsonEditor,
  },
  data() {
    return {
      // eslint-disable-next-line
      // val: { test: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quia dolor pariatur commodi vitae recusandae iure quisquam neque adipisci. Incidunt hic tenetur perferendis eligendi iure rerum voluptatem, autem molestias ab?' },
      val: {},
    };
  },
  methods: {
    onChange(newVal) {
      this.val = newVal;
    },
  },
};
</script>

<style lang="less" scoped>
.json-editor {
  height: calc(100% - 64px);
}
</style>
