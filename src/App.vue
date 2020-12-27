<template>
  <div id="app">
    <div class="wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
              <router-link to="/">
                <img
                  src="@/assets/image/logo/logo.png"
                  alt="taitaifestlogo"
                  height="50px"
                  data-container="body"
                  data-toggle="popover"
                  data-trigger="hover"
                  data-placement="bottom"
                  data-content="clicking here takes you home"
                />
              </router-link>

              <button
                type="button"
                class="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarContent">
                <ul class="navbar-nav mx-auto">
                  <li class="nav-item"><router-link class="rl" tag="rl" to="/news">News</router-link> |</li>

                  <li class="nav-item"><router-link class="rl" tag="rl" to="/lineup">Lineup</router-link> |</li>
                  <li class="nav-item"><router-link class="rl" tag="rl" to="/timetable">Timetable</router-link> |</li>

                  <li class="nav-item">
                    <router-link class="rl" tag="rl" to="/shopping/customer_orders">Shopping</router-link> |
                  </li>

                  <li class="nav-item dropdown">
                    <span tag="rl" class="dropdown-toggle" data-toggle="dropdown">Faq</span>

                    <div class="dropdown-menu">
                      <router-link tag="rl" to="/faq" @click.native="changeshowItem('showAccommondation')"
                        ><div class="dropdown-item">Accommondation</div>
                      </router-link>

                      <router-link tag="rl" to="/faq" @click.native="changeshowItem('showGettingHere')"
                        ><div class="dropdown-item">Getting Here</div>
                      </router-link>

                      <router-link tag="rl" to="/faq" @click.native="changeshowItem('showMap')"
                        ><div class="dropdown-item">Map</div>
                      </router-link>
                      <router-link tag="rl" to="/faq"><div class="dropdown-item">Guestbook</div> </router-link>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <Breadcrumb />
          </div>
        </div>

        <div class="row">
          <div class="col">
            <router-view />
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 col-lg-4">
            <p class="footer-title">website guideline:</p>
            <div class="footer-content">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-xs-12 col-md-4">
                    <ul>
                      <li class="guidelinetitle">what-</li>
                      <li><router-link tag="rl" to="/">home</router-link></li>
                      <li><router-link tag="rl" to="/news">news</router-link></li>
                    </ul>
                  </div>

                  <div class="col-xs-12 col-md-4">
                    <ul>
                      <li class="guidelinetitle">who-</li>
                      <li><router-link tag="rl" to="/lineup">lineup</router-link></li>
                      <li><router-link tag="rl" to="/timetable">timetable</router-link></li>
                    </ul>
                  </div>

                  <div class="col-xs-12 col-md-4">
                    <ul>
                      <li class="guidelinetitle">how-</li>
                      <li><router-link tag="rl" to="/shopping/customer_orders">shopping</router-link></li>
                      <li><router-link tag="rl" to="/faq">faq</router-link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-12 col-lg-4">
            <p class="footer-title">subscribe newsletter:</p>
            <div class="footer-content">
              <form action="newsletter.php" method="post" name="newsletter">
                <input type="email" class="emailinput m-2 w-100" name="useremail" placeholder="your email" d-block />
                <input type="submit" class="subscribe m-2 w-100" value="Subscribe!" d-block />
              </form>
            </div>
          </div>

          <div class="col-md-12 col-lg-4">
            <p class="footer-title">contact us:</p>
            <div class="footer-content">
              <a href="mailto:fishcha842@gmail.com">
                <img class="socialicon" src="@/assets/image/socialicon/unnamed.png" />
              </a>

              <img
                class="socialicon"
                src="@/assets/image/socialicon/f_logo_RGB-Blue_1024.png"
                data-toggle="modal"
                data-target="#exampleModalLong"
              />

              <!-- Modal -->
              <div
                class="modal fade"
                id="exampleModalLong"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLongTitle"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLongTitle">Sincerely</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body text-left">
                      <p>
                        Sorry, we are thinking about not establishing a fb account, since it is full of old people only.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- <a href="https://www.instagram.com/?hl=zh-tw">
                <img class="socialicon" src="@/assets/image/socialicon/instagram.png" />
              </a> -->
              <a href="https://www.youtube.com/feed/trending">
                <img class="socialicon" src="@/assets/image/socialicon/youtube_social_circle_red.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <p class="copyright">2020 taitaifest copyright reserved</p>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import Breadcrumb from './components/Breadcrumb.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Breadcrumb,
  },
  computed: {
    ...mapGetters(['showItem', 'isLoading']),
  },
  data() {
    return {}
  },
  methods: {
    ...mapActions(['changeshowItem', 'updateLoading']),
  },
  mounted() {
    $(function () {
      $('[data-toggle="popover"]').popover()
    })

    $('.nav .page-scroll').click(function () {
      if ($(window).width() <= 768) {
        $('.navbar-toggle').trigger('click')
      }
    })
  },
}
</script>

<style lang="scss">
@import './assets/all';
@import './assets/taitaifest.css';

#app {
  max-width: 100%;
  overflow-x: hidden;

  height: 100%;
  margin: 0;

  display: flex;
  flex-direction: column;
}

.wrapper {
  flex-grow: 1;
}

.footer {
  background-color: pink;
  width: 100%;
  color: gray;
  text-align: center;
  margin-bottom: 10px;
}

.footer-title,
.guidelinetitle {
  font-weight: bold;
  height: 50px;
  line-height: 50px;
}

.copyright {
  font-weight: bold;
  height: 30px;
  line-height: 30px;
}

.footer-content ul li {
  list-style: none;
}

.emailinput {
  padding: 5px 15px;
  border: 2px gray solid;
  cursor: pointer;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}

.subscribe {
  -webkit-border-radius: 10;
  -moz-border-radius: 10;
  border-radius: 28px;
  color: GRAY;
  font-size: 20px;
  background: none;
  padding: 5px;
  border: 2px solid GRAY;
  text-decoration: none;
  margin: 10px;
}

.subscribe:hover {
  color: hotpink;
  border: 2px solid hotpink;
}

.socialicon {
  width: 50px;
  height: 50px;
  margin: 5px;
  filter: grayscale(100%);
  cursor: pointer;
}
</style>
