<template>
  <div>
    <!-- <loading :active.sync="isLoading"></loading> -->
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <div>
            <Breadcrumb />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="tar vendor">
            <router-link tag="rl" to="/shopping/signin"
              ><p>VENDOR OWNERS?>>>THIS WAY PLEASE</p></router-link
            >
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="tar favorite">
            <router-link tag="rl" to="/shopping/customer_favorite"
              ><p>
                <i class="fas fa-heart"></i>({{ myFavorite.length }})
              </p></router-link
            >
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="tar check">
            <router-link tag="rl" to="/shopping/customer_cart"
              ><p>
                CART<span class="badge badge-primary badge-pill">{{
                  cart.carts.length
                }}</span
                >CHECK!
              </p></router-link
            >
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="categorybtns" :v-model="selectedCategory">
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
        <div
          class="col-sm-12 col-md-6 col-lg-4"
          v-for="(item, key) in filteredProducts"
          :key="key"
        >
          <div class="card productcard" v-if="item.is_enabled === 1">
            <img
              :src="item.imageUrl"
              class="card-img-top productimg"
              alt="..."
              @click="getProduct(item.id)"
            />
            <div class="card-body">
              <div class="jcsb productbadgeandfavorite">
                <button
                  class="badge badge-primary badge-pill"
                  @click="getProduct(item.id)"
                >
                  {{ item.category }}
                </button>
                <i
                  class="fas fa-heart"
                  style="color: pink"
                  v-if="myFavorite.includes(item)"
                  @click="removeFromMyFavorite(item)"
                ></i>
                <i
                  class="far fa-heart"
                  style="color: pink"
                  v-else
                  @click="addToMyFavorite(item)"
                ></i>
              </div>

              <div class="jcsb aic producttitleandprice">
                <h3 class="producttitle" @click="getProduct(item.id)">
                  {{ item.title }}
                </h3>
                <h6 class="productprice" @click="getProduct(item.id)">
                  ntd {{ item.price | currency }}
                </h6>
              </div>

              <div class="jcsb aic productdescription">
                <p class="card-text ellipsis" @click="getProduct(item.id)">
                  {{ item.description }}
                </p>
              </div>

              <div class="jcsb aic productbtns">
                <button
                  class="btn btn-outline-secondary productbtn"
                  @click="getProduct(item.id)"
                >
                  <i
                    class="fas fa-cog fa-spin"
                    v-if="loadingItem === item.id"
                  ></i
                  >more
                </button>
                <button
                  class="btn btn-outline-primary productbtn"
                  @click="addToCart(item.id, 1)"
                >
                  <i
                    class="fas fa-cog fa-spin"
                    v-if="loadingItem === item.id"
                  ></i
                  >add to cart
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
                CART<span class="badge badge-primary badge-pill">{{
                  cart.carts.length
                }}</span
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
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">
            <div>
              <img :src="productImageSrc" alt="" class="productimg" />
              <div class="jcc">
                <img
                  :src="product.imageUrl"
                  alt=""
                  @click="changeProductImageSrc('ori')"
                  style="width: 50px; height: 50px"
                  class="m-2"
                />

                <img
                  :src="productPicI['p1']"
                  alt=""
                  @click="changeProductImageSrc('p1')"
                  style="width: 50px; height: 50px"
                  class="m-2"
                />
                <img
                  :src="productPicI['p2']"
                  alt=""
                  @click="changeProductImageSrc('p2')"
                  style="width: 50px; height: 50px"
                  class="m-2"
                />
                <img
                  :src="productPicI['p3']"
                  alt=""
                  @click="changeProductImageSrc('p3')"
                  style="width: 50px; height: 50px"
                  class="m-2"
                />
              </div>
            </div>

            <p class="m-2">{{ product.description }}</p>
            <select name="" id="" v-model="product.num" style="width: 100%">
              <option :value="num" v-for="num in 4" :key="num">
                {{ num }}
              </option>
            </select>
          </div>

          <div class="modal-footer">
            <p>subtotal:{{ (product.price * product.num) | currency }}</p>
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              cancel
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="addToCart(product.id, product.num)"
              style="overflow: hidden"
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>

    <div id="addToCartModal" class="modal" tabindex="-1" role="dialog">
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
import Breadcrumb from "../components/Breadcrumb.vue";
import { mapGetters, mapActions } from "vuex";
import $ from "jquery";

export default {
  name: "CustomerOrders",
  data() {
    return {
      categories: ["all", "ticket", "goods", "upgrade", "?"],
      selectedCategory: "all",
    };
  },
  components: {
    Breadcrumb,
  },
  methods: {
    ...mapActions("productsModules", ["getProducts"]),
    ...mapActions([
      "updateLoading",
      "getCart",
      "addToMyFavorite",
      "removeFromMyFavorite",
      "getProduct",
      "addToCart",
      "getProductPic",
      "changeProductImageSrc",
    ]),

    addToCart(id, qty) {
      this.$store.dispatch("addToCart", { id, qty });
    },

    changeSelectedCategory(category) {
      this.selectedCategory = category;
    },
  },
  computed: {
    ...mapGetters("productsModules", ["products"]),
    ...mapGetters([
      "isLoading",
      "loadingItem",
      "product",
      "cart",
      "myFavorite",
      "productImageSrc",
      "productPic",
      "productPicI",
    ]),
    filteredProducts: function () {
      const vm = this;
      if (vm.selectedCategory === "all") {
        return vm.products;
      } else {
        return vm.products.filter((product) => {
          return product.category === vm.selectedCategory;
        });
      }
    },
  },
  created() {
    this.getProducts();
    this.getCart();
    this.getProductPic();
  },
  mounted() {
    $("#myModal").on("shown.bs.modal", function () {
      $("#myInput").trigger("focus");
    });
  },
};
</script>

<style scoped>
.vendor,
.check,
.favorite {
  color: midnightblue;
}

.vendor:hover,
.vendor:active,
.check:hover,
.check:active,
.favorite:hover,
.favorite.active {
  text-decoration: none;
  cursor: pointer;
  color: hotpink;
}

.categorybtns {
  display: table;
  margin: 0 auto;
}

.categorybtn {
  border-radius: 20px;
  margin: 10px;
  min-width: 100px;
}

.productcard {
  height: 480px;
}

.productcard:hover {
  cursor: pointer;
}

.productimg {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.producttitleandprice,
.productbtns {
  height: 80px;
}

.productdescription {
  height: 60px;
}

.producttitle {
  color: pink;
}

.productprice {
  color: hotpink;
}

.productbtn {
  width: 45%;
  max-height: 50px;
  overflow: hidden;
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
