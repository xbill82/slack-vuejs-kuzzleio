<template>
  <div class="bottom-input">
   <div class="input-box">
    <input
     type="text"
     class="input-box-text"
     placeholder="New message"
     @keyup.enter="onEnter"
     v-model="newMessage"/>
   </div>
 </div>
</template>

<script>
export default {
  props: ['store'],
  data () {
    return {
      newMessage: null
    }
  },
  methods: {
    onEnter () {
      if (this.newMessage.length > 0) {
        this.store.sendMessage(this.newMessage)
        this.newMessage = null
      }
    }
  }
}
</script>
