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

const displaySelNote = (noteId) => {
  return fetch(`${URL}/notes/${noteId}.json`)
  .then(response => response.json())
  .then(noteObj => {
    getEl('.note-list').innerHTML = "";
    getEl('.note-text-div').classList.remove('hidden');
    getEl('.note-text-div textarea').value = noteObj.text;
    getEl('.note-title').value = noteObj.title;

    const b = document.createElement('input');
    b.setAttribute('id', noteId);
    b.setAttribute('class', 'save-button');
    b.setAttribute('type', 'button');
    b.setAttribute('value', 'Save Note');
    getEl('.note-text-div').append(b);
    b.addEventListener('click', (e) => {
      fetch(`${URL}/notes/${e.target.id}.json`, {
        method: 'PATCH',
        body: JSON.stringify({
          title: getEl('.note-title').value,
          text: getEl('.note-text-div textarea').value,
          inUse: false
        })
      })
      .then(() => {
        // Reset the note text div
        getEl('.note-title').value = "";
        getEl('.note-text-div textarea').value = "";
        getEl('.note-text-div').classList.add('hidden');
        getEl('.save-button').remove();
      })
      .then(() => getAllNotes())
    });

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
