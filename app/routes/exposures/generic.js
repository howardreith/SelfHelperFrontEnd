import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  generics: service(),
  flashMessages: service(),

  model () {
    const response = this.get('generics').getGenericsEntries()
    return response
    .then((result) => {
      return result.generics
    })
  },
  actions: {
    deleteEntry (clickedRow) {
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
      this.get('generics').createGenericsEntry()
        .then(() => {
          this.refresh()
        })
        .catch(() => {
          this.get('flashMessages')
            .danger('There was a problem. Please try again.')
        })
    },
    updateGenericsTable (entry) {
      this.get('generics').updateGenericsEntry(entry)
      .then(() => {
        this.refresh()
      })
    },
    sortTableById () {
      let rows, i, x, y, shouldSwitch
      const table = document.getElementById('generic-exposures-table')
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
    sortTableByActivity () {
      let rows, i, x, y, shouldSwitch
      const table = document.getElementById('generic-exposures-table')
      let switching = true
      while (switching) {
        switching = false
        rows = table.getElementsByTagName('TR')
        for (i = 1; i < (rows.length - 1); i++) {
          shouldSwitch = false
          x = rows[i].getElementsByTagName('TD')[1]
          y = rows[i + 1].getElementsByTagName('TD')[1]
          if (x.children[0].value.toLowerCase() > y.children[0].value.toLowerCase()) {
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
    sortTableByFearLevel () {
      let rows, i, x, y, shouldSwitch
      const table = document.getElementById('generic-exposures-table')
      let switching = true
      while (switching) {
        switching = false
        rows = table.getElementsByTagName('TR')
        for (i = 1; i < (rows.length - 1); i++) {
          shouldSwitch = false
          x = rows[i].getElementsByTagName('TD')[2]
          y = rows[i + 1].getElementsByTagName('TD')[2]
          if (+x.children[0].value > +y.children[0].value) {
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
