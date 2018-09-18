import Component from '@ember/component'
import { inject as service } from '@ember/service'

export default Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],
  routines: service(),
  entry: {},
  lastReveal: 1,
  findFalsy: function () {
    this.lastReveal = 1
    for (let i = 1; i < 20; i++) {
      if (this.get('routinesEntry.exercise' + i)) {
        this.lastReveal = this.lastReveal + 1
      }
    }
  },
  didRender () {
    this.findFalsy()
  },

  actions: {
    submit () {
      for (let i = 1; i <= 10; i++) {
        this.entry['exercise' + i] = this.get('routinesEntry.exercise' + i)
        this.entry['reps' + i] = this.get('routinesEntry.reps' + i)
        this.entry['sets' + i] = this.get('routinesEntry.sets' + i)
      }
      this.entry.id = this.get('routinesEntry.id')
      this.entry.name = this.get('routinesEntry.name')
      this.sendAction('submit', this.get('entry'))
    },
    cancel () {
      this.entry.id = this.get('routinesEntry.id')
      this.entry.name = this.get('routinesEntry.name')
      this.entry.exercise1 = this.get('routinesEntry.exercise1')
      this.entry.reps1 = this.get('routinesEntry.reps1')
      this.entry.sets1 = this.get('routinesEntry.sets1')
      this.sendAction('cancel', this.get('entry'))
    },
    showNext () {
      this.toggleProperty(this.lastReveal + 'isShowing')
    }
  }
})
