<template>
    <div class="text-right mt-3 mr-3" v-if="this.$store.getters.isLoggedIn">
        <a class="btn add-button text-center" @click="logout">
            <font-awesome-icon icon="sign-out-alt" size="2x" />
        </a>
    </div>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('logout')
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style scoped>

</style>
