import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'
// import RSVP from 'rsvp'

export default Route.extend({
  journal: service(),
  flashMessages: service(),

  model () {
  },

  actions: {
    createJournalEntry () {
      this.get('journal').createJournalEntry()
        .then((response) => {
          this.transitionTo('/journal/' + response.journal_entry.id)
        })
        .then(() => {
          this.get('flashMessages')
            .success('Successfully created a journal entry.')
        })
        .catch(() => {
          this.get('flashMessages')
            .danger('There was a problem. Please try again.')
        })
    },

    getJournalEntries () {
      const journalEntries = this.get('journal').getJournalEntries()
      return journalEntries
      .then((journalEntries) => {
        this.journalEntries = journalEntries.journal_entries
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
