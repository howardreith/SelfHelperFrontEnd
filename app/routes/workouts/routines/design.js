import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  routines: service(),
  flashMessages: service(),

  actions: {
    updateRoutinesEntry (entry) {
      this.get('routines').updateRoutinesEntry(entry)
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
    cancel (entry) {
      if (!entry.name && !entry.exercise1 && !entry.sets1 && !entry.reps1) {
        this.get('routines').deleteRoutinesEntry(entry.id)
        .then(() => this.transitionTo('workouts.routines.index'))
      } else {
        this.transitionTo('workouts.routines.index')
      }
    }
  },

  model (params) {
    const response = this.get('routines').getRoutinesEntry(params.routine_id)
    return response
    .then((result) => {
      return result.routine
    })
    .catch(() => {
      this.get('flashMessages')
      .danger('There was a problem. Please try again.')
    })
  }
})
