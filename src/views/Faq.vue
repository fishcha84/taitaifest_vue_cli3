<template>
  <div class="faq">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <div class="accordion" id="accordionExample">
            <div class="card">
              <div class="card-header" id="accommondation">
                <h4 class="mb-0">
                  <div
                    class="faqbtn"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    Accommondation
                  </div>
                </h4>
              </div>

              <div
                id="collapseOne"
                class="collapse"
                :class="{ show: showItem === 'showAccommondation' }"
                aria-labelledby="exaccommondation"
                data-parent="#accordionExample"
              >
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
              <div class="card-header" id="gettinghere">
                <h4 class="mb-0">
                  <div
                    class="faqbtn"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Getting Here
                  </div>
                </h4>
              </div>

              <div
                id="collapseTwo"
                class="collapse"
                :class="{ show: showItem === 'showGettingHere' }"
                aria-labelledby="gettinghere"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  <ul>
                    <li>coach</li>
                    <li>train</li>
                    <li>car</li>
                    <li>uBike<span style="color: blue">(real-time update)</span></li>
                    <div style="color: blue">
                      <div>spot:{{ uBike101.aren }}</div>
                      <div>available:{{ uBike101.bemp }}</div>
                    </div>
                    <li>local wether report<span style="color: blue">(real-time update)</span></li>
                    <div style="color: blue">
                      <div>temp in {{ targetLocation.locationName }} is {{ taipeiTemp }}℃</div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-header" id="map">
                <h4 class="mb-0">
                  <div
                    class="faqbtn"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Map
                  </div>
                </h4>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                :class="{ show: showItem === 'showMap' }"
                aria-labelledby="map"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  <div class="embed-responsive map">
                    <iframe
                      class="embed-responsive-item"
                      src="https://www.google.com/maps/d/u/0/embed?mid=1ieObMQsFQLx3s3RVU0JK7WHhmmZ7Vkdw"
                      width="640"
                      height="480"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col" style="padding-left: 50px" id="guestbook">
          <h3 class="faqbtn">Guestbook</h3>
        </div>
      </div>

      <div class="row" style="padding: 30px">
        <div class="col-xs-12 col-md-6">
          <div v-for="msg in filteredmsgs" :key="msg.posttime">
            <div>
              <span>“{{ msg.content }}”</span
              ><span style="color: gray"> --said by {{ msg.author }} at {{ msg.posttime }}</span>
            </div>
            <hr style="width: 90%" />
          </div>
          <pagination @updatePageNum="filterByPageNum" :pageNum="pageNum" :totalPageCount="totalPageCount">
          </pagination>
        </div>
        <div class="col-xs-12 col-md-6">
          <form action="post.php" method="post">
            <div class="form-group text-center">
              <h5 style="color: midnightblue">Please leave your message here, then it would be shown on the left.</h5>
            </div>
            <div class="form-group">
              <label for="author">Author:</label>
              <input class="form-control" id="author" type="text" name="author" cols="50" />
            </div>
            <div class="form-group">
              <label for="content">Content:</label>
              <textarea class="form-control" id="content" name="content" cols="50" rows="4"></textarea>
            </div>
            <div class="form-group text-center">
              <input type="reset" class="btn btn-outline-secondary btn-block" value="rewrite" />
              <input type="submit" class="btn btn-outline-primary btn-block" value="Post!" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pagination from '@/components/Pagination.vue'
import $ from 'jquery'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Faq',
  components: {
    pagination
  },
  data () {
    return {
      rowsPerPage: 6,
      pageNum: 1,
      totalPageCount: 0,
      uBike101: {},
      targetLocation: {},
      taipeiTemp: '',
      msgs: [],
      filteredmsgs: []
    }
  },
  watch: {
    items: () => {
      this.$nextTick(() => [this.goAnchor(window.location.hash)])
    }
  },
  methods: {
    ...mapActions(['changeShowItem']),

    getuBike101 () {
      const vm = this
      const api = 'https://tcgbusfs.blob.core.windows.net/blobyoubike/YouBikeTP.json'
      vm.$axios.get(api).then((res) => {
        vm.uBike101 = res.data.retVal['0007']
      })
    },

    changeShowItem (item) {
      this.$store.dispatch('changeShowItem', item)
    },

    getTemp () {
      const vm = this
      const api =
        'https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/O-A0003-001?Authorization=rdec-key-123-45678-011121314&format=JSON'
      vm.$axios.get(api).then((res) => {
        const result = res.data.cwbopendata.location
        for (let i = 0; i < result.length; i++) {
          if (result[i].locationName === '臺北') {
            vm.targetLocation = res.data.cwbopendata.location[i]
            vm.taipeiTemp = vm.targetLocation.weatherElement[3].elementValue.value
          }
        }
      })
    },

    getmsgs () {
      const vm = this
      vm.$axios.get('https://fishcha842.000webhostapp.com/guestbook.php').then((response) => {
        vm.msgs = response.data
        vm.totalPageCount = Math.ceil(vm.msgs.length / vm.rowsPerPage)
        vm.filterByPageNum(1)
      })
    },

    filterByPageNum (num) {
      this.pageNum = num
      this.filteredmsgs = this.msgs.slice(this.rowsPerPage * (num - 1), this.rowsPerPage * num)
    }
  },
  computed: {
    ...mapGetters(['showItem'])
  },

  created () {
    this.getuBike101()
    this.getTemp()
    this.getmsgs()
  },
  mounted () {
    $('.collapse').collapse()
  }
}
</script>

<style>
.faqbtn {
  color: midnightblue;
}
.faqbtn:hover,
.faqbtn:active {
  cursor: pointer;
  font-weight: bold;
}

.map {
  width: 100%;
  height: 500px;
  border: 0;
}

.img-responsive {
  width: 100%;
  height: 100%;
}
</style>
