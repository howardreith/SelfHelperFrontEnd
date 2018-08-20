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

  createGenericsEntry () {
  // console.log('createColumnsEntry was called in the final stage')
    return this.get('ajax').post('/generics', {
      data: {
        generic: {
          activity: ''
        }
      }
    })
  },

  getGenericsEntries () {
  // console.log('getColumnMethods was run!')
    const genericsEntries = this.get('ajax').request('/generics')
  // console.log(columnEntries)
    return genericsEntries
  },

  updateGenericsEntry (entry) {
  // console.log('updateColumnEntry was run in the service')
    // console.log('entry in the updateGenericsEntry service is ', entry)
    return this.get('ajax').patch('/generics/' + entry.id, {
      data: {
        generic: {
          activity: entry.activity,
          fear_level: entry.fear_level
        }
      }
    })
  },
  deleteGenericsEntry (id) {
  // console.log('deleteColumnEntry was run in the service.')
  // console.log('id in the deleteColumnEntry service is ', id)
    return this.get('ajax').del('/generics/' + id)
  }
})
