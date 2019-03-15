<template>
  <mu-flex
    class="row-item container"
    direction="column"
    wrap="wrap">
    <mu-text-field
      v-model="msg"
      full-width
      placeholder="input something"
      :error-text="errMsg"
      @change="onChange"/>
    <mu-checkbox
      class="row-item"
      v-model="dateNeeded"
      :label="'Need a date?'"
      label-left />
    <mu-checkbox
      class="row-item"
      v-model="pictureNeeded"
      :label="'Need a picture?'"
      label-left />
    <mu-flex
      class="row-item"
      align-items="center">
      <canvas ref="zipCanvas" width="256" height="256"></canvas>
      <mu-button class="refresh-btn" @click="onRefresh">Refresh</mu-button>
    </mu-flex>
    <mu-button class="save-btn" @click="onSaveZip">Save Zip</mu-button>
  </mu-flex>
</template>

<script>
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import moment from 'moment';
import { setTimeout } from 'timers';

export default {
  data() {
    return {
      zip: null,
      canvas: null,
      context: null,
      msg: '',
      errMsg: '',
      dateNeeded: false,
      pictureNeeded: false,
    };
  },
  methods: {
    onChange(val) {
      this.errMsg = !val ? 'Please input' : '';
    },
    drawImage() {
      const img = new Image();
      /* eslint-disable */
      // comment will lead to
      // [Vue warn]: Error in v-on handler: "SecurityError: Failed to execute 'toDataURL' on 'HTMLCanvasElement': Tainted canvases may not be exported."
      /* eslint-enable */
      img.crossOrigin = 'anonymous';
      img.src = 'https://placekitten.com/256/256';
      // will lead to blank canvas and need to refresh
      // this.context.drawImage(img, 0, 0, 256, 256);
      setTimeout(() => {
        this.context.drawImage(img, 0, 0, 256, 256);
      }, 400);
    },
    onRefresh() {
      this.drawImage();
    },
    onSaveZip() {
      if (!this.msg) {
        this.errMsg = 'Please input';
        return;
      }
      if (this.dateNeeded) {
        this.zip.file('input.txt', `${moment().format('YYYY-MM-DD HH:mm:ss')}\r\n${this.msg}`);
      } else {
        this.zip.file('input.txt', this.msg);
      }
      if (this.pictureNeeded) {
        this.drawImage();
        let imgBase64 = this.canvas.toDataURL();
        console.log('imgBase64', imgBase64);
        const type = imgBase64.slice(imgBase64.indexOf('/') + 1, imgBase64.indexOf(';'));
        imgBase64 = imgBase64.slice(imgBase64.indexOf('base64,') + 7);
        this.zip.folder('images').file(`placekitten.${type}`, imgBase64, { base64: true });
      }
      this.zip.generateAsync({ type: 'blob' })
        .then((content) => {
          saveAs(content, 'example.zip');
        });
    },
  },
  mounted() {
    this.zip = new JSZip();
    this.canvas = this.$refs.zipCanvas;
    this.context = this.canvas.getContext('2d');
    this.drawImage();
  },
};
</script>

<style lang="less" scoped>
.mu-checkbox {
  margin-bottom: 16px;

  /deep/ .mu-checkbox-wrapper {
    justify-content: flex-start;
  }
}

.refresh-btn {
  margin-left: 16px;
}

.save-btn {
  margin-top: 16px;
}
</style>
