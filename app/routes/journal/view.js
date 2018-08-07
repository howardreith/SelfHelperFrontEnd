import Route from '@ember/routing/route';

export default Route.extend({
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
      this.send('goToJournal', clickedRow)
      // Howie continue from here
      // https://discuss.emberjs.com/t/passing-a-list-of-values-or-objects-to-another-route-controller/3604
    }
  }
});
