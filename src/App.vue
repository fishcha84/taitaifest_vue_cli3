<template>
  <div id="app">
    <loading :active.sync="isLoading"></loading>
    <div class="sticky-foot">
      <div class="sticky-foot-main">
        <div class="container-fluid">
          <div class="row">
            <div class="col">
              <nav
                class="navbar fixed-top navbar-expand-lg navbar-light bg-light"
              >
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
                    <li class="nav-item">
                      <router-link class="rl" tag="rl" to="/news">
                        News </router-link
                      >|
                    </li>

                    <li class="nav-item">
                      <router-link class="rl" tag="rl" to="/lineup">
                        Lineup
                      </router-link>
                      |
                    </li>
                    <li class="nav-item">
                      <router-link class="rl" tag="rl" to="/timetable">
                        Timetable
                      </router-link>
                      |
                    </li>

                    <li class="nav-item">
                      <router-link
                        class="rl"
                        tag="rl"
                        to="/shopping/customer_orders"
                      >
                        Shopping
                      </router-link>
                      |
                    </li>

                    <li class="nav-item dropdown">
                      <span
                        tag="rl"
                        class="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Faq<span class="caret"></span>
                      </span>

                      <div class="dropdown-menu">
                        <router-link
                          class="rl"
                          tag="rl"
                          to="/faq"
                          @click.native="changeShowItem('showAccommondation')"
                          v-scroll-to="'#accommondation'"
                        >
                          <div class="dropdown-item">Accommondation</div>
                        </router-link>

                        <router-link
                          class="rl"
                          tag="rl"
                          to="/faq"
                          v-scroll-to="'#gettinghere'"
                          @click.native="changeShowItem('showGettingHere')"
                          ><div class="dropdown-item">Getting Here</div>
                        </router-link>

                        <router-link
                          class="rl"
                          tag="rl"
                          to="/faq"
                          v-scroll-to="'#map'"
                          @click.native="changeShowItem('showMap')"
                          ><div class="dropdown-item">Map</div>
                        </router-link>
                        <router-link
                          class="rl"
                          tag="rl"
                          to="/faq"
                          v-scroll-to="'#guestbook'"
                          ><div class="dropdown-item">Guestbook</div>
                        </router-link>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div style="padding-top: 80px">
                <router-view />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer">
        <div class="row">
          <div class="col-md-12 col-lg-4">
            <p class="footer-title">website guideline:</p>
            <div class="glL">
              <div class="footer-content">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-xs-12 col-md-4">
                      <ul>
                        <li class="guidelinetitle">what-</li>
                        <li>
                          <router-link class="rl" tag="rl" to="/"
                            >home</router-link
                          >
                        </li>
                        <li>
                          <router-link class="rl" tag="rl" to="/news"
                            >news</router-link
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="col-xs-12 col-md-4">
                      <ul>
                        <li class="guidelinetitle">who-</li>
                        <li>
                          <router-link class="rl" tag="rl" to="/lineup"
                            >lineup</router-link
                          >
                        </li>
                        <li>
                          <router-link class="rl" tag="rl" to="/timetable"
                            >timetable</router-link
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="col-xs-12 col-md-4">
                      <ul>
                        <li class="guidelinetitle">how-</li>
                        <li>
                          <router-link
                            class="rl"
                            tag="rl"
                            to="/shopping/customer_orders"
                            >shopping</router-link
                          >
                        </li>
                        <li>
                          <router-link class="rl" tag="rl" to="/faq"
                            >faq</router-link
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="glS">
              <div class="footer-content">
                <div
                  data-toggle="collapse"
                  data-target="#one"
                  class="footer_title jcsb aic p-2"
                >
                  <span class="guidelinetitle">what-</span>
                  <span><i class="fas fa-plus"></i></span>
                </div>
                <div id="one" class="collapse" data-parent="#glS">
                  <ul>
                    <li><router-link tag="rl" to="/">home</router-link></li>
                    <li><router-link tag="rl" to="/news">news</router-link></li>
                  </ul>
                </div>
                <div
                  data-toggle="collapse"
                  data-target="#two"
                  class="footer_title jcsb aic p-2"
                >
                  <span class="guidelinetitle">who-</span>
                  <span><i class="fas fa-plus"></i></span>
                </div>
                <div id="two" class="collapse" data-parent="#glS">
                  <ul>
                    <li>
                      <router-link tag="rl" to="/lineup">lineup</router-link>
                    </li>
                    <li>
                      <router-link tag="rl" to="/timetable"
                        >timetable</router-link
                      >
                    </li>
                  </ul>
                </div>
                <div
                  data-toggle="collapse"
                  data-target="#three"
                  class="footer_title jcsb aic p-2"
                >
                  <span class="guidelinetitle">how-</span>
                  <span><i class="fas fa-plus"></i></span>
                </div>
                <div id="three" class="collapse" data-parent="#glS">
                  <ul>
                    <li>
                      <router-link tag="rl" to="/shopping/customer_orders"
                        >shopping</router-link
                      >
                    </li>
                    <li><router-link tag="rl" to="/faq">faq</router-link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-4">
            <p class="footer-title">subscribe newsletter:</p>
            <div class="footer-content p-2">
              <form action="newsletter.php" method="post" name="newsletter">
                <input
                  type="email"
                  class="emailinput my-2 w-100"
                  name="useremail"
                  placeholder="your email"
                  d-block
                />
                <input
                  type="submit"
                  class="subscribe my-2 w-100"
                  value="Subscribe!"
                  d-block
                />
              </form>
            </div>
          </div>
          <div class="col-md-12 col-lg-4">
            <p class="footer-title">contact us:</p>
            <div class="footer-content">
              <a href="mailto:fishcha842@gmail.com">
                <img
                  class="socialicon"
                  src="@/assets/image/socialicon/unnamed.png"
                />
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
                      <h5 class="modal-title" id="exampleModalLongTitle">
                        Sincerely
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body text-left">
                      <p>
                        Sorry, we are thinking about not establishing a fb
                        account, since it is full of old people only.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <a href="https://www.instagram.com/?hl=zh-tw">
                <img
                  class="socialicon"
                  src="@/assets/image/socialicon/Instagram_AppIcon_Aug2017.png"
                />
              </a>
              <a href="https://www.youtube.com/feed/trending">
                <img
                  class="socialicon"
                  src="@/assets/image/socialicon/youtube_social_circle_red.png"
                />
              </a>
            </div>
          </div>
        </div>
        <hr />
        <p class="copyright jcc">2020 taitaifest copyright reserved</p>
        <p class="github">
          <a href="https://github.com/fishcha84/taitaifest_vue_cli3"> github</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
