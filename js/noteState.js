'use strict';

// Activate note click events
const activateNoteItem = () => {
  getElList('.note-item').forEach(each => {
    each.addEventListener('click', (e) => {
      let noteId = e.target.id;

      displaySelNote(noteId)
      .then(activateNoteInUse)
      .catch(console.error)

    });
  });
};

const displaySelNote = (noteId) => {
  return fetch(`${URL}/notes/${noteId}.json`)
  .then(response => response.json())
  .then(noteObj => {
    getEl('.note-list').innerHTML = "";
    getEl('.note-text-div').classList.remove('hidden');
    getEl('.note-text-div textarea').innerHTML = noteObj.text;
    getEl('.note-title').value = noteObj.title;

    return noteId;
  })
};



// Change the note being view currently to inUse
const activateNoteInUse = (noteId) => {
  return fetch(`${URL}/notes/${noteId}.json`, {
    method: 'PATCH',
    body: JSON.stringify({ inUse: true })
  })
};
