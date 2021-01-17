<template>
  <div id="dashboard">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12 col-lg-3">
          <Sidebar />
        </div>
        <div class="col-sm-12 col-lg-9">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  name: "Dashboard",
  components: {
    Sidebar,
    Pagination,
  },
  created() {
    const myCookie = document.cookie.replace(
      /(?:(?:^|.*;\s*)changToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    this.$http.defaults.headers.common.Authorization = myCookie;
  },
};
</script>
