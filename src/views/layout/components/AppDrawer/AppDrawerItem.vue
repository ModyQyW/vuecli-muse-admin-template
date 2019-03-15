<template>
    <mu-list-item
      button
      ripple
      :nested="hasChildren"
      :open="open"
      :value="hasChildren ? null : (hasName ? item.name : item.children[0].name)"
      :to="to">

      <!-- left icon -->
      <mu-list-item-action v-if="item.meta && item.meta.icon" class="leftIcon">
        <mu-icon :value="item.meta.icon"></mu-icon>
      </mu-list-item-action>
      <!-- center title -->
      <mu-list-item-title>{{ $t(`routes.${title}`) }}</mu-list-item-title>
      <!-- icon right -->
      <mu-list-item-action v-if="hasChildren">
        <mu-icon class="toggleIcon" value="keyboard_arrow_down"></mu-icon>
      </mu-list-item-action>

      <!-- nested items -->
      <template
        v-for="child in item.children"
        slot="nested">
        <keep-alive
          v-if="child.cached&&!child.meta.hidden"
          :key="child.path">
          <app-drawer-item :item="child"></app-drawer-item>
        </keep-alive>
        <app-drawer-item
          v-else-if="!child.meta.hidden"
          :key="child.path"
          :item="child">
        </app-drawer-item>
      </template>

    </mu-list-item>
</template>

<script>
export default {
  // recursive invocation needs declaring
  // 递归调用需要声明
  name: 'AppDrawerItem',
  props: {
    // route object
    // 路由对象
    item: {
      type: Object,
      required: true,
    },
    // default open or not
    // 默认是否打开
    defaultOpen: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      open: this.defaultOpen,
    };
  },
  methods: {
  },
  computed: {
    title() {
      return this.item.meta.title ? this.item.meta.title : this.item.children[0].meta.title;
    },
    hasName() {
      return this.item.name && this.item.name !== '';
    },
    hasChildren() {
      return this.item.children && this.item.children.length > 1;
    },
    to() {
      if (this.hasChildren) {
        return null;
      }
      return this.item;
    },

  },
};
</script>

<style lang="less" scoped>
.leftIcon {
  color: inherit;
}

.toggleIcon {
  transition: transform .3s cubic-bezier(.23,1,.32,1);
  .mu-item__open & {
    transform: rotate(180deg);
  }
}
</style>