// import Breadcrumb from './components/Breadcrumb.vue'
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  // components: {
  //   Breadcrumb,
  // },
  computed: {
    ...mapGetters(["showItem", "isLoading"]),
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["changeShowItem", "updateLoading"]),
  },
  mounted() {
    $(function () {
      $('[data-toggle="popover"]').popover();
    });

    $(".rl").on("click", () => {
      if ($(window).width() < 992) {
        $(".navbar-toggler").click();
      }
    });
  },
};
</script>

<style lang="scss">
@import "./assets/all";
@import "./assets/taitaifest.css";

#app {
  max-width: 100%;
  overflow-x: hidden;

  height: 100%;
  margin: 0;

  display: flex;
  flex-direction: column;
}

li .rl,
li span {
  color: hotpink;
}

li .rl:hover,
li span:hover {
  color: midnightblue;
  cursor: pointer;
}

.dropdown-menu .dropdown-item:hover {
  background-color: midnightblue;
  color: white;
}

.dropdown:hover .dropdown-menu {
  display: block;
  margin-top: 0px;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  text-align: left;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content span {
  display: block;
  margin: 5px;
}

.sticky-foot {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.sticky-foot-main {
  flex: 1;
}

.footer,
.footer-content li .rl {
  background-color: pink;
  width: 100%;
  color: midnightblue;
  text-align: center;
}

.footer-content li .rl:hover {
  cursor: pointer;
  color: white;
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
  border: 2px solid midnightblue;
  cursor: pointer;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}

.subscribe {
  -webkit-border-radius: 10;
  -moz-border-radius: 10;
  border-radius: 28px;
  color: midnightblue;
  font-size: 20px;
  background: none;
  padding: 5px;
  border: 2px solid midnightblue;
  text-decoration: none;
}

.subscribe:hover,
.subscribe:active {
  background: midnightblue;
  color: white;
}

form rl {
  color: midnightblue;
  height: 50px;
  line-height: 50px;
}

form rl:hover,
form rl:active {
  color: hotpink;
  cursor: pointer;
  text-decoration: none;
}

.socialicon {
  width: 50px;
  height: 50px;
  margin: 5px;
  filter: grayscale(100%);
  cursor: pointer;
}

.github a {
  color: midnightblue;
}

.github a:hover {
  text-decoration: none;
  color: white;
}

@media screen and (max-width: 554px) {
  .glL {
    display: none;
  }
}

@media screen and (min-width: 554px) {
  #glS {
    display: none;
  }
}
</style>
