<template>
  <div class="newscomponent">
    <div v-if="!showContent">
      <div
        class="container-fluid shortnewsdiv"
        v-for="(item, idx) in news"
        :key="idx"
        @click="a(item, idx)"
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="clicking for more..."
      >
        <div class="row">
          <div class="col-lg-4 col-sm-12">
            <div class="nd1">
              <img class="shortnewsimg" :src="`${publicPath}image/news/${item.newsTitle}.jpg`" alt="" />
            </div>
          </div>
          <div class="col-lg-8 col-sm-12">
            <div class="row">
              <div class="col nd2">
                <h1 class="shortnewstitle ellipsis">{{ item.newsTitle }}</h1>
              </div>
            </div>
            <div class="row">
              <div class="col nd3">
                <h3 class="shortnewsdate">{{ item.newsReleasedDate }}</h3>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>

    <div
      class="shortnewsdiv"
      v-if="showContent"
      @click="b()"
      data-bs-toggle="tooltip"
      data-bs-placement="bottom"
      title="clicking back"
    >
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <h1 class="newstitle">{{ showContentItem.newsTitle }}</h1>
            <h3 class="newsdate" align="right">{{ showContentItem.newsReleasedDate }}</h3>
            <hr />
            <img class="newsimg" :src="`${publicPath}image/news/${showContentItem.newsTitle}.jpg`" alt="" />
            <div v-html="showContentItem.newsContent"></div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'NewsComponent',
  data() {
    return {
      news: [],
      publicPath: process.env.BASE_URL,
      showContent: false,
      showContentItem: {},
    }
  },
  methods: {
    a(item, idx) {
      this.showContent = true
      this.showContentItem = item
    },
    b() {
      this.showContent = false
      this.showContentItem = {}
    },
  },
  mounted() {
    this.$http.get('news.json').then((response) => {
      this.news = response.data
    })
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    $(function () {
      $('[data-toggle="popover"]').popover()
    })
  },
}
</script>
