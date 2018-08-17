import Component from '@ember/component'
import { inject as service } from '@ember/service'

export default Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],
  flashMessages: service(),
  entry: {},

  actions: {
    submit () {
      const table = document.getElementById('generic-exposures-table')
      for (let i = 0, row; row = table.rows[i]; i++) {
        const rowId = row.getAttribute('data-id')
        console.log('row is ', row)
        console.log('row id is ', rowId)
        this.entry.id = rowId
        this.entry.activity = this.get('generic.activity')
        this.entry.fear_level = this.get('generic.fear_level')
        console.log('entry is ', this.entry)
        this.sendAction('submit', this.get('entry'))
      }
    },
    createGenericsEntry () {
      this.sendAction('createGenericsEntry')
    },
    deleteEntry () {
      const clickedRow = event.target.parentNode.parentNode.getElementsByTagName('td')[0].innerText
      this.sendAction('deleteEntry', clickedRow)
    }
  }
})
