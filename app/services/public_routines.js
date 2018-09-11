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

  getPublicRoutinesEntries () {
    const publicRoutinesEntries = this.get('ajax').request('/public_routines')
    return publicRoutinesEntries
  },

  getPublicRoutinesEntry (id) {
  // console.log('getColumnsEntry was run!')
    const publicRoutinesEntry = this.get('ajax').request('/public_routines/' + id)
  // console.log('columnEntry is ', columnEntry)
    return publicRoutinesEntry
  },

  createRoutinesEntryFromPublicRoutines (routine) {
    return this.get('ajax').post('/routines', {
      data: {
        routine: {
          name: routine.name,
          include: true,
          exercise1: routine.exercise1,
          sets1: routine.sets1,
          reps1: routine.reps1,
          exercise2: routine.exercise2,
          sets2: routine.sets2,
          reps2: routine.reps2,
          exercise3: routine.exercise3,
          sets3: routine.sets3,
          reps3: routine.reps3,
          exercise4: routine.exercise4,
          sets4: routine.sets4,
          reps4: routine.reps4,
          exercise5: routine.exercise5,
          sets5: routine.sets5,
          reps5: routine.resp5,
          exercise6: routine.exercise6,
          sets6: routine.sets6,
          reps6: routine.reps6,
          exercise7: routine.exercise7,
          sets7: routine.sets7,
          reps7: routine.reps7,
          exercise8: routine.exercise8,
          sets8: routine.sets8,
          reps8: routine.reps8
        }
      }
    })
  }
})
