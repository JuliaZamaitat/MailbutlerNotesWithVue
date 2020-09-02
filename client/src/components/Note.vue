
<template>
    <div>
        <div class="card small-card shadow-sm">
        <div class="card-header text-right p-0">
          <a class="btn delete-button" @click="deleteNote">
            <font-awesome-icon icon="trash" />
          </a>
        </div>
        <div class="card-body pb-0">
          <div class="note-text" contenteditable="true" @blur="updateNote" >{{ text }}</div>
        </div>
      </div>
    </div>
</template>

<script>
import AuthService from '@/services/AuthService.js'
export default {
  props: ['id', 'text'],
  methods: {
    updateNote (e) {
      AuthService.updateNote(this.id, e.target.innerText)
    },
    async deleteNote () {
      await AuthService.deleteNote(this.id)
      this.$parent.getNotes()
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
</style>
