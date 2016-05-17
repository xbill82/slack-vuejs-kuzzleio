<template>
  <div class="message">
    <span class="message-username">{{message.user.username}}</span>
    <span class="message-content">{{message.content}}</span>
  </div>
</template>
<script>
  export default {
    props: ['message']
  }
</script>
