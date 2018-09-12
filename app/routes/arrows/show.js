import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  arrows: service(),
  flashMessages: service(),

  actions: {
    updateArrowsEntry (entry) {
      this.get('arrows').updateArrowsEntry(entry)
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
      if (!entry.autothought1 && !entry.distortion1 && !entry.response1) {
        this.get('arrows').deleteArrowsEntry(entry.id)
      }
      this.transitionTo('arrows.view')
    }
  },

  model (params) {
    const response = this.get('arrows').getArrowsEntry(params.arrow_id)
    return response
    .then((result) => {
      result.downward_arrow.updated_at = result.downward_arrow.updated_at.slice(0, -5).split('T').join('  ')
      return result.downward_arrow
    })
    .catch(() => {
      this.get('flashMessages')
      .danger('There was a problem. Please try again.')
    })
  }
})
