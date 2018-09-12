import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'
// import RSVP from 'rsvp'

export default Route.extend({
  arrows: service(),
  flashMessages: service(),

  model () {
  },

  actions: {
    createArrowsEntry () {
      this.get('arrows').createArrowsEntry()
        .then((response) => {
          this.transitionTo('/arrows/' + response.downward_arrow.id)
        })
        .then(() => {
          this.get('flashMessages')
            .success('Successfully created an arrows entry.')
        })
        .catch(() => {
          this.get('flashMessages')
            .danger('There was a problem. Please try again.')
        })
    },

    getArrowEntries () {
      const arrowEntries = this.get('arrows').getArrowEntries()
      return arrowEntries
      .then((response) => {
        this.arrowEntries = response.downward_arrows
      })
      .then(() => {
        this.get('flashMessages')
          .success('Successfully got arrow entries.')
      })
      .catch(() => {
        this.get('flashMessages')
          .danger('There was a problem. Please try again.')
      })
    }
  }
})
