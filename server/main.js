import {Meteor} from 'meteor/meteor';

Meteor.startup(() => {
  Notes = new Mongo.Collection("notes");
});
