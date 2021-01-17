<template>
  <div class="jcc">
    <paginate
      :value="pageNum"
      :page-count="totalPageCount"
      :click-handler="changePage"
      :page-range="3"
      :margin-pages="1"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination'"
      :page-class="'page-item'"
      :page-link-class="'page-link'"
      :prev-class="'page-item'"
      :next-class="'page-item'"
      :prev-link-class="'page-link'"
      :next-link-class="'page-link'"
      :active-class="'active'"
    >
    </paginate>
  </div>
</template>

<script>
import Paginate from 'vuejs-paginate'
export default {
  name: 'pagination',
  components: {
    Paginate
  },
  props: {
    pageNum: {
      type: Number,
      default: 1
    },
    totalPageCount: {
      type: Number
    },
    currentPage: {
      type: Number
    }
  },
  date () {
    return {
      currentPageNum: this.pageNum
    }
  },
  methods: {
    changePage (num) {
      this.currentPageNum = num
      this.$emit('updatePageNum', num)
    }
  }
}
</script>
