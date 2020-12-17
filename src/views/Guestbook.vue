<template>
  <div class="guestbook">
    <!-- <paginate
    @updatePage="filterByPageNum"
    :pageNum="pageNum"
    :totalPageCount="totalPageCount">
    </paginate> -->

    <!-- <paginate
    :page-count="5"
    :page-range="3"
    :margin-pages="2"
    :click-handler="clickCallback"
    :prev-text="'Prev'"
    :next-text="'Next'"
    :container-class="'pagination'"
    :page-class="'page-item'">
    </paginate> -->
<!-- 
    <paginate
        v-model="page"
        :page-count="20"
        :margin-pages="2"
        :page-range="5"
        :container-class="'pagination'"
        :page-class="'page-item'"
        :page-link-class="'page-link-item'"
        :prev-class="'prev-item'"
        :prev-link-class="'prev-link-item'"
        :next-class="'next-item'"
        :next-link-class="'next-link-item'"
        :break-view-class="'break-view'"
        :break-view-link-class="'break-view-link'"
        :first-last-button="true"
      ></paginate> -->

    <!-- <div v-for="msg in msgs" :key="msg.posttime"> -->
    <div v-for="msg in msgs" :key="msg.posttime">
      <div class="mx-2"><span>“{{ msg.content }}”</span><span style="color:gray"> --said by {{ msg.author }} at {{ msg.posttime }}</span></div>
      <hr style="width:90%">
    </div>
    
    <!-- <pagination :pagination="pagination" @change="getmsgs"></pagination> -->

    <div class="row justify-content-center"> 
      <form class="col-md-6" action="post.php" method="post">
        <div class="form-group text-center">
          <p>please leave your message here</p>
        </div>
        <div class="form-group">
          <label for="author">author:</label>
          <input class="form-control" id="author" type="text" name="author" cols="50" v-model="newmsg.author">
        </div>
        <div class="form-group">
          <label for="content">content:</label>
          <textarea class="form-control" id="content" name="content" cols="50" rows="5" v-model="newmsg.content"></textarea>
        </div>
        <div class="form-group text-center" >
          <input type="reset" class="btn btn-outline-secondary btn-block" value="rewrite">
          <input type="submit" class="btn btn-outline-primary  btn-block" value="Post!">
        </div>
      </form>
    </div>

  </div>
</template>

<script>

import Vue from 'vue'
import Paginate from 'vuejs-paginate';
Vue.component('paginate', Paginate)

// Vue.component('paginate', VuejsPaginate);

// import $ from "jquery";
// import Paginate from '../components/Paginate.vue'
// import Pagination from '../components/Pagination.vue';

export default {
  
  name: 'Guestbook',
  
  data(){
    return{
      // page: 1,
      // currentPageNum:this.pageNum,
      
      msgs:[],
      newmsg:{author:'',content:'',posttime:''},
      // currentPageNum:this.pageNum,
      // listdata:[],
      // paginate:{},
      // pagination:{},
    }
  },
  // props:{
  //   pageNum:{
  //     type:Number,
  //     default:1,
  //   },
  //   totalPageCount:{
  //     type:Number,
  //   }
  // },
  
  components: {
    // Pagination,
    Paginate,
    // Breadcrumb
  },
  
  
  methods:{
    clickCallback: function(pageNum) {
      
    },
    // changePage(num){
    //   this.currentPageNum=num;
    //   this.$emit('updatePageNum',num);
    // },
    // filterByPage(num){
    //   this.pageNum=num;
    //   this.display=this.allData.slice(this.rowsPerPage*(num-1),this.rowsPerPage*num);
    // },
    getmsgs(page=1){
      const vm=this;
      this.$axios.get(`https://fishcha842.000webhostapp.com/guestbook.php?page=${page}`).then((response)=>{
        vm.msgs=response.data;
        vm.pagination=response.data.pagination;
      })
    },
    toFormData(obj){
      var fd=new FormData();
      for(var i in obj){
        fd.append(i,obj[i]);
      }
      return fd;
    },

    post(){
      const vm=this;
      var fd = this.toFormData(this.newmsg);
      this.$axios.post("https://fishcha842.000webhostapp.com/post.php",fd).then((response)=>{
        vm.getmsgs();
      })
    },
    
  },
  created(){
    this.getmsgs();
  },
  
}
</script>
