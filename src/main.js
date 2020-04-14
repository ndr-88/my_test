import Vue from 'vue'
import App from './App.vue'
import "./styles/global.scss";
import infiniteScroll from "vue-infinite-scroll";
import router from './router';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.use(infiniteScroll);



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');


