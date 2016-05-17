<template>
  <div class="main">
    <div class="messages">
      <messages
        :messages="MessageStore.state.messages">
      </messages>
    </div>
    <input-bar
      :store="MessageStore"
      :current-user="UserStore.state">
    </input-bar>
  </div>
  <div class="footer">
    <div class="user-menu">
      <span
        class="user-menu-username"
        placeholder="Username">
        {{UserStore.state.username}}
      </span>
    </div>
  </div>
</template>

<script>
import InputBar from './components/InputBar'
import Messages from './components/Messages'
import MessageStore from './store/messages'
import UserStore from './store/user'

export default {
  data () {
    return {
      MessageStore,
      UserStore
    }
  },
  components: {
    InputBar,
    Messages
  },
  created () {
    MessageStore.subscribeMessages()
  }
}
</script>

<style>

</style>
