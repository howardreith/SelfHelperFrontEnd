import Route from '@ember/routing/route'
import Ember from 'ember'
import { inject as service } from '@ember/service'

export default Route.extend({
  workouts: service(),
  routines: service(),
  flashMessages: service(),
  combinedResponse: {},
  routineChoice: null,
  routineChoiceIndex: null,
  fullRoutineChoice: null,

  actions: {
    updateWorkoutsEntry (entry) {
      // console.log('entry in show.js is ', entry)
      this.get('workouts').updateWorkoutsEntry(entry)
      .then(() => this.refresh())
      .then(() => {
        this.get('flashMessages')
          .success('Successfully updated entry.')
      })
      .catch(() => {
        this.get('flashMessages')
          .danger('There was a problem. Please try again.')
      })
    },
    cancel () {
      this.transitionTo('workouts.view')
    },
    selectRoutine (routineChoice, routineChoiceIndex, fullRoutineChoice) {
      // console.log('routineChoice in show.js is ', routineChoice)
      // console.log('routineChoiceIndex in show.js is ', routineChoiceIndex)
      // console.log('fullRoutineChoice in show.js is ', fullRoutineChoice)
      this.set('routineChoice', routineChoice)
      this.set('routineChoiceIndex', routineChoiceIndex)
      // this.set('fullRoutineChoice', fullRoutineChoice)
    }
  },

  model (params) {
    const routinesResponse = this.get('routines').getRoutinesEntries()
    // console.log('routinesResponse is ', routinesResponse)
    // const routinesHash = Ember.RSVP.hash({routinesResponse})
    // console.log('routinesREsponse through the hash is ', routinesHash)
    // console.log('routinesResponse hash is ', routinesHash)
    const workoutsResponse = this.get('workouts').getWorkoutsEntry(params.workout_id)
    // console.log('workoutsResponse is ', workoutsResponse)
    return Ember.RSVP.hash({
      routines: routinesResponse,
      workout: workoutsResponse
    })
    .then((result) => {
      // console.log('routines is ', result.routines)
      // console.log('workout is ', result.workout)
      const newRoutinesResponse = []
      for (let i = 0; i < result.routines.routines.length; i++) {
        if (result.routines.routines[i].include) {
          newRoutinesResponse.push(result.routines.routines[i])
        }
        // console.log('newRoutinesResponse is ', newRoutinesResponse)
      }
      // console.log('newRoutinesResponse outside is ', newRoutinesResponse)
      result.routines.routines = newRoutinesResponse
      result.routines.routines.unshift({name: 'Select Routine'})
      result.routineChoiceIndex = this.routineChoiceIndex
      // console.log('result.routines.routines after is ', result.routines.routines)
      // console.log('result is ', result)
      return result
    })
  },
  afterModel (model) {
    // console.log('model in afterModel is ', model)
    if (model.workout.workout.name) {
      model.routineChoice = model.workout.workout.name
      // console.log('model.routineChoice is ', model.routineChoice)
      for (let i = 0; i < model.routines.routines.length; i++) {
        // console.log('model.routines.routines is ', model.routines.routines)
        if (model.routines.routines[i].name === model.routineChoice) {
          model.routineChoiceIndex = i
          // console.log('model.routineChoice Index is ', model.routineChoiceIndex)
        }
      }
      model.fullRoutineChoice = model.routines.routines[model.routineChoiceIndex]
      // console.log('model.fullRoutineChoice is ', model.fullRoutineChoice)
    }
  }
})
