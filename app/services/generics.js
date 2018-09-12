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
    return this.get('ajax').post('/generics', {
      data: {
        generic: {
          activity: ''
        }
      }
    })
  },

  getGenericsEntries () {
    const genericsEntries = this.get('ajax').request('/generics')
    return genericsEntries
  },

  updateGenericsEntry (entry) {
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
    return this.get('ajax').del('/generics/' + id)
  }
})
