<template>
  <mu-flex
    class="container"
    direction="column"
    align-items="center">
    <mu-alert color="info">
      Based on toast-ui.vue-editor. A simple demo below. Check the document for more information.&nbsp;<a href="https://github.com/nhnent/toast-ui.vue-editor">link to toast-ui.vue-editor</a>
    </mu-alert>
    <markdown-editor
      :eventbus="eventbus"
      :val="val"
      :options="options"
      :height="height"
      :previewStyle="previewStyle"
      :mode="mode"
      :html="html"
      :visible="visible" />
  </mu-flex>
</template>

<script>
import Vue from 'vue';
import MarkdownEditor from '@/components/MarkdownEditor.vue';

export default {
  components: {
    MarkdownEditor,
  },
  data() {
    return {
      eventbus: new Vue(),
      val: '',
      options: {
        minHeight: '200px',
        language: 'en_US',
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
      },
      height: 'calc(100% - 64px)',
      previewStyle: 'vertical',
      mode: 'markdown',
      html: '',
      visible: true,
    };
  },
  mounted() {
    this.eventbus.$on('change', (newVal) => {
      this.val = newVal;
    });
  },
};
</script>
