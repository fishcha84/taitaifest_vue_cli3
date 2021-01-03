<template>
  <div>
    <a class="nav-link" href="#" @click.prevent="logout">Log out</a>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout() {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/logout`
      vm.$http.post(api).then((response) => {
        if (response.data.success) {
          vm.$router.push('/shopping/signin')
        }
      })
    },
  },
}
</script>

<style></style>
