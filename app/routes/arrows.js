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
      // console.log('createColumnsEntry was called in columns.js route')
      this.get('arrows').createArrowsEntry()
        .then((response) => {
          // console.log('response is ', response)
          // console.log('response.colum_method.id is ', response.colum_method.id)
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
      // console.log('in columns.js getColumnEntries has been accessed')
      const arrowEntries = this.get('arrows').getArrowEntries()
      return arrowEntries
      .then((response) => {
        // console.log('response is ', response)
        this.arrowEntries = response.downward_arrows
        // console.log('this.columnEntries is ', this.columnEntries)
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
