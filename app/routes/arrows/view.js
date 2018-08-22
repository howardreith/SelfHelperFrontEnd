import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  arrows: service(),
  flashMessages: service(),

  model () {
    const response = this.get('arrows').getArrowsEntries()
    // console.log ('response is ', response)
    return response
    .then((result) => {
      // console.log('result is ', result.downward_arrow)
      result.downward_arrows.forEach((downward_arrow) => {
        // console.log('downward_arrow is ', downward_arrow)
        downward_arrow.updated_at = downward_arrow.updated_at.slice(0, -5).split('T').join('  ')
        downward_arrow.updated_at = downward_arrow.created_at.slice(0, -5).split('T').join('  ')
      })
      // console.log('result.downward_arrows is ', result.downward_arrows)
      return result.downward_arrows
    })
  },

  actions: {
    goToArrows () {
      this.transitionTo('arrows')
    },
    updateEntry () {
      // console.log('updateEntry was activated.')
      // console.log('this is ', this)
      // console.log('this.context is ', this.context)
      const clickedRow = event.target.parentNode.parentNode.getElementsByTagName('td')[0].innerText
      // console.log('clickedRow is ', clickedRow)
      this.transitionTo('/arrows/' + clickedRow)
    },
    deleteEntry () {
      // console.log('deleteEntry was activated.')
      const clickedRow = event.target.parentNode.parentNode.getElementsByTagName('td')[0].innerText
      // console.log('clickedRow is ', clickedRow)
      this.get('arrows').deleteArrowsEntry(clickedRow)
      .then(() => this.refresh())
      .then(() => {
        this.get('flashMessages')
        .success('Successfully deleted arrows entry.')
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.')
      })
    },
    sortTableById () {
      // console.log('sort table by ID was activated')
      let rows, i, x, y, shouldSwitch
      const table = document.getElementById('arrows-table')
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
      const table = document.getElementById('arrows-table')
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
    sortTableByAutothought () {
      // console.log('sort table by activity was activated')
      let rows, i, x, y, shouldSwitch
      const table = document.getElementById('arrows-table')
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
