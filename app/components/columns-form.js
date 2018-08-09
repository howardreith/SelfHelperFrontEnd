import Component from '@ember/component'

export default Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],
  entry: {},

  actions: {
    submit () {
      // console.log('id in columns-form is ', this.get('columnEntry.id'))
      // console.log('event in columns-form is ', this.get('columnEntry.event'))
      // console.log('emotion in columns-form is ', this.get('columnEntry.emotion'))
      // console.log('autothought in columns-form is ', this.get('columnEntry.autothought'))
      // console.log('distortion in columns-form is ', this.get('columnEntry.distortion'))
      // console.log('response in columns-form is ', this.get('columnEntry.response'))
      this.entry.id = this.get('columnEntry.id')
      this.entry.event = this.get('columnEntry.event')
      this.entry.emotion = this.get('columnEntry.emotion')
      this.entry.autothought = this.get('columnEntry.autothought')
      this.entry.distortion = this.get('columnEntry.distortion')
      this.entry.response = this.get('columnEntry.response')
      // console.log('entry is ', this.get('entry'))
      this.sendAction('submit', this.get('entry'))
    },
    cancel () {
      this.sendAction ('cancel')
    }
  }
})
