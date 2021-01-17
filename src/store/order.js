import axios from 'axios'

export default {
  namespaced: true,
  state: {
    order: {
      user: {}
    }
  },
  actions: {
    getOrder (context, orderId) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${orderId}`
      axios.get(api).then((response) => {
        if (response.data.success) {
          context.commit('ORDER', response.data.order)
        }
      })
    },
    payOrder (context, orderId) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${orderId}`
      axios.post(api).then((response) => {
        if (response.data.success) {
          context.commit('PAID', true)
        }
      })
    }
  },
  mutations: {
    ORDER (state, payload) {
      state.order = payload
    },
    PAID (state, payload) {
      state.order.is_paid = payload
    }
  },
  getters: {
    order: (state) => state.order
  }
}
