import Component from '@ember/component'

export default Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],
  entry: {},

  actions: {
    submit () {
      console.log('title in journal-form is ', this.get('title'))
      console.log('content in journal-form is ', this.get('content'))
      console.log('starred in journal-form is ', this.get('starred'))
      console.log('id in journal-form is ', this.get('id'))
      this.entry.title = this.get('title')
      this.entry.content = this.get('content')
      this.entry.starred = this.get('starred')
      this.entry.id = this.get('id')
      console.log('entry is ', this.get('entry'))
      this.sendAction('submit', this.get('entry'))
    },

    reset () {
      this.set('entry', {})
    }
  }
})
