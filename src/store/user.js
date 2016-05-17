import {router} from '../main'
import kuzzle from '../services/kuzzle'

export default {
  state: {
    errorMessage: null,
    username: null
  },

  login (username, password) {
    this.state.errorMessage = null
    kuzzle.login('local', {username, password}, '1h', (error, response) => {
      if (error) {
        this.state.errorMessage = error.message
        return
      }
      if (response.jwt) {
        window.sessionStorage.setItem('jwt', response.jwt)
        this.getCurrentUser((error, user) => {
          if (error) {
            console.error(error.message)
            return
          }
          router.go({name: 'chat'})
        })
      }
    })
  },

  isAuthenticated () {
    return Boolean(this.state.username)
  },

  getCurrentUser (cb) {
    var jwt = window.sessionStorage.getItem('jwt')
    if (!jwt) {
      cb('No current user.')
      kuzzle.setJwtToken(undefined)
      return false
    }
    kuzzle.setJwtToken(jwt)

    kuzzle
      .whoAmI((error, kuzzleUser) => {
        if (error) {
          window.sessionStorage.removeItem('jwt')
          kuzzle.setJwtToken(undefined)
          cb(error)

          return false
        }

        this.state.username = kuzzleUser.id

        cb(null, kuzzleUser)
      })
  }
}
