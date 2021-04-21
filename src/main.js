// fit ref
import '@babel/polyfill'
import 'mutationobserver-shim'

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

import 'bootstrap'

import App from './App.vue'
import router from './router/index.js'
// import './bus'
import store from './store/index.js'

import currencyFilter from './filters/currency.js'
import dateFilter from './filters/date.js'

import * as VeeValidate from 'vee-validate'
import { ValidationObserver, ValidationProvider, extend, localize, configure } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'

import VueI18n from 'vue-i18n'

import tw from 'vee-validate/dist/locale/zh_TW.json'
import en from 'vee-validate/dist/locale/en.json'

import AxiosPlugin from 'vue-axios-cors'

import htmlToPdf from '@/components/htmlToPdf'

import VueScrollTo from 'vue-scrollto'
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.prototype.$axios = axios
axios.defaults.withCredentials = true
Vue.component('Loading', Loading)
Vue.filter('currency', currencyFilter)
Vue.filter('date', dateFilter)
Vue.use(VueI18n)

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule])
})

localize({
  en,
  tw
})

const i18n = new VueI18n({
  locale: 'tw'
})

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})

Vue.use(VeeValidate, {
  events: 'input|blur',
  i18n,
  dictionary: {
    tw
  }
})
Vue.use(AxiosPlugin)
Vue.use(htmlToPdf)
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: -80,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

new Vue({
  i18n,
  el: '#app',
  components: { App },
  template: '<App/>',
  store,
  router,
  render: (h) => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`
    axios.post(api).then((response) => {
      if (response.data.success) {
        next()
      } else {
        next({
          path: '/shopping/signin'
        })
      }
    })
  } else {
    next()
  }
})
