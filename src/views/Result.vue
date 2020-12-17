<template>
  <div class="result">
    
    <div class="jcc m-2">

      <table class="w-100"> 
        <thead>
          <tr>
            <th>artist</th>
            <th>score</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="headliner in headliners" :key="headliner.id">
            <td>{{ headliner.artist }}</td>
            <td>{{ headliner.score }}</td>
          </tr>
        </tbody>
      </table>

    </div>

  </div>
</template>

<script>

export default {
  name: 'Result',
  data(){
    return{
      headliners:[]
    }
  },
  created(){ 
    this.$axios.get("https://fishcha842.000webhostapp.com/headliners.php").then((response)=>{ 
      this.headliners=response.data;
      console.log('success');
      console.log(this.headliners);
    });
   
  }
}
</script>



