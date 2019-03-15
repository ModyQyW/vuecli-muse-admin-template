<template>
  <div ref="scroll-wrapper" class="row-item col-item">
    <slot></slot>
  </div>
</template>

<script>
// check docs/dependencies.md for more information
// 查看 docs/dependencies_cn.md 获取更多信息
import BScroll from 'better-scroll';

export default {
  props: {
    data: {
      type: Array,
      default: null,
    },
    // 0 not dispatch scroll event
    // 1 default, dispatch scroll event throttled when scrolling
    // 2 dispatch scroll event in real time when scrolling
    // 3 dispatch scroll event in real time when scrolling and swiping
    // 0 不派发 scroll 事件
    // 1 默认，滚动时节流派发 scroll 事件
    // 2 滚动时实时派发 scroll 事件
    // 3 屏幕滑动、swipe 时均实时派发 scroll 事件
    probeType: {
      type: Number,
      default: 1,
    },
    // default dispatch click event when click
    // 默认点击时派发 click 事件
    click: {
      type: Boolean,
      default: true,
    },
    // default disable x-axis scroll
    // 默认不开启横向滚动
    scrollX: {
      type: Boolean,
      default: false,
    },
    // default disable dispatching scroll event
    // 默认不派发滚动事件
    listenScroll: {
      type: Boolean,
      default: false,
    },
    // default disable dispatching event when scrolling to end
    // 默认不派发滚动到底部的事件
    pullup: {
      type: Boolean,
      default: false,
    },
    // default disable dispatching event when pulling down header
    // 默认不派发顶部下拉的事件
    pulldown: {
      type: Boolean,
      default: false,
    },
    // default disable dispatching event when start scrolling
    // 默认不派发列表滚动开始的事件
    beforeScroll: {
      type: Boolean,
      default: false,
    },
    // delay refreshing after data updated
    // 当数据更新后，刷新 scroll 的延时
    refreshDelay: {
      type: Number,
      default: 50,
    },
  },
  mounted() {
    // make sure initial better-scroll after rendering DOM
    // 保证在 DOM 渲染完毕后初始化 better-scroll
    setTimeout(() => {
      this.initScroll();
    }, 50);
  },
  methods: {
    initScroll() {
      if (!this.$refs.wrapper) {
        return;
      }
      // initial better-scroll
      // 初始化 better-scroll
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click,
        scrollX: this.scrollX,
      });
      // if dispatch scroll event
      // 是否派发滚动事件
      if (this.listenScroll) {
        this.scroll.on('scroll', (pos) => {
          this.$emit('scroll', pos);
        });
      }
      // if dispatch scroll to end event
      // 是否派发滚动到底部事件
      if (this.pullup) {
        this.scroll.on('scrollEnd', () => {
          if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
            this.$emit('scrollToEnd');
          }
        });
      }
      // if dispatch pull down header event
      // 是否派发顶部下拉事件
      if (this.pulldown) {
        this.scroll.on('touchend', (pos) => {
          if (pos.y > 50) {
            this.$emit('pulldown');
          }
        });
      }
      // 是否派发列表滚动开始的事件
      if (this.beforeScroll) {
        this.scroll.on('beforeScrollStart', () => {
          this.$emit('beforeScroll');
        });
      }
    },
    disable() {
      // proxy for better-scroll method disable()
      // 代理 better-scroll 的 disable 方法
      if (this.scroll) {
        this.scroll.disable();
      }
    },
    enable() {
      // proxy for better-scroll method enable()
      // default enable better-scroll
      // 代理 better-scroll 的 enable 方法
      // 默认开启 better-scroll
      if (this.scroll) {
        this.scroll.enable();
      }
    },
    refresh() {
      // proxy for better-scroll method refresh()
      // 代理 better-scroll 的 refresh 方法
      if (this.scroll) {
        this.scroll.refresh();
      }
    },
    scrollTo(...args) {
      // proxy for better-scroll method scrollTo()
      // 代理 better-scroll 的 scrollTo 方法
      if (this.scroll) {
        this.scroll.scrollTo(...args);
      }
    },
    scrollToElement(...args) {
      // proxy for better-scroll method scrollToElement()
      // 代理 better-scroll 的 scrollToElement 方法
      if (this.scroll) {
        this.scroll.scrollToElement(...args);
      }
    },
  },
  watch: {
    // 监听数据的变化
    // 延时 refreshDelay 调用 refresh 方法重新计算
    // 保证滚动效果正常
    // watch data
    // delay refreshDelay then call refresh to recalculate
    // make sure scroll properly
    data() {
      setTimeout(() => {
        this.refresh();
      }, this.refreshDelay);
    },
  },
};
</script>

<style lang="less" scoped>
</style>
