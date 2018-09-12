import Component from '@ember/component'

export default Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],
  entry: {},

  actions: {
    submit () {
      this.entry.title = this.get('journalEntry.title')
      this.entry.content = this.get('journalEntry.content')
      this.entry.starred = this.get('journalEntry.starred')
      this.entry.id = this.get('journalEntry.id')
      this.sendAction('submit', this.get('entry'))
    },
    cancel () {
      this.sendAction('cancel')
    }
  }
})
