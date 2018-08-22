import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  exposures: service(),
  flashMessages: service(),

  model () {
    const response = this.get('exposures').getExposuresEntries()
    // console.log ('response is ', response)
    return response
    .then((result) => {
      // console.log('result is ', result.colum_methods)
      result.exposures.forEach((exposure) => {
        // console.log('colum_method is ', colum_method)
        exposure.updated_at = exposure.updated_at.slice(0, -5).split('T').join('  ')
        exposure.updated_at = exposure.created_at.slice(0, -5).split('T').join('  ')
      })
      // console.log('result.colum_methods is ', result.colum_methods)
      return result.exposures
    })
  },
  actions: {
    goToExposures () {
      this.transitionTo('exposures')
    },
    updateEntry () {
      // console.log('updateEntry was activated.')
      // console.log('this is ', this)
      // console.log('this.context is ', this.context)
      const clickedRow = event.target.parentNode.parentNode.getElementsByTagName('td')[0].innerText
      // console.log('clickedRow is ', clickedRow)
      this.transitionTo('/exposures/' + clickedRow)
    },
    deleteEntry () {
      // console.log('deleteEntry was activated.')
      const clickedRow = event.target.parentNode.parentNode.getElementsByTagName('td')[0].innerText
      // console.log('clickedRow is ', clickedRow)
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
      // console.log('sort table by ID was activated')
      let rows, i, x, y, shouldSwitch
      const table = document.getElementById('exposures-table')
      let switching = true
      while (switching) {
        switching = false
        rows = table.getElementsByTagName('TR')
        // console.log('rows is ', rows)
        // console.log('rows.length is ', rows.length)
        for (i = 1; i < (rows.length - 1); i++) {
          // console.log('this ran ', i, ' times')
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
      // console.log('sort table by ID was activated')
      let rows, i, x, y, shouldSwitch
      const table = document.getElementById('exposures-table')
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
      // console.log('sort table by activity was activated')
      let rows, i, x, y, shouldSwitch
      const table = document.getElementById('exposures-table')
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
    },
    sortTableByPrediction () {
      // console.log('sort table by fear level was activated')
      let rows, i, x, y, shouldSwitch
      const table = document.getElementById('exposures-table')
      let switching = true
      while (switching) {
        switching = false
        rows = table.getElementsByTagName('TR')
        // console.log('rows is ', rows)
        // console.log('rows.length is ', rows.length)
        for (i = 1; i < (rows.length - 1); i++) {
          // console.log('this ran ', i, ' times')
          shouldSwitch = false
          x = rows[i].getElementsByTagName('TD')[3]
          y = rows[i + 1].getElementsByTagName('TD')[3]
          // console.log('x is ', x)
          // console.log('y is ', y)
          // console.log('x.children[0].value is ', x.children[0].value)
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
      // console.log('sort table by fear level was activated')
      let rows, i, x, y, shouldSwitch
      const table = document.getElementById('exposures-table')
      let switching = true
      while (switching) {
        switching = false
        rows = table.getElementsByTagName('TR')
        // console.log('rows is ', rows)
        // console.log('rows.length is ', rows.length)
        for (i = 1; i < (rows.length - 1); i++) {
          // console.log('this ran ', i, ' times')
          shouldSwitch = false
          x = rows[i].getElementsByTagName('TD')[4]
          y = rows[i + 1].getElementsByTagName('TD')[4]
          // console.log('x is ', x)
          // console.log('y is ', y)
          // console.log('x.children[0].value is ', x.children[0].value)
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
      // console.log('sort table by fear level was activated')
      let rows, i, x, y, shouldSwitch
      const table = document.getElementById('exposures-table')
      let switching = true
      while (switching) {
        switching = false
        rows = table.getElementsByTagName('TR')
        // console.log('rows is ', rows)
        // console.log('rows.length is ', rows.length)
        for (i = 1; i < (rows.length - 1); i++) {
          // console.log('this ran ', i, ' times')
          shouldSwitch = false
          x = rows[i].getElementsByTagName('TD')[5]
          y = rows[i + 1].getElementsByTagName('TD')[5]
          // console.log('x is ', x)
          // console.log('y is ', y)
          // console.log('x.children[0].value is ', x.children[0].value)
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
