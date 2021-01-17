<template>
  <div class="timetable">
    <div class="container-fluid m-2">
      <div class="row jcc aic" style="height: 300px">
        <div class="col-md-12 col-lg-6">
          <div
            data-type="countdown"
            data-id="2373624"
            class="tickcounter"
            style="width: 100%; position: relative; padding-bottom: 25%"
          >
            <a
              href="//www.tickcounter.com/countdown/2373624/days-until-the-start-of-the-2021-taitaifest"
              title="days until the start of the 2021 Taitaifest"
              >days until the start of the 2021 Taitaifest</a
            ><a href="//www.tickcounter.com/" title="Countdown">Countdown</a>
          </div>
        </div>
      </div>
      <div class="row m-2">
        <div class="col jcc">
          <h5 style="color: midnightblue">
            Book a flight ticket to Taiwan right away and save the airlines that
            are suffered due to covid-19.
          </h5>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-4 jcc aic airline" style="height: 200px">
          <a href="https://www.starlux-airlines.com/"
            ><img
              src="image/airlines/starlux.jpg"
              alt="starlux"
              class="airlineimg starlux"
          /></a>
          <div class="ftt">fly to Taiwain</div>
        </div>
        <div class="col-sm-12 col-md-4 jcc aic" style="height: 200px">
          <a href="https://www.evaair.com/zh-tw/index.html">
            <img
              src="image/airlines/evaAir.png"
              alt="evaair"
              class="airlineimg"
            />
          </a>
        </div>
        <div class="col-sm-12 col-md-4 jcc aic" style="height: 200px">
          <a href="https://www.china-airlines.com/tw/zh">
            <img
              src="image/airlines/chinaAirlines.png"
              alt="chinaAirlines"
              class="airlineimg"
            />
          </a>
        </div>
      </div>

      <div class="row m-2">
        <div class="col">
          <div class="jcc aic" style="color: hotpink">
            <h5 style="color: hotpink">Step1 Enter your name</h5>
            <input
              class="m-2"
              type="text"
              v-model="username"
              style="border: 2px solid hotpink"
            />
          </div>
        </div>
      </div>
      <div class="row m-2">
        <div class="col">
          <div class="jcc aic" style="color: hotpink">
            <h5 style="color: hotpink">
              Step2 Click artist below to markup your own timetable and save as
              a pdf
            </h5>
          </div>
        </div>
      </div>

      <div class="row m-2">
        <div class="col">
          <div id="capture">
            <table class="timetabletable w-100">
              <tr>
                <th colspan="5">
                  <h3>{{ username }}'s Taitaifest timetable</h3>
                </th>
              </tr>
              <tr>
                <th></th>
                <th colspan="2">Day ONE</th>
                <th colspan="2">Day TWO</th>
              </tr>
              <tr>
                <th></th>
                <th>Stage1</th>
                <th>Stage2</th>
                <th>Stage1</th>
                <th>Stage2</th>
              </tr>
              <tr>
                <td>1330</td>
                <td
                  id="bikini_kill"
                  class="off"
                  @click="changeClassName('#bikini_kill')"
                >
                  Bikini Kill
                </td>
                <td
                  id="side_chick"
                  class="off"
                  @click="changeClassName('#side_chick')"
                >
                  Side Chick
                </td>
                <td>TBC</td>
                <td>TBC</td>
              </tr>
              <tr>
                <td>1430</td>
                <td
                  id="tones_and_i"
                  class="off"
                  @click="changeClassName('#tones_and_i')"
                >
                  Tones and I
                </td>
                <td
                  id="the_strokes"
                  class="off"
                  @click="changeClassName('#the_strokes')"
                >
                  The Strokes
                </td>
                <td>TBC</td>
                <td>TBC</td>
              </tr>
              <tr>
                <td>1530</td>
                <td>TBC</td>
                <td>TBC</td>
                <td>TBC</td>
                <td>TBC</td>
              </tr>
              <tr>
                <td>1630</td>
                <td>TBC</td>
                <td>TBC</td>
                <td>TBC</td>
                <td>TBC</td>
              </tr>
              <tr>
                <td>1730</td>
                <td>TBC</td>
                <td>TBC</td>
                <td>TBC</td>
                <td>TBC</td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <div class="row m-2">
        <div class="col jcc">
          <input
            class="btn btn-outline-primary"
            @click="save()"
            value="Save your timetable"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  data () {
    return {
      username: ''
    }
  },
  methods: {
    changeClassName (item) {
      $(item).toggleClass('on off')
    },
    save () {
      window.scrollTo(0, 0)
      this.getPdf(this.username + "'s Taitaifest timetable")
    }
  },
  mounted () {
    (function (d, s, id) {
      var js
      var pjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return
      js = d.createElement(s)
      js.id = id
      js.src = '//www.tickcounter.com/static/js/loader.js'
      pjs.parentNode.insertBefore(js, pjs)
    })(document, 'script', 'tickcounter-sdk')
  }
}
</script>

<style>
.airline .ftt {
  width: 100%;
  height: 60px;
  display: none;
}
.airline:hover .airline .ftt {
  display: inline-block;
  transition: 0.5s;
}

.airlineimg {
  width: 100%;
  max-height: 150px;
  object-fit: cover;
}

.starlux {
  object-position: 50% 38%;
}

.on {
  background-color: lightyellow;
}

.timetabletable tr th,
.timetabletable tr td {
  height: 20px;
}
</style>
