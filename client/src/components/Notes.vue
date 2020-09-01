<template>
  <div>
    <h1>Notes</h1>
    <div class="my-notes mt-4">
      <div id class="card small-card shadow-sm">
        <div class="card-header text-right p-0">
          <a class="btn delete-button">
            <font-awesome-icon icon="trash" />
          </a>
        </div>
        <div class="card-body pb-0">
          <div class="note-text" contenteditable="true"></div>
        </div>
      </div>

      <div id class="card small-card shadow-sm">
        <div class="card-header text-right p-0">
          <a class="btn delete-button">
            <font-awesome-icon icon="trash" />
          </a>
        </div>
        <div class="card-body pb-0">
          <div class="note-text" contenteditable="true"></div>
        </div>
      </div>
      </div>
      <div class="text-center mt-4 add-note">
        <a class="btn add-button text-center">
          <font-awesome-icon icon="plus" size="2x" />
        </a>
      </div>
    </div>

</template>

<script>
export default {
  data () {
    return {
      secretMessage: '',
      email: ''
    }
  },
  async created () {
    if (!this.$store.getters.isLoggedIn) this.$router.push({ name: 'Login' })
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style scoped>
.small-card.card {
  background-color: rgba(246, 204, 118, 0.35);
  border: 0;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2) !important;
}

.my-notes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-template-rows: auto;
  grid-gap: 2em;
  gap: 2em;
  align-items: baseline;
}

.note-text {
  overflow: hidden;
  resize: none;
  max-height: 70px;
  min-height: 70px;
  font-size: 14px;
  font-family: Open Sans, sans-serif;
  font-weight: 400;
  padding: 0;
  margin: 0;
  border: 0;
  background: transparent;
  outline: none;
  transition: max-height 0.3s ease-in-out;
}

.note-text:active,
.note-text:focus {
  max-height: 20000px;
  min-height: 70px;
  height: auto;
  transition: max-height 1s ease-in-out;
}

.card-header {
  background: transparent;
  border: 0;
}

.add-note > a {
  color: rgba(246, 204, 118, 0.5);
}
</style>
