import Component from '@ember/component'

export default Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],
  entry: {},
  routineChoice: null,
  routineChoiceIndex: null,
  fullRoutineChoice: null,
  inputObject: {},
  inputShower: function () {
    for (let j = 1; j <= 10; j++) {
      for (let i = 1; i <= 8; i++) {
        if (i <= this.get('fullRoutineChoice.sets' + j)) {
          this.set(('inputObject.exercise' + j + 'sets' + i), true)
        } else {
          this.set(('inputObject.exercise' + j + 'sets' + i), false)
        }
      }
    }
  },
  init: function () {
    this._super()
    if (this.model.routineChoice) {
      this.set('routineChoice', this.model.routineChoice)
    }
    if (this.model.fullRoutineChoice) {
      this.set('fullRoutineChoice', this.model.fullRoutineChoice)
      this.inputShower()
    }
  },

  actions: {
    selectRoutine: function (routineChoice) {
      this.set('routineChoice', routineChoice)
      for (let i = 0; i < this.model.routines.routines.length; i++) {
        if (this.model.routines.routines[i].name === this.routineChoice) {
          this.set('routineChoiceIndex', i)
        }
      }
      this.set('fullRoutineChoice', this.model.routines.routines[this.routineChoiceIndex])
      this.set('model.routineChoiceIndex', this.get('routineChoiceIndex'))
      this.set('model.fullRoutineChoice', this.get('fullRoutineChoice'))
      this.inputShower()
      this.sendAction('selectRoutine', this.routineChoice, this.routineChoiceIndex, this.fullRoutineChoice)
    },
    submit () {
      this.entry.id = this.get('model.workout.workout.id')
      this.entry.name = this.get('routineChoice')
      for (let i = 1; i <= 10; i++) {
        this.entry['exercise' + i] = this.get('fullRoutineChoice.exercise' + i)
      }
      for (let i = 1; i <= 10; i++) {
        this.entry['exercise' + i + 'weight'] = this.get('model.workout.workout.exercise' + i + 'weight')
      }
      for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
          this.entry['exercise' + i + 'reps' + j] = this.get('model.workout.workout.exercise' + i + 'reps' + j)
        }
      }
      this.sendAction('submit', this.get('entry'))
    },
    cancel () {
      this.entry.id = this.get('model.workout.workout.id')
      this.entry.name = this.get('routineChoice')
      this.sendAction('cancel', this.get('entry'))
    }
  }
})
