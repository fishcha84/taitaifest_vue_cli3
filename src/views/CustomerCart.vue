<template>
  <div class="customercart">
    <loading :active.sync="isLoading"></loading>
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <table class="carttable">
            <thead>
              <tr>
                <th class="carttr">del</th>
                <th>product name</th>
                <th>qty</th>
                <th class="carttr">price for each</th>
                <th class="carttr">subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cart.carts" :key="item.id">
                <td>
                  <button class="btn btn-sm btn-outline-danger" @click="removeCartItem(item.id)">
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </td>
                <td>{{ item.product.title }}</td>
                <td>{{ item.qty }}/{{ item.product.unit }}</td>
                <td>{{ item.product.price | currency }}</td>
                <td>{{ Math.round(item.final_total) | currency }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr v-if="cart.total !== cart.final_total" style="color: hotpink">
                <td colspan="4">coupon applied total:</td>
                <td>{{ cart.final_total | currency }}</td>
              </tr>
              <tr v-else>
                <td colspan="4">total:</td>
                <td>{{ cart.total | currency }}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <!-- coupon -->

      <div class="row m-2 jcc">
        <div class="col-6">
          <form action="" @click.prevent="useCoupon(coupon)">
            <label for="coupon">coupon:</label>
            <div class="input-group mb-3">
              <input
                type="text"
                id="coupon"
                class="form-control"
                placeholder="please enter the coupon if you have one."
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                v-model="coupon"
              />
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" id="button-addon2">apply coupon</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <!-- user form validation -->
      <div class="row m-2 jcc">
        <validation-observer class="col-6" v-slot="{ invalid, handleSubmit }">
          <form @submit.prevent="handleSubmit(createOrder)">
            <validation-provider rules="required" v-slot="{ errors, classes }">
              <div class="form-group">
                <label for="username">name:(required)</label>
                <input
                  id="username"
                  class="form-control"
                  type="text"
                  name="name"
                  :class="classes"
                  v-model="form.user.name"
                />
                <span class="invalid-feedback">{{ errors[0] }}</span>
              </div>
            </validation-provider>
            <validation-provider rules="required" v-slot="{ errors, classes }">
              <div class="form-group">
                <label for="usertel">tel:(required)</label>
                <input
                  id="usertel"
                  class="form-control"
                  type="tel"
                  name="tel"
                  :class="classes"
                  v-model="form.user.tel"
                />
                <span>{{ errors[0] }}</span>
              </div>
            </validation-provider>
            <validation-provider rules="required" v-slot="{ errors, classes }">
              <div class="form-group">
                <label for="useradd">add:(required)</label>
                <input
                  id="useradd"
                  class="form-control"
                  type="text"
                  name="add"
                  :class="classes"
                  v-model="form.user.address"
                />
                <span>{{ errors[0] }}</span>
              </div>
            </validation-provider>
            <validation-provider rules="required|email" v-slot="{ errors, classes }">
              <div class="form-group">
                <label for="useremail">email:(required)</label>
                <input
                  id="useremail"
                  class="form-control"
                  type="email"
                  name="email"
                  :class="classes"
                  v-model="form.user.email"
                />
                <span>{{ errors[0] }}</span>
              </div>
            </validation-provider>

            <div class="form-group">
              <label for="usermsg">message:</label>
              <textarea id="usermsg" class="form-control" type="text" name="message" v-model="form.message"></textarea>
            </div>

            <div style="border: none">
              <button style="width: 100%" class="btn btn-outline-danger" :disabled="invalid">confirm the order</button>
            </div>
          </form>
        </validation-observer>
      </div>
    </div>

    <div id="cartModal" class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <p>your cart is empty</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'customercart',
  data() {
    return {
      form: {
        user: {
          name: '',
          tel: '',
          add: '',
          email: '',
        },
        message: '',
      },
    }
  },
  methods: {
    ...mapActions(['getCart']),
    removeCartItem(id) {
      this.$store.dispatch('removeCartItem', id)
    },
    useCoupon(coupon) {
      this.$store.dispatch('useCoupon', coupon)
    },
    createOrder() {
      const vm = this
      const order = vm.form
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`
      vm.$http.post(api, { data: order }).then((response) => {
        if (response.data.success) {
          vm.$router.push(`/shopping/customer_checkout/${response.data.orderId}`)
        }
      })
    },
    checkCart() {
      if (this.$store.state.cart.carts.length === 0) {
        $('#cartModal').modal('show')
        setTimeout(() => {
          $('#cartModal').modal('hide')
        }, 1000)
        setTimeout(() => {
          this.$router.push({ path: '/shopping/customer_orders' })
        }, 1500)
      }
    },
  },
  computed: {
    ...mapGetters(['cart', 'coupon', 'isLoading']),
    coupon: {
      get() {
        return this.$store.state.coupon
      },
      set(value) {
        this.$store.commit('updateCoupon', value)
      },
    },
  },
  beforeCreate() {
    $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').trigger('focus')
    })
  },
  created() {
    this.getCart()
    this.checkCart()
  },
  mounted() {
    this.checkCart()
  },
  updated() {},
}
</script>

<style>
button:disabled {
  cursor: not-allowed;
}
</style>
