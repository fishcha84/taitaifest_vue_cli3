<template>
  <div class="timetable">
    <div>
      <ul class="nav nav-tabs">
        <li class="nav-item day1" ><a class="nav-link active" href="#day1" data-toggle='tab'>day1</a></li>
        <li class="nav-item day2"><a class="nav-link" href="#day2" data-toggle='tab' >day2</a></li>
      </ul>
      <div class="tab-content table-hover">
        <div class="tab-pane active" id="day1">
          <table class="timetabletable w-100">
            <tr>
              <th>time</th>
              <th>stage1</th>
              <th>stage2</th>
            </tr>
            <tr>
              <td>1330-1420</td>
              <td>bikini kill</td>
              <td>side chick</td>
            </tr>
            <tr>
              <td>1430-1520</td>
              <td>tones and i</td>
              <td>the strokes</td>
            </tr>
            <tr>
              <td>1530-1620</td>
              <td>TBC</td>
              <td>TBC</td>
            </tr>
            <tr>
              <td>1630-1720</td>
              <td>TBC</td>
              <td>TBC</td>
            </tr>
            <tr>
              <td>1730-1820</td>
              <td>TBC</td>
              <td>TBC</td>
            </tr>
          </table>
        </div>
        <div class="tab-pane" id="day2">
          <table class="timetabletable">
            <tr>
              <th>time</th>
              <th>stage1</th>
              <th>stage2</th>
            </tr>
            <tr>
              <td>1330-1420</td>
              <td>TBC</td>
              <td>TBC</td>
            </tr>
            <tr>
              <td>1430-1520</td>
              <td>TBC</td>
              <td>TBC</td>
            </tr>
            <tr>
              <td>1530-1620</td>
              <td>TBC</td>
              <td>TBC</td>
            </tr>
            <tr>
              <td>1630-1720</td>
              <td>TBC</td>
              <td>TBC</td>
            </tr>
            <tr>
              <td>1730-1820</td>
              <td>TBC</td>
              <td>TBC</td>
            </tr>
          </table>
        </div>
      </div>
  </div>

  
  </div>
</template>

<script>

export default {
  name: 'Timetable',
  components: {
   
  }
}
</script>
