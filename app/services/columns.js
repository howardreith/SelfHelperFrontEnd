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

  createColumnsEntry () {
  // console.log('createColumnsEntry was called in the final stage')
    return this.get('ajax').post('/colum_methods', {
      data: {
        colum_method: {
          event: '',
          emotion: '',
          autothought: '',
          distortion: '',
          response: ''
        }
      }
    })
  },

  getColumnsEntries () {
  // console.log('getColumnMethods was run!')
    const columnEntries = this.get('ajax').request('/colum_methods')
  // console.log(columnEntries)
    return columnEntries
  },

  getColumnsEntry (id) {
  // console.log('getColumnsEntry was run!')
    const columnEntry = this.get('ajax').request('/colum_methods/' + id)
  // console.log('columnEntry is ', columnEntry)
    return columnEntry
  },

  updateColumnsEntry (entry) {
  // console.log('updateColumnEntry was run in the service')
  // console.log('entry in the updateColumnEntry service is ', entry)
    return this.get('ajax').patch('/colum_methods/' + entry.id, {
      data: {
        colum_method: {
          event: entry.event,
          emotion: entry.emotion,
          autothought: entry.autothought,
          distortion: entry.distortion,
          response: entry.response
        }
      }
    })
  },
  deleteColumnsEntry (id) {
  // console.log('deleteColumnEntry was run in the service.')
  // console.log('id in the deleteColumnEntry service is ', id)
    return this.get('ajax').del('/colum_methods/' + id)
  }
})
