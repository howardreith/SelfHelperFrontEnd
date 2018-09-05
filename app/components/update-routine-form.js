import Component from '@ember/component'
import { inject as service } from '@ember/service'

export default Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],
  routines: service(),
  entry: {},
  lastReveal: 1,
  findFalsy: function () {
    console.log('findFalsy ran!')
    this.lastReveal = 1
    for (let i=1; i<20; i++) {
      if (this.get('routinesEntry.exercise' + i)) {
        console.log("routinesEntry.exercise + i is ", this.get('routinesEntry.exercise' + i))
        this.lastReveal = this.lastReveal + 1
      }
      console.log('this.lastReveal is ', this.lastReveal)
    }
  },
  didRender () {
    console.log('didrender did something')
    this.findFalsy()
  },

  actions: {
    submit () {
      console.log('name in routine form is ', this.get('routinesEntry.name'))
      console.log('id in routine form is ', this.get('routinesEntry.id'))
      this.entry.id = this.get('routinesEntry.id')
      this.entry.name = this.get('routinesEntry.name')
      this.entry.exercise1 = this.get('routinesEntry.exercise1')
      this.entry.reps1 = this.get('routinesEntry.reps1')
      this.entry.sets1 = this.get('routinesEntry.sets1')
      this.entry.exercise2 = this.get('routinesEntry.exercise2')
      this.entry.reps2 = this.get('routinesEntry.reps2')
      this.entry.sets2 = this.get('routinesEntry.sets2')
      this.entry.exercise3 = this.get('routinesEntry.exercise3')
      this.entry.reps3 = this.get('routinesEntry.reps3')
      this.entry.sets3 = this.get('routinesEntry.sets3')
      this.entry.exercise4 = this.get('routinesEntry.exercise4')
      this.entry.reps4 = this.get('routinesEntry.reps4')
      this.entry.sets4 = this.get('routinesEntry.sets4')
      this.entry.exercise5 = this.get('routinesEntry.exercise5')
      this.entry.reps5 = this.get('routinesEntry.reps5')
      this.entry.sets5 = this.get('routinesEntry.sets5')
      this.entry.exercise6 = this.get('routinesEntry.exercise6')
      this.entry.reps6 = this.get('routinesEntry.reps6')
      this.entry.sets6 = this.get('routinesEntry.sets6')
      this.entry.exercise7 = this.get('routinesEntry.exercise7')
      this.entry.reps7 = this.get('routinesEntry.reps7')
      this.entry.sets7 = this.get('routinesEntry.sets7')
      this.entry.exercise8 = this.get('routinesEntry.exercise8')
      this.entry.reps8 = this.get('routinesEntry.reps8')
      this.entry.sets8 = this.get('routinesEntry.sets8')
      this.entry.exercise9 = this.get('routinesEntry.exercise9')
      this.entry.reps9 = this.get('routinesEntry.reps9')
      this.entry.sets9 = this.get('routinesEntry.sets9')
      this.entry.exercise10 = this.get('routinesEntry.exercise10')
      this.entry.reps10 = this.get('routinesEntry.reps10')
      this.entry.sets10 = this.get('routinesEntry.sets10')
      console.log('entry is ', this.get('entry'))
      this.sendAction('submit', this.get('entry'))
    },
    cancel () {
      this.sendAction('cancel')
    },
    showNext () {
      this.toggleProperty(this.lastReveal + 'isShowing')
    }
  }
})
