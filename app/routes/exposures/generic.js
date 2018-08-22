import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  generics: service(),
  flashMessages: service(),

  model () {
    const response = this.get('generics').getGenericsEntries()
    // console.log('response is ', response)
    return response
    .then((result) => {
      // console.log('result.generics is ', result.generics)
      return result.generics
    })
  },
  actions: {
    deleteEntry (clickedRow) {
      // console.log('deleteEntry was activated.')
      // console.log('clickedRow is ', clickedRow)
      // console.log('deleteEntry was called in the second to last place')
      // console.log('clickedRow in the second to last place is ', clickedRow)
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
      // console.log('The plus was clicked!')
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
      // console.log('updateGenericsTable was accessed in generic.js.')
      // console.log('entry in updateGenericsTable is ', entry)
      this.get('generics').updateGenericsEntry(entry)
      .then(() => {
        this.refresh()
      })
    },
    sortTableById () {
      // console.log('sort table by ID was activated')
      let rows, i, x, y, shouldSwitch
      const table = document.getElementById('generic-exposures-table')
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
    sortTableByActivity () {
      // console.log('sort table by activity was activated')
      let rows, i, x, y, shouldSwitch
      const table = document.getElementById('generic-exposures-table')
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
      // console.log('sort table by fear level was activated')
      let rows, i, x, y, shouldSwitch
      const table = document.getElementById('generic-exposures-table')
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
          // console.log('x is ', x)
          // console.log('y is ', y)
          // console.log('x.children[0].value is ', x.children[0].value)
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
