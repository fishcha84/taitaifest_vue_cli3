import '@babel/polyfill'
import 'mutationobserver-shim'

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.prototype.$axios = axios
axios.defaults.withCredentials = true

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
Vue.component('Loading', Loading)

import 'bootstrap'

import App from './App.vue'
import router from './router/index.js'
import './bus'
import store from './store/index.js'

import currencyFilter from './filters/currency.js'
import dateFilter from './filters/date.js'

Vue.filter('currency', currencyFilter)
Vue.filter('date', dateFilter)

import * as VeeValidate from 'vee-validate'
import { ValidationObserver, ValidationProvider, extend, localize, configure } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'

import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule])
})

import tw from 'vee-validate/dist/locale/zh_TW.json'
import en from 'vee-validate/dist/locale/en.json'

localize({
  en,
  tw,
})

const i18n = new VueI18n({
  locale: 'tw',
})

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  },
})

Vue.use(VeeValidate, {
  events: 'input|blur',
  i18n,
  dictionary: {
    tw,
  },
})

import AxiosPlugin from 'vue-axios-cors'
Vue.use(AxiosPlugin)

import VueHtml2Canvas from 'vue-html2canvas'
Vue.use(VueHtml2Canvas)

import html2canvas from 'html2canvas'
Vue.use(html2canvas)

new Vue({
  i18n,
  el: '#app',
  components: { App },
  template: '<App/>',
  store,
  router,
  render: (h) => h(App),
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`
    axios.post(api).then((response) => {
      if (response.data.success) {
        next()
      } else {
        next({
          path: '/shopping/signin',
        })
      }
    })
  } else {
    next()
  }
})
