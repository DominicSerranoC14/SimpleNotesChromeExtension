'use strict';

// Create a save and exit button for displayed note
const createItemSaveAndExitButton = (noteId) => {
  const b = document.createElement('input');
  b.setAttribute('id', noteId);
  b.setAttribute('class', 'save-exit-button');
  b.setAttribute('type', 'button');
  b.setAttribute('value', 'Save and Close');
  getEl('.note-text-div').append(b);
  b.addEventListener('click', saveCurrentNoteAndExit);
};

// Update the current note on firebase
// Then exit to the note list view
const saveCurrentNoteAndExit = (e) => {
  fetch(`${URL}/notes/${e.target.id}.json`, {
    method: 'PATCH',
    body: JSON.stringify({
      title: getEl('.note-title').value,
      text: getEl('.note-text-div textarea').value,
      inUse: false,
      timeStamp: `${Date().slice(4,10)} ${Date().slice(16, 24)}`
    })
  })
  .then(() => {
    // Reset the note text div
    getEl('.note-title').value = "";
    getEl('.note-text-div textarea').value = "";
    getEl('.note-text-div').classList.add('hidden');
    getEl('.save-button').remove();
    getEl('.save-exit-button').remove();
  })
  .then(() => getAllNotes())
  .catch(console.error);
};
