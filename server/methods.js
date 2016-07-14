Meteor.methods({

  addNote(note) {
    Notes.insert({
      text: note,
      complete: false,
      createdAt: new Date()
    });
  }
  
});
