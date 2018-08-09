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
          // console.log('response is ', response)
          // console.log('response.journal_entry.id is ', response.journal_entry.id)
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
      // console.log('in journal.js getJournalEntries has been accessed')
      const journalEntries = this.get('journal').getJournalEntries()
      return journalEntries
      .then((journalEntries) => {
        // console.log('journalEntries is ', journalEntries)
        this.journalEntries = journalEntries.journal_entries
        // console.log('this.journalEntries is ', this.journalEntries)
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
