'use strict';

const URL = 'https://simple-notes-23614.firebaseio.com';

const getAllNotes = () => {
  fetch(`${URL}/notes/.json`)
  .then((response) => response.json())
  .then(fbObj => {
    const values = Object.values(fbObj);
    const keys = Object.keys(fbObj);
    values.forEach((each, i) => each.key = keys[i]);
    return values;
  })
  .then(determineNoteState);
};

// Determines if a note was actively being view last
const determineNoteState = (noteArray) => {
  const activeNote = noteArray.filter(each => each.inUse);

  if (activeNote.length === 1) {
    // If a note has been tagged inUse pass it's id to
    // display the inUse note
    displaySelNote(activeNote[0].key);
  } else {
    getEl('.note-menu').classList.remove('hidden');
    displayNoteList(noteArray);
  }
};
