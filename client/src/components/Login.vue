<template>
    <div>
        <h1>Login</h1>
        <div class="data-form mt-5">
            <label for="inputEmail">Email address</label>
            <input class="form-control mb-2" type="email" v-model="email" required >
            <label for="inputPassword">Password</label>
            <input class="form-control" type="password" v-model="password" required>
            <button class="btn btn-lg btn-outline-primary btn-block mt-3" type="submit" @click="login">Login</button>
            
        </div>
    </div>
</template>

<script>
import AuthService from '@/services/AuthService.js'
export default {
  data () {
    return {
      email: '',
      password: '',
      msg: ''
    }
  },
  methods: {
    async login () {
      try {
        const credentials = {
          email: this.email,
          password: this.password
        }
        const response = await AuthService.login(credentials)
        const token = response.data.token
        this.$store.dispatch('login', { token })
        this.$router.push('/')
      } catch (error) {
        console.log(error)
       
      }
    }
  }
}
</script>

<style scoped>

</style>
