<template>
  <div class="fountain_headliners">

    <div class="container-fluid tac">

      <div class="row">
        <div class="col">

          <p class="fountainheadlinerstitle">I.Choose artists below that you would like them to be headliners:</p>

            <form action="vote.php" method="post" > 
           
              <span class="form-group" v-for="(headliner,idx) in headliners" :key="idx" style="margin-right:24px;">
                <input :id="headliner.artist" type="checkbox" name="voteforartist[]" :value="headliner.artist" v-model="voteforartist">
                <label :for="headliner.artist">{{ headliner.artist}}</label>
              </span>

              <div class="form-group">
                <input type="submit" class="btn btn-outline-primary btn-block" name="formSubmit" value="Vote! and see result">
              </div>
              
            </form>
    
        </div>
      </div>

      <br>

      <p class="fountainheadlinerstitle">II.Otherwise, make a wish:</p>
        <form action="recommend.php" method="post">
          <div class="form-group">
            <input class="form-control" type="text" name="artist" placeholder="key in an artist name" v-model="recommendartist.artist">
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-outline-primary btn-block" name="formSubmit" value="Add to the list!">
          </div>
        </form>
      
    </div>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

<script>

// import * as $ from "jquery";

export default {
  name: 'FoutainHeadliners',

  data(){
    return{
      headliners:[],
      voteforartist:[],
      recommendartist:{artist:''},
    }
  },

  methods:{
    getheadliners(){
      this.$axios.get("https://fishcha842.000webhostapp.com/headliners.php").then((response)=>{ 
      this.headliners=response.data;
      })
    },
    toFormData(obj) {
      var fd = new FormData();
      for(var i in obj) {
        fd.append(i, obj[i]);
      }
      return fd;
    },

    vote(){
      var fd=this.toFormData(this.voteforartist);
      this.$axios.post("https://fishcha842.000webhostapp.com/vote.php",fd).then((response)=>{
      })
    },
  
    recommend(){
      var fd=this.toFormData(this.recommendartist);
      this.$axios.post("https://fishcha842.000webhostapp.com/recommend.php",fd).then((response)=>{
        this.recommendartist={artist:''}
      })
    }
  },

  created(){ 
    this.getheadliners();
  },

}
</script>



