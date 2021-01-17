<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12 col-md-4 col-lg-3" style="padding: 20px">
          <div style="border: 3px solid hotpink; padding: 10px">
            <div class="jcc">
              <div class="btn" style="background-color: hotpink; color: white; font-style: bold">
                FOUNTAIN HEADLINERS
              </div>
            </div>

            <div class="fountainheadlinerstitle mt-2">
              I.Choose artists below that you would like them to be headliners:
            </div>
            <form action="vote.php" method="post">
              <span class="form-group" v-for="(headliner, idx) in headliners" :key="idx" style="margin-right: 24px">
                <input
                  :id="headliner.artist"
                  type="checkbox"
                  name="voteforartist[]"
                  :value="headliner.artist"
                  v-model="voteforartist"
                />
                <label :for="headliner.artist">{{ headliner.artist }}</label>
              </span>

              <div class="form-group">
                <input
                  type="submit"
                  class="btn btn-outline-primary btn-block"
                  name="formSubmit"
                  value="Vote! and see result"
                />
              </div>
            </form>
            <p class="fountainheadlinerstitle mt-2">II.Otherwise, make a wish:</p>
            <form action="recommend.php" method="post">
              <div class="form-group">
                <input
                  class="form-control"
                  type="text"
                  name="artist"
                  placeholder="key in an artist name"
                  v-model="recommendartist.artist"
                />
              </div>
              <div class="form-group">
                <input
                  type="submit"
                  class="btn btn-outline-primary btn-block"
                  name="formSubmit"
                  value="Add to the list!"
                />
              </div>
            </form>
          </div>
        </div>
        <div class="col-xs-12 col-md-8 col-lg-9" style="padding: 20px">
          <div class="row">
            <div class="col">
              <div
                class="pb progress-bar bg-warning progress-bar-striped progress-bar-animated"
                v-bind:style="{ width: progresslength + '%' }"
              >
                {{ progresslength }}% lineup released
              </div>
            </div>
          </div>

          <div class="row py-2">
            <div class="col">
              <h5 class="tac" style="color: midnightblue">See who would perform at the fest by genre</h5>
              <div class="form-group">
                <select class="form-control" v-model="selectedGenre">
                  <option v-for="(genre, key) in genres" :key="key" :value="genre">{{ genre }}</option>
                </select>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-md-6" v-for="(post, idx) in filteredPosts" :key="idx">
              <div class="card lineupcard">
                <img class="card-img-top" :src="post.imgUrl" :alt="post.artist" />
                <div class="card-body card-bodylineup">
                  <h5 class="card-title tac">{{ post.artist }}</h5>
                  <p class="card-text">{{ post.introduction }}</p>
                  <a :href="post.musicVideoUrl" class="btn btn-danger d-block">
                    <i class="fas fa-angle-left"></i>{{ post.musicVideoName }}<i class="fas fa-angle-right"></i
                  ></a>
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
export default {
  name: 'Lineup',

  data () {
    return {
      progresslength: 0,
      posts: [],
      genres: ['All', 'Pop', 'Rock', 'Punk'],
      selectedGenre: 'All',
      headliners: [],
      voteforartist: [],
      recommendartist: { artist: '' }
    }
  },

  methods: {
    getPosts () {
      const vm = this
      vm.$http.get('lineup.json').then((response) => {
        vm.posts = response.data
        vm.progresslength = (vm.posts.length / 20) * 100
      })
    },
    getHeadliners () {
      this.$axios.get('https://fishcha842.000webhostapp.com/headliners.php').then((response) => {
        this.headliners = response.data
      })
    }
    // toFormData(obj) {
    //   let fd = new FormData()
    //   for (let i in obj) {
    //     fd.append(i, obj[i])
    //   }
    //   return fd
    // },

    // vote() {
    //   let fd = this.toFormData(this.voteforartist)
    //   this.$axios.post('https://fishcha842.000webhostapp.com/vote.php', fd).then((response) => {})
    // },

    // recommend() {
    //   let fd = this.toFormData(this.recommendartist)
    //   this.$axios.post('https://fishcha842.000webhostapp.com/recommend.php', fd).then((response) => {
    //     this.recommendartist = { artist: '' }
    //   })
    // },
  },

  computed: {
    filteredPosts () {
      const vm = this
      const selectedGenre = vm.selectedGenre
      if (selectedGenre === 'All') {
        return vm.posts
      } else {
        return vm.posts.filter((post) => {
          return post.genre === selectedGenre
        })
      }
    }
  },

  created () {
    this.getHeadliners()
    this.getPosts()
  }
}
</script>

<style lang="scss" scoped>
.fountainheadlinerstitle {
  color: hotpink;
}
.headliners_list {
  text-align: left;
  position: relative;
  left: 46%;
}

#glS ul li rl,
.headliners_list ul li {
  list-style: none;
}

#wish {
  margin-bottom: 10px;
}

.card {
  height: 450px;
}
.card-img-top {
  height: 200px;
  object-fit: cover;
}
.card-text {
  height: 80px;
}

.pb {
  min-width: 200px;
}
</style>
