import Component from '@ember/component'
import { inject as service } from '@ember/service'

export default Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],
  flashMessages: service(),
  entry: {},

  actions: {
    submit () {
      console.log('id in arrows-form is ', this.get('arrowsEntry.id'))
      console.log('autothought1 in arrows-form is ', this.get('arrowsEntry.autothought1'))
      console.log('distortion1 in arrows-form is ', this.get('arrowsEntry.distortion1'))
      console.log('response1 in arrows-form is ', this.get('arrowsEntry.response1'))
      console.log('autothought2 in arrows-form is ', this.get('arrowsEntry.autothought2'))
      console.log('distortion2 in arrows-form is ', this.get('arrowsEntry.distortion2'))
      console.log('response2 in arrows-form is ', this.get('arrowsEntry.response2'))
      this.entry.id = this.get('arrowsEntry.id')
      this.entry.autothought1 = this.get('arrowsEntry.autothought1')
      this.entry.distortion1 = this.get('arrowsEntry.distortion1')
      this.entry.response1 = this.get('arrowsEntry.response1')
      this.entry.autothought2 = this.get('arrowsEntry.autothought2')
      this.entry.distortion2 = this.get('arrowsEntry.distortion2')
      this.entry.response2 = this.get('arrowsEntry.response2')
      this.entry.autothought3 = this.get('arrowsEntry.autothought3')
      this.entry.distortion3 = this.get('arrowsEntry.distortion3')
      this.entry.response3 = this.get('arrowsEntry.response3')
      this.entry.autothought4 = this.get('arrowsEntry.autothought4')
      this.entry.distortion4 = this.get('arrowsEntry.distortion4')
      this.entry.response4 = this.get('arrowsEntry.response4')
      this.entry.autothought5 = this.get('arrowsEntry.autothought5')
      this.entry.distortion5 = this.get('arrowsEntry.distortion5')
      this.entry.response5 = this.get('arrowsEntry.response5')
      this.entry.autothought6 = this.get('arrowsEntry.autothought6')
      this.entry.distortion6 = this.get('arrowsEntry.distortion6')
      this.entry.response6 = this.get('arrowsEntry.response6')
      this.entry.autothought7 = this.get('arrowsEntry.autothought7')
      this.entry.distortion7 = this.get('arrowsEntry.distortion7')
      this.entry.response7 = this.get('arrowsEntry.response7')
      this.entry.autothought8 = this.get('arrowsEntry.autothought8')
      this.entry.distortion8 = this.get('arrowsEntry.distortion8')
      this.entry.response8 = this.get('arrowsEntry.response8')
      this.entry.autothought9 = this.get('arrowsEntry.autothought9')
      this.entry.distortion9 = this.get('arrowsEntry.distortion9')
      this.entry.response9 = this.get('arrowsEntry.response9')
      this.entry.autothought10 = this.get('arrowsEntry.autothought10')
      this.entry.distortion10 = this.get('arrowsEntry.distortion10')
      this.entry.response10 = this.get('arrowsEntry.response10')
      this.entry.autothought11 = this.get('arrowsEntry.autothought11')
      this.entry.distortion11 = this.get('arrowsEntry.distortion11')
      this.entry.response11 = this.get('arrowsEntry.response11')
      this.entry.autothought12 = this.get('arrowsEntry.autothought12')
      this.entry.distortion12 = this.get('arrowsEntry.distortion12')
      this.entry.response12 = this.get('arrowsEntry.response12')
      this.entry.autothought13 = this.get('arrowsEntry.autothought13')
      this.entry.distortion13 = this.get('arrowsEntry.distortion13')
      this.entry.response13 = this.get('arrowsEntry.response13')
      this.entry.autothought14 = this.get('arrowsEntry.autothought14')
      this.entry.distortion14 = this.get('arrowsEntry.distortion14')
      this.entry.response14 = this.get('arrowsEntry.response14')
      this.entry.autothought15 = this.get('arrowsEntry.autothought15')
      this.entry.distortion15 = this.get('arrowsEntry.distortion15')
      this.entry.response15 = this.get('arrowsEntry.response15')
      this.entry.autothought16 = this.get('arrowsEntry.autothought16')
      this.entry.distortion16 = this.get('arrowsEntry.distortion16')
      this.entry.response16 = this.get('arrowsEntry.response16')
      this.entry.autothought17 = this.get('arrowsEntry.autothought17')
      this.entry.distortion17 = this.get('arrowsEntry.distortion17')
      this.entry.response17 = this.get('arrowsEntry.response17')
      this.entry.autothought18 = this.get('arrowsEntry.autothought18')
      this.entry.distortion18 = this.get('arrowsEntry.distortion18')
      this.entry.response18 = this.get('arrowsEntry.response18')
      this.entry.autothought19 = this.get('arrowsEntry.autothought19')
      this.entry.distortion19 = this.get('arrowsEntry.distortion19')
      this.entry.response19 = this.get('arrowsEntry.response19')
      this.entry.autothought20 = this.get('arrowsEntry.autothought20')
      this.entry.distortion20 = this.get('arrowsEntry.distortion20')
      this.entry.response20 = this.get('arrowsEntry.response20')
      console.log('entry is ', this.get('entry'))
      this.sendAction('submit', this.get('entry'))
    },
    cancel () {
      this.sendAction('cancel')
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
        .danger('Please input automatic thought.')
      } else {
        this.toggleProperty('3isShowing')
      }
    },
    show4 () {
      if (!this.get('arrowsEntry.autothought3')) {
        this.get('flashMessages')
        .danger('Please input automatic thought.')
      } else {
        this.toggleProperty('4isShowing')
      }
    },
    show5 () {
      if (!this.get('arrowsEntry.autothought4')) {
        this.get('flashMessages')
        .danger('Please input automatic thought.')
      } else {
        this.toggleProperty('5isShowing')
      }
    },
    show6 () {
      if (!this.get('arrowsEntry.autothought5')) {
        this.get('flashMessages')
        .danger('Please input automatic thought.')
      } else {
        this.toggleProperty('6isShowing')
      }
    },
    show7 () {
      if (!this.get('arrowsEntry.autothought6')) {
        this.get('flashMessages')
        .danger('Please input automatic thought.')
      } else {
        this.toggleProperty('7isShowing')
      }
    },
    show8 () {
      if (!this.get('arrowsEntry.autothought7')) {
        this.get('flashMessages')
        .danger('Please input automatic thought.')
      } else {
        this.toggleProperty('8isShowing')
      }
    },
    show9 () {
      if (!this.get('arrowsEntry.autothought8')) {
        this.get('flashMessages')
        .danger('Please input automatic thought.')
      } else {
        this.toggleProperty('9isShowing')
      }
    },
    show10 () {
      if (!this.get('arrowsEntry.autothought9')) {
        this.get('flashMessages')
        .danger('Please input automatic thought.')
      } else {
        this.toggleProperty('10isShowing')
      }
    },
    show11 () {
      document.getElementById('arrow-layer-11').setAttribute('class', '')
    },
    show12 () {
      document.getElementById('arrow-layer-12').setAttribute('class', '')
    },
    show13 () {
      document.getElementById('arrow-layer-13').setAttribute('class', '')
    },
    show14 () {
      document.getElementById('arrow-layer-14').setAttribute('class', '')
    },
    show15 () {
      document.getElementById('arrow-layer-15').setAttribute('class', '')
    },
    show16 () {
      document.getElementById('arrow-layer-16').setAttribute('class', '')
    },
    show17 () {
      document.getElementById('arrow-layer-17').setAttribute('class', '')
    },
    show18 () {
      document.getElementById('arrow-layer-18').setAttribute('class', '')
    },
    show19 () {
      document.getElementById('arrow-layer-19').setAttribute('class', '')
    },
    show20 () {
      document.getElementById('arrow-layer-20').setAttribute('class', '')
    }
  }
})
