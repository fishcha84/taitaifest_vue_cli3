

<template>
  <div>

  <!-- <div class="customer_orders"> -->
    <loading :active.sync="isLoading"></loading>

    <div class="tar vendor">
      <router-link tag="rl" to="/shopping/admin/products"><p>VENDOR OWNERS?>>>THIS WAY PLEASE</p></router-link>
    </div>
    <div class="tar favorite">
      <router-link tag="rl" to="/shopping/customer_favorite"><p><i class="fas fa-heart" ></i>({{ myFavorite.length }})</p></router-link>
    </div>
    <div class="tar check">
      <router-link tag="rl" to="/shopping/customer_cart"><p>CART<span class="badge badge-primary badge-pill">{{ cart.carts.length }}</span>CHECK!</p></router-link>
    </div>

    <div class="jcc" :v-model="selectedCategory">
      <button  v-for="(category,key) in categories" :key="key"  @click="changeSelectedCategory(category)" class="btn btn-outline-primary categorybtn" :class="{'active':selectedCategory===category}">{{ category }}</button>
    </div>
    
    <div class="row" >
      <div class="col-sm-12 col-md-6 col-lg-4" v-for="item in filteredProducts" :key="item.id" >
        <div class="card productcard" v-if="item.is_enabled===1">
          <img :src="item.imageUrl" class="card-img-top productimg" alt="..." >
          <div class="card-body ">
            <div class="jcsb">
              <button class="badge badge-primary badge-pill">{{ item.category }}</button>
              <!-- <span style="color:pink"> -->
                <i class="fas fa-heart" style="color:pink;" v-if="myFavorite.includes(item)" @click="removeFromMyFavorite(item)"></i>
              <!-- </span> -->
              <!-- <span > -->
                <i class="far fa-heart" style="color:pink;" v-else @click="addToMyFavorite(item)"></i>
              <!-- </span> -->
              </div>
            <div class="producttitleandprice">
              <h3 class="card-title producttitle">{{ item.title }}</h3>
              <h6 class="productprice">ntd {{ item.price }}</h6>
            </div>
              <p class="card-text productdescription">{{ item.description }}</p>
            
            <div class="jcsb">
              <button class="btn btn-outline-secondary  jcsbbtn" @click="getProduct(item.id)"><i class="fas fa-cog fa-spin" v-if="loadingItem===item.id"></i>more</button>
              <button class="btn btn-outline-primary  jcsbbtn" @click="addtoCart(item.id,1)"><i class="fas fa-cog fa-spin" v-if="loadingItem===item.id"></i>add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tac check">
      <router-link tag="rl" to="/shopping/customer_cart"><p>CART<span class="badge badge-primary badge-pill">{{ cart.carts.length }}</span>CHECK!</p></router-link>
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
            <img :src="product.imageUrl" alt="" class="img-fluid">
            <p>{{product.description}}</p>
            <select name="" id="" v-model="product.num">
              <option :value="num" v-for="num in 4" :key="num" >{{ num }}</option>
            </select>
          </div>

          <div class="modal-footer">
            <p>subtotal:{{ product.price * product.num }}</p>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">cancel</button>
            <button type="button" class="btn btn-primary" @click="addtoCart(product.id,product.num)">add to cart</button>
          </div>
        </div>
      </div>
    </div>

    <div id="addtocartModal" class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <p>Success!</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>



<script>

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

import {mapGetters, mapActions} from 'vuex';
import $ from 'jquery';

export default {
  // name:'CustomerOrders',
  data(){
    return{
      categories:['all','ticket','goods','upgrade'],
      selectedCategory:'all',
      
    }
  },
  methods:{
    ...mapActions('productsModules',['getProducts']),
    ...mapActions(['updateLoading','getProduct','addtoCart','getCart','removeFromMyFavorite','addToMyFavorite']),

    getProduct(id){
      this.$store.dispatch('getProduct',id);
    },
    addtoCart(id,qty){
      this.$store.dispatch('addtoCart',{id,qty});
    },
    getCart(){
      this.$store.dispatch('getCart');
    },
    changeSelectedCategory(category){
      this.selectedCategory=category;
    },
    addToMyFavorite(item){
      this.$store.dispatch('addToMyFavorite',item);
    },
    removeFromMyFavorite(item){
      this.$store.dispatch('removeFromMyFavorite',item);
    },
  },
  computed:{
    ...mapGetters('productsModules',['products']),
    ...mapGetters(['isLoading','loadingItem','product','cart','myFavorite']),
    filteredProducts(){
      const vm=this;
      const selectedCategory=vm.selectedCategory;
      if(vm.selectedCategory==='all'){
        return vm.products;
      }else{
        return vm.products.filter((product)=>{
          product.category===selectedCategory;
        })
      }
    },
    
  },
  created(){
    this.getProducts();
    this.getCart();
  }
}

</script>

<style scoped>
.categorybtn{
  border-radius:20px;
  margin: 10px;
  width: 100px;
}

</style>
