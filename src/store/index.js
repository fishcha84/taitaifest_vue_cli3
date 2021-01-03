import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import $ from 'jquery'

import productsModules from './products.js'
import orderModules from './order.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showItem: '',
    isLoading: false,
    status: {
      loadingItem: '',
    },
    product: {},
    productImageSrc: '',
    productPic: [],
    productPicI: {},
    cart: {
      carts: [],
      total: 0,
      final_total: 0,
    },
    coupon: '',
    myFavorite: [],
  },
  actions: {
    changeShowItem(context, item) {
      context.commit('SHOWITEM', item)
    },
    updateLoading(context, status) {
      context.commit('LOADING', status, { root: true })
    },
    getProduct(context, id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`
      context.commit('LOADINGITEM', id, { root: true })
      axios.get(api).then((response) => {
        context.commit('PRODUCT', response.data.product)
        context.commit('PRODUCTIMAGESRC', response.data.product.imageUrl)
        for (let i = 0; i < this.state.productPic.length; i++) {
          if (this.state.productPic[i].id === this.state.product.id) {
            context.commit('PRODUCTPICI', this.state.productPic[i])
          }
        }
        context.commit('LOADINGITEM', '', { root: true })
        $('#moreModal').modal('show')
      })
    },
    getProductPic(context) {
      axios.get('showProductPic.json').then((response) => {
        context.commit('PRODUCTPIC', response.data)
      })
    },

    changeProductImageSrc(context, pn) {
      if (pn === 'ori') {
        context.commit('PRODUCTIMAGESRC', this.state.product.imageUrl)
      } else {
        context.commit('PRODUCTIMAGESRC', this.state.productPicI[pn])
      }
    },

    addToCart(context, { id, qty }) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      let filtered = this.state.cart.carts.filter((item) => item.product_id === id)
      if (filtered.length > 0) {
        filtered.forEach((element) => {
          context.dispatch('removeCartItem', element.id)
          let totalQty = element.qty + qty >= 4 ? 4 : (element.qty += qty)
          let CartContent = {
            product_id: id,
            qty: totalQty,
          }
          context.commit('LOADINGITEM', id, { root: true })
          axios.post(api, { data: CartContent }).then((response) => {
            if (response.data.success) {
              context.commit('LOADINGITEM', '', { root: true })
              $('#addToCartModal').modal('show')
              setTimeout(() => {
                $('#addToCartModal').modal('hide')
              }, 1000)
              $('#moreModal').modal('hide')
              context.dispatch('getCart')
            }
          })
        })
      } else {
        let CartContent = {
          product_id: id,
          qty,
        }
        context.commit('LOADINGITEM', id, { root: true })
        axios.post(api, { data: CartContent }).then((response) => {
          if (response.data.success) {
            context.commit('LOADINGITEM', '', { root: true })
            $('#addToCartModal').modal('show')
            setTimeout(() => {
              $('#addToCartModal').modal('hide')
            }, 1000)
            $('#moreModal').modal('hide')
            context.dispatch('getCart')
          }
        })
      }
    },

    getCart(context) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      context.commit('LOADING', true, { root: true })
      axios.get(api).then((response) => {
        context.commit('CART', response.data.data, { root: true })
        context.commit('LOADING', false, { root: true })
      })
    },

    removeCartItem(context, id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`
      context.commit('LOADING', true, { root: true })
      axios.delete(api).then((response) => {
        if (response.data.success) {
          context.dispatch('getCart')
          context.commit('LOADING', false, { root: true })
        }
      })
    },

    useCoupon(context, coupon) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`
      const couponContent = {
        code: coupon,
      }
      axios.post(api, { data: couponContent }).then((response) => {
        if (response.data.success) {
          context.dispatch('getCart')
        }
      })
    },
    addToMyFavorite(context, item) {
      context.commit('ADDFAVORITE', item, { root: true })
    },

    removeFromMyFavorite(context, item) {
      context.commit('REMOVEFAVORITE', item, { root: true })
    },
  },
  mutations: {
    PRODUCTPICI(state, payload) {
      state.productPicI = payload
    },
    PRODUCTPIC(state, payload) {
      state.productPic = payload
    },
    PRODUCTIMAGESRC(state, payload) {
      state.productImageSrc = payload
    },
    SHOWITEM(state, item) {
      state.showItem = item
    },
    ADDFAVORITE(state, payload) {
      state.myFavorite.push(payload)
    },
    REMOVEFAVORITE(state, payload) {
      for (let i = 0; i < state.myFavorite.length; i++) {
        if (state.myFavorite[i] === payload) {
          state.myFavorite.splice(i, 1)
        }
      }
    },
    LOADING(state, status) {
      state.isLoading = status
    },
    LOADINGITEM(state, id) {
      state.status.loadingItem = id
    },
    PRODUCT(state, payload) {
      state.product = payload
      state.product.num = 1
    },
    CART(state, payload) {
      state.cart = payload
    },
    updateCoupon(state, coupon) {
      state.coupon = coupon
    },
  },

  getters: {
    isLoading: (state) => state.isLoading,
    loadingItem: (state) => state.status.loadingItem,
    product: (state) => state.product,
    productImageSrc: (state) => state.productImageSrc,
    cart: (state) => state.cart,
    coupon: (state) => state.coupon,
    myFavorite: (state) => state.myFavorite,
    showItem: (state) => state.showItem,
    productPic: (state) => state.productPic,
    productPicI: (state) => state.productPicI,
  },
  modules: {
    productsModules,
    orderModules,
  },
})
