import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  exposures: service(),
  flashMessages: service(),

  model () {
    const response = this.get('exposures').getExposuresEntries()
    return response
    .then((result) => {
      result.exposures.forEach((exposure) => {
        exposure.updated_at = exposure.updated_at.slice(0, -5).split('T').join('  ')
        exposure.updated_at = exposure.created_at.slice(0, -5).split('T').join('  ')
      })
      return result.exposures
    })
  },
  actions: {
    goToExposures () {
      this.transitionTo('exposures')
    },
    updateEntry () {
      const clickedRow = event.target.parentNode.parentNode.getElementsByTagName('td')[0].innerText
      this.transitionTo('/exposures/' + clickedRow)
    },
    deleteEntry () {
      const clickedRow = event.target.parentNode.parentNode.getElementsByTagName('td')[0].innerText
      this.get('exposures').deleteExposuresEntry(clickedRow)
      .then(() => this.refresh())
      .then(() => {
        this.get('flashMessages')
        .success('Successfully deleted exposures entry.')
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.')
      })
    },
    sortTableById () {
      let rows, i, x, y, shouldSwitch
      const table = document.getElementById('exposures-table')
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
      const table = document.getElementById('exposures-table')
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
    sortTableByAction () {
      let rows, i, x, y, shouldSwitch
      const table = document.getElementById('exposures-table')
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
    },
    sortTableByPrediction () {
      let rows, i, x, y, shouldSwitch
      const table = document.getElementById('exposures-table')
      let switching = true
      while (switching) {
        switching = false
        rows = table.getElementsByTagName('TR')
        for (i = 1; i < (rows.length - 1); i++) {
          shouldSwitch = false
          x = rows[i].getElementsByTagName('TD')[3]
          y = rows[i + 1].getElementsByTagName('TD')[3]
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
    sortTableByActual () {
      let rows, i, x, y, shouldSwitch
      const table = document.getElementById('exposures-table')
      let switching = true
      while (switching) {
        switching = false
        rows = table.getElementsByTagName('TR')
        for (i = 1; i < (rows.length - 1); i++) {
          shouldSwitch = false
          x = rows[i].getElementsByTagName('TD')[4]
          y = rows[i + 1].getElementsByTagName('TD')[4]
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
    sortTableBySatisfaction () {
      let rows, i, x, y, shouldSwitch
      const table = document.getElementById('exposures-table')
      let switching = true
      while (switching) {
        switching = false
        rows = table.getElementsByTagName('TR')
        for (i = 1; i < (rows.length - 1); i++) {
          shouldSwitch = false
          x = rows[i].getElementsByTagName('TD')[5]
          y = rows[i + 1].getElementsByTagName('TD')[5]
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
    }
  }
})
