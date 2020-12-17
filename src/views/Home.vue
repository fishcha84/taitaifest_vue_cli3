<template>
  <div class="home">
    <!-- <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v9.0&appId=2646271298939503&autoLogAppEvents=1" nonce="I1B69iTw"></script> -->
    
    <div class="carousel slide" id="carouselarea" data-ride='carousel' style='margin-bottom:10px'>

      <ol class="carousel-indicators">
        <li data-target='#carouselarea' data-slide-to='0' class="active"></li>
        <li data-target='#carouselarea' data-slide-to='1'></li>
        <li data-target='#carouselarea' data-slide-to='2'></li>
        <li data-target='#carouselarea' data-slide-to='3'></li>
        <li data-target='#carouselarea' data-slide-to='4'></li>
      </ol>

      <div class="carousel-inner">

        <div class="carousel-item active">
          <img class='d-block w-100' src="@/assets/image/carousel/1.jpg" alt="glastonbury">
          <div class="carousel-caption">scene</div>
        </div>

        <div class="carousel-item">
          <img class='d-block w-100' src="@/assets/image/carousel/2.jpg" alt="pyramid">
          <div class="carousel-caption">stage</div>
        </div>

        <div class="carousel-item">
          <img class='d-block w-100' src="@/assets/image/carousel/3.jpg" alt="keane">
          <div class="carousel-caption">star</div>
        </div>

        <div class="carousel-item">
          <img class='d-block w-100' src="@/assets/image/carousel/4.jpg" alt="fun">
          <div class="carousel-caption">fun</div>
        </div>

        <div class="carousel-item">
          <img class='d-block w-100' src="@/assets/image/carousel/5.jpg" alt="food">
          <div class="carousel-caption">food</div>
        </div>

      </div>
  
      <a href="#carouselarea" class="carousel-control-prev" role='button' data-slide='prev'>
        <span class='carousel-control-prev-icon'></span>
      </a>
  
      <a href="#carouselarea" class="carousel-control-next" role='button' data-slide='next'>
        <span class="carousel-control-next-icon"></span>
      </a>
  
    </div>

    <div class="container-fluid">
      <div class="row" >

        <div class="col-sm-12 col-lg-8">
          <NewsComponent/>
          <div id="morenews">
            <router-link id="morenews" to="/news" style="text-aling:right">more...</router-link>
          </div>
        </div>
      
        <div class="col-sm-12 col-lg-4">
          <div class="fbdiv">
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnmemagazine&tabs=timeline&width=360&height=650&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=2646271298939503" width="360" height="650" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          <!-- <div class="fb-page" data-href="https://www.facebook.com/nmemagazine" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/nmemagazine" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/nmemagazine">NME</a></blockquote></div> -->
          </div>
        </div>

      </div>
    </div>

  </div>
  
</template>

<script>

import NewsComponent from '@/components/NewsComponent.vue'

export default {
  name: 'Home',
  components:{
    NewsComponent
  }
};
</script>


