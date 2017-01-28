'use strict';

// Activate note click events
const activateNoteItem = () => {
  getElList('.note-item').forEach(each => {
    each.addEventListener('click', (e) => {
      let noteId = e.target.id;

      fetch(`${URL}/notes/${noteId}.json`)
      .then(response => response.json())
      .then(noteObj => {
        console.log("noteObj", noteObj);
        getEl('.note-list').innerHTML = "";
        getEl('.note-text-div').classList.remove('hidden');
        getEl('.note-text-div textarea').innerHTML = noteObj.text;
        getEl('.note-title').value = noteObj.title;

        return noteId;
      })
      .then(activateNoteInUse)
      .catch(console.error)

    });
  });
};

// Change the note being view currently to inUse
const activateNoteInUse = (noteId) => {
  return fetch(`${URL}/notes/${noteId}.json`, {
    method: 'PATCH',
    body: JSON.stringify({ inUse: true })
  })
}
