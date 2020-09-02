import axios from 'axios'
const url = 'https://bowtie.mailbutler.io/api/v2/'

export default {
  login (credentials) {
    return axios.post(url + 'users/login',
      { email: credentials.email,
        password: credentials.password
      })
      .then((session) => {
        return session
      })
      .catch(e => console.log(e))
  },
  getNotes () {
    return axios.get(url + 'notes')
      .then((notes) => {
        return notes.data
      }).catch(e => console.log(e))
  },
  updateNote (id, text) {
    return axios.patch(url + 'notes/' + id, {text: text})
      .then(() => {
        console.log('Note updated')
      }).catch(e => console.log(e))
  },
  addNote () {
    const params = {
      context: 'Neuer Kontext ohne Mail',
      text: 'Deine neue Notiz'
    }
    return axios.post(url + 'notes', params)
      .then(() => {
        console.log('Note added')
      }).catch(e => console.log(e))
  },
  deleteNote (id) {
    return axios.delete(url + 'notes/' + id)
      .then(() => {
        console.log('Note deleted')
      }).catch(e => console.log(e))
  }
}
