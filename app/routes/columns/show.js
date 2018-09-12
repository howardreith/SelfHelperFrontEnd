import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  columns: service(),
  flashMessages: service(),

  actions: {
    updateColumnsEntry (entry) {
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
    cancel (entry) {
      if (!entry.event && !entry.emotion && !entry.autothought && !entry.distortion && !entry.response) {
        this.get('columns').deleteColumnsEntry(entry.id)
        .then(() => this.transitionTo('columns.view'))
      } else {
        this.transitionTo('columns.view')
      }
    }
  },

  model (params) {
    const response = this.get('columns').getColumnsEntry(params.column_id)
    return response
    .then((result) => {
      result.colum_method.updated_at = result.colum_method.updated_at.slice(0, -5).split('T').join('  ')
      return result.colum_method
    })
    .catch(() => {
      this.get('flashMessages')
      .danger('There was a problem. Please try again.')
    })
  }
})
