import { bool } from '@ember/object/computed'
import { storageFor } from 'ember-local-storage'
import Service, { inject as service } from '@ember/service'

export default Service.extend({
  // pull in the ajax service
  ajax: service(),
  // creating a key called 'auth' in local storage
  // think of credentials like an empty object
  credentials: storageFor('auth'),
  // a boolean, true if credentials.token exists
  isAuthenticated: bool('credentials.token'),

  createJournalEntry (entry) {
    return this.get('ajax').post('/journal_entries', {
      data: {
        journal_entry: {
          title: '',
          content: ''
        }
      }
    })
  },

  getJournalEntries () {
    const journalEntries = this.get('ajax').request('/journal_entries')
    return journalEntries
  },

  getJournalEntry (id) {
    const journalEntry = this.get('ajax').request('/journal_entries/' + id)
    return journalEntry
  },

  updateJournalEntry (entry) {
    return this.get('ajax').patch('/journal_entries/' + entry.id, {
      data: {
        journal_entry: {
          title: entry.title,
          content: entry.content
        }
      }
    })
  },
  deleteJournalEntry (id) {
    return this.get('ajax').del('/journal_entries/' + id)
  }
})
