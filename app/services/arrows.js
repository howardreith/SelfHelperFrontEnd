import { bool } from '@ember/object/computed'
import { storageFor } from 'ember-local-storage'
import Service, { inject as service } from '@ember/service'

export default Service.extend({
  // pull in the ajax service
  ajax: service(),
  // creating a key called 'auth' in local storage
  // think of credentials like an empty object
  credentials: storageFor('auth'),
  // a boolean, true if credentials.token exists
  isAuthenticated: bool('credentials.token'),

  createArrowsEntry () {
    return this.get('ajax').post('/downward_arrows', {
      data: {
        downward_arrow: {
          autothought1: '',
          distortion1: '',
          response1: ''
        }
      }
    })
  },

  getArrowsEntries () {
    const arrowsEntries = this.get('ajax').request('/downward_arrows')
    return arrowsEntries
  },

  getArrowsEntry (id) {
    const arrowsEntry = this.get('ajax').request('/downward_arrows/' + id)
    return arrowsEntry
  },

  updateArrowsEntry (entry) {
    return this.get('ajax').patch('/downward_arrows/' + entry.id, {
      data: {
        downward_arrow: {
          autothought1: entry.autothought1,
          distortion1: entry.distortion1,
          response1: entry.response1,
          autothought2: entry.autothought2,
          distortion2: entry.distortion2,
          response2: entry.response2,
          autothought3: entry.autothought3,
          distortion3: entry.distortion3,
          response3: entry.response3,
          autothought4: entry.autothought4,
          distortion4: entry.distortion4,
          response4: entry.response4,
          autothought5: entry.autothought5,
          distortion5: entry.distortion5,
          response5: entry.response5,
          autothought6: entry.autothought6,
          distortion6: entry.distortion6,
          response6: entry.response6,
          autothought7: entry.autothought7,
          distortion7: entry.distortion7,
          response7: entry.response7,
          autothought8: entry.autothought8,
          distortion8: entry.distortion8,
          response8: entry.response8,
          autothought9: entry.autothought9,
          distortion9: entry.distortion9,
          response9: entry.response9,
          autothought10: entry.autothought10,
          distortion10: entry.distortion10,
          response10: entry.response10,
          autothought11: entry.autothought11,
          distortion11: entry.distortion11,
          response11: entry.response11,
          autothought12: entry.autothought12,
          distortion12: entry.distortion12,
          response12: entry.response12,
          autothought13: entry.autothought13,
          distortion13: entry.distortion13,
          response13: entry.response13,
          autothought14: entry.autothought14,
          distortion14: entry.distortion14,
          response14: entry.response14,
          autothought15: entry.autothought15,
          distortion15: entry.distortion15,
          response15: entry.response15,
          autothought16: entry.autothought16,
          distortion16: entry.distortion16,
          response16: entry.response16,
          autothought17: entry.autothought17,
          distortion17: entry.distortion17,
          response17: entry.response17,
          autothought18: entry.autothought18,
          distortion18: entry.distortion18,
          response18: entry.response18,
          autothought19: entry.autothought19,
          distortion19: entry.distortion19,
          response19: entry.response19,
          autothought20: entry.autothought20,
          distortion20: entry.distortion20,
          response20: entry.response20
        }
      }
    })
  },
  deleteArrowsEntry (id) {
    return this.get('ajax').del('/downward_arrows/' + id)
  }
})
