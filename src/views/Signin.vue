<template>
  <div id="signin">
    <h1 class="tac" style="color: red">Vendor Owners ONLY</h1>
    <form class="form-signin" @submit.prevent="signin">
      <div class="form-group">
        <label for="inputEmail">Email address</label>
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="please enter your email address"
          v-model="user.username"
          required
          autofocus
        />
      </div>

      <div class="form-group">
        <label for="inputPassword">Password</label>
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="please enter your password"
          v-model="user.password"
          required
        />
      </div>
      <div class="form-group form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="rememberme"
          value="remember-me"
        />
        <label class="form-check-label" for="rememberme">Remember me</label>
      </div>
      <button
        type="submit"
        class="btn btn-outline-primary btn-block signinbutton"
      >
        Sign in
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Signin',

  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },

  methods: {
    signin () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/admin/signin`
      vm.$http.post(api, vm.user).then((response) => {
        if (response.data.success) {
          const token = response.data.token
          const expired = response.data.expired
          document.cookie = `changToken=${token}; expires=${new Date(
            expired
          )}; `
          vm.$router.push('/shopping/admin/products')
        }
      })
    }
  }
}
</script>

<style scoped>
.form-signin {
  width: 100%;
  max-width: 320px;
  margin: 10px auto;
}
</style>
