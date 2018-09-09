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
          id: entry.id,
          name: entry.name,
          exercise1: entry.exercise1,
          exercise1reps1: entry.exercise1reps1,
          exercise1reps2: entry.exercise1reps2,
          exercise1reps3: entry.exercise1reps3,
          exercise1reps4: entry.exercise1reps4,
          exercise1reps5: entry.exercise1reps5,
          exercise1reps6: entry.exercise1reps6,
          exercise1reps7: entry.exercise1reps7,
          exercise1reps8: entry.exercise1reps8,
          exercise1reps9: entry.exercise1reps9,
          exercise1reps10: entry.exercise1reps10,
          exercise2: entry.exercise1,
          exercise2reps1: entry.exercise2reps1,
          exercise2reps2: entry.exercise2reps2,
          exercise2reps3: entry.exercise2reps3,
          exercise2reps4: entry.exercise2reps4,
          exercise2reps5: entry.exercise2reps5,
          exercise2reps6: entry.exercise2reps6,
          exercise2reps7: entry.exercise2reps7,
          exercise2reps8: entry.exercise2reps8,
          exercise2reps9: entry.exercise2reps9,
          exercise2reps10: entry.exercise2reps10,
          exercise3: entry.exercise1,
          exercise3reps1: entry.exercise3reps1,
          exercise3reps2: entry.exercise3reps2,
          exercise3reps3: entry.exercise3reps3,
          exercise3reps4: entry.exercise3reps4,
          exercise3reps5: entry.exercise3reps5,
          exercise3reps6: entry.exercise3reps6,
          exercise3reps7: entry.exercise3reps7,
          exercise3reps8: entry.exercise3reps8,
          exercise3reps9: entry.exercise3reps9,
          exercise3reps10: entry.exercise3reps10,
          exercise4: entry.exercise1,
          exercise4reps1: entry.exercise4reps1,
          exercise4reps2: entry.exercise4reps2,
          exercise4reps3: entry.exercise4reps3,
          exercise4reps4: entry.exercise4reps4,
          exercise4reps5: entry.exercise4reps5,
          exercise4reps6: entry.exercise4reps6,
          exercise4reps7: entry.exercise4reps7,
          exercise4reps8: entry.exercise4reps8,
          exercise4reps9: entry.exercise4reps9,
          exercise4reps10: entry.exercise4reps10,
          exercise5: entry.exercise1,
          exercise5reps1: entry.exercise5reps1,
          exercise5reps2: entry.exercise5reps2,
          exercise5reps3: entry.exercise5reps3,
          exercise5reps4: entry.exercise5reps4,
          exercise5reps5: entry.exercise5reps5,
          exercise5reps6: entry.exercise5reps6,
          exercise5reps7: entry.exercise5reps7,
          exercise5reps8: entry.exercise5reps8,
          exercise5reps9: entry.exercise5reps9,
          exercise5reps10: entry.exercise5reps10,
          exercise6: entry.exercise1,
          exercise6reps1: entry.exercise6reps1,
          exercise6reps2: entry.exercise6reps2,
          exercise6reps3: entry.exercise6reps3,
          exercise6reps4: entry.exercise6reps4,
          exercise6reps5: entry.exercise6reps5,
          exercise6reps6: entry.exercise6reps6,
          exercise6reps7: entry.exercise6reps7,
          exercise6reps8: entry.exercise6reps8,
          exercise6reps9: entry.exercise6reps9,
          exercise6reps10: entry.exercise6reps10,
          exercise7: entry.exercise1,
          exercise7reps1: entry.exercise7reps1,
          exercise7reps2: entry.exercise7reps2,
          exercise7reps3: entry.exercise7reps3,
          exercise7reps4: entry.exercise7reps4,
          exercise7reps5: entry.exercise7reps5,
          exercise7reps6: entry.exercise7reps6,
          exercise7reps7: entry.exercise7reps7,
          exercise7reps8: entry.exercise7reps8,
          exercise7reps9: entry.exercise7reps9,
          exercise7reps10: entry.exercise7reps10,
          exercise8: entry.exercise1,
          exercise8reps1: entry.exercise8reps1,
          exercise8reps2: entry.exercise8reps2,
          exercise8reps3: entry.exercise8reps3,
          exercise8reps4: entry.exercise8reps4,
          exercise8reps5: entry.exercise8reps5,
          exercise8reps6: entry.exercise8reps6,
          exercise8reps7: entry.exercise8reps7,
          exercise8reps8: entry.exercise8reps8,
          exercise8reps9: entry.exercise8reps9,
          exercise8reps10: entry.exercise8reps10,
          exercise9: entry.exercise1,
          exercise9reps1: entry.exercise9reps1,
          exercise9reps2: entry.exercise9reps2,
          exercise9reps3: entry.exercise9reps3,
          exercise9reps4: entry.exercise9reps4,
          exercise9reps5: entry.exercise9reps5,
          exercise9reps6: entry.exercise9reps6,
          exercise9reps7: entry.exercise9reps7,
          exercise9reps8: entry.exercise9reps8,
          exercise9reps9: entry.exercise9reps9,
          exercise9reps10: entry.exercise9reps10,
          exercise10: entry.exercise1,
          exercise10reps1: entry.exercise10reps1,
          exercise10reps2: entry.exercise10reps2,
          exercise10reps3: entry.exercise10reps3,
          exercise10reps4: entry.exercise10reps4,
          exercise10reps5: entry.exercise10reps5,
          exercise10reps6: entry.exercise10reps6,
          exercise10reps7: entry.exercise10reps7,
          exercise10reps8: entry.exercise10reps8,
          exercise10reps9: entry.exercise10reps9,
          exercise10reps10: entry.exercise10reps10
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
