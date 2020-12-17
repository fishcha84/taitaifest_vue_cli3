<template>
  

  <paginate
    :value="currentPageCount"
    :page-count="totalPageCount"
    :click-handler="changePage"
    :page-range="3"
    :margin-page="1"
    :prev-text="'Prev'"
    :next-text="'Next'"
    
    :container-class="'pagination'"
    :page-class="'page-item'"
    :page-link-class="'page-link'"
    :prev-class="'page-item'"
    :next-class="'page-item'"
    :prev-link-class="'page-link'"
    :next-link-class="'page-link'"
    :active-class="'active'">
  </paginate>


  <!-- <div class="paginate"> -->

    

    <!-- <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav> -->
    <!-- <nav>
      <ul class="pagination">
      <li>
      <a href="#" aria-label="Previous">
      <span aria-hidden="true">&laquo;</span>
      </a>
      </li>
      <li><a href="#">1</a></li>
      <li><a href="#">2</a></li>
      <li><a href="#">3</a></li>
      <li><a href="#">4</a></li>
      <li><a href="#">5</a></li>
      <li><a href="#">6</a></li>
      <li><a href="#">7</a></li>
      <li>
      <a href="#" aria-label="Next">
      <span aria-hidden="true">&raquo;</span>
      </a>
      </li>
      </ul>
    </nav>         -->
  <!-- </div>   -->
</template>


<script>
import Paginate from 'vuejs-paginate';

// const PAGE_SIZE = 5; //Show how many records in a single page
// const FOO_DATA = [
//   {name:'Luke Skywalker',gender:'male', img:''},...];

// const FOO_DATA = [
// {author:'',content:''}];

export default {
  name: "Paginate",
  // props:['paginate'],
  // components:{
  //   Paginate,
  // },
  data(){
    return{
      rowsPerPage:10,
      pageNum:1,
      totalPageCount:0,
      // listdata: [],
      // currentPageNum: this.pageNum,
      // pageCount: 1,
    // PAGE_SIZE:5,
    // // FOO_DATA:[{author:'',content:''},...],
    // FOO_DATA:[],
    }
   
  },

  // props:{
  //   pageNum:{
  //     type:Number,
  //     default:1
  //   },
  //   totalPageCount:{
  //     type:Number,
  //   }
  // },

  // computed: {
  //   pagedListdata: function () {
  //     var vm = this;
  //     if (vm.listdata && vm.listdata.length > 0) {
  //       return vm.listdata.filter(function (x) {
  //         return x.page === vm.currentPage;
  //       })
  //     }
  //     else {
  //       return [];
  //     }
  //   }
  // },
  // watch: {
  //   listdata: function (val) {
  //     this._setPage2Model();
  //   }
  // },
  methods:{
    // changePage(num){
    //   this.currentPageNum=num;
    //   this.$emit('updatePageNum',num);
    // },
    // _setPage2Model: function () {
    //   var vm = this;
    //   if (!vm.listdata || vm.listdata.length <= 0) {
    //     vm.pageCount = 1;
    //   }
    //   else {
    //     vm.pageCount = parseInt(vm.listdata.length / PAGE_SIZE) + (vm.listdata.length % PAGE_SIZE > 0 ? 1 : 0);
    //     for (let i = 0; i < vm.listdata.length; i++) {
    //       vm.$set(vm.listdata[i], "page", parseInt(i / PAGE_SIZE) + 1);
    //     }
    //   }
    // },

    // pageCallback: function (page) {
    //   var vm = this;
    //   this.$set(vm, 'currentPage', page);
    // },
    // changePage(pagex) {
    //   this.$emit('change', pagex);
    // },
  },
  created() {
    // var vm =this;
    // vm.listdata = FOO_DATA;
  }
}

</script>