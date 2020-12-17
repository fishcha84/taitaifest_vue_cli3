<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container-fluid">
      
      <div class="row tar m-2">
        <div class="col">
          <button @click="openCouponModal(true)" class="btn btn-primary">create a new coupon</button>
        </div>
      </div>

      <div class="row" >
        <div class="col">
          <table style="width:100%;padding:10px;">
            <thead>
              <tr>
                <th>code</th>
                <th>discount(*%)</th>
                <th>exp</th>
                <th>in/valid</th>
                <th>edit</th>
                <th>del</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,key) in coupons" :key="key">
                <td>{{ item.code }}</td>
                <td>{{ item.percent }}</td>
                <td>{{ item.due_date }}</td>
                <td>
                  <span v-if="item.is_enabled===true">valid</span>
                  <span v-else>in-valid</span>
                </td>
                <td>
                  <i class="fas fa-edit" @click.prevent="openCouponModal(false,item)"></i>
                </td>
                <td>
                  <i class="fas fa-trash" @click.prevent="openDelCouponModal(item)"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="row m-2" >
        <div class="col tac">
          <Pagination :pagination='pagination' @change="getCoupons"></Pagination>
        </div>
      </div>
      
    </div>

<!-- tempCouponModal -->
<div class="modal" tabindex="-1" id="tempCouponModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" >
          <span v-if="isNewCoupon===true">create Coupon</span>
          <span v-else>edit Coupon</span>
        </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div>
          <label for="coupontext">code</label>
          <input id="coupontext" type="text" v-model="tempCoupon.code">
        </div>

        <div>       
          <label for="coupondiscountpercentage">discount(*%)</label>
          <input id="coupondiscountpercentage" type="number" v-model="tempCoupon.percent">
        </div>

        <div>
          <label for="expireddate">exp</label>
          <input id="expireddate" type="date" v-model="tempCoupon.due_date">
        </div>

        <div>
          <input type="checkbox" v-model="tempCoupon.is_enabled">valid
        </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">cancel</button>
        <button type="button" class="btn btn-primary" @click="updateCoupon">
          <span v-if="!isNewCoupon===true">edit</span>
          <span v-else>create</span>
        </button>
      </div>
    </div>
  </div>
</div>

<!-- successModal -->
<div class="modal" tabindex="-1" id="successModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <!-- <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div> -->
      <div class="modal-body">
        <p>success!</p>
      </div>
      <!-- <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> -->
    </div>
  </div>
</div>


<!-- delCouponModal -->
<div class="modal" tabindex="-1" id="delCouponModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" style="color:red;">del Coupon</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>are you sure to del coupon {{tempCoupon.code}}?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">no</button>
        <button type="button" class="btn btn-primary" @click="delCoupon">yes</button>
      </div>
    </div>
  </div>
</div>

  </div>
</template>

<script>

import $ from 'jquery';

import Pagination from '../components/Pagination.vue';

import { mapActions,mapGetters} from 'vuex';



export default {
  
  data(){
    return{
      coupons:[],
      tempCoupon:{},
      isNewCoupon:true,
      pagination:{}
    }
  },
  
  methods:{
    ...mapActions(['updateLoading']),
    getCoupons(page=1){
      const vm=this;
      const api=`${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?page=${page}`;
      this.$store.dispatch('updateLoading',true);
      this.$http.get(api).then((response)=>{
        if(response.data.success){
          vm.$store.dispatch('updateLoading',false);
          vm.coupons=response.data.coupons;
          vm.pagination=response.data.pagination;
        }
      });
    },

    openCouponModal(a,b){
      const vm=this;
      vm.isNewCoupon=a;
      if(vm.isNewCoupon===true){
        vm.tempCoupon={};
      }else{
        // vm.tempCoupon=Object.assign({},b);
        vm.tempCoupon={...b};
      }
      $('#tempCouponModal').modal('show');
    },
    
    updateCoupon(){
      const vm=this;
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`;
      let method="post";
      if(!vm.isNewCoupon){
        method="put";
        api=`${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;
      }
      // this.$store.dispatch('updateLoading',true);
      this.$http[method](api,{data:vm.tempCoupon}).then((response)=>{
        if(response.data.success){
          // vm.$store.dispatch('updateLoading',false);
          $('#tempCouponModal').modal('hide');
          vm.getCoupons();
          $('#successModal').modal('show');
          setTimeout(function(){
            $('#successModal').modal('hide');
          },1000);
        }
      });
    },
    openDelCouponModal(item){
      const vm=this;
      // vm.tempCoupon=Object.assign({},item);
      vm.tempCoupon={...item};
      $('#delCouponModal').modal('show');
    },
    delCoupon(){
      const vm=this;
      const api=`${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;
      this.$http.delete(api).then((response)=>{
        if(response.data.success){
          vm.getCoupons();
          $('#delCouponModal').modal('hide');
          $('#successModal').modal('show');
          setTimeout(() => {
            $('#successModal').modal('hide');
          }, 1000);
          
        }
      })
    }
  },
  components:{
    Pagination,
  },
  computed:{
    ...mapGetters(['isLoading'])
  },
  mounted:
    $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').trigger('focus')
    })
  ,
  created(){
    this.getCoupons();
  }
}




</script>
