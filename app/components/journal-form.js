import Component from '@ember/component'

export default Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],
  entry: {},

  actions: {
    submit () {
      console.log('title in journal-form is ', this.get('journalEntry.title'))
      console.log('content in journal-form is ', this.get('journalEntry.content'))
      console.log('starred in journal-form is ', this.get('journalEntry.starred'))
      console.log('id in journal-form is ', this.get('journalEntry.id'))
      this.entry.title = this.get('journalEntry.title')
      this.entry.content = this.get('journalEntry.content')
      this.entry.starred = this.get('journalEntry.starred')
      this.entry.id = this.get('journalEntry.id')
      console.log('entry is ', this.get('entry'))
      this.sendAction('submit', this.get('entry'))
    },

    reset () {
      this.set('entry', {})
    }
  }
})
