// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import Vuetify from 'vuetify'
import Dropdown from 'vue-js-dropdown'

Vue.config.productionTip = false
Vue.use(vueResource)
Vue.use(Vuetify)
Vue.use(Dropdown)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
