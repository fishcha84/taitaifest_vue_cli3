<template>
    <div class="customercart">
        <loading :active.sync="isLoading"></loading>
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <table class="carttable">
                        <thead>
                            <tr >
                                <th class="carttr">del</th>
                                <th>product name</th>
                                <th>qty</th>
                                <th class="carttr">price for each</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in cart.carts" :key="item.id">
                                <td><button class="btn btn-sm btn-outline-danger" @click="removeCartItem(item.id)" ><i class="fas fa-trash-alt"></i></button></td>
                                <td>{{ item.product.title }}</td>
                                <td>{{ item.qty }}{{ item.product.unit }}</td>
                                <td>{{ item.product.price }}</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr v-if="cart.total!==cart.final_total" style="color:hotpink">
                                <td colspan="3" >coupon applied total:</td>
                                <td>{{ cart.final_total }}</td>
                            </tr>
                            <tr v-else>
                                <td colspan="3">total:</td>
                                <td>{{ cart.total }}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
    
    <!-- coupon -->
            <div class="row m-2">
                <div class="col">
                    <form action="" @click.prevent="useCoupon(coupon)">
                        <label for="coupon">coupon:</label>
                        <div class="input-group mb-3 " >
                            <input type="text" id="coupon" class="form-control" placeholder="please enter the coupon if you have one. don't tell others it's earlybird" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="coupon">
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" id="button-addon2" >apply coupon</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

    <!-- user form validation -->

            <div class="row m-2">
                <!-- <div class="col"> -->
                    <!-- <validation-observer  class="col" v-slot="{invalid}"> -->
                <validation-observer  class="col" v-slot="{ invalid, handleSubmit}">
                    <form @submit.prevent="handleSubmit(createOrder)">
                    <!-- <form @submit.prevent="createOrder"> -->
                        <validation-provider rules="required" v-slot="{ errors, classes}">
                            <div class="form-group">
                                <label for="username">name:</label>
                                <input id="username" class="form-control" type="text" name="name" :class="classes" v-model="form.user.name">
                                <span class="invalid-feedback">{{errors[0]}}</span>
                            </div>
                        </validation-provider>
                        <validation-provider rules="required" v-slot="{errors,classes}">
                            <div class="form-group">
                                <label for="usertel">tel:</label>
                                <input id="usertel" class="form-control" type="tel" name="tel" :class="classes" v-model="form.user.tel">
                                <span>{{errors[0]}}</span>
                            </div>
                        </validation-provider>
                        <validation-provider rules="required" v-slot="{errors,classes}">
                            <div class="form-group">
                                <label for="useradd">add:</label>
                                <input id="useradd" class="form-control" type="text" name="add" :class="classes" v-model="form.user.address">
                                <span>{{errors[0]}}</span>
                            </div>
                        </validation-provider>
                        <validation-provider rules="required|email" v-slot="{errors,classes}">
                            <div class="form-group">
                                <label for="useremail">email:</label>
                                <input id="useremail" class="form-control" type="email" name="email" :class="classes" v-model="form.user.email">
                                <span>{{ errors[0] }}</span>
                            </div>
                        </validation-provider>

                            <div class="form-group">
                                <label for="usermsg">message:</label>
                                <textarea id="usermsg" class="form-control" type="text" name="message" v-model="form.message"></textarea>
                            </div>

                            <div style="border:none">
                                <button style="width:100%" class="btn btn-outline-danger" :disabled="invalid">confirm the order</button>
                            </div>

                        </form>
                </validation-observer>
            </div>
        </div>
    </div>
</template>

<script>

// import $ from 'jquery';
// import axios from 'axios';

import {mapActions,mapGetters} from 'vuex';

export default {
  name:'customercart',
  data(){
    return{
      form:{
        user:{
            name:'',
            tel:'',
            add:'',
            email:''
        },
        message:''
      }
    }
  },
  methods:{
    ...mapActions(['getCart']),
    removeCartItem(id){
      this.$store.dispatch('removeCartItem',id);
    },
    useCoupon(coupon){
      this.$store.dispatch('useCoupon',coupon);
    },
    createOrder(){
      const vm = this;
      const order = vm.form;
      const api=`${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;
      this.$http.post(api,{data:order}).then((response) => {
        if(response.data.success){
          console.log('createorder success!');
          vm.$router.push(`/shopping/customer_checkout/${response.data.orderId}`);
        }else{
          console.log('createorder failure!');
        }
      });
    },
      
  },
  computed:{
    ...mapGetters(['cart','coupon','isLoading']),
    coupon: {
      get () {
        return this.$store.state.coupon;
      },
      set (value) {
        this.$store.commit('updateCoupon', value);
      }
    }
  },

  created(){
    this.getCart();
  }

}
    
</script>
