import Component from '@ember/component'

export default Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],
  entry: {},

  actions: {
    submit () {
      this.entry.id = this.get('exposuresEntry.id')
      this.entry.action = this.get('exposuresEntry.action')
      this.entry.prediction = this.get('exposuresEntry.prediction')
      this.entry.actual = this.get('exposuresEntry.actual')
      this.entry.satisfaction = this.get('exposuresEntry.satisfaction')
      this.sendAction('submit', this.get('entry'))
    },
    cancel () {
      this.sendAction('cancel')
    }
  }
})
