import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  exposures: service(),
  flashMessages: service(),

  actions: {
    updateExposuresEntry (entry) {
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
    const response = this.get('exposures').getExposuresEntry(params.exposure_id)
    return response
    .then((result) => {
      result.exposure.updated_at = result.exposure.updated_at.slice(0, -5).split('T').join('  ')
      return result.exposure
    })
    .catch(() => {
      this.get('flashMessages')
      .danger('There was a problem. Please try again.')
    })
  }
})
