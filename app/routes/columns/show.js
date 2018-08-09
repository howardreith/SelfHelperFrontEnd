import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'

export default Route.extend({
  columns: service(),
  flashMessages: service(),

  actions: {
    updateColumnsEntry (entry) {
      console.log('entry in show.js is ', entry)
      this.get('columns').updateColumnsEntry(entry)
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
      this.transitionTo('columns.view')
    }
  },

  model (params) {
    console.log('params is ', params)
    const response = this.get('columns').getColumnsEntry(params.column_id)
    console.log ('response is ', response)
    return response
    .then((result) => {
      console.log('result is', result)
      console.log('result.colum_method is ', result.colum_method)
      result.colum_method.updated_at = result.colum_method.updated_at.slice(0, -5).split('T').join('  ')
      return result.colum_method
    })
    .catch(() => {
      this.get('flashMessages')
      .danger('There was a problem. Please try again.')
    })
  }
});
