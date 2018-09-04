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
