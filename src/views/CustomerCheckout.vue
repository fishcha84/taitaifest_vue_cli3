<template>
  <div>
    <div class="container-fluid" style="border: none">
      <div class="row">
        <div class="col">
          <Breadcrumb />
        </div>
      </div>
      <div class="row jcc">
        <div class="col-sm-12 col-md-6">
          <form action="" @click.prevent="payOrder(orderId)" class="orderform">
            <table class="container-fluid ordertable">
              <tr class="row orderrow">
                <td class="col-md-4 col-xs-12 ordertd1">order id</td>
                <td class="col-md-8 col-xs-12">
                  {{ orderId }}
                </td>
              </tr>
              <tr class="row">
                <td class="col-md-4 col-xs-12 ordertd1 jcc aic">products list</td>
                <td class="col-md-8 col-xs-12">
                  <p v-for="item in order.products" :key="item.id">{{ item.product.title }} * {{ item.qty }}</p>
                  <hr />
                  <p>total: {{ order.total | currency }} ntd</p>
                </td>
              </tr>
              <tr class="row">
                <td class="col-md-4 col-xs-12 ordertd1 jcc aic">customer's info</td>
                <td class="col-md-8 col-xs-12">
                  <p>name: {{ order.user.name }}</p>
                  <p>tel: {{ order.user.tel }}</p>
                  <p>add: {{ order.user.address }}</p>
                  <p>email: {{ order.user.email }}</p>
                  <p>message: {{ order.message }}</p>
                </td>
              </tr>
              <tr class="row">
                <td class="col-md-4 col-xs-12 ordertd1 align-middle jcc aic">payment status</td>
                <td class="col-md-8 col-xs-12">
                  <div class="jcc aic">
                    <p v-if="!order.is_paid">unpaid</p>
                    <p v-else style="color: hotpink">paid</p>
                  </div>
                </td>
              </tr>
            </table>
            <div>
              <button v-if="!order.is_paid" class="btn btn-outline-danger w-100 mt-2 mb-2">pay it!</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div id="checkModal" class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <p>payment success！ keep shopping</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import Breadcrumb from '@/components/Breadcrumb.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      orderId: '',
    }
  },
  components: {
    Breadcrumb,
  },
  methods: {
    ...mapActions('orderModules', ['getOrder', 'payOrder']),

    getOrder(orderId) {
      this.$store.dispatch('orderModules/getOrder', orderId)
    },
    payOrder(orderId) {
      this.$store.dispatch('orderModules/payOrder', orderId)
      $('#checkModal').modal('show')
      setTimeout(() => {
        $('#checkModal').modal('hide')
        this.$router.push({ path: '/shopping/customer_orders' })
      }, 3000)
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
