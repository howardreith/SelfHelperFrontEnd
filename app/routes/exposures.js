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
      // console.log('createColumnsEntry was called in columns.js route')
      this.get('exposures').createExposuresEntry()
        .then((response) => {
          // console.log('response is ', response)
          // console.log('response.colum_method.id is ', response.colum_method.id)
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
      // console.log('in columns.js getColumnEntries has been accessed')
      const exposuresEntries = this.get('exposures').getExposuresEntries()
      return exposuresEntries
      .then((response) => {
        // console.log('response is ', response)
        this.exposuresEntries = response.exposures
        // console.log('this.columnEntries is ', this.columnEntries)
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
