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
              <img
                class="shortnewsimg"
                :src="`${publicPath}image/news/${item.newsTitle}.jpg`"
                alt=""
              />
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
            <h3 class="newsdate" align="right">
              {{ showContentItem.newsReleasedDate }}
            </h3>
            <hr />
            <img
              class="newsimg"
              :src="`${publicPath}image/news/${showContentItem.newsTitle}.jpg`"
              alt=""
            />
            <div v-html="showContentItem.newsContent"></div>
            <iframe
              src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Ffishcha842.000webhostapp.com%2F%23%2Fnews&width=450&layout=standard&action=like&size=small&share=true&height=35&appId=2646271298939503"
              width="450"
              height="35"
              style="border: none; overflow: hidden"
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "NewsComponent",
  data() {
    return {
      news: [],
      publicPath: process.env.BASE_URL,
      showContent: false,
      showContentItem: {},
    };
  },
  methods: {
    a(item, idx) {
      this.showContent = true;
      this.showContentItem = item;
    },
    b() {
      this.showContent = false;
      this.showContentItem = {};
    },
  },
  created() {
    this.$http.get("news.json").then((response) => {
      this.news = response.data;
    });
  },
  mounted() {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  },
};
</script>

<style>
@media screen and (max-width: 480px) {
  .shortnewsimg {
    height: 150px;
  }
}
.shortnewsdiv {
  margin: 10px;
  border: none;
}
.shortnewsdiv:hover {
  cursor: pointer;
}

.shortnewsimg {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.shortnewstitle {
  vertical-align: middle;
  line-height: 1em;
  color: midnightblue;
}

.shortnewsdate {
  color: gray;
}

.nd1 {
  height: 150px;
  float: left;
  border: none;
}

.nd2 {
  height: 100px;
  line-height: 100px;
  border: none;
  display: inline-block;
}

.nd3 {
  height: 50px;
  line-height: 50px;
  border: none;
  display: inline-block;
}

.ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
}

.newstitle {
  color: midnightblue;
  vertical-align: top;
}

.newsdate {
  color: gray;
}

.newsimg {
  width: 100%;
  height: 400px;
  object-fit: cover;
}
</style>
