<template>
  <div class="sidebar">
    <div class="tac">Vendor Owners Only</div>
    <div class="tar logout">
      <a href="#" @click.prevent="logout">log out</a>
    </div>
    <div>
      <ul>
        <li>
          <router-link tag="rl2" to="/shopping/admin/products">
            <i class="fas fa-store"></i>
            Products
          </router-link>
        </li>
        <li>
          <router-link tag="rl2" to="/shopping/admin/orders">
            <i class="fas fa-clipboard-list"></i>
            Orders
          </router-link>
        </li>
        <li>
          <router-link tag="rl2" to="/shopping/admin/coupons">
            <i class="fas fa-ticket-alt"></i>
            Coupons
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  methods: {
    logout() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/logout`;
      vm.$http.post(api).then((response) => {
        if (response.data.success) {
          vm.$router.push("/shopping/signin");
        }
      });
    },
  },
};
</script>

<style scoped>
.sidebar {
  color: pink;
  background: gray;
  padding: 10px;
  margin: 10px;
  height: 95%;
}

li {
  list-style: none;
}

.logout a:hover,
.logout a:active,
li rl2:hover,
li rl2:active {
  cursor: pointer;
  text-decoration: none;
  color: hotpink;
}
</style>
