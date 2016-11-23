import {Template} from 'meteor/templating';
import {Session} from 'meteor/session'
import './contact.html';

Template.contact.events({
	'keyup #textCount': function(e) {
		Session.set('counter', 350 - $('#textCount').val().length);
	},

	'click .submit-form':function(e) {
		e.preventDefault();
	}
});

Template.contact.helpers({
	counter: function() {
		return Session.get('counter') || 350;
	}
});