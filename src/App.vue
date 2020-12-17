<template>
  <div id="app">
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light" >
      <router-link to="/home">
        <img src="@/assets/image/logo/logo.png" alt="taitaifestlogo" height='50px' data-container="body" data-toggle="popover" data-trigger="hover" data-placement="bottom" data-content="clicking here takes you home">
      </router-link>
      
      <button type="button" class="navbar-toggler" data-toggle='collapse' data-target='#navbarContent'>
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav mx-auto" align='auto'>
          <li class="nav-item">
            <router-link tag="rl" to="/news">News</router-link> |
          </li>
          <li class="nav-item">
            <router-link tag="rl" to="/fountain_headliners/vote_or_make_a_wish">FountainHeadliners</router-link> |
          </li>

          <li class="nav-item">
            <router-link tag="rl" to="/lineup">Lineup</router-link> |
          </li>
          <li class="nav-item">
            <router-link tag="rl" to="/timetable">Timetable</router-link> |
          </li>
          
          <li class="nav-item">
            <router-link tag="rl" to="/shopping/customer_orders">Shopping</router-link> |
          </li>

          <li class="nav-item dropdown">

            <span tag="rl">Faq</span> | 

            <div class="dropdown-content">

                <router-link tag="rl" to="/faq" @click.native="changeshowItem('showAccommondation')"><div class="mx-2">Accommondation</div>
                </router-link>
              
                <router-link tag="rl" to="/faq" @click.native="changeshowItem('showGettingHere')"><div class="mx-2">Getting Here</div>
                </router-link>

                <router-link tag="rl" to="/faq" @click.native="changeshowItem('showMap')"><div class="mx-2">Map</div>
                </router-link>

            </div>

          </li>

          <li>
              <router-link tag="rl" to="/guestbook">Guestbook</router-link>
          </li>
        </ul>
    
        <!-- <form>
          <router-link tag="rl" to="/login" method="post">login</router-link>
          <input type="search" class="search" placeholder="search">
        </form> -->

      </div>

    </nav>
    
    <Breadcrumb/>

    <router-view/>

    <footer>

      <div class="container-fluid">

        <div class="row justify-content-around ">
          

          <div class="col-md-4">

            <div class="footer-title">
              <p>website guideline:</p>
            </div>

            <div class="footer-content">

              <ul >
                <li>what-</li>
                <li><router-link tag="rl" to="/">home</router-link></li>
                <li><router-link tag="rl" to="/news">news</router-link></li>
              </ul>

              <ul>
                <li>who-</li>
                <li><router-link tag="rl" to="/fountain_headliners">headliners</router-link></li>
                <li><router-link tag="rl" to="/lineup">lineup</router-link></li>
                <li><router-link tag="rl" to="/timetable">timetable</router-link></li>
              </ul>

              <ul>
                <li>how-</li>
                <li><router-link tag="rl" to="/shopping/customer_orders">shopping</router-link></li>
                <li><router-link tag="rl" to="/faq">faq</router-link></li>
                <li><router-link tag="rl" to="/guestbook">guestbook</router-link></li>
              </ul>

            </div>

          </div>

          <div class="col-md-4">
            <div class="footer-title">
              <p>subscribe newsletter:</p>
            </div>
            <div class="footer-content">
              <form action="newsletter.php" method="post" name='newsletter'>
                <input type="email" name="useremail" placeholder="your email">
                <input type="submit" class="m-2" value="Subscribe!">
              </form>
            </div>
          </div>

          <div class="col-md-4" >

            <div class="footer-title">
              <p>contact us:</p>
            </div>
            
            <div class="footer-content">
              <a href="mailto:fishcha842@gmail.com"><img class="socialicon" src="@/assets/image/socialicon/envelope.png"></a>
              <img class="socialicon" src="@/assets/image/socialicon/facebook.png" data-toggle="modal" data-target="#exampleModalLong">
                <!-- Modal -->
                <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Sincerely</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body text-left" ><p>Sorry, we are thinking about not establishing a fb account, since it is full of old people only.</p>
                      </div>
                    </div>
                  </div>
                </div>
              <a href="https://www.instagram.com/?hl=zh-tw"><img class="socialicon" src="@/assets/image/socialicon/instagram.png"></a>
              <a href="https://www.youtube.com/feed/trending"><img class="socialicon" src="@/assets/image/socialicon/youtube.png"></a>
            </div>

          </div>        

	    	</div>

      	<hr>

        <!-- <div class="row"> -->
          <!-- <div class="col copyright"> -->
            <p>2020 taitaifest copyright reserved</p>
          <!-- </div> -->
        <!-- </div> -->

      </div>
    </footer>

  </div>
</template>


<script>



import $ from 'jquery';
import Breadcrumb from './components/Breadcrumb.vue'
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    Breadcrumb
  },
  computed:{
    ...mapGetters(['showItem','isLoading']),
    // isLoading(){
    //   return this.$store.state.isLoading
    // },
  },
  data(){
    return{
    
    }
  },
  methods:{
    ...mapActions(['changeshowItem','updateLoading'])
  },
  mounted(){
    $(function () {
      $('[data-toggle="popover"]').popover()
    });
  }
}

</script>

<style lang="scss">
@import './assets/all';
@import './assets/taitaifest.css';

</style>

