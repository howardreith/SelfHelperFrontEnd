import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  exposures: service(),
  flashMessages: service(),

  actions: {
    updateExposuresEntry (entry) {
      // console.log('entry in show.js is ', entry)
      this.get('exposures').updateExposuresEntry(entry)
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
      this.transitionTo('exposures.view')
    }
  },

  model (params) {
    // console.log('params is ', params)
    const response = this.get('exposures').getExposuresEntry(params.exposure_id)
    // console.log ('response is ', response)
    return response
    .then((result) => {
      // console.log('result is', result)
      // console.log('result.colum_method is ', result.colum_method)
      result.exposure.updated_at = result.exposure.updated_at.slice(0, -5).split('T').join('  ')
      return result.exposure
    })
    .catch(() => {
      this.get('flashMessages')
      .danger('There was a problem. Please try again.')
    })
  }
})
