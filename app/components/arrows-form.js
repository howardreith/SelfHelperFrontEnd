import Component from '@ember/component'

export default Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],
  entry: {},

  actions: {
    submit () {
      console.log('id in arrows-form is ', this.get('arrowsEntry.id'))
      console.log('autothought in arrows-form is ', this.get('arrowsEntry.autothought1'))
      console.log('distortion in arrows-form is ', this.get('arrowsEntry.distortion1'))
      console.log('response in arrows-form is ', this.get('arrowsEntry.response1'))
      this.entry.id = this.get('arrowsEntry.id')
      this.entry.autothought1 = this.get('arrowsEntry.autothought1')
      this.entry.distortion1 = this.get('arrowsEntry.distortion1')
      this.entry.response1 = this.get('arrowsEntry.response1')
      console.log('entry is ', this.get('entry'))
      this.sendAction('submit', this.get('entry'))
    },
    cancel () {
      this.sendAction('cancel')
    }
  }
})
