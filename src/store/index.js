import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import $ from 'jquery'

import productsModules from './products.js'
import orderModules from './order.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    cart: {
      carts: [],
      total: 0,
      final_total: 0
    },
    myFavorite: [],
    product: {},
    status: {
      loadingItem: ''
    },
    productPic: [],
    productPicI: {},
    productImageSrc: '',
    coupon: '',
    showItem: ''

  },
  actions: {

    updateLoading (context, status) {
      context.commit('LOADING', status)
    },
    getCart (context) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      context.commit('LOADING', true)
      axios.get(api).then((response) => {
        context.commit('CART', response.data.data)
        context.commit('LOADING', false)
      })
    },
    addToMyFavorite (context, item) {
      context.commit('ADDFAVORITE', item)
    },
    removeFromMyFavorite (context, item) {
      context.commit('REMOVEFAVORITE', item)
    },
    getProduct (context, id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`
      context.commit('LOADINGITEM', id)
      axios.get(api).then((response) => {
        context.commit('PRODUCT', response.data.product)
        context.commit('PRODUCTIMAGESRC', response.data.product.imageUrl)
        for (let i = 0; i < this.state.productPic.length; i++) {
          if (this.state.productPic[i].id === this.state.product.id) {
            context.commit('PRODUCTPICI', this.state.productPic[i])
          }
        }
        context.commit('LOADINGITEM', '')
        $('#moreModal').modal('show')
      })
    },
    addToCart (context, { id, qty }) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      const filtered = this.state.cart.carts.filter(
        (item) => item.product_id === id
      )
      if (filtered.length > 0) {
        filtered.forEach((element) => {
          context.dispatch('removeCartItem', element.id)
          const totalQty = element.qty + qty >= 4 ? 4 : (element.qty += qty)
          if (totalQty === 0) {
            context.dispatch('removeCartItem', element.id)
          } else {
            const CartContent = {
              product_id: id,
              qty: totalQty
            }
            context.commit('LOADINGITEM', id)
            axios.post(api, { data: CartContent }).then((response) => {
              if (response.data.success) {
                context.commit('LOADINGITEM', '')
                $('#addToCartModal').modal('show')
                setTimeout(() => {
                  $('#addToCartModal').modal('hide')
                }, 1000)
                $('#moreModal').modal('hide')
                context.dispatch('getCart')
              }
            })
          }
        })
      } else {
        const CartContent = {
          product_id: id,
          qty
        }
        context.commit('LOADINGITEM', id)
        axios.post(api, { data: CartContent }).then((response) => {
          if (response.data.success) {
            context.commit('LOADINGITEM', '')
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
    getProductPic (context) {
      axios.get('showProductPic.json').then((response) => {
        context.commit('PRODUCTPIC', response.data)
      })
    },
    changeProductImageSrc (context, pn) {
      if (pn === 'ori') {
        context.commit('PRODUCTIMAGESRC', this.state.product.imageUrl)
      } else {
        context.commit('PRODUCTIMAGESRC', this.state.productPicI[pn])
      }
    },
    removeCartItem (context, id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`
      context.commit('LOADING', true)
      axios.delete(api).then((response) => {
        if (response.data.success) {
          context.dispatch('getCart')
          context.commit('LOADING', false)
        }
      })
    },
    useCoupon (context, coupon) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`
      const couponContent = {
        code: coupon
      }
      axios.post(api, { data: couponContent }).then((response) => {
        if (response.data.success) {
          context.dispatch('getCart')
        }
      })
    },
    changeShowItem (context, item) {
      context.commit('SHOWITEM', item)
    }
  },
  mutations: {
    LOADING (state, status) {
      state.isLoading = status
    },
    CART (state, payload) {
      state.cart = payload
    },
    ADDFAVORITE (state, payload) {
      state.myFavorite.push(payload)
    },
    REMOVEFAVORITE (state, payload) {
      for (let i = 0; i < state.myFavorite.length; i++) {
        if (state.myFavorite[i] === payload) {
          state.myFavorite.splice(i, 1)
        }
      }
    },
    LOADINGITEM (state, id) {
      state.status.loadingItem = id
    },
    PRODUCT (state, payload) {
      state.product = payload
      state.product.num = 1
    },
    PRODUCTPIC (state, payload) {
      state.productPic = payload
    },
    PRODUCTPICI (state, payload) {
      state.productPicI = payload
    },
    PRODUCTIMAGESRC (state, payload) {
      state.productImageSrc = payload
    },
    updateCoupon (state, coupon) {
      state.coupon = coupon
    },
    SHOWITEM (state, item) {
      state.showItem = item
    }
  },
  getters: {
    isLoading: (state) => state.isLoading,
    cart: (state) => state.cart,
    myFavorite: (state) => state.myFavorite,
    loadingItem: (state) => state.status.loadingItem,
    product: (state) => state.product,
    productPic: (state) => state.productPic,
    productPicI: (state) => state.productPicI,
    productImageSrc: (state) => state.productImageSrc,
    coupon: (state) => state.coupon,
    showItem: (state) => state.showItem,
    form: (state) => state.form
  },
  modules: {
    productsModules,
    orderModules
  }
})
