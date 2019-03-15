import Vue from 'vue';
import App from './App.vue';

// normalize.css
import 'normalize.css';

// iconfont
import '@/assets/icons/iconfont.css';

// muse ui
import './plugins/muse';

// 全局 style
// global style
import './mixins/style.less';

// axios
import './plugins/axios';

// i18n
import i18n from './plugins/locales';

// clipboard
import './plugins/clipboard';

// vue-echarts
import './plugins/echarts';

// 状态树
import store from './store';

// 路由
import router from './router';

Vue.use(App);
Vue.use(router);
Vue.use(store);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
