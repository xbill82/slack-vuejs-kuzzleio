<template>
  <div class="messages">
    <messages
      :messages="MessageStore.state.messages">
    </messages>
    <input-bar
      :store="MessageStore">
    </input-bar>
  </div>
</template>

<script>
import InputBar from './components/InputBar'
import Messages from './components/Messages'
import MessageStore from './store/messages'

export default {
  data () {
    return {
      MessageStore
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
