import Component from '@ember/component'
import { inject as service } from '@ember/service'

export default Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],
  routines: service(),
  entry: {},

  actions: {
    submit () {
      console.log('name in routine form is ', this.get('routinesEntry.name'))
      console.log('id in routine form is ', this.get('routinesEntry.id'))
      this.entry.id = this.get('routinesEntry.id')
      this.entry.name = this.get('routinesEntry.name')
      this.entry.exercise1 = this.get('routinesEntry.exercise1')
      console.log('entry is ', this.get('entry'))
      this.sendAction('submit', this.get('entry'))
    },
    cancel () {
      this.sendAction('cancel')
    },
    showNextLine () {
      this.entry.id = this.get('routinesEntry.id')
      this.entry.exercise1 = ''
      this.entry.reps1 = ''
      this.entry.sets1 = ''
      console.log('entry in show.js is ', this.entry)
      this.get('routines').updateRoutinesEntry(this.entry)
        .then(() => this.refresh())
        .then(() => {
          this.get('flashMessages')
            .success('Successfully updated entry.')
        })
        .catch(() => {
          this.get('flashMessages')
            .danger('There was a problem. Please try again.')
        })
    }
  }
})
