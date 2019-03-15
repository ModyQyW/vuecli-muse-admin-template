<template>
  <mu-row
    gutter
    wrap="wrap"
    fill
    justify-content="center"
    align-items="start">
    <mu-col sm="12">
      <mu-alert color="info">
        Based on VueDraggable. A simple demo below. Check the document for more information.&nbsp;<a href="https://github.com/SortableJS/Vue.Draggable">link to VueDraggable</a>
      </mu-alert>
    </mu-col>
    <mu-col sm="6">
      <vue-draggable
        class="list-group gray-container"
        tag="ul"
        v-model="data1"
        v-bind="options"
        :move="onMove"
        @start="isDragging=true"
        @end="isDragging=false">
        <transition-group type="transition" name="flip-list">
          <li
            class="list-group-item"
            v-for="item in data1"
            :key="item.index">
            <mu-icon
              style="cursor: pointer;"
              :value="item.fixed? 'lock' : 'lock_open'"
              @click="item.fixed = !item.fixed" />
            {{item.value}}
            <mu-badge class="badge" :content="item.index" />
          </li>
        </transition-group>
      </vue-draggable>
    </mu-col>
    <mu-col sm="6">
      <vue-draggable
        class="list-group gray-container"
        tag="ul"
        v-model="data2"
        v-bind="options"
        :move="onMove"
        @start="isDragging=true"
        @end="isDragging=false">
        <transition-group name="no">
          <li
            class="list-group-item"
            v-for="item in data2"
            :key="item.index">
            <mu-icon
              style="cursor: pointer;"
              :value="item.fixed? 'lock' : 'lock_open'"
              @click="item.fixed = !item.fixed" />
            {{item.value}}
            <mu-badge class="badge" :content="item.index" />
          </li>
        </transition-group>
      </vue-draggable>
    </mu-col>
    <mu-col sm="6">
      <mu-button @click="addData(1)">ADD</mu-button>
      <mu-button @click="removeData(1)">REMOVE</mu-button>
    </mu-col>
    <mu-col sm="6">
      <mu-button @click="addData(2)">ADD</mu-button>
      <mu-button @click="removeData(2)">REMOVE</mu-button>
    </mu-col>
    <mu-col sm="6">
      <pre class="gray-container">{{json1}}</pre>
    </mu-col>
    <mu-col sm="6">
      <pre class="gray-container">{{json2}}</pre>
    </mu-col>
  </mu-row>
</template>

<script>
import VueDraggable from 'vuedraggable';

export default {
  components: {
    VueDraggable,
  },
  data() {
    const mockdata = [
      'vuecli',
      'museui',
      'admin',
      'template',
      'improving',
    ];
    return {
      mockdata,
      data1: mockdata.map((item, index) => ({
        value: item,
        index: index.toString(),
        fixed: false,
      })),
      data2: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      options: {
        animation: 0,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost',
      },
    };
  },
  methods: {
    onMove({ relatedContext, draggedContext }) {
      // console.log('relatedContext', relatedContext);
      // console.log('draggedContext', draggedContext);
      const relatedItem = relatedContext.element;
      const draggedItem = draggedContext.element;
      return (
        (!relatedItem || !relatedItem.fixed) && !draggedItem.fixed
      );
    },
    addData(number) {
      let tmp;
      switch (number) {
        case 1:
          tmp = {
            value: this.mockdata[Math.floor(Math.random() * 5)],
            index: (this.data1.length + this.data2.length).toString(),
            fixed: false,
          };
          this.data1.push(tmp);
          break;
        case 2:
          tmp = {
            value: this.mockdata[Math.floor(Math.random() * 5)],
            index: (this.data1.length + this.data2.length).toString(),
            fixed: false,
          };
          this.data2.push(tmp);
          break;
        default: break;
      }
    },
    removeData(number) {
      switch (number) {
        case 1: this.data1.pop(); break;
        case 2: this.data2.pop(); break;
        default: break;
      }
    },
  },
  computed: {
    json1() {
      return JSON.stringify(this.data1, null, 2);
    },
    json2() {
      return JSON.stringify(this.data2, null, 2);
    },
  },
  watch: {
    isDragging(newValue) {
      if (newValue) {
        this.delayedDragging = true;
        return;
      }
      this.$nextTick(() => {
        this.delayedDragging = false;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.list-group {
  width: 100%;
  min-height: 40px;

  &>span {
    display: block;
    min-height: 36px;
  }

  & .list-group-item {
    position: relative;
    height: 36px;
    padding-left: 4px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid #fff;
    border-bottom: 0;
    list-style-type: none;
    cursor: move;

    &:first-child {
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
    }

    &:last-child {
      border-bottom-left-radius: 3px;
      border-bottom-right-radius: 3px;
      border-bottom: 1px solid #fff;
    }

    &>.badge {
      position: absolute;
      right: 4px;
    }
  }
}

pre {
  font-family: 'Avenir', Helvetica, monospace, Arial, sans-serif;
}
</style>
