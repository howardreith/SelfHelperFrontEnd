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
      console.log('createColumnsEntry was called in columns.js route')
      this.get('columns').createColumnsEntry()
        .then((response) => {
          console.log('response is ', response)
          console.log('response.colum_method.id is ', response.colum_method.id)
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
      console.log('in columns.js getColumnEntries has been accessed')
      const columnEntries = this.get('columns').getColumnEntries()
      return columnEntries
      .then((response) => {
        console.log('response is ', response)
        this.columnEntries = response.colum_methods
        console.log('this.columnEntries is ', this.columnEntries)
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
