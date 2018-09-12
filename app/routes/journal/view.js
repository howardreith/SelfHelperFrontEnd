import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  journal: service(),
  flashMessages: service(),

  model () {
    const response = this.get('journal').getJournalEntries()
    return response
    .then((result) => {
      result.journal_entries.forEach((journal_entry) => {
        journal_entry.updated_at = journal_entry.updated_at.slice(0, -5).split('T').join('  ')
        journal_entry.updated_at = journal_entry.created_at.slice(0, -5).split('T').join('  ')
      })
      return result.journal_entries
    })
  },

  actions: {
    goToJournal () {
      this.transitionTo('journal')
    },
    updateEntry () {
      const clickedRow = event.target.parentNode.parentNode.getElementsByTagName('td')[0].innerText
      this.transitionTo('/journal/' + clickedRow)
    },
    deleteEntry () {
      const clickedRow = event.target.parentNode.parentNode.getElementsByTagName('td')[0].innerText
      this.get('journal').deleteJournalEntry(clickedRow)
      .then(() => this.refresh())
      .then(() => {
        this.get('flashMessages')
        .success('Successfully deleted journal entry.')
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.')
      })
    },
    sortTableById () {
      let rows, i, x, y, shouldSwitch
      const table = document.getElementById('journal-table')
      let switching = true
      while (switching) {
        switching = false
        rows = table.getElementsByTagName('TR')
        for (i = 1; i < (rows.length - 1); i++) {
          shouldSwitch = false
          x = rows[i].getElementsByTagName('TD')[0]
          y = rows[i + 1].getElementsByTagName('TD')[0]
          if (+x.innerHTML < +y.innerHTML) {
            shouldSwitch = true
            break
          }
        }
        if (shouldSwitch) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i])
          switching = true
        }
      }
    },
    sortTableByDate () {
      let rows, i, x, y, shouldSwitch
      const table = document.getElementById('journal-table')
      let switching = true
      while (switching) {
        switching = false
        rows = table.getElementsByTagName('TR')
        for (i = 1; i < (rows.length - 1); i++) {
          shouldSwitch = false
          x = rows[i].getElementsByTagName('TD')[1]
          y = rows[i + 1].getElementsByTagName('TD')[1]
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true
            break
          }
        }
        if (shouldSwitch) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i])
          switching = true
        }
      }
    },
    sortTableByTitle () {
      let rows, i, x, y, shouldSwitch
      const table = document.getElementById('journal-table')
      let switching = true
      while (switching) {
        switching = false
        rows = table.getElementsByTagName('TR')
        for (i = 1; i < (rows.length - 1); i++) {
          shouldSwitch = false
          x = rows[i].getElementsByTagName('TD')[2]
          y = rows[i + 1].getElementsByTagName('TD')[2]
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true
            break
          }
        }
        if (shouldSwitch) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i])
          switching = true
        }
      }
    }
  }
})
