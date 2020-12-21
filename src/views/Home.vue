<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <div class="carousel slide m-2" id="carouselarea" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselarea" data-slide-to="0" class="active"></li>
              <li data-target="#carouselarea" data-slide-to="1"></li>
              <li data-target="#carouselarea" data-slide-to="2"></li>
              <li data-target="#carouselarea" data-slide-to="3"></li>
              <li data-target="#carouselarea" data-slide-to="4"></li>
            </ol>

            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="c1" src="@/assets/image/carousel/1.jpg" alt="glastonbury" />
                <div class="carousel-caption cc">
                  <h1>ENDLESS GRASS</h1>
                  <h5>wherever you felt tired at, just sit down</h5>
                  <router-link to="/shopping/customer_orders">
                    <button class="btn">TICKETS ON SALE NOW >>></button>
                  </router-link>
                </div>
              </div>

              <div class="carousel-item">
                <img class="c2" src="@/assets/image/carousel/2.jpg" alt="pyramid" />
                <div class="carousel-caption cc">
                  <h1>FEATURED STAGES</h1>
                  <h5>every stage is well-designed</h5>
                  <router-link to="/shopping/customer_orders">
                    <button class="btn">TICKETS ON SALE NOW >>></button>
                  </router-link>
                </div>
              </div>

              <div class="carousel-item">
                <img class="c3" src="@/assets/image/carousel/3.jpg" alt="keane" />
                <div class="carousel-caption cc">
                  <h1>UP2U LINEUP</h1>
                  <h5>your headliners, you decide!</h5>
                  <router-link to="/shopping/customer_orders">
                    <button class="btn">TICKETS ON SALE NOW >>></button>
                  </router-link>
                </div>
              </div>

              <div class="carousel-item">
                <img class="c4" src="@/assets/image/carousel/4.jpg" alt="fun" />
                <div class="carousel-caption cc">
                  <h1>VARIOUS ACTIVITIES</h1>
                  <h5>you won't feel bored</h5>
                  <router-link to="/shopping/customer_orders">
                    <button class="btn">TICKETS ON SALE NOW >>></button>
                  </router-link>
                </div>
              </div>

              <div class="carousel-item">
                <img class="c5" src="@/assets/image/carousel/5.jpg" alt="food" />
                <div class="carousel-caption cc">
                  <h1>EXOTIC FOOD</h1>
                  <h5>travel around the world through food</h5>
                  <router-link to="/shopping/customer_orders">
                    <button class="btn">TICKETS ON SALE NOW >>></button>
                  </router-link>
                </div>
              </div>
            </div>

            <a href="#carouselarea" class="carousel-control-prev" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </a>

            <a href="#carouselarea" class="carousel-control-next" role="button" data-slide="next">
              <span class="carousel-control-next-icon"></span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <br />

    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <router-link tag="rl" to="/lineup">
            <h3 class="newartisttitle" style="color: hotpink">new artist released>>></h3>
          </router-link>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xs col-md-6 col-lg-8 item item2">
            <img src="@/assets/image/home/keane.jpg" alt="" />
          </div>
          <div class="col-xs col-md-6 col-lg-4 item item1">
            <h3 vertical-align-middle>//ROCK</h3>
          </div>
        </div>

        <div class="row">
          <div class="col-xs col-md-6 col-lg-4 item item3 aic jcc"><h5>#uk</h5></div>
          <div class="col-xs col-md-6 col-lg-8 item item4">
            <h1 style="text-align: center">KEANE</h1>

            <h5 class="ellipsis">
              Keane, a legendary UK band, reunions recently. At this fest, besides a couple of classic songs, they would
              also perform new songs to make your ears get pregnant.
            </h5>

            <div class="jcc">
              <router-link to="/lineup">
                <button class="btn">check more detail</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br />

    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <router-link tag="rl" to="/shopping/customer-orders">
            <h3 class="coupontitle" style="color: hotpink"><<<< up-to-date coupon</h3>
          </router-link>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12 col-lg-4 jcc p-2">
          <div class="coupon coupon1">
            <span class="top content">
              <p>BEFORE</p>
              <p>3</p>
              <p>MONTH</p></span
            >
            <span class="bottom content">royalyou</span>
          </div>
        </div>
        <div class="col-xs-12 col-lg-4 jcc p-2">
          <div class="coupon coupon2">
            <span class="top content">
              <p>BEFORE</p>
              <p>2</p>
              <p>MONTH</p></span
            >
            <span class="bottom content">earlybird</span>
          </div>
        </div>
        <div class="col-xs-12 col-lg-4 jcc p-2">
          <div class="coupon coupon3">
            <span class="top content"
              ><p>BEFORE</p>
              <p>1</p>
              <p>MONTH</p>
            </span>
            <span class="bottom content">wakeuplate</span>
          </div>
        </div>
      </div>
    </div>

    <br />

    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <router-link tag="rl" to="/news">
            <h3 class="newstitle" style="color: hotpink">news>>></h3>
          </router-link>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12 col-md-6 col-lg-8">
          <NewsComponent class="m-2"></NewsComponent>
          <div id="morenews">
            <router-link id="morenews" to="/news" style="text-aling: right">more...</router-link>
          </div>
        </div>

        <div class="col-xs-12 col-md-6 col-lg-4 jcc">
          <div class="fbdiv m-2">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnmemagazine&tabs=timeline&width=320&height=650&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=2646271298939503"
              width="320"
              height="650"
              style="border: none; overflow: hidden"
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
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
  components: {
    NewsComponent,
  },
  // created() {
  //   AOS.init()
  // },
}
</script>

