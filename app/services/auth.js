import { bool } from '@ember/object/computed'
import { storageFor } from 'ember-local-storage'
import Service, { inject as service } from '@ember/service'

export default Service.extend({
  ajax: service(),
  credentials: storageFor('auth'),
  isAuthenticated: bool('credentials.token'),
  public_routines: service(),

  signUp (credentials) {
    return this.get('ajax').post('/sign-up', {
      data: {
        credentials: {
          email: credentials.email,
          password: credentials.password,
          password_confirmation: credentials.passwordConfirmation
        }
      }
    })
  },

  firstSignIn (credentials) {
    return this.get('ajax').post('/sign-in', {
      data: {
        credentials: {
          email: credentials.email,
          password: credentials.password
        }
      }
    })
    .then((result) => {
      this.get('credentials').set('id', result.user.id)
      this.get('credentials').set('email', result.user.email)
      this.get('credentials').set('token', result.user.token)
    })
    .then(() => this.get('public_routines').getPublicRoutinesEntries())
    .then((response) => {
      for (let i = 0; i < response.public_routines.length; i++) {
        this.get('public_routines').createRoutinesEntryFromPublicRoutines(response.public_routines[i])
      }
    })
  },

  signIn (credentials) {
    return this.get('ajax').post('/sign-in', {
      data: {
        credentials: {
          email: credentials.email,
          password: credentials.password
        }
      }
    })
    .then((result) => {
      this.get('credentials').set('id', result.user.id)
      this.get('credentials').set('email', result.user.email)
      this.get('credentials').set('token', result.user.token)
    })
  },

  changePassword (passwords) {
    return this.get('ajax').patch(`/change-password`, {
      data: {
        passwords: {
          old: passwords.previous,
          new: passwords.next
        }
      }
    })
  },

  signOut () {
    return this.get('ajax').del(`/sign-out`)
    .finally(() => this.get('credentials').reset())
  }
})
