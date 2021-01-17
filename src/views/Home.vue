<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <div
            class="carousel slide m-2"
            id="carouselarea"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselarea"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#carouselarea" data-slide-to="1"></li>
              <li data-target="#carouselarea" data-slide-to="2"></li>
              <li data-target="#carouselarea" data-slide-to="3"></li>
              <li data-target="#carouselarea" data-slide-to="4"></li>
            </ol>

            <div class="carousel-inner aic">
              <div class="carousel-item active">
                <img
                  class="c1"
                  src="@/assets/image/carousel/1.jpg"
                  alt="glastonbury"
                />
                <div class="carousel-caption cc">
                  <h1>ENDLESS GRASS</h1>
                  <h5>Wherever you felt tired at, just sit down.</h5>
                  <router-link to="/shopping/customer_orders">
                    <button class="btn">TICKETS ON SALE NOW >>></button>
                  </router-link>
                </div>
              </div>

              <div class="carousel-item aic">
                <img
                  class="c2"
                  src="@/assets/image/carousel/2.jpg"
                  alt="pyramid"
                />
                <div class="carousel-caption cc">
                  <h1>UNIQUE STAGES</h1>
                  <h5>Every stage is well-designed.</h5>
                  <router-link to="/shopping/customer_orders">
                    <button class="btn">TICKETS ON SALE NOW >>></button>
                  </router-link>
                </div>
              </div>

              <div class="carousel-item">
                <img
                  class="c3"
                  src="@/assets/image/carousel/3.jpg"
                  alt="keane"
                />
                <div class="carousel-caption cc">
                  <h1>UP2U LINEUP</h1>
                  <h5>Your headliners, you decide!</h5>
                  <router-link to="/shopping/customer_orders">
                    <button class="btn">TICKETS ON SALE NOW >>></button>
                  </router-link>
                </div>
              </div>

              <div class="carousel-item">
                <img class="c4" src="@/assets/image/carousel/4.jpg" alt="fun" />
                <div class="carousel-caption cc">
                  <h1>FUN ACTIVITY</h1>
                  <h5>You won't feel bored.</h5>
                  <router-link to="/shopping/customer_orders">
                    <button class="btn">TICKETS ON SALE NOW >>></button>
                  </router-link>
                </div>
              </div>

              <div class="carousel-item">
                <img
                  class="c5"
                  src="@/assets/image/carousel/5.jpg"
                  alt="food"
                />
                <div class="carousel-caption cc">
                  <h1>EXOTIC FOOD</h1>
                  <h5>Travel around the world through food.</h5>
                  <router-link to="/shopping/customer_orders">
                    <button class="btn">TICKETS ON SALE NOW >>></button>
                  </router-link>
                </div>
              </div>
            </div>

            <a
              href="#carouselarea"
              class="carousel-control-prev"
              role="button"
              data-slide="prev"
            >
              <span class="carousel-control-prev-icon"></span>
            </a>

            <a
              href="#carouselarea"
              class="carousel-control-next"
              role="button"
              data-slide="next"
            >
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
            <h3 class="newartisttitle" style="color: hotpink">
              New artist released<i class="fas fa-angle-double-right"></i>
            </h3>
          </router-link>
        </div>
      </div>
    </div>

    <div class="container-fluid pointer" @click="toLineup">
      <div class="row">
        <div class="col-xs col-md-6 col-lg-8 item item2">
          <img src="@/assets/image/home/blaze.jpg" alt="" />
        </div>
        <div class="col-xs col-md-6 col-lg-4 item item1">
          <h3>//EDM</h3>
        </div>
      </div>

      <div class="row">
        <div class="col-xs col-md-6 col-lg-4 item item3 jcc aic">
          <h5>#fr</h5>
        </div>
        <div class="col-xs col-md-6 col-lg-8 item item4">
          <h1 class="jcc">THE BLAZE</h1>
          <h5 class="ellipsis">
            The Blaze, a new EDM duo from Frence, combines zen-like rhyme with
            talkbox-like vocal ingeniously to confort you in the disturbed
            world.
          </h5>
          <div class="jcc">
            <router-link to="/lineup">
              <input
                class="btn btn-outline-secondary mb-2"
                value="more detail"
              />
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <br />

    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <router-link tag="rl" to="/shopping/customer-orders">
            <h3 class="coupontitle" style="color: hotpink">
              <i class="fas fa-angle-double-left"></i>Up-to-date coupon
            </h3>
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
            <h3 class="newstitle" style="color: hotpink">
              News<i class="fas fa-angle-double-right"></i>
            </h3>
          </router-link>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12 col-md-6 col-lg-8">
          <NewsComponent class="m-2"></NewsComponent>
          <div class="tar">
            <router-link
              id="morenews"
              to="/news"
              style="text-aling: right; color: hotpink; margin: 10px"
              >more...</router-link
            >
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
    NewsComponent
  },
  methods: {
    toLineup () {
      this.$router.push('/lineup')
    }
  }
}
</script>

<style scoped>
.pointer:hover {
  cursor: pointer;
}
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
  max-height: 200px;
}

.item2 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.item3 {
  margin-bottom: 20px;
}
.item4 {
  position: relative;
  top: -20px;
  background-color: pink;
  color: midnightblue;
}

.carousel-caption {
  top: 50%;
  transform: translateY(-50%);
}

.cc {
  top: 50%;
  transform: translateY(-50%);
  bottom: initial;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  transform-style: preserve-3d;
  background: #191970c3;
  text-align: left;
  padding: 20px;
  max-width: 350px;
}

.cc h1,
.cc h5 {
  width: 100%;
  color: hotpink;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-item {
  height: 400px;
}

.cc button {
  border: 2px solid hotpink;
  color: hotpink;
  font-weight: bold;
}

.cc button:hover,
.item4 button:hover {
  background-color: hotpink;
  color: white;
}

.coupontitle {
  text-align: right;
}

.coupon {
  text-align: center;
  vertical-align: middle;
  width: 200px;
  height: 200px;
  border: 5px solid hotpink;
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
