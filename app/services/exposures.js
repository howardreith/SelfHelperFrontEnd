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

  createExposuresEntry () {
    return this.get('ajax').post('/exposures', {
      data: {
        exposure: {
          action: ''
        }
      }
    })
  },

  getExposuresEntries () {
    const columnEntries = this.get('ajax').request('/exposures')
    return columnEntries
  },

  getExposuresEntry (id) {
    const exposuresEntry = this.get('ajax').request('/exposures/' + id)
    return exposuresEntry
  },

  updateExposuresEntry (entry) {
    return this.get('ajax').patch('/exposures/' + entry.id, {
      data: {
        exposure: {
          action: entry.action,
          prediction: entry.prediction,
          actual: entry.actual,
          satisfaction: entry.satisfaction
        }
      }
    })
  },
  deleteExposuresEntry (id) {
    return this.get('ajax').del('/exposures/' + id)
  }
})
