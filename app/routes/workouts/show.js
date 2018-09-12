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
      this.set('routineChoice', routineChoice)
      this.set('routineChoiceIndex', routineChoiceIndex)
      // this.set('fullRoutineChoice', fullRoutineChoice)
    }
  },

  model (params) {
    const routinesResponse = this.get('routines').getRoutinesEntries()
    const workoutsResponse = this.get('workouts').getWorkoutsEntry(params.workout_id)
    return Ember.RSVP.hash({
      routines: routinesResponse,
      workout: workoutsResponse
    })
    .then((result) => {
      const newRoutinesResponse = []
      for (let i = 0; i < result.routines.routines.length; i++) {
        if (result.routines.routines[i].include) {
          newRoutinesResponse.push(result.routines.routines[i])
        }
      }
      result.routines.routines = newRoutinesResponse
      result.routines.routines.unshift({name: 'Select Routine'})
      result.routineChoiceIndex = this.routineChoiceIndex
      return result
    })
  },
  afterModel (model) {
    if (model.workout.workout.name) {
      model.routineChoice = model.workout.workout.name
      for (let i = 0; i < model.routines.routines.length; i++) {
        if (model.routines.routines[i].name === model.routineChoice) {
          model.routineChoiceIndex = i
        }
      }
      model.fullRoutineChoice = model.routines.routines[model.routineChoiceIndex]
    }
  }
})
