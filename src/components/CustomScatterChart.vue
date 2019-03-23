<template>
  <div
    :style="_containerStyle"
    class="custom-scatter-chart">
    <div
      :style="_firstPartStyle"
      class="custom-scatter-chart__first-part">
      <mu-select
        label="background image"
        filterable
        v-model="backgroundSrc"
        full-width
        @change="onChangeBackgroundSrc">
        <mu-option
          v-for="(option, index) in backgroundSrcOptions"
          :key="index"
          :label="option.name"
          :value="option.url" />
      </mu-select>
    </div>
    <div
      :style="_mainPartStyle"
      class="custom-scatter-chart__main-part">
      <div v-show="!backgroundSrc">暂无图像</div>
      <div
        v-show="backgroundSrc"
        ref="_imageContainerEle"
        :style="_imageContainerEleStyle">
        <img ref="_imageEle" />
      </div>
    </div>
    <div
      :style="_lastPartStyle"
      class="custom-scatter-chart__last-part">
      <mu-button
        style="width:50%;"
        :color="_lastPartToggleButtonColor"
        :disabled="_lastPartToggleButtonDisabled"
        @click="toggleGetData">
        {{ this._lastPartToggleButtonText }}
      </mu-button>
      <mu-button
        style="width:50%;"
        color="success"
        :disabled="_lastPartResetButtonDisabled"
        @click="resetData">
        清空数据
      </mu-button>
    </div>
  </div>
</template>

<script>
/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */

