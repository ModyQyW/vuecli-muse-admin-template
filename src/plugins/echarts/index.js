import Vue from 'vue';
import VueECharts from 'vue-echarts';

// 手动引入 ECharts 各模块来减小打包体积
// 也可以在使用到的文件中引入
// import 'echarts-gl';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/scatter';
import 'echarts/lib/component/angleAxis';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/radiusAxis';
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/polar';

Vue.component('v-chart', VueECharts);
