import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import routes from './routes'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './assets/scss/styles.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

library.add(faBars)

Vue.use(VueRouter)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue)
Vue.use(VueResource)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
