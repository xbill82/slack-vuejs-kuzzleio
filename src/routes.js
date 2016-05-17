import Chat from './Chat'
import Login from './Login'
import UserStore from './store/user'

export default function (router) {
  router.map({
    '/': {
      name: 'chat',
      component: Chat,
      auth: true
    },
    '/login': {
      name: 'login',
      component: Login
    }
  })

  router.beforeEach(function (transition) {
    if (transition.to.auth && !UserStore.isAuthenticated()) {
      transition.redirect('/login')
    } else {
      transition.next()
    }
  })
}
