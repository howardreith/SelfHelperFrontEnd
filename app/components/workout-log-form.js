import Component from '@ember/component'

export default Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],
  entry: {},
  routineChoice: null,
  routineChoiceIndex: null,
  fullRoutineChoice: null,
  inputObject: {
    exercise1sets1: false,
    exercise1sets2: false,
    exercise1sets3: false,
    exercise1sets4: false,
    exercise1sets5: false,
    exercise1sets6: false,
    exercise1sets7: false,
    exercise1sets8: false,
    exercise2sets1: false,
    exercise2sets2: false,
    exercise2sets3: false,
    exercise2sets4: false,
    exercise2sets5: false,
    exercise2sets6: false,
    exercise2sets7: false,
    exercise2sets8: false,
    exercise3sets1: false,
    exercise3sets2: false,
    exercise3sets3: false,
    exercise3sets4: false,
    exercise3sets5: false,
    exercise3sets6: false,
    exercise3sets7: false,
    exercise3sets8: false,
    exercise4sets1: false,
    exercise4sets2: false,
    exercise4sets3: false,
    exercise4sets4: false,
    exercise4sets5: false,
    exercise4sets6: false,
    exercise4sets7: false,
    exercise4sets8: false,
    exercise5sets1: false,
    exercise5sets2: false,
    exercise5sets3: false,
    exercise5sets4: false,
    exercise5sets5: false,
    exercise5sets6: false,
    exercise5sets7: false,
    exercise5sets8: false,
    exercise6sets1: false,
    exercise6sets2: false,
    exercise6sets3: false,
    exercise6sets4: false,
    exercise6sets5: false,
    exercise6sets6: false,
    exercise6sets7: false,
    exercise6sets8: false,
    exercise7sets1: false,
    exercise7sets2: false,
    exercise7sets3: false,
    exercise7sets4: false,
    exercise7sets5: false,
    exercise7sets6: false,
    exercise7sets7: false,
    exercise7sets8: false,
    exercise8sets1: false,
    exercise8sets2: false,
    exercise8sets3: false,
    exercise8sets4: false,
    exercise8sets5: false,
    exercise8sets6: false,
    exercise8sets7: false,
    exercise8sets8: false,
    exercise9sets1: false,
    exercise9sets2: false,
    exercise9sets3: false,
    exercise9sets4: false,
    exercise9sets5: false,
    exercise9sets6: false,
    exercise9sets7: false,
    exercise9sets8: false,
    exercise10sets1: false,
    exercise10sets2: false,
    exercise10sets3: false,
    exercise10sets4: false,
    exercise10sets5: false,
    exercise10sets6: false,
    exercise10sets7: false,
    exercise10sets8: false
  },
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
      this.entry.exercise1 = this.get('fullRoutineChoice.exercise1')
      this.entry.exercise1weight = this.get('model.workout.workout.exercise1weight')
      this.entry.exercise1reps1 = this.get('model.workout.workout.exercise1reps1')
      this.entry.exercise1reps2 = this.get('model.workout.workout.exercise1reps2')
      this.entry.exercise1reps3 = this.get('model.workout.workout.exercise1reps3')
      this.entry.exercise1reps4 = this.get('model.workout.workout.exercise1reps4')
      this.entry.exercise1reps5 = this.get('model.workout.workout.exercise1reps5')
      this.entry.exercise1reps6 = this.get('model.workout.workout.exercise1reps6')
      this.entry.exercise1reps7 = this.get('model.workout.workout.exercise1reps7')
      this.entry.exercise1reps8 = this.get('model.workout.workout.exercise1reps8')
      this.entry.exercise1reps9 = this.get('model.workout.workout.exercise1reps9')
      this.entry.exercise1reps10 = this.get('model.workout.workout.exercise1reps10')
      this.entry.exercise2 = this.get('fullRoutineChoice.exercise2')
      this.entry.exercise2weight = this.get('model.workout.workout.exercise2weight')
      this.entry.exercise2reps1 = this.get('model.workout.workout.exercise2reps1')
      this.entry.exercise2reps2 = this.get('model.workout.workout.exercise2reps2')
      this.entry.exercise2reps3 = this.get('model.workout.workout.exercise2reps3')
      this.entry.exercise2reps4 = this.get('model.workout.workout.exercise2reps4')
      this.entry.exercise2reps5 = this.get('model.workout.workout.exercise2reps5')
      this.entry.exercise2reps6 = this.get('model.workout.workout.exercise2reps6')
      this.entry.exercise2reps7 = this.get('model.workout.workout.exercise2reps7')
      this.entry.exercise2reps8 = this.get('model.workout.workout.exercise2reps8')
      this.entry.exercise2reps9 = this.get('model.workout.workout.exercise2reps9')
      this.entry.exercise2reps10 = this.get('model.workout.workout.exercise2reps10')
      this.entry.exercise3 = this.get('fullRoutineChoice.exercise3')
      this.entry.exercise3weight = this.get('model.workout.workout.exercise3weight')
      this.entry.exercise3reps1 = this.get('model.workout.workout.exercise3reps1')
      this.entry.exercise3reps2 = this.get('model.workout.workout.exercise3reps2')
      this.entry.exercise3reps3 = this.get('model.workout.workout.exercise3reps3')
      this.entry.exercise3reps4 = this.get('model.workout.workout.exercise3reps4')
      this.entry.exercise3reps5 = this.get('model.workout.workout.exercise3reps5')
      this.entry.exercise3reps6 = this.get('model.workout.workout.exercise3reps6')
      this.entry.exercise3reps7 = this.get('model.workout.workout.exercise3reps7')
      this.entry.exercise3reps8 = this.get('model.workout.workout.exercise3reps8')
      this.entry.exercise3reps9 = this.get('model.workout.workout.exercise3reps9')
      this.entry.exercise3reps10 = this.get('model.workout.workout.exercise3reps10')
      this.entry.exercise4 = this.get('fullRoutineChoice.exercise4')
      this.entry.exercise4weight = this.get('model.workout.workout.exercise4weight')
      this.entry.exercise4reps1 = this.get('model.workout.workout.exercise4reps1')
      this.entry.exercise4reps2 = this.get('model.workout.workout.exercise4reps2')
      this.entry.exercise4reps3 = this.get('model.workout.workout.exercise4reps3')
      this.entry.exercise4reps4 = this.get('model.workout.workout.exercise4reps4')
      this.entry.exercise4reps5 = this.get('model.workout.workout.exercise4reps5')
      this.entry.exercise4reps6 = this.get('model.workout.workout.exercise4reps6')
      this.entry.exercise4reps7 = this.get('model.workout.workout.exercise4reps7')
      this.entry.exercise4reps8 = this.get('model.workout.workout.exercise4reps8')
      this.entry.exercise4reps9 = this.get('model.workout.workout.exercise4reps9')
      this.entry.exercise4reps10 = this.get('model.workout.workout.exercise4reps10')
      this.entry.exercise5 = this.get('fullRoutineChoice.exercise5')
      this.entry.exercise5weight = this.get('model.workout.workout.exercise5weight')
      this.entry.exercise5reps1 = this.get('model.workout.workout.exercise5reps1')
      this.entry.exercise5reps2 = this.get('model.workout.workout.exercise5reps2')
      this.entry.exercise5reps3 = this.get('model.workout.workout.exercise5reps3')
      this.entry.exercise5reps4 = this.get('model.workout.workout.exercise5reps4')
      this.entry.exercise5reps5 = this.get('model.workout.workout.exercise5reps5')
      this.entry.exercise5reps6 = this.get('model.workout.workout.exercise5reps6')
      this.entry.exercise5reps7 = this.get('model.workout.workout.exercise5reps7')
      this.entry.exercise5reps8 = this.get('model.workout.workout.exercise5reps8')
      this.entry.exercise5reps9 = this.get('model.workout.workout.exercise5reps9')
      this.entry.exercise5reps10 = this.get('model.workout.workout.exercise5reps10')
      this.entry.exercise6 = this.get('fullRoutineChoice.exercise6')
      this.entry.exercise6weight = this.get('model.workout.workout.exercise6weight')
      this.entry.exercise6reps1 = this.get('model.workout.workout.exercise6reps1')
      this.entry.exercise6reps2 = this.get('model.workout.workout.exercise6reps2')
      this.entry.exercise6reps3 = this.get('model.workout.workout.exercise6reps3')
      this.entry.exercise6reps4 = this.get('model.workout.workout.exercise6reps4')
      this.entry.exercise6reps5 = this.get('model.workout.workout.exercise6reps5')
      this.entry.exercise6reps6 = this.get('model.workout.workout.exercise6reps6')
      this.entry.exercise6reps7 = this.get('model.workout.workout.exercise6reps7')
      this.entry.exercise6reps8 = this.get('model.workout.workout.exercise6reps8')
      this.entry.exercise6reps9 = this.get('model.workout.workout.exercise6reps9')
      this.entry.exercise6reps10 = this.get('model.workout.workout.exercise6reps10')
      this.entry.exercise7 = this.get('fullRoutineChoice.exercise7')
      this.entry.exercise7weight = this.get('model.workout.workout.exercise7weight')
      this.entry.exercise7reps1 = this.get('model.workout.workout.exercise7reps1')
      this.entry.exercise7reps2 = this.get('model.workout.workout.exercise7reps2')
      this.entry.exercise7reps3 = this.get('model.workout.workout.exercise7reps3')
      this.entry.exercise7reps4 = this.get('model.workout.workout.exercise7reps4')
      this.entry.exercise7reps5 = this.get('model.workout.workout.exercise7reps5')
      this.entry.exercise7reps6 = this.get('model.workout.workout.exercise7reps6')
      this.entry.exercise7reps7 = this.get('model.workout.workout.exercise7reps7')
      this.entry.exercise7reps8 = this.get('model.workout.workout.exercise7reps8')
      this.entry.exercise7reps9 = this.get('model.workout.workout.exercise7reps9')
      this.entry.exercise7reps10 = this.get('model.workout.workout.exercise7reps10')
      this.entry.exercise8 = this.get('fullRoutineChoice.exercise8')
      this.entry.exercise8weight = this.get('model.workout.workout.exercise8weight')
      this.entry.exercise8reps1 = this.get('model.workout.workout.exercise8reps1')
      this.entry.exercise8reps2 = this.get('model.workout.workout.exercise8reps2')
      this.entry.exercise8reps3 = this.get('model.workout.workout.exercise8reps3')
      this.entry.exercise8reps4 = this.get('model.workout.workout.exercise8reps4')
      this.entry.exercise8reps5 = this.get('model.workout.workout.exercise8reps5')
      this.entry.exercise8reps6 = this.get('model.workout.workout.exercise8reps6')
      this.entry.exercise8reps7 = this.get('model.workout.workout.exercise8reps7')
      this.entry.exercise8reps8 = this.get('model.workout.workout.exercise8reps8')
      this.entry.exercise8reps9 = this.get('model.workout.workout.exercise8reps9')
      this.entry.exercise8reps10 = this.get('model.workout.workout.exercise8reps10')
      this.entry.exercise9 = this.get('fullRoutineChoice.exercise9')
      this.entry.exercise9weight = this.get('model.workout.workout.exercise9weight')
      this.entry.exercise9reps1 = this.get('model.workout.workout.exercise9reps1')
      this.entry.exercise9reps2 = this.get('model.workout.workout.exercise9reps2')
      this.entry.exercise9reps3 = this.get('model.workout.workout.exercise9reps3')
      this.entry.exercise9reps4 = this.get('model.workout.workout.exercise9reps4')
      this.entry.exercise9reps5 = this.get('model.workout.workout.exercise9reps5')
      this.entry.exercise9reps6 = this.get('model.workout.workout.exercise9reps6')
      this.entry.exercise9reps7 = this.get('model.workout.workout.exercise9reps7')
      this.entry.exercise9reps8 = this.get('model.workout.workout.exercise9reps8')
      this.entry.exercise9reps9 = this.get('model.workout.workout.exercise9reps9')
      this.entry.exercise9reps10 = this.get('model.workout.workout.exercise9reps10')
      this.entry.exercise10 = this.get('fullRoutineChoice.exercise10')
      this.entry.exercise10weight = this.get('model.workout.workout.exercise10weight')
      this.entry.exercise10reps1 = this.get('model.workout.workout.exercise10reps1')
      this.entry.exercise10reps2 = this.get('model.workout.workout.exercise10reps2')
      this.entry.exercise10reps3 = this.get('model.workout.workout.exercise10reps3')
      this.entry.exercise10reps4 = this.get('model.workout.workout.exercise10reps4')
      this.entry.exercise10reps5 = this.get('model.workout.workout.exercise10reps5')
      this.entry.exercise10reps6 = this.get('model.workout.workout.exercise10reps6')
      this.entry.exercise10reps7 = this.get('model.workout.workout.exercise10reps7')
      this.entry.exercise10reps8 = this.get('model.workout.workout.exercise10reps8')
      this.entry.exercise10reps9 = this.get('model.workout.workout.exercise10reps9')
      this.entry.exercise10reps10 = this.get('model.workout.workout.exercise10reps10')
      this.sendAction('submit', this.get('entry'))
    },
    cancel () {
      this.sendAction('cancel')
    }
  }
})
