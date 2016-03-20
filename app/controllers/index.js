import Ember from 'ember';

export default Ember.Controller.extend({


  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  actions: {
    saveInvitation() {
      const email = this.get('emailAddress');

      const newInvitation = this.store.createRecord('invitation', {email: email});
      newInvitation.save().then((response) => {
        this.set('responseMessage', `Thank you! We've have just saved your email address: ${this.get('emailAddress')}`);
        this.set('emailAddress', '');
      });//the .then tells what to happen on a successful promise being returned. the ((response) => {}) after it is the ES2015 cleaner syntax so that can remove the need vor storing this in another variable.


    }
  }


});
