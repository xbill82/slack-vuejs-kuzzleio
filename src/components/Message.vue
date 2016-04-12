<template>
  <div class="message">
    <span class="message-content">{{message.content}}</span>
  </div>
</template>
<script>
  export default {
    props: ['message']
  }
</script>
