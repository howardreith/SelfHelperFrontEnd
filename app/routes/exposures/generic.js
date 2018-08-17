import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  generics: service(),
  flashMessages: service(),

  model () {
    const response = this.get('generics').getGenericsEntries()
    console.log('response is ', response)
    return response
    .then((result) => {
      console.log('result.generics is ', result.generics)
      return result.generics
    })
  },
  actions: {
    deleteEntry (clickedRow) {
      // console.log('deleteEntry was activated.')
      // console.log('clickedRow is ', clickedRow)
      console.log('deleteEntry was called in the second to last place')
      console.log('clickedRow in the second to last place is ', clickedRow)
      this.get('generics').deleteGenericsEntry(clickedRow)
      .then(() => this.refresh())
      .then(() => {
        this.get('flashMessages')
        .success('Successfully deleted generics entry.')
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.')
      })
    },
    createGenericsEntry () {
      console.log('The plus was clicked!')
      this.get('generics').createGenericsEntry()
        .then(() => {
          this.refresh()
        })
        .then(() => {
          this.get('flashMessages')
            .success('Successfully created a generics entry.')
        })
        .catch(() => {
          this.get('flashMessages')
            .danger('There was a problem. Please try again.')
        })
    },
    updateGenericsTable (entry) {
      console.log('updateGenericsTable was accessed in generic.js.')
      console.log('entry in updateGenericsTable is ', entry)
      this.get('generics').updateGenericsEntry(entry)
      .then(() => {
        this.refresh()
      })
      .then(() => {
        this.get('flashMessages')
          .success('Successfully updated a generics entry.')
      })
      .catch(() => {
        this.get('flashMessages')
          .danger('There was a problem. Please try again.')
      })
    },
    sortTable () {
      // console.log('sort table was activated')
      let rows, i, x, y, shouldSwitch
      const table = document.getElementById('generics-table')
      let switching = true
      while (switching) {
        switching = false
        rows = table.getElementsByTagName('TR')
        // console.log('rows is ', rows)
        // console.log('rows.length is ', rows.length)
        for (i = 1; i < (rows.length - 1); i++) {
          // console.log('this ran ', i, ' times')
          shouldSwitch = false
          x = rows[i].getElementsByTagName('TD')[1]
          y = rows[i + 1].getElementsByTagName('TD')[1]
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
