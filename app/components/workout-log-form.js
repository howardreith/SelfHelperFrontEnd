import Component from '@ember/component'

export default Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],
  entry: {},
  routineChoice: null,
  routineChoiceIndex: null,
  fullRoutineChoice: null,
  indexIs0: false,
  indexIs1: false,
  indexIs2: false,
  indexIs3: false,
  indexIs4: false,
  indexIs5: false,
  indexIs6: false,
  indexIs7: false,
  indexIs8: false,
  indexIs9: false,
  indexIs10: false,

  actions: {
    selectRoutine: function (routineChoice) {
      this.set('routineChoice', routineChoice)
      // console.log('routineChoice is ', this.routineChoice)
      for (let i = 0; i < this.model.routines.routines.length; i++) {
        if (this.model.routines.routines[i].name === this.routineChoice) {
          this.set('routineChoiceIndex', i)
          this.set(('indexIs' + i), true)
        } else {
          this.set(('indexIs' + i), false)
        }
      }
      this.set('fullRoutineChoice', this.model.routines.routines[this.routineChoiceIndex])
      // console.log('this.routineChoiceIndex is ', this.routineChoiceIndex)
      // console.log('model routines routines 0 name is ', this.model.routines.routines[0].name)
      // console.log('the length is ', this.model.routines.routines.length)
      // console.log('the full Routine Choice is ', this.fullRoutineChoice)
      // console.log('this.model.fullRoutineChoice is ', this.model.fullRoutineChoice)
      this.set('model.routineChoiceIndex', this.get('routineChoiceIndex'))
      console.log('model is ', this.model)
      this.sendAction('selectRoutine', this.routineChoice, this.routineChoiceIndex, this.fullRoutineChoice)
    },
    submit () {
      // console.log('title in journal-form is ', this.get('journalEntry.title'))
      // console.log('content in journal-form is ', this.get('journalEntry.content'))
      // console.log('starred in journal-form is ', this.get('journalEntry.starred'))
      console.log('id in workout log form is ', this.get('model.workout.workout.id'))
      console.log('name in workout log form is ', this.get('routineChoice'))
      console.log('exercise1reps1 is ', this.get('model.workout.workout.exercise1reps1'))
      this.entry.id = this.get('model.workout.workout.id')
      this.entry.name = this.get('routineChoice')
      this.entry.exercise1 = this.get('exposuresEntry.prediction')
      this.entry.exercise1reps1 = this.get('model.workout.workout.exercise1reps1')
      console.log('entry is ', this.get('entry'))
      this.sendAction('submit', this.get('entry'))
    },
    cancel () {
      this.sendAction('cancel')
    }
  }
})
