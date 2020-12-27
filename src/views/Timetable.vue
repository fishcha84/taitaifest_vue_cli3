<template>
  <div class="timetable">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <div class="jcc" style="color: hotpink"><h5>click to markup your own timetable and save as a pic</h5></div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div id="capture" style="height: 300px">
            <table class="timetabletable">
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
                <td>1330-1420</td>
                <td id="bikini_kill" class="off" @click="changeClassName('#bikini_kill')">bikini kill</td>
                <td id="side_chick" class="off" @click="changeClassName('#side_chick')">side chick</td>
                <td>TBC</td>
                <td>TBC</td>
              </tr>
              <tr>
                <td>1430-1520</td>
                <td id="tones_and_i" class="off" @click="changeClassName('#tones_and_i')">tones and i</td>
                <td id="the_strokes" class="off" @click="changeClassName('#the_strokes')">the strokes</td>
                <td>TBC</td>
                <td>TBC</td>
              </tr>
              <tr>
                <td>1530-1620</td>
                <td>TBC</td>
                <td>TBC</td>
                <td>TBC</td>
                <td>TBC</td>
              </tr>
              <tr>
                <td>1630-1720</td>
                <td>TBC</td>
                <td>TBC</td>
                <td>TBC</td>
                <td>TBC</td>
              </tr>
              <tr>
                <td>1730-1820</td>
                <td>TBC</td>
                <td>TBC</td>
                <td>TBC</td>
                <td>TBC</td>
              </tr>
            </table>
          </div>
          <div class="jcc m-2">
            <button class="btn btn-outline-primary" @click="save()">save your timetable</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import html2canvas from 'html2canvas'

export default {
  methods: {
    changeClassName(item) {
      $(item).toggleClass('on off')
    },
    save() {
      html2canvas(document.querySelector('#capture')).then((canvas) => {
        let image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
        window.location.href = image
      })
    },
  },
}
</script>

<style>
.on {
  background-color: lightyellow;
}
</style>
