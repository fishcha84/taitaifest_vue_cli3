<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <table style="width: 100%; padding: 10px">
      <thead>
        <tr>
          <th>created at</th>
          <th>order id</th>
          <th>product list</th>
          <th>total ntd</th>
          <th>payment status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(order, key) in orders" :key="key">
          <td>{{ order.create_at | date }}</td>
          <td>{{ order.id }}</td>
          <td style="width: 200px">
            <p v-for="(product, i) in order.products" :key="i">{{ product.product.title }}*{{ product.qty }}</p>
          </td>
          <td>{{ order.total }}</td>
          <td>{{ order.is_paid }}</td>
        </tr>
      </tbody>
    </table>
    <div class="m-2">
      <Pagination :pagination="pagination" @change="getOrders" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      orders: [],
      pagination: {},
    }
  },

  methods: {
    ...mapActions(['updateLoading']),
    getOrders(page = 1) {
      this.$store.dispatch('updateLoading', true)
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${page}`
      vm.$http.get(api).then((response) => {
        if (response.data.success) {
          vm.orders = response.data.orders
          vm.pagination = response.data.pagination
          vm.$store.dispatch('updateLoading', false)
        }
      })
    },
  },
  computed: {
    ...mapGetters(['isLoading']),
  },
  created() {
    this.getOrders()
  },
}
</script>
