import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'
// import RSVP from 'rsvp'

export default Route.extend({
  exposures: service(),
  flashMessages: service(),

  model () {
  },

  actions: {
    createExposuresEntry () {
      this.get('exposures').createExposuresEntry()
        .then((response) => {
          this.transitionTo('/exposures/' + response.exposure.id)
        })
        .then(() => {
          this.get('flashMessages')
            .success('Successfully created an exposure.')
        })
        .catch(() => {
          this.get('flashMessages')
            .danger('There was a problem. Please try again.')
        })
    },

    getExposuresEntries () {
      const exposuresEntries = this.get('exposures').getExposuresEntries()
      return exposuresEntries
      .then((response) => {
        this.exposuresEntries = response.exposures
      })
      .then(() => {
        this.get('flashMessages')
          .success('Successfully got exposures.')
      })
      .catch(() => {
        this.get('flashMessages')
          .danger('There was a problem. Please try again.')
      })
    }
  }
})
