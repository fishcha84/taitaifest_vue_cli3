

<template>
  <div>

    <div class="container-fluid">

      <div class="row my-2">
        <div class="col">
          <div class="progress-bar bg-warning progress-bar-striped progress-bar-animated" v-bind:style="{ width: progresslength + '%'}"> {{ progresslength }}% lineup relased</div>
        </div>
      </div>
        
      <div class="row">
        <div class="col">
          <h5 class="text-center">select by genre</h5>
          <div class="form-group">
              <select class="form-control" v-model="selectedGenre">
                <option v-for="(genre,key) in genres" :key="key" :value="genre">{{ genre }}</option>
              </select>
          </div>
        </div>
      </div>

      <div class="row">
          <div class="col-sm col-md-6 col-lg-4"  v-for="(post, idx) in filteredPosts" :key="idx" >
              <div class="card lineupcard">
                <img class="card-img-top" :src="post.imgUrl" :alt="post.artist">
                <div class="card-body card-bodylineup">
                  <h5 class="card-title  tac">{{ post.artist }}</h5>
                  <p class="card-text">{{ post.introduction }}</p>
                  <a :href="post.musicVideoUrl" class="btn btn-danger d-block">{{ '<' + post.musicVideoName + '>' }}</a>
                </div>
              </div>
          </div>
      </div>

    </div>

  </div>
</template>

<script>

// import $ from 'jquery';

export default {

  name: 'Lineup',

  data(){
    return{
      posts:[],
      genres: ["all","pop", "rock", "punk"],
      selectedGenre:"all",
      progresslength:0,
    }
  },

  methods:{
    getPosts(){
      const vm=this;
      this.$http.get('lineup.json').then((response)=>{
        vm.posts=response.data;
        vm.progresslength=vm.posts.length/20*100;
      })
    }
  },

  computed:{
    
    filteredPosts(){
      const vm=this;
      const selectedGenre=vm.selectedGenre;
      if(vm.selectedGenre==="all"){
        return vm.posts;
      }else{
        return vm.posts.filter((post)=>{
          post.genre===selectedGenre;
        }
        )
      }
      // if(this.selectedGenre==="all"){
      //   return this.posts;
      // }else{
      //   return this.posts.filter(function(post){
      //     return post.genre===this.selectedGenre;
      //   }
      //   )
      // }

    }
  },

  created(){
    this.getPosts();
  }
}

</script>

<style lang="scss" scoped>

.card{
  height: 450px;
}
.card-img-top{
  height:200px;
  object-fit: cover;
}
.card-text{
  height:80px;
}




</style>