import EmberRouter from '@ember/routing/router'
import config from './config/environment'

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
})

Router.map(function () {
  this.route('sign-up')
  this.route('sign-in')
  this.route('change-password')
  this.route('journal', function () {
    this.route('view')
    this.route('show', {path: '/:journal_id'})
  })
  this.route('columns', function () {
    this.route('view')
    this.route('show', {path: '/:column_id'})
  })
  this.route('arrows', function () {
    this.route('view')
    this.route('show', {path: '/:arrow_id'})
  })
  this.route('exposures', function () {
    this.route('view')
    this.route('show', {path: '/:exposure_id'})
    this.route('generic')
  })
  this.route('workouts', function () {
    this.route('view')
    this.route('show', {path: '/:workout_id'})
    this.route('routines', function () {
      this.route('design', {path: '/:routine_id'})
    })
  })
})

export default Router
