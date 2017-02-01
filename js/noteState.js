'use strict';

// Determines if a note was actively being view last
const determineNoteState = (noteArray) => {
  if (!noteArray) {
    return;
  }

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

// Change the note being view currently to inUse
const activateNoteInUse = (noteId) => {
  return fetch(`${URL}/notes/${noteId}.json`, {
    method: 'PATCH',
    body: JSON.stringify({ inUse: true })
  })
};
