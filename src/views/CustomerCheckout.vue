<template>
  <div>
    <div class="container-fluid" style="border: none">
      <div class="row">
        <div class="col">
          <form action="" @click.prevent="payOrder(orderId)" class="orderform">
            <table class="container-fluid ordertable">
              <tr class="row orderrow">
                <td class="col-md-4 col-xs-12 ordertd1">order id</td>
                <td class="col-md-8 col-xs-12">
                  {{ orderId }}
                </td>
              </tr>
              <tr class="row">
                <td class="col-md-4 col-xs-12 ordertd1">products list</td>
                <td class="col-md-8 col-xs-12">
                  <p v-for="item in order.products" :key="item.id">{{ item.product.title }} * {{ item.qty }}</p>
                  <!-- <p v-for="item in order.products" :key="item.id">{{item.product_id}} * {{item.qty}}</p> -->
                  <hr />
                  <p>total:ntd {{ order.total }}</p>
                </td>
              </tr>
              <tr class="row">
                <td class="col-md-4 col-xs-12 ordertd1">customer's info</td>
                <td class="col-md-8 col-xs-12">
                  <p>name: {{ order.user.name }}</p>
                  <p>tel: {{ order.user.tel }}</p>
                  <p>add: {{ order.user.address }}</p>
                  <p>email: {{ order.user.email }}</p>
                  <p>message: {{ order.message }}</p>
                </td>
              </tr>
              <tr class="row">
                <td class="col-md-4 col-xs-12 ordertd1 align-middle">payment status</td>
                <td class="col-md-8 col-xs-12">
                  <p v-if="!order.is_paid">unpaid</p>
                  <p v-else style="color: hotpink">paid</p>
                </td>
              </tr>
            </table>
            <button
              v-if="!order.is_paid"
              class="btn btn-outline-danger d-block"
              style="width: 100%; margin-top: 10px; margin-bottom: 10px"
            >
              pay it!
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery'

import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      orderId: '',
    }
  },
  methods: {
    ...mapActions('orderModules', ['getOrder', 'payOrder']),

    getOrder(orderId) {
      this.$store.dispatch('orderModules/getOrder', orderId)
    },
    payOrder(orderId) {
      this.$store.dispatch('orderModules/payOrder', orderId)
    },
  },
  computed: {
    ...mapGetters('orderModules', ['order']),
  },
  created() {
    this.orderId = this.$route.params.orderId
    this.getOrder(this.orderId)
  },
}
</script>
