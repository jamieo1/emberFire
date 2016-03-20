import Ember from 'ember';

export default Ember.Controller.extend({

    //regex match against an email
    validEmail: Ember.computed.match('email', /^.+@.+\..+$/),
    //string length >= 5
    validMessage: Ember.computed.gte('message.length', 5),
    //for some reason returns false??????
    wontSend: Ember.computed.and('validEmail', 'validMessage'),
    //for some reason need to convert above to true
    willSend: Ember.computed.not('wontSend'),

    actions: {
      saveMessage() {
          this.set('responseMessage', `Thank you! We have just saved your email address: ${this.get('email')} and your message: ${this.get('message')}`);
          this.set('email', '');
          this.set('message', '');
      }
    }


});
