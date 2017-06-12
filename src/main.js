// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueBus from 'vue-bus'
import router from './router'
import font from './font-awesome-4.7.0/css/font-awesome.min.css'
import VueResource from 'vue-resource'
Vue.config.productionTip = false
Vue.use(font)
Vue.use(VueResource)
Vue.use(vueBus)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
