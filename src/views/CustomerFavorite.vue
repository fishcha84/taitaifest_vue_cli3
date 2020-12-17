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
              <tr v-for="(item,key) in myFavorite" :key="key">
                <td>{{item.title}}</td>
                <td>{{item.price}}</td>
                <td><i class="fas fa-trash-alt" @click="removeFromMyFavorite(item)"></i></td>
                <td><i class="fas fa-shopping-cart" @click="addtoCart(item.id,1)"></i></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters,mapActions } from 'vuex';

export default {
  data() {
    return {

    };
  },
  methods:{

    ...mapActions(['addtoCart','removeFromMyFavorite']),

    removeFromMyFavorite(item){
        this.$store.dispatch('removeFromMyFavorite',item);
    },
    
    addtoCart(id,qty){
      this.$store.dispatch('addtoCart',{id,qty});
    //   this.$router.push('/shopping/customer_cart');
      this.$router.push({path:'/shopping/customer_orders'});
    },
    
  },
  computed:{
    ...mapGetters(['cart','myFavorite'])

  },
  created(){
  }
};
</script>

<style scoped>
tr td i {
    cursor:pointer;
}
</style>
