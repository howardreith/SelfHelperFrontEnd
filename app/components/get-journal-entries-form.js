import Component from '@ember/component'

export default Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],

  actions: {
    submit () {
      // console.log('get-journal-entries-form did something.')
      this.sendAction('submit')
    }
  }
})
