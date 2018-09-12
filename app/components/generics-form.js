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
      for (let i = 1, row; row = table.rows[i]; i++) {
        const rowId = row.getAttribute('data-id')
        this.entry.id = rowId
        this.entry.activity = this.genericsEntries[i - 1].activity
        this.entry.fear_level = this.genericsEntries[i - 1].fear_level
        this.sendAction('submit', this.get('entry'))
      }
      this.get('flashMessages')
          .success('Successfully updated entry.')
    },
    createGenericsEntry () {
      this.sendAction('createGenericsEntry')
    },
    deleteEntry () {
      const clickedRow = event.target.parentNode.parentNode.getElementsByTagName('td')[0].innerText
      this.sendAction('deleteEntry', clickedRow)
    },
    sortTableById () {
      this.sendAction('sortTableById')
    },
    sortTableByActivity () {
      this.sendAction('sortTableByActivity')
    },
    sortTableByFearLevel () {
      this.sendAction('sortTableByFearLevel')
    }
  }
})
