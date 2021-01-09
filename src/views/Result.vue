<template>
  <div class="result">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <Breadcrumb />
        </div>
      </div>
      <div class="row jcc m-2">
        <div class="col-md-6 col-xs-12">
          <table class="w-100">
            <thead>
              <tr>
                <th>artist</th>
                <th>score</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="headliner in headliners" :key="headliner.id">
                <td>{{ headliner.artist }}</td>
                <td>{{ headliner.score }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '../components/Breadcrumb.vue'
export default {
  name: 'Result',
  data() {
    return {
      headliners: [],
    }
  },
  components: {
    Breadcrumb,
  },
  methods: {
    // getHeadliners() {
    //   const vm = this
    //   vm.$axios.get('https://fishcha842.000webhostapp.com/headliners.php').then((response) => {
    //     vm.headliners = response.data
    //   })
    // },
  },
  created() {
    // this.getHeadliners
    this.$axios.get('https://fishcha842.000webhostapp.com/headliners.php').then((response) => {
      this.headliners = response.data
    })
  },
}
</script>
