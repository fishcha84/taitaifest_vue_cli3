<template>
  <div class="faq">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <div class="accordion" id="accordionExample">

            <div class="card">
              <div class="card-header" id="headingOne">
                <h4 class="mb-0">
                  <div class="faqbtn" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Accomondation
                  </div>
                  <!-- <button class="btn btn-link faqbtn" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Accomondation
                  </button> -->
                </h4>
              </div>

              <div id="collapseOne" class="collapse" :class="{show:showItem==='showAccommondation'}" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body">
                  <ul>
                    <li>tent</li>
                    <li>airbnb</li>
                    <li>car</li>
                  </ul>
                </div>
              </div>
            </div>


            <div class="card">
              <div class="card-header" id="headingTwo">
                <h4 class="mb-0">
                  <div class="faqbtn" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"  aria-controls="collapseTwo">
                    Getting Here
                  </div>
                  <!-- <button class="btn btn-link faqbtn" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"  aria-controls="collapseTwo">
                    Getting Here
                  </button> -->
                </h4>
              </div>

              <div id="collapseTwo" class="collapse" :class="{show:showItem==='showGettingHere'}"  aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div class="card-body">

                  <ul>
                    <li>coach</li>
                    <li>train</li>
                    <li>car</li>
                    <li>uBike<span style="color:blue">(real-time update)</span></li>
                    <div style="color:blue">
                      <div>spot:{{ uBike101.aren }}</div>
                      <div>available:{{ uBike101.bemp }}</div>
                    </div>
                    <li>local wether report<span style="color:blue">(real-time update)</span></li>
                    <div style="color:blue">
                      <div>temp in {{ taipeiWeather.parameter[0].parameterValue }} {{ taipeiWeather.parameter[2].parameterValue }}:{{ taipeiWeather.weatherElement[3].elementValue }}℃</div>
                    </div>
                  </ul>

                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-header" id="headingThree">
                <h4 class="mb-0">
                  <div class="faqbtn" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"  aria-controls="collapseThree">
                    Map
                  </div>
                  <!-- <button class="btn btn-link faqbtn" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"  aria-controls="collapseThree">
                    Map
                  </button> -->
                </h4>
              </div>
              <div id="collapseThree" class="collapse" :class="{show:showItem==='showMap'}"  aria-labelledby="headingThree" data-parent="#accordionExample">
                <div class="card-body">
                  <div class="embed-responsive map" >
                    <iframe class="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.002890183707!2d121.5623502150063!3d25.03397598397251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb6da9c9e1f%3A0x1206bcf082fd10a6!2zMTEw5Y-w5YyX5biC5L-h576p5Y2A5L-h576p6Lev5LqU5q61N-iZnw!5e0!3m2!1szh-TW!2stw!4v1592107144954!5m2!1szh-TW!2stw" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>



// import axios from 'axios';

import $ from 'jquery';
import { mapGetters,mapActions } from 'vuex';

export default {
  name: 'Faq',
  components: {
  },
  data(){
    return{
      uBike101:{},
      taipeiWeather:{}
    }
  },
  methods:{

    ...mapActions(['changeshowItem']),
   
    getuBike101(){
      const vm=this;
      const api='https://tcgbusfs.blob.core.windows.net/blobyoubike/YouBikeTP.json';
      vm.$axios.get(api).then((res)=>{
        vm.uBike101=res.data["retVal"]["0007"];
      })
    },

    changeshowItem(item){
      this.$store.dispatch('changeshowItem',item)
    },

    getTemp(){
      const vm=this;
      const api='https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0001-001?Authorization=rdec-key-123-45678-011121314';

      vm.$axios.get(api).then((res)=>{
        for(var i=0;i<res.data.records.location.length;i++){
          if(res.data.records.location[i]['locationName']==="信義"){
            vm.taipeiWeather=res.data.records.location[i];
          }
        }

      })
    }
  },
  computed:{
    ...mapGetters(['showItem']),
  },
  created(){
    this.getuBike101();
    this.getTemp();
  },
  mounted(){
    $('.collapse').collapse();
  }
  
}
</script>

