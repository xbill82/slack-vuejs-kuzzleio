<template>
  <form id="login" method="post" @submit.prevent="login">
    <span class="title">The Awesome Slack Clone</span>
    <div id="block">
      <input v-model="username" type="text" name="username" id="username" placeholder="Username" class="input-box-text" required/>
      <input v-model="password" type="password" name="password" id="password" placeholder="Password" class="input-box-text" required />
    </div>
    <button type="submit" class="login">Login</button>

    <p class="error" v-if="state.errorMessage">{{state.errorMessage}}</p>
  </form>
</template>

<script>
  import {} from './style/login.css'
  import UserStore from './store/user'

  export default {
    data () {
      return {
        username: null,
        password: null,
        state: UserStore.state
      }
    },
    methods: {
      login () {
        UserStore.login(this.username, this.password)
      }
    }
  }
</script>
