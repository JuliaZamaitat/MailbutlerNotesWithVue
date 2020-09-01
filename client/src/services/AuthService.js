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
  getSecretContent () {
    // return axios.get(url + '/').then(response => response.data)
  }
}
