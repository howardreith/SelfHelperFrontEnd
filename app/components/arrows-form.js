import Component from '@ember/component'

export default Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],
  entry: {},

  actions: {
    submit () {
      console.log('id in arrows-form is ', this.get('arrowsEntry.id'))
      console.log('autothought in arrows-form is ', this.get('arrowsEntry.autothought1'))
      console.log('distortion in arrows-form is ', this.get('arrowsEntry.distortion1'))
      console.log('response in arrows-form is ', this.get('arrowsEntry.response1'))
      this.entry.id = this.get('arrowsEntry.id')
      this.entry.autothought1 = this.get('arrowsEntry.autothought1')
      this.entry.distortion1 = this.get('arrowsEntry.distortion1')
      this.entry.response1 = this.get('arrowsEntry.response1')
      console.log('entry is ', this.get('entry'))
      this.sendAction('submit', this.get('entry'))
    },
    cancel () {
      this.sendAction('cancel')
    },
    show2 () {
      document.getElementById('arrow-layer-2').setAttribute('class', '')
    },
    show3 () {
      document.getElementById('arrow-layer-3').setAttribute('class', '')
    },
    show4 () {
      document.getElementById('arrow-layer-4').setAttribute('class', '')
    },
    show5 () {
      document.getElementById('arrow-layer-5').setAttribute('class', '')
    },
    show6 () {
      document.getElementById('arrow-layer-6').setAttribute('class', '')
    },
    show7 () {
      document.getElementById('arrow-layer-7').setAttribute('class', '')
    },
    show8 () {
      document.getElementById('arrow-layer-8').setAttribute('class', '')
    },
    show9 () {
      document.getElementById('arrow-layer-9').setAttribute('class', '')
    },
    show10 () {
      document.getElementById('arrow-layer-10').setAttribute('class', '')
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
