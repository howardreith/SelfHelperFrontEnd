import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'

export default Route.extend({
  journal: service(),
  flashMessages: service(),

  actions: {
    goToJournal() {
      this.transitionTo('journal')
    },
    updateEntry() {
      console.log('updateEntry was activated.')
      console.log('this is ', this)
      console.log('this.context is ', this.context)
      const clickedRow = event.target.parentNode.parentNode.getElementsByTagName('td')[1].innerText
      console.log('clickedRow is ', clickedRow)
      this.transitionTo('/journal/' + clickedRow)
    },
    deleteEntry() {
      console.log('deleteEntry was activated.')
      const clickedRow = event.target.parentNode.parentNode.getElementsByTagName('td')[1].innerText
      console.log('clickedRow is ', clickedRow)
      this.get('journal').deleteJournalEntry(clickedRow)
      .then(() => {
        this.get('flashMessages')
        .success('Successfully got journal entries.')
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.')
      })
    }
  }
});
