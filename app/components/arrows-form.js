import Component from '@ember/component'
import { inject as service } from '@ember/service'

export default Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],
  flashMessages: service(),
  entry: {},
  showDistortionsOn: false,

  actions: {
    showDistortions () {
      this.toggleProperty('showDistortionsOn')
    },
    submit () {
      this.entry.id = this.get('arrowsEntry.id')
      for (let i = 1; i <= 20; i++) {
        this.entry['autothought' + i] = this.get('arrowsEntry.autothought' + i)
        this.entry['distortion' + i] = this.get('arrowsEntry.distortion' + i)
        this.entry['response' + i] = this.get('arrowsEntry.response' + i)
      }
      this.sendAction('submit', this.get('entry'))
    },
    cancel () {
      this.entry.id = this.get('arrowsEntry.id')
      this.entry.autothought1 = this.get('arrowsEntry.autothought1')
      this.entry.distortion1 = this.get('arrowsEntry.distortion1')
      this.entry.response1 = this.get('arrowsEntry.response1')
      this.sendAction('cancel', this.get('entry'))
    },
    show2 () {
      if (!this.get('arrowsEntry.autothought1')) {
        this.get('flashMessages')
        .danger('Please input automatic thought.')
      } else {
        this.toggleProperty('2isShowing')
      }
    },
    show3 () {
      if (!this.get('arrowsEntry.autothought2')) {
        this.get('flashMessages')
        .danger('Please input meaning.')
      } else {
        this.toggleProperty('3isShowing')
      }
    },
    show4 () {
      if (!this.get('arrowsEntry.autothought3')) {
        this.get('flashMessages')
        .danger('Please input meaning.')
      } else {
        this.toggleProperty('4isShowing')
      }
    },
    show5 () {
      if (!this.get('arrowsEntry.autothought4')) {
        this.get('flashMessages')
        .danger('Please input meaning.')
      } else {
        this.toggleProperty('5isShowing')
      }
    },
    show6 () {
      if (!this.get('arrowsEntry.autothought5')) {
        this.get('flashMessages')
        .danger('Please input meaning.')
      } else {
        this.toggleProperty('6isShowing')
      }
    },
    show7 () {
      if (!this.get('arrowsEntry.autothought6')) {
        this.get('flashMessages')
        .danger('Please input meaning.')
      } else {
        this.toggleProperty('7isShowing')
      }
    },
    show8 () {
      if (!this.get('arrowsEntry.autothought7')) {
        this.get('flashMessages')
        .danger('Please input meaning.')
      } else {
        this.toggleProperty('8isShowing')
      }
    },
    show9 () {
      if (!this.get('arrowsEntry.autothought8')) {
        this.get('flashMessages')
        .danger('Please input meaning.')
      } else {
        this.toggleProperty('9isShowing')
      }
    },
    show10 () {
      if (!this.get('arrowsEntry.autothought9')) {
        this.get('flashMessages')
        .danger('Please input meaning.')
      } else {
        this.toggleProperty('10isShowing')
      }
    },
    show11 () {
      if (!this.get('arrowsEntry.autothought10')) {
        this.get('flashMessages')
        .danger('Please input meaning.')
      } else {
        this.toggleProperty('11isShowing')
      }
    },
    show12 () {
      if (!this.get('arrowsEntry.autothought11')) {
        this.get('flashMessages')
        .danger('Please input meaning.')
      } else {
        this.toggleProperty('12isShowing')
      }
    },
    show13 () {
      if (!this.get('arrowsEntry.autothought12')) {
        this.get('flashMessages')
        .danger('Please input meaning.')
      } else {
        this.toggleProperty('13isShowing')
      }
    },
    show14 () {
      if (!this.get('arrowsEntry.autothought13')) {
        this.get('flashMessages')
        .danger('Please input meaning.')
      } else {
        this.toggleProperty('14isShowing')
      }
    },
    show15 () {
      if (!this.get('arrowsEntry.autothought14')) {
        this.get('flashMessages')
        .danger('Please input meaning.')
      } else {
        this.toggleProperty('15isShowing')
      }
    },
    show16 () {
      if (!this.get('arrowsEntry.autothought15')) {
        this.get('flashMessages')
        .danger('Please input meaning.')
      } else {
        this.toggleProperty('16isShowing')
      }
    },
    show17 () {
      if (!this.get('arrowsEntry.autothought16')) {
        this.get('flashMessages')
        .danger('Please input meaning.')
      } else {
        this.toggleProperty('17isShowing')
      }
    },
    show18 () {
      if (!this.get('arrowsEntry.autothought17')) {
        this.get('flashMessages')
        .danger('Please input meaning.')
      } else {
        this.toggleProperty('18isShowing')
      }
    },
    show19 () {
      if (!this.get('arrowsEntry.autothought18')) {
        this.get('flashMessages')
        .danger('Please input meaning.')
      } else {
        this.toggleProperty('19isShowing')
      }
    },
    show20 () {
      if (!this.get('arrowsEntry.autothought19')) {
        this.get('flashMessages')
        .danger('Please input meaning.')
      } else {
        this.toggleProperty('20isShowing')
      }
    }
  }
})
