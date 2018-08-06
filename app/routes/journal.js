import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'
// import RSVP from 'rsvp'

export default Route.extend({
  journal: service(),
  flashMessages: service(),

  model () {
    const response = this.get('journal').getJournalEntries()
    console.log ('response is ', response)
    return response
    .then((result) => {
      console.log('result is ', result.journal_entries)
      return result.journal_entries
    })
  },

  actions: {
    createJournalEntry (entry) {
      console.log('in journal.js entry is ', entry)
      this.get('journal').createJournalEntry(entry)
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
      console.log('in journal.js getJournalEntries has been accessed')
      const journalEntries = this.get('journal').getJournalEntries()
      return journalEntries
      .then((journalEntries) => {
        console.log('journalEntries is ', journalEntries)
        this.journalEntries = journalEntries.journal_entries
        console.log('this.journalEntries is ', this.journalEntries)
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
