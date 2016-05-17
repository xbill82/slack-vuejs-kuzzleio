import kuzzle from '../services/kuzzle'

export default {
  state: {
    messages: []
  },

  sendMessage (content, user) {
    let message = {content, user, date: Date.now()}
    kuzzle
      .dataCollectionFactory('messages')
      .createDocument(message)
  },

  subscribeMessages () {
    kuzzle
      .dataCollectionFactory('messages')
      .subscribe({}, null, (error, response) => {
        if (error) {
          console.log(error.message)
          return
        }
        this.state.messages.push({
          ...response.result._source,
          id: response.result._id
        })
      })
  }
}
