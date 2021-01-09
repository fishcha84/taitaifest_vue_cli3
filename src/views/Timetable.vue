<template>
  <div class="timetable">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <div class="jcc aic" style="color: hotpink">
            <h5>Step1 Enter your name</h5>
            <input class="m-2" type="text" v-model="username" style="border: 2px solid hotpink" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="jcc aic" style="color: hotpink">
            <h5>Step2 Click artist below to markup your own timetable and save as a pdf</h5>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div id="capture">
            <table class="timetabletable w-100" id="customers">
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
                <td id="bikini_kill" class="off" @click="changeClassName('#bikini_kill')">Bikini Kill</td>
                <td id="side_chick" class="off" @click="changeClassName('#side_chick')">Side Chick</td>
                <td>TBC</td>
                <td>TBC</td>
              </tr>
              <tr>
                <td>1430</td>
                <td id="tones_and_i" class="off" @click="changeClassName('#tones_and_i')">Tones and I</td>
                <td id="the_strokes" class="off" @click="changeClassName('#the_strokes')">The Strokes</td>
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

      <div class="row jcc">
        <div class="col jcc m-2">
          <input class="btn btn-outline-primary" @click="save()" value="Save your timetable" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'

export default {
  data() {
    return {
      username: '',
    }
  },
  methods: {
    changeClassName(item) {
      $(item).toggleClass('on off')
    },
    save() {
      window.scrollTo(0, 0)
      this.getPdf(this.username + "'s Taitaifest timetable")
    },
  },
}
</script>

<style>
.on {
  background-color: lightyellow;
}

.timetabletable tr th,
.timetabletable tr td {
  height: 10px;
}
</style>
