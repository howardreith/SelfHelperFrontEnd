import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'

export default Route.extend({
  columns: service(),
  flashMessages: service(),

  model () {
    const response = this.get('columns').getColumnsEntries()
    console.log ('response is ', response)
    return response
    .then((result) => {
      console.log('result is ', result.colum_methods)
      result.colum_methods.forEach((colum_method) => {
        console.log('colum_method is ', colum_method)
        colum_method.updated_at = colum_method.updated_at.slice(0, -5).split('T').join('  ')
        colum_method.updated_at = colum_method.created_at.slice(0, -5).split('T').join('  ')
      })
      console.log('result.colum_methods is ', result.colum_methods)
      return result.colum_methods
    })
  },

  actions: {
    goToJournal() {
      this.transitionTo('columns')
    },
    updateEntry() {
      console.log('updateEntry was activated.')
      console.log('this is ', this)
      console.log('this.context is ', this.context)
      const clickedRow = event.target.parentNode.parentNode.getElementsByTagName('td')[0].innerText
      console.log('clickedRow is ', clickedRow)
      this.transitionTo('/columns/' + clickedRow)
    },
    deleteEntry() {
      console.log('deleteEntry was activated.')
      const clickedRow = event.target.parentNode.parentNode.getElementsByTagName('td')[0].innerText
      console.log('clickedRow is ', clickedRow)
      this.get('columns').deleteColumnsEntry(clickedRow)
      .then(() => this.refresh())
      .then(() => {
        this.get('flashMessages')
        .success('Successfully deleted columns method entry.')
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.')
      })
    },
    sortTable () {
      console.log('sort table was activated')
      let rows, i, x, y, shouldSwitch
      const table = document.getElementById('columns-table')
      let switching = true
      while (switching) {
        switching = false
        rows = table.getElementsByTagName('TR')
        console.log('rows is ', rows)
        console.log('rows.length is ', rows.length)
        for (i = 1; i < (rows.length - 1); i++) {
          console.log('this ran ', i, ' times')
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
