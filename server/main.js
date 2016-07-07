import {Meteor} from 'meteor/meteor';

Meteor.startup(() => {
  Notes = new Meteor.Collection("notes");
});
