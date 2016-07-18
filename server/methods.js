Meteor.methods({

  addNote(note) {
    Notes.insert({
      text: note,
      complete: false,
      createdAt: new Date()
    });
  },
  toggleNote(id, status) {
    Notes.update(id, {
      $set:{complete: !status}
    })
  },
  deleteNote(id) {
    Notes.remove(id), {
      
    }
  }

});
