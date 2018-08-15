import { bool } from '@ember/object/computed'
import { storageFor } from 'ember-local-storage'
import Service, { inject as service } from '@ember/service'

export default Service.extend({
  // pull in the ajax service
  ajax: service(),
  // creating a key called 'auth' in local storage
  // think of credentials like an empty object
  credentials: storageFor('auth'),
  // a boolean, true if credentials.token exists
  isAuthenticated: bool('credentials.token'),

createArrowsEntry () {
  // console.log('createColumnsEntry was called in the final stage')
  return this.get('ajax').post('/downward_arrows', {
    data: {
      downward_arrow: {
        autothought1: '',
        distortion1: '',
        response1: ''
      }
    }
  })
},

getArrowsEntries () {
  // console.log('getColumnMethods was run!')
  const arrowsEntries = this.get('ajax').request('/downward_arrows')
  // console.log(columnEntries)
  return arrowsEntries
},

getArrowsEntry (id) {
  // console.log('getColumnsEntry was run!')
  const arrowsEntry = this.get('ajax').request('/downward_arrows/' + id)
  // console.log('columnEntry is ', columnEntry)
  return arrowsEntry
},

updateArrowsEntry (entry) {
  // console.log('updateColumnEntry was run in the service')
  // console.log('entry in the updateColumnEntry service is ', entry)
  return this.get('ajax').patch('/downward_arrows/' + entry.id, {
    data: {
      downward_arrow: {
        autothought1: entry.autothought1,
        distortion1: entry.distortion1,
        response1: entry.response1
      }
    }
  })
},
deleteArrowsEntry (id) {
  // console.log('deleteColumnEntry was run in the service.')
  // console.log('id in the deleteColumnEntry service is ', id)
  return this.get('ajax').del('/downward_arrows/' + id)
}
})
