import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  workouts: service(),
  flashMessages: service(),

  model () {
  },

  actions: {
    createWorkoutsEntry () {
      // console.log('createColumnsEntry was called in columns.js route')
      this.get('workouts').createWorkoutsEntry()
        .then((response) => {
          // console.log('response is ', response)
          // console.log('response.colum_method.id is ', response.colum_method.id)
          this.transitionTo('/workouts/' + response.workout.id)
        })
        .then(() => {
          this.get('flashMessages')
            .success('Successfully created workout log.')
        })
        .catch(() => {
          this.get('flashMessages')
            .danger('There was a problem. Please try again.')
        })
    }
  }
})
