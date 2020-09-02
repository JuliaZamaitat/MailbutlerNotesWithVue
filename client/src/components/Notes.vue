<template>
  <div>
    <LogoutButton></LogoutButton>
    <h1>Notes</h1>
    <div class="my-notes mt-4"  v-for="note in notes" :key="note.id">
      <Note :id="note.id" :text="note.text"></Note>
    </div>

      <div class="text-center mt-4 add-note">
        <a class="btn add-button text-center" @click="addNote">
          <font-awesome-icon icon="plus" size="2x" />
        </a>
      </div>
    </div>

</template>

<script>
import AuthService from '@/services/AuthService.js'
import Note from '@/components/Note.vue'
import LogoutButton from '@/components/LogoutButton.vue'

export default {
  components: {
    Note,
    LogoutButton
  },
  data () {
    return {
      notes: []
    }
  },
  async created () {
    this.checkToken()
    window.addEventListener('unload', this.checkToken)
    this.getNotes()
  },
  beforeDestroy () {
    window.removeEventListener('unload', this.checkToken)
  },
  methods: {
    async getNotes () {
      this.notes = []
      let userNotes = await AuthService.getNotes()
      this.notes = userNotes
    },
    async addNote () {
      await AuthService.addNote()
      this.getNotes()
    },
    checkToken () {
      if (!this.$store.getters.isLoggedIn) this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style scoped>

.my-notes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-template-rows: auto;
  grid-gap: 2em;
  gap: 2em;
  align-items: baseline;
}

.add-note > a {
  color: rgba(246, 204, 118, 0.5);
}
</style>
