<template>
  <div class="timetable">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <div class="jcc aic" style="color: hotpink">
            <h5>step1 enter your name</h5>
            <input class="m-2" type="text" v-model="username" style="border: 2px solid hotpink" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="jcc aic" style="color: hotpink">
            <h5>step2 click artist below to markup your own timetable and save as a pdf</h5>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div id="capture">
            <table class="timetabletable w-100" id="customers">
              <tr>
                <th colspan="5">
                  <h3>{{ username }}'s taitaifest timetable</h3>
                </th>
              </tr>
              <tr>
                <th></th>
                <th colspan="2">day one</th>
                <th colspan="2">day two</th>
              </tr>
              <tr>
                <th></th>
                <th>stage1</th>
                <th>stage2</th>
                <th>stage1</th>
                <th>stage2</th>
              </tr>
              <tr>
                <td>1330</td>
                <td id="bikini_kill" class="off" @click="changeClassName('#bikini_kill')">bikini kill</td>
                <td id="side_chick" class="off" @click="changeClassName('#side_chick')">side chick</td>
                <td>TBC</td>
                <td>TBC</td>
              </tr>
              <tr>
                <td>1430</td>
                <td id="tones_and_i" class="off" @click="changeClassName('#tones_and_i')">tones and i</td>
                <td id="the_strokes" class="off" @click="changeClassName('#the_strokes')">the strokes</td>
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
          <button class="btn btn-outline-primary" id="capturebtn" @click="save()">save your timetable</button>
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
      this.getPdf(this.username + "' taitaifest timetable")
    },
  },
}
</script>

<style>
.on {
  background-color: lightyellow;
}
</style>