export default {
  inheritAttrs: false,
  props: {
    // container width
    // if string, set it directly
    // if number, add 'px' at the end
    containerWidth: {
      type: [String, Number],
      default: '100%',
      required: false,
    },
    // container height
    // if string, set it directly
    // if number, add 'px' at the end
    containerHeight: {
      type: [String, Number],
      default: '100%',
      required: false,
    },
    // container flex direction
    containerDirection: {
      type: String,
      default: 'column',
      required: false,
      // eslint-disable-next-line
      validator: function(value) {
        return ['column', 'row'].indexOf(value) !== -1;
      },
    },
    // container flex wrap
    containerWrap: {
      type: String,
      default: 'nowrap',
      required: false,
      // eslint-disable-next-line
      validator: function(value) {
        return ['nowrap', 'wrap'].indexOf(value) !== -1;
      },
    },
    // container justify content
    containerJustifyContent: {
      type: String,
      default: 'flex-start',
      required: false,
      // eslint-disable-next-line
      validator: function(value) {
        return ['center', 'flex-start', 'flex-end', 'space-between', 'space-around', 'space-evenly', 'stretch'].indexOf(value) !== -1;
      },
    },
    // container align items
    containerAlignItems: {
      type: String,
      default: 'center',
      required: false,
      // eslint-disable-next-line
      validator: function(value) {
        return ['normal', 'stretch', 'center', 'flex-start', 'flex-end'].indexOf(value) !== -1;
      },
    },
    // first part width
    // if string, set it directly
    // if number, add 'px' at the end
    firstPartWidth: {
      type: [String, Number],
      default: '100%',
      required: false,
    },
    // first part height
    // if string, set flex directly
    // if number, add 'px' at the end and set flex
    firstPartHeight: {
      type: [String, Number],
      default: 'auto',
      required: false,
    },
    // main part width
    // if string, set it directly
    // if number, add 'px' at the end
    mainPartWidth: {
      type: [String, Number],
      default: '100%',
      required: false,
    },
    // main part height
    // if string, set flex directly
    // if number, add 'px' at the end and set flex
    mainPartHeight: {
      type: [String, Number],
      default: 'auto',
      required: false,
    },
    // main part flex direction
    mainPartDirection: {
      type: String,
      default: 'column',
      required: false,
      // eslint-disable-next-line
      validator: function(value) {
        return ['column', 'row'].indexOf(value) !== -1;
      },
    },
    // main part flex wrap
    mainPartWrap: {
      type: String,
      default: 'nowrap',
      required: false,
      // eslint-disable-next-line
      validator: function(value) {
        return ['nowrap', 'wrap'].indexOf(value) !== -1;
      },
    },
    // main part justify content
    mainPartJustifyContent: {
      type: String,
      default: 'flex-start',
      required: false,
      // eslint-disable-next-line
      validator: function(value) {
        return ['center', 'flex-start', 'flex-end', 'space-between', 'space-around', 'space-evenly', 'stretch'].indexOf(value) !== -1;
      },
    },
    // main part align items
    mainPartAlignItems: {
      type: String,
      default: 'center',
      required: false,
      // eslint-disable-next-line
      validator: function(value) {
        return ['normal', 'stretch', 'center', 'flex-start', 'flex-end'].indexOf(value) !== -1;
      },
    },
    // last part width
    // if string, set it directly
    // if number, add 'px' at the end
    lastPartWidth: {
      type: [String, Number],
      default: '100%',
      required: false,
    },
    // last part height
    // if string, set flex directly
    // if number, add 'px' at the end and set flex
    lastPartHeight: {
      type: [String, Number],
      default: 'auto',
      required: false,
    },
    // background options src api url, must be full url
    // should return
    // Array<Object { name: String, url: String } >
    backgroundSrcOptionsApiUrl: {
      type: String,
      required: true,
      // eslint-disable-next-line
      validator: function(value) {
        return /^(http|https):\/\//.test(value);
      },
    },
    // background options src api method
    backgroundSrcOptionsApiMethod: {
      type: String,
      default: 'get',
      required: false,
      // eslint-disable-next-line
      validator: function(value) {
        return ['get', 'post'].indexOf(value) !== -1;
      },
    },
    // scatter src api url, must be full url
    // if get method, should include search
    scatterSrcApiUrl: {
      type: String,
      required: true,
      // eslint-disable-next-line
      validator: function(value) {
        return /^(http|https):\/\//.test(value);
      },
    },
    // scatter src api method
    scatterSrcApiMethod: {
      type: String,
      default: 'get',
      required: false,
      // eslint-disable-next-line
      validator: function(value) {
        return ['get', 'post'].indexOf(value) !== -1;
      },
    },
    // scatter src api data
    // needed if post method
    scatterSrcApiData: {
      type: Object,
      required: false,
    },
    // scatter src api ask interval, ms
    // > 2000 will be good
    scatterSrcApiInterval: {
      type: Number,
      default: 3000,
      required: false,
    },
    // scatter styles
    scatterWidth: {
      type: Number,
      default: 8,
      required: false,
    },
    scatterColor: {
      type: String,
      default: 'red',
      required: false,
    },
  },
  data() {
    return {
      // background src options
      backgroundSrcOptions: [],
      // picked background src
      backgroundSrc: null,
      // image container and image
      imageContainerEle: null,
      imageEle: null,
      // if timer => getting data
      timer: null,
      // last data
      data: [],
      // last data element
      dataEles: [],
    };
  },
  methods: {
    isType(item, type) {
      return Object.prototype.toString.call(item).slice(8, -1) === type;
    },
    // get image and show
    onChangeBackgroundSrc() {
      this.imageEle.src = this.backgroundSrc;
    },
    clearTimer() {
      clearInterval(this.timer);
      this.timer = null;
    },
    // begin or stop getting data
    toggleGetData() {
      if (this.timer) {
        this.clearTimer();
      } else {
        this.timer = setInterval(() => {
          this.$axios({
            method: this.scatterSrcApiMethod,
            url: this.scatterSrcApiUrl,
            data: this.scatterSrcApiData,
          }).then((res) => {
            if (res.success) {
              this.showData(res.data);
            } else {
              this.$alert(
                res.message,
                '请求出现错误',
                {
                  okLabel: '确认',
                  type: 'warning',
                },
              );
              this.clearTimer();
            }
          });
        }, this.scatterSrcApiInterval);
      }
    },
    // simple virtual dom diff algorithm, only one level
    // data Array<Object { x: Number, y: Number, label: String } >
    /* eslint-disable */
    showData(data) {
      const item = null;
      if (this.dataEles.length === 0) {
        // no data now, directly create dataEle
        data.forEach((item, index) => {

        });
      } else {
        // diff
      }
    },
    /* eslint-disable */
    // reset data
    resetData() {

    },
  },
  mounted() {
    /* eslint-disable */
    this.imageEle = this.$refs._imageEle;
    this.imageContainerEle = this.$refs._imageContainerEle;
    /* eslint-enable */

    // const loading = this.$loading({
    //   text: this.$t('request.loading'),
    // });
    // this.$axios({
    //   method: this.backgroundSrcOptionsApiMethod,
    //   url: this.backgroundSrcOptionsApiUrl,
    // }).then((res) => {
    //   if (res.success) {
    //     this.backgroundSrcOptions = res.data.slice();
    //   } else {
    //     this.$alert(
    //       res.message,
    //       '请求出现错误',
    //       {
    //         okLabel: '确认',
    //         type: 'warning',
    //       },
    //     );
    //   }
    // }).finally(() => {
    //   loading.close();
    // });
  },
  computed: {
    _containerWidth() {
      if (this.isType(this.containerWidth, 'Number')) {
        return `${this.containerWidth}px`;
      }
      return this.containerWidth;
    },
    _containerHeight() {
      if (this.isType(this.containerHeight, 'Number')) {
        return `${this.containerHeight}px`;
      }
      return this.containerHeight;
    },
    _containerStyle() {
      return {
        width: this._containerWidth,
        height: this._containerHeight,
        display: 'flex',
        flexDirection: this.containerDirection,
        flexWrap: this.containerWrap,
        justifyContent: this.containerJustifyContent,
        alignItems: this.containerAlignItems,
      };
    },
    _firstPartWidth() {
      if (this.isType(this.firstPartWidth, 'Number')) {
        return `${this.firstPartWidth}px`;
      }
      return this.firstPartWidth;
    },
    _firstPartHeight() {
      if (this.isType(this.firstPartHeight, 'Number')) {
        return `${this.firstPartHeight}px`;
      }
      return this.firstPartHeight;
    },
    _firstPartStyle() {
      return {
        width: this._firstPartWidth,
        height: this._firstPartHeight,
        overflow: 'hidden',
      };
    },
    _mainPartWidth() {
      if (this.isType(this.mainPartWidth, 'Number')) {
        return `${this.mainPartWidth}px`;
      }
      return this.mainPartWidth;
    },
    _mainPartHeight() {
      if (this.isType(this.mainPartHeight, 'Number')) {
        return `${this.mainPartHeight}px`;
      }
      return this.mainPartHeight;
    },
    _mainPartStyle() {
      return {
        width: this._mainPartWidth,
        height: this._mainPartHeight,
        flex: 'auto',
        display: 'flex',
        flexDirection: this.mainPartDirection,
        flexWrap: this.mainPartWrap,
        justifyContent: this.mainPartJustifyContent,
        alignItems: this.mainPartAlignItems,
        margin: '0 0 12px',
        overflow: 'auto',
      };
    },
    _lastPartWidth() {
      if (this.isType(this.lastPartWidth, 'Number')) {
        return `${this.lastPartWidth}px`;
      }
      return this.lastPartWidth;
    },
    _lastPartHeight() {
      if (this.isType(this.lastPartHeight, 'Number')) {
        return `${this.lastPartHeight}px`;
      }
      return this.lastPartHeight;
    },
    _lastPartStyle() {
      return {
        width: this._lastPartWidth,
        height: this._lastPartHeight,
        overflow: 'hidden',
      };
    },
    _lastPartToggleButtonDisabled() {
      return !this.backgroundSrc;
    },
    _lastPartToggleButtonColor() {
      return this.timer ? 'error' : 'primary';
    },
    _lastPartToggleButtonText() {
      return this.timer ? '停止获取数据' : '开始获取数据';
    },
    _lastPartResetButtonDisabled() {
      return this.timer || this.dataEles.length === 0;
    },
    _imageContainerEleStyle() {
      return !this.imageEle
        ? {
          position: 'relative',
        } : {
          position: 'relative',
          width: this.imageEle.width,
          height: this.imageEle.height,
        };
    },
    _scatterStyle() {
      return {
        width: `${this.scatterWidth}px`,
        height: `${this.scatterWidth}px`,
        borderRadius: '50%',
        backgroundColor: this.scatterColor,
      };
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
