import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'

export default Route.extend({
  journal: service(),
  flashMessages: service(),

  model () {
    const response = this.get('journal').getJournalEntries()
    // console.log ('response is ', response)
    return response
    .then((result) => {
      // console.log('result is ', result.journal_entries)
      result.journal_entries.forEach((journal_entry) => {
        // console.log('journal_entry is ', journal_entry)
        journal_entry.updated_at = journal_entry.updated_at.slice(0, -5).split('T').join('  ')
        journal_entry.updated_at = journal_entry.created_at.slice(0, -5).split('T').join('  ')
      })
      return result.journal_entries
    })
  },

  actions: {
    goToJournal() {
      this.transitionTo('journal')
    },
    updateEntry() {
      // console.log('updateEntry was activated.')
      // console.log('this is ', this)
      // console.log('this.context is ', this.context)
      const clickedRow = event.target.parentNode.parentNode.getElementsByTagName('td')[0].innerText
      // console.log('clickedRow is ', clickedRow)
      this.transitionTo('/journal/' + clickedRow)
    },
    deleteEntry() {
      // console.log('deleteEntry was activated.')
      const clickedRow = event.target.parentNode.parentNode.getElementsByTagName('td')[0].innerText
      // console.log('clickedRow is ', clickedRow)
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
    sortTable () {
      // console.log('sort table was activated')
      let rows, i, x, y, shouldSwitch
      const table = document.getElementById('journal-table')
      let switching = true
      while (switching) {
        switching = false
        rows = table.getElementsByTagName('TR')
        // console.log('rows is ', rows)
        // console.log('rows.length is ', rows.length)
        for (i = 1; i < (rows.length - 1); i++) {
          // console.log('this ran ', i, ' times')
          shouldSwitch = false
          x = rows[i].getElementsByTagName('TD')[2]
          y = rows[i + 1].getElementsByTagName('TD')[2]
          // if (heading === 0 || heading === 3) {
          //   if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //     shouldSwitch = true
          //     break
          //   }
          // } else {
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
  }
}
})
