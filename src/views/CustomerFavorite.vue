<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <table class="favoritetable">
            <thead>
              <tr>
                <th>product name</th>
                <th>price for each</th>
                <th>del</th>
                <th>add to cart</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, key) in myFavorite" :key="key">
                <td>{{ item.title }}</td>
                <td>{{ item.price }}</td>
                <td><i class="fas fa-trash-alt" @click="removeFromMyFavorite(item)"></i></td>
                <td><i class="fas fa-shopping-cart" @click="addToCart(item.id, 1)"></i></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div id="favoriteModal" class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <p>your favorite is empty</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {}
  },
  methods: {
    ...mapActions(['addToCart', 'removeFromMyFavorite']),

    removeFromMyFavorite(item) {
      this.$store.dispatch('removeFromMyFavorite', item)
      this.checkFavorite()
    },

    addToCart(id, qty) {
      this.$store.dispatch('addToCart', { id, qty })
      this.$router.push({ path: '/shopping/customer_orders' })
    },
    checkFavorite() {
      if (this.$store.state.myFavorite.length === 0) {
        $('#favoriteModal').modal('show')
        setTimeout(() => {
          $('#favoriteModal').modal('hide')
        }, 1000)
        setTimeout(() => {
          this.$router.push({ path: '/shopping/customer_orders' })
        }, 1500)
      }
    },
  },
  computed: {
    ...mapGetters(['cart', 'myFavorite']),
  },
  beforeCreate() {
    $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').trigger('focus')
    })
  },
  mounted() {
    this.checkFavorite()
  },
}
</script>

<style scoped>
tr td i {
  cursor: pointer;
}
</style>
