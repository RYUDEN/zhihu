// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import font from './font-awesome/css/font-awesome.min.css'
import VueResource from 'vue-resource'
// import storage from '/storage/stroage'
Vue.use(font)
Vue.use(Vuex)
Vue.use(VueResource)
// Vue.prototype.storage = storage
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
    // storage,
  template: '<App/>',
  components: { App }
})
const store = new Vuex.Store({
  state:{
    loading:false
  }
})