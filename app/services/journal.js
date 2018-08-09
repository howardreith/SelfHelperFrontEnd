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
  // console.log('entry in the final stage is ', entry)
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
  // console.log('getJournalEntries was run!')
  const journalEntries = this.get('ajax').request('/journal_entries')
  // console.log(journalEntries)
  return journalEntries
},

getJournalEntry (id) {
  // console.log('getJournalEntry was run!')
  const journalEntry = this.get('ajax').request('/journal_entries/' + id)
  // console.log('journalEntry is ', journalEntry)
  return journalEntry
},

updateJournalEntry (entry) {
  // console.log('updateJournalEntry was run in the service')
  // console.log('entry in the updateJournalEntry service is ', entry)
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
  // console.log('deleteJournalEntry was run in the service.')
  // console.log('id in the deleteJournalEntry service is ', id)
  return this.get('ajax').del('/journal_entries/' + id)
}
})
