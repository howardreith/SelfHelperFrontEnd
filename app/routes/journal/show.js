import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'

export default Route.extend({
  journal: service(),
  flashMessages: service(),

  actions: {
    updateJournalEntry (entry) {
      console.log('updateJournalEntry was called in the show.js routes file')
      this.get('journal').updateJournalEntry(entry)
    }
  },

  model (params) {
    console.log('params is ', params)
    const response = this.get('journal').getJournalEntry(params.journal_id)
    console.log ('response is ', response)
    return response
    .then((result) => {
      console.log('result is ', result.journal_entry)
      return result.journal_entry
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
});
