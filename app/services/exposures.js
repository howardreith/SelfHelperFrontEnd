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
  // console.log('createColumnsEntry was called in the final stage')
    return this.get('ajax').post('/exposures', {
      data: {
        exposure: {
          action: ''
        }
      }
    })
  },

  getExposuresEntries () {
  // console.log('getColumnMethods was run!')
    const columnEntries = this.get('ajax').request('/exposures')
  // console.log(columnEntries)
    return columnEntries
  },

  getExposuresEntry (id) {
  // console.log('getColumnsEntry was run!')
    const exposuresEntry = this.get('ajax').request('/exposures/' + id)
  // console.log('columnEntry is ', columnEntry)
    return exposuresEntry
  },

  updateExposuresEntry (entry) {
  // console.log('updateColumnEntry was run in the service')
    // console.log('entry in the updateColumnEntry service is ', entry)
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
  // console.log('deleteColumnEntry was run in the service.')
  // console.log('id in the deleteColumnEntry service is ', id)
    return this.get('ajax').del('/exposures/' + id)
  }
})
