<template>
  <div class="news">
    <div class="container">
      <div class="row" >
        <div class="col" >
          <NewsComponent/>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import NewsComponent from '@/components/NewsComponent.vue'
export default {
  name: 'News',
  components:{
    NewsComponent
  }
};
</script>
