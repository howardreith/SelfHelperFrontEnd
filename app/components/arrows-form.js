import Component from '@ember/component'

export default Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],

  actions: {
    submit () {
      // console.log('id in columns-form is ', this.get('columnEntry.id'))
      // console.log('event in columns-form is ', this.get('columnEntry.event'))
      // console.log('emotion in columns-form is ', this.get('columnEntry.emotion'))
      // console.log('autothought in columns-form is ', this.get('columnEntry.autothought'))
      // console.log('distortion in columns-form is ', this.get('columnEntry.distortion'))
      // console.log('response in columns-form is ', this.get('columnEntry.response'))
      this.entry.id = this.get('arrowsEntry.id')
      this.entry.autothought1 = this.get('arrowsEntry.autothought1')
      this.entry.distortion1 = this.get('arrowsEntry.distortion1')
      this.entry.response1 = this.get('arrowsEntry.response1')
      // console.log('entry is ', this.get('entry'))
      this.sendAction('submit', this.get('entry'))
    },
    cancel () {
      this.sendAction('cancel')
    }
  }
})
