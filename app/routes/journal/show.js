import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  journal: service(),
  flashMessages: service(),

  actions: {
    updateJournalEntry (entry) {
      this.get('journal').updateJournalEntry(entry)
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
      console.log('entry is ', entry)
      if (!entry.title && !entry.content) {
        this.get('journal').deleteJournalEntry(entry.id)
      }
      this.transitionTo('journal.view')
    }
  },

  model (params) {
    const response = this.get('journal').getJournalEntry(params.journal_id)
    return response
    .then((result) => {
      result.journal_entry.updated_at = result.journal_entry.updated_at.slice(0, -5).split('T').join('  ')
      return result.journal_entry
    })
    .catch(() => {
      this.get('flashMessages')
      .danger('There was a problem. Please try again.')
    })
  }
})
