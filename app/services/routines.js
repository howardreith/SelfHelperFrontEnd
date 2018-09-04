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

  createRoutinesEntry () {
  // console.log('createColumnsEntry was called in the final stage')
    return this.get('ajax').post('/routines', {
      data: {
        routine: {
          name: ''
        }
      }
    })
  },

  getRoutinesEntries () {
  // console.log('getColumnMethods was run!')
    const routinesEntries = this.get('ajax').request('/routines')
  // console.log(columnEntries)
    return routinesEntries
  },

  getRoutinesEntry (id) {
  // console.log('getColumnsEntry was run!')
    const routinesEntry = this.get('ajax').request('/routines/' + id)
  // console.log('columnEntry is ', columnEntry)
    return routinesEntry
  },

  updateRoutinesEntry (entry) {
    console.log('updateRoutinesEntry was run in the service')
    console.log('entry in the udpateRoutinesEntry service is ', entry)
    return this.get('ajax').patch('/routines/' + entry.id, {
      data: {
        routine: {
          include: entry.include,
          name: entry.name,
          exercise1: entry.exercise1
        }
      }
    })
  },
  deleteRoutinesEntry (id) {
  // console.log('deleteColumnEntry was run in the service.')
  // console.log('id in the deleteColumnEntry service is ', id)
    return this.get('ajax').del('/routines/' + id)
  }
})
