import {} from './style/global.css'
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import configRouter from './routes'
import userStore from './store/user'

Vue.use(VueRouter)
export var router = new VueRouter()

configRouter(router)
userStore.getCurrentUser(() => {
  console.log('Starting...')
  router.start(App, 'body')
})
