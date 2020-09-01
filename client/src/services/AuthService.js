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
    // return axios.get(url + '/').then(response => response.data)
  }
}
