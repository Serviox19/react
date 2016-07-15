Notes = new Mongo.Collection("notes");

Meteor.publish("allNotes", function () {
  return Notes.find();
});
