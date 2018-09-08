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

  createWorkoutsEntry () {
  // console.log('createColumnsEntry was called in the final stage')
    return this.get('ajax').post('/workouts', {
      data: {
        workout: {
          name: ''
        }
      }
    })
  },

  getWorkoutsEntries () {
    console.log('getWorkoutsEntries was run!')
    const workoutsEntries = this.get('ajax').request('/workouts')
  // console.log(columnEntries)
    return workoutsEntries
  },

  getWorkoutsEntry (id) {
  // console.log('getColumnsEntry was run!')
    const workoutsEntry = this.get('ajax').request('/workouts/' + id)
  // console.log('columnEntry is ', columnEntry)
    return workoutsEntry
  },

  updateWorkoutsEntry (entry) {
  // console.log('updateColumnEntry was run in the service')
    // console.log('entry in the updateColumnEntry service is ', entry)
    return this.get('ajax').patch('/workouts/' + entry.id, {
      data: {
        workout: {
          name: entry.name,
          exercise1: entry.exercise1,
          exercise1reps1: entry.exercise1reps1
        }
      }
    })
  },
  deleteWorkoutsEntry (id) {
  // console.log('deleteColumnEntry was run in the service.')
  // console.log('id in the deleteColumnEntry service is ', id)
    return this.get('ajax').del('/workouts/' + id)
  }
})
