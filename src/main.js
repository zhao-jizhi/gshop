/*
入口js
 */
import Vue from 'vue'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import App from './App'
import router from './router'
import store from './store'
import './mock/mockServer'
import loading from './common/imgs/loading.gif'
import './filters'

Vue.component(Button.name, Button)
Vue.use(VueLazyload, {
  loading
})
new Vue({
  el: '#app',
  render: h => h(App),
  router,// 使用上vue-router
  store// 使用上vuex
})
