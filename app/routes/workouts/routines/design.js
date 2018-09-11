import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  routines: service(),
  flashMessages: service(),

  actions: {
    updateRoutinesEntry (entry) {
      console.log('entry in design.js is ', entry)
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
    cancel () {
      this.transitionTo('workouts.routines.index')
    }
  },

  model (params) {
    const response = this.get('routines').getRoutinesEntry(params.routine_id)
    // console.log('response is ', response)
    return response
    .then((result) => {
      // console.log('result is', result)
      // console.log('result.routine is ', result.routine)
      // result.routine.updated_at = result.journal_entry.updated_at.slice(0, -5).split('T').join('  ')
      return result.routine
    })
    .catch(() => {
      this.get('flashMessages')
      .danger('There was a problem. Please try again.')
    })
  }
})
