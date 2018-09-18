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
    for (let i = 1; i <= 8; i++) {
      if (i <= this.get('fullRoutineChoice.sets1')) {
        this.set(('inputObject.exercise1sets' + i), true)
      } else {
        this.set(('inputObject.exercise1sets' + i), false)
      }
    }
    for (let i = 1; i <= 8; i++) {
      if (i <= this.get('fullRoutineChoice.sets2')) {
        this.set(('inputObject.exercise2sets' + i), true)
      } else {
        this.set(('inputObject.exercise2sets' + i), false)
      }
    }
    for (let i = 1; i <= 8; i++) {
      if (i <= this.get('fullRoutineChoice.sets3')) {
        this.set(('inputObject.exercise3sets' + i), true)
      } else {
        this.set(('inputObject.exercise3sets' + i), false)
      }
    }
    for (let i = 1; i <= 8; i++) {
      if (i <= this.get('fullRoutineChoice.sets4')) {
        this.set(('inputObject.exercise4sets' + i), true)
      } else {
        this.set(('inputObject.exercise4sets' + i), false)
      }
    }
    for (let i = 1; i <= 8; i++) {
      if (i <= this.get('fullRoutineChoice.sets5')) {
        this.set(('inputObject.exercise5sets' + i), true)
      } else {
        this.set(('inputObject.exercise5sets' + i), false)
      }
    }
    for (let i = 1; i <= 8; i++) {
      if (i <= this.get('fullRoutineChoice.sets6')) {
        this.set(('inputObject.exercise6sets' + i), true)
      } else {
        this.set(('inputObject.exercise6sets' + i), false)
      }
    }
    for (let i = 1; i <= 8; i++) {
      if (i <= this.get('fullRoutineChoice.sets7')) {
        this.set(('inputObject.exercise7sets' + i), true)
      } else {
        this.set(('inputObject.exercise7sets' + i), false)
      }
    }
    for (let i = 1; i <= 8; i++) {
      if (i <= this.get('fullRoutineChoice.sets8')) {
        this.set(('inputObject.exercise8sets' + i), true)
      } else {
        this.set(('inputObject.exercise8sets' + i), false)
      }
    }
    for (let i = 1; i <= 8; i++) {
      if (i <= this.get('fullRoutineChoice.sets9')) {
        this.set(('inputObject.exercise9sets' + i), true)
      } else {
        this.set(('inputObject.exercise9sets' + i), false)
      }
    }
    for (let i = 1; i <= 8; i++) {
      if (i <= this.get('fullRoutineChoice.sets10')) {
        this.set(('inputObject.exercise10sets' + i), true)
      } else {
        this.set(('inputObject.exercise10sets' + i), false)
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
