import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  arrows: service(),
  flashMessages: service(),

  actions: {
    updateArrowsEntry (entry) {
      // console.log('entry in show.js is ', entry)
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
    cancel () {
      this.transitionTo('arrows.view')
    }
  },

  model (params) {
    // console.log('params is ', params)
    const response = this.get('arrows').getArrowsEntry(params.arrow_id)
    // console.log('response is ', response)
    return response
    .then((result) => {
      // console.log('result is', result)
      // console.log('result.downward_arrow is ', result.downward_arrow)
      result.downward_arrow.updated_at = result.downward_arrow.updated_at.slice(0, -5).split('T').join('  ')
      // console.log('result.downward_arrow.response2 is ', result.downward_arrow.response2)
      return result.downward_arrow
    })
    .catch(() => {
      this.get('flashMessages')
      .danger('There was a problem. Please try again.')
    })
  }
})
