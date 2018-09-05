import Component from '@ember/component'

export default Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],
  entry: {}

  // actions: {
  //   submit () {
  //     // console.log('title in journal-form is ', this.get('journalEntry.title'))
  //     // console.log('content in journal-form is ', this.get('journalEntry.content'))
  //     // console.log('starred in journal-form is ', this.get('journalEntry.starred'))
  //     // console.log('id in journal-form is ', this.get('journalEntry.id'))
  //     this.entry.id = this.get('exposuresEntry.id')
  //     this.entry.action = this.get('exposuresEntry.action')
  //     this.entry.prediction = this.get('exposuresEntry.prediction')
  //     this.entry.actual = this.get('exposuresEntry.actual')
  //     this.entry.satisfaction = this.get('exposuresEntry.satisfaction')
  //     // console.log('entry is ', this.get('entry'))
  //     this.sendAction('submit', this.get('entry'))
  //   },
  //   cancel () {
  //     this.sendAction('cancel')
  //   }
  // }
})
