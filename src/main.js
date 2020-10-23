import Vue from 'vue'
import App from './App.vue'
import router from './router'
export default new Vue()
// import './registerServiceWorker'
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);
import axios from 'axios'
Vue.prototype.axios=axios
import store from './store/store' //引入vuex
import { Search } from 'vant';
Vue.use(Search);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
