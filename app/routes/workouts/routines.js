import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  routines: service(),
  flashMessages: service(),

  model () {
    const response = this.get('routines').getRoutinesEntries()
    return response
    .then((result) => {
      // console.log('result is ', result.downward_arrow)
      // result.routines.forEach((routine) => {
        // console.log('downward_arrow is ', downward_arrow)
      //   routine.updated_at = routine.updated_at.slice(0, -5).split('T').join('  ')
      //   routine.updated_at = routine.created_at.slice(0, -5).split('T').join('  ')
      // })
      // console.log('result.downward_arrows is ', result.downward_arrows)
      return result.routines
    })
  },

  actions: {
    goToRoutines () {
      this.transitionTo('routines')
    },
    updateEntry () {
      // console.log('updateEntry was activated.')
      // console.log('this is ', this)
      // console.log('this.context is ', this.context)
      const clickedRow = event.target.parentNode.parentNode.getElementsByTagName('td')[1].innerText
      // console.log('clickedRow is ', clickedRow)
      this.transitionTo('/workouts/routines/' + clickedRow)
    },
    checkEntry () {
      const clickedRow = event.target.parentNode.parentNode.getElementsByTagName('td')[1].innerText
      // console.log('event is ', event)
      // console.log('event.target.checked is ', event.target.checked)
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
      // console.log('deleteEntry was activated.')
      const clickedRow = event.target.parentNode.parentNode.getElementsByTagName('td')[1].innerText
      // console.log('clickedRow is ', clickedRow)
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
      // console.log('createColumnsEntry was called in columns.js route')
      this.get('routines').createRoutinesEntry()
        .then((response) => {
          // console.log('response is ', response)
          // console.log('response.routine.id is ', response.colum_method.id)
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
      // console.log('sort table by ID was activated')
      let rows, i, x, y, shouldSwitch
      const table = document.getElementById('routines-table')
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
      // console.log('sort table by activity was activated')
      let rows, i, x, y, shouldSwitch
      const table = document.getElementById('routines-table')
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
