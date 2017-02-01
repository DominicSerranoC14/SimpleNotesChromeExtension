'use strict';

// Dynamically create a save button which updates note
const createItemSaveButton = (noteId) => {
  const b = document.createElement('input');
  b.setAttribute('id', noteId);
  b.setAttribute('class', 'save-button');
  b.setAttribute('type', 'button');
  b.setAttribute('value', 'Save Note');
  getEl('.note-text-div').append(b);
  b.addEventListener('click', saveCurrentNote);
};

// Will patch the edited note on firebase
// and update the note currently displayed
const saveCurrentNote = (e) => {
  fetch(`${URL}/notes/${e.target.id}.json`, {
    method: 'PATCH',
    body: JSON.stringify({
      title: getEl('.note-title').value,
      text: getEl('.note-text-div textarea').value,
      inUse: false,
      timeStamp: `${Date().slice(4,10)} ${Date().slice(16, 24)}`
    })
  })
  .then(res => res.json())
  .then(updatedNoteObj => {
    // Update the currently save note
    getEl('.note-title').value = updatedNoteObj.title;
    getEl('.note-text-div textarea').value = updatedNoteObj.text;
    getEl('.time-p').innerHTML = `Last saved: <b>${updatedNoteObj.timeStamp}</b>`;
  })
  .catch(console.error);
};
