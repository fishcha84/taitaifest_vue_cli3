<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <div class="tar vendor">
            <router-link tag="rl" to="/shopping/admin/products"><p>VENDOR OWNERS?>>>THIS WAY PLEASE</p></router-link>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="tar favorite">
            <router-link tag="rl" to="/shopping/customer_favorite"
              ><p><i class="fas fa-heart"></i>({{ myFavorite.length }})</p></router-link
            >
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="tar check">
            <router-link tag="rl" to="/shopping/customer_cart"
              ><p>
                CART<span class="badge badge-primary badge-pill">{{ cart.carts.length }}</span
                >CHECK!
              </p></router-link
            >
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="jcc" :v-model="selectedCategory">
            <button
              v-for="(category, key) in categories"
              :key="key"
              @click="changeSelectedCategory(category)"
              class="btn btn-outline-primary categorybtn"
              :class="{ active: selectedCategory === category }"
            >
              {{ category }}
            </button>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4" v-for="(item, key) in filteredProducts" :key="key">
          <div class="card productcard" v-if="item.is_enabled === 1">
            <img :src="item.imageUrl" class="card-img-top productimg" alt="..." @click="getProduct(item.id)" />
            <div class="card-body">
              <div class="jcsb">
                <button class="badge badge-primary badge-pill" @click="getProduct(item.id)">{{ item.category }}</button>
                <i
                  class="fas fa-heart"
                  style="color: pink"
                  v-if="myFavorite.includes(item)"
                  @click="removeFromMyFavorite(item)"
                ></i>
                <i class="far fa-heart" style="color: pink" v-else @click="addToMyFavorite(item)"></i>
              </div>
              <div class="producttitleandprice">
                <h3 class="card-title producttitle" @click="getProduct(item.id)">{{ item.title }}</h3>
                <h6 class="productprice" @click="getProduct(item.id)">ntd {{ item.price | currency }}</h6>
              </div>
              <p class="card-text productdescription" @click="getProduct(item.id)">{{ item.description }}</p>

              <div class="jcsb">
                <button class="btn btn-outline-secondary jcsbbtn" @click="getProduct(item.id)">
                  <i class="fas fa-cog fa-spin" v-if="loadingItem === item.id"></i>more
                </button>
                <button class="btn btn-outline-primary jcsbbtn" @click="addtoCart(item.id, 1)">
                  <i class="fas fa-cog fa-spin" v-if="loadingItem === item.id"></i>add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="tac check">
            <router-link tag="rl" to="/shopping/customer_cart"
              ><p>
                CART<span class="badge badge-primary badge-pill">{{ cart.carts.length }}</span
                >CHECK!
              </p></router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col"></div>
      </div>
    </div>

    <div id="moreModal" class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ product.title }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">
            <div>
              <img :src="product.imageUrl" alt="" class="productimg" />
            </div>

            <p class="m-2">{{ product.description }}</p>
            <select name="" id="" v-model="product.num" style="width: 100%">
              <option :value="num" v-for="num in 4" :key="num">{{ num }}</option>
            </select>
          </div>

          <div class="modal-footer">
            <p>subtotal:{{ (product.price * product.num) | currency }}</p>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">cancel</button>
            <button type="button" class="btn btn-primary" @click="addtoCart(product.id, product.num)">
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>

    <div id="addtocartModal" class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div class="modal-image">
              <svg viewBox="0 0 32 32" style="fill: #48db71">
                <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
              </svg>
            </div>
            <h3 style="text-align: center">Success!</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import $ from 'jquery'

export default {
  name: 'CustomerOrders',
  data() {
    return {
      categories: ['all', 'ticket', 'goods', 'upgrade', '?'],
      selectedCategory: 'all',
    }
  },
  methods: {
    ...mapActions('productsModules', ['getProducts']),
    ...mapActions(['updateLoading', 'getProduct', 'addtoCart', 'getCart', 'removeFromMyFavorite', 'addToMyFavorite']),
    getProduct(id) {
      this.$store.dispatch('getProduct', id)
    },

    addtoCart(id, qty) {
      this.$store.dispatch('addtoCart', { id, qty })
    },
    getCart() {
      this.$store.dispatch('getCart')
    },
    changeSelectedCategory(category) {
      this.selectedCategory = category
    },
    addToMyFavorite(item) {
      this.$store.dispatch('addToMyFavorite', item)
    },
    removeFromMyFavorite(item) {
      this.$store.dispatch('removeFromMyFavorite', item)
    },
  },
  computed: {
    ...mapGetters('productsModules', ['products']),
    ...mapGetters(['isLoading', 'loadingItem', 'product', 'cart', 'myFavorite']),
    filteredProducts: function () {
      const vm = this
      if (vm.selectedCategory === 'all') {
        return vm.products
      } else {
        return vm.products.filter((product) => {
          return product.category === vm.selectedCategory
        })
      }
    },
  },
  mounted() {
    $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').trigger('focus')
    })
  },
  created() {
    this.getProducts()
    this.getCart()
  },
}
</script>

<style scoped>
.categorybtn {
  border-radius: 20px;
  margin: 10px;
  width: 100px;
}

.modal-image {
  width: 50px;
  height: 5-px;
  margin: 0 auto;
  border-radius: 50%;
  box-shadow: 0 0 0 2px #48db71;
  padding: 11px 10px 2px;
  margin-bottom: 2em;
}
</style>
