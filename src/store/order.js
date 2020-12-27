import axios from 'axios'

export default {
  namespaced: true,
  state: {
    order: {
      user: {},
    },
  },
  actions: {
    getOrder(context, order_id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${order_id}`
      axios.get(api).then((response) => {
        if (response.data.success) {
          context.commit('ORDER', response.data.order)
        }
      })
    },
    payOrder(context, order_id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${order_id}`
      axios.post(api).then((response) => {
        if (response.data.success) {
          context.commit('PAID')
        }
      })
    },
  },
  mutations: {
    ORDER(state, payload) {
      state.order = payload
    },
    PAID(state) {
      state.order.is_paid = true
    },
  },
  getters: {
    order: (state) => state.order,
  },
}
