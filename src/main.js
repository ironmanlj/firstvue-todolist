import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import echarts from 'echarts';

Vue.use(ElementUI);
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');