import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'

export default Route.extend({
  journal: service(),
  flashMessages: service(),

  model () {
    console.log('params.id is')
    const response = this.get('journal').getJournalEntry(3)
    console.log ('response is ', response)
    return response
    .then((result) => {
      console.log('result is ', result.journal_entry)
      return result.journal_entry
    })
    .then(() => {
      this.get('flashMessages')
        .success('Successfully got journal entries.')
    })
    .catch(() => {
      this.get('flashMessages')
        .danger('There was a problem. Please try again.')
    })
  }
});
