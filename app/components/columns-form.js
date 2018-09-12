import Component from '@ember/component'

export default Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],
  entry: {},

  actions: {
    submit () {
      this.entry.id = this.get('columnEntry.id')
      this.entry.event = this.get('columnEntry.event')
      this.entry.emotion = this.get('columnEntry.emotion')
      this.entry.autothought = this.get('columnEntry.autothought')
      this.entry.distortion = this.get('columnEntry.distortion')
      this.entry.response = this.get('columnEntry.response')
      this.sendAction('submit', this.get('entry'))
    },
    cancel () {
      this.sendAction('cancel')
    }
  }
})
