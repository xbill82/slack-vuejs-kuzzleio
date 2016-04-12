import Kuzzle from 'kuzzle-sdk'

export default new Kuzzle('http://localhost:7512', {defaultIndex: 'klack'})
