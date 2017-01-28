'use strict';

// Activate note click events
const activateNoteList = () => {
  getEl('.note-list').addEventListener('click', (e) => {
    if (e.target.classList.contains('note-item')) {
      let noteId = e.target.id;
      getEl('.note-menu').classList.add('hidden');

      displaySelNote(noteId)
      .then(activateNoteInUse)
      .catch(console.error)
    }
  })
};


// Change the note being view currently to inUse
const activateNoteInUse = (noteId) => {
  return fetch(`${URL}/notes/${noteId}.json`, {
    method: 'PATCH',
    body: JSON.stringify({ inUse: true })
  })
};
