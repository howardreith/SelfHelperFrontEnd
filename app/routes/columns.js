import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'
// import RSVP from 'rsvp'

export default Route.extend({
  columns: service(),
  flashMessages: service(),

  model () {
  },

  actions: {
    createColumnsEntry () {
      this.get('columns').createColumnsEntry()
        .then((response) => {
          this.transitionTo('/columns/' + response.colum_method.id)
        })
        .then(() => {
          this.get('flashMessages')
            .success('Successfully created a columns entry.')
        })
        .catch(() => {
          this.get('flashMessages')
            .danger('There was a problem. Please try again.')
        })
    },

    getColumnEntries () {
      const columnEntries = this.get('columns').getColumnEntries()
      return columnEntries
      .then((response) => {
        this.columnEntries = response.colum_methods
      })
      .then(() => {
        this.get('flashMessages')
          .success('Successfully got journal entries.')
      })
      .catch(() => {
        this.get('flashMessages')
          .danger('There was a problem. Please try again.')
      })
    }
  }
})
