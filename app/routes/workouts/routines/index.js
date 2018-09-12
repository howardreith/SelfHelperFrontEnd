import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  routines: service(),
  flashMessages: service(),

  model () {
    const response = this.get('routines').getRoutinesEntries()
    return response
    .then((result) => {
      return result.routines
    })
  },

  actions: {
    goToRoutines () {
      this.transitionTo('routines')
    },
    updateEntry () {
      const clickedRow = event.target.parentNode.parentNode.getElementsByTagName('td')[1].innerText
      this.transitionTo('/workouts/routines/' + clickedRow)
    },
    checkEntry () {
      const clickedRow = event.target.parentNode.parentNode.getElementsByTagName('td')[1].innerText
      const entry = {}
      entry.id = clickedRow
      if (event.target.checked) {
        entry.include = true
      } else if (!event.target.checked) {
        entry.include = false
      }
      this.get('routines').updateRoutinesEntry(entry)
        .then(() => this.refresh())
    },
    deleteEntry () {
      const clickedRow = event.target.parentNode.parentNode.getElementsByTagName('td')[1].innerText
      this.get('routines').deleteRoutinesEntry(clickedRow)
      .then(() => this.refresh())
      .then(() => {
        this.get('flashMessages')
        .success('Successfully deleted routine.')
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.')
      })
    },
    createRoutinesEntry () {
      this.get('routines').createRoutinesEntry()
        .then((response) => {
          this.transitionTo('/workouts/routines/' + response.routine.id)
        })
        .then(() => {
          this.get('flashMessages')
            .success('Successfully created new routine.')
        })
        .catch(() => {
          this.get('flashMessages')
            .danger('There was a problem. Please try again.')
        })
    },
    sortTableById () {
      let rows, i, x, y, shouldSwitch
      const table = document.getElementById('routines-table')
      let switching = true
      while (switching) {
        switching = false
        rows = table.getElementsByTagName('TR')
        for (i = 1; i < (rows.length - 1); i++) {
          shouldSwitch = false
          x = rows[i].getElementsByTagName('TD')[1]
          y = rows[i + 1].getElementsByTagName('TD')[1]
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
    sortTableByName () {
      let rows, i, x, y, shouldSwitch
      const table = document.getElementById('routines-table')
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