<style scoped>
.newartisttitle:hover,
.newstitle:hover {
  text-decoration: none;
  cursor: pointer;
}

.container {
  background: lightgray;
  padding: 20px;
}

.item {
  /* margin-top: 20px; */
  height: 200px;
}

.item2 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* padding: 20px; */
  /* object-position: 0 -250px; */
}

.item4 {
  /* padding: 20px; */
  position: relative;
  top: -20px;
  background-color: pink;
}

.cc {
  text-align: left;
  /* margin-bottom: 100px; */
}

.cc h1,
.cc h5 {
  color: white;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: gray;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-item {
  height: 400px;
}

.cc button,
.item4 button {
  color: hotpink;
  border: 2px solid hotpink;
  font-style: bold;
}

.cc button:hover,
.item4 button:hover {
  background-color: hotpink;
  color: white;
}

/* .carousel-item .c1 {
  object-position: 0px -200px;
}

.carousel-item .c2 {
  object-position: 0px -300px;
}

.carousel-item .c3 {
  object-position: 0px -150px;
}

.carousel-item .c4 {
  object-position: 0px -300px;
} 

.carousel-item .c5 {
  object-position: 0px -200px;
} */

.coupontitle {
  text-align: right;
}

.coupon {
  text-align: center;
  vertical-align: middle;
  width: 200px;
  height: 200px;
  border: 5px solid hotpink;
  /* margin: 10px; */
}

.coupon1,
.coupon2,
.coupon3 {
  font-size: 20px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: background-color 0.5s;
}
.coupon1:hover,
.coupon2:hover,
.coupon3:hover {
  background-color: hotpink;
}

.content {
  position: absolute;
  width: 200px;
  height: 200px;
  line-height: 200px;
  text-align: center;
  left: 0px;
  transition: top 0.5s;
}

.top {
  top: 0px;
  font-size: 30px;
  height: 200px;
  line-height: 50px;
  /* display: flex; */
  /* align-items: stretch; */
}

.coupon1:hover .top,
.coupon2:hover .top,
.coupon3:hover .top {
  top: -200px;
}

.bottom {
  top: 200px;
}

.coupon1:hover .bottom,
.coupon2:hover .bottom,
.coupon3:hover .bottom {
  top: 0px;
}
</style>
