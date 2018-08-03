import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'
// import RSVP from 'rsvp'

export default Route.extend({
  journal: service(),
  flashMessages: service(),

  model () {
    return {}
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
    }
  }
})
