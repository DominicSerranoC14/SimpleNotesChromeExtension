'use strict';

// Dynamically create a delete button for corresponding note
const createDeleteButton = (noteId) => {
  const b = document.createElement('input');
  b.setAttribute('id', noteId);
  b.setAttribute('class', 'delete-button');
  b.setAttribute('type', 'button');
  b.setAttribute('value', 'Delete Note');
  getEl('.note-text-div').append(b);
  b.addEventListener('click', deleteCurrentNote);
};

// Error with window.confirm. Closes automatically if dev tools are not open
// Display confirmation modal
const confirmNoteDeletion = (e) => {
  let currentNoteTitle = getEl('.note-title').value;

  if (confirm(`Delete note '${currentNoteTitle}'?`)) {
    deleteCurrentNote(e);
  };
};

// Deletes the currently displayed note from FB
const deleteCurrentNote = (e) => {
  fetch(`${URL}/notes/${e.target.id}.json`, {
    method: 'DELETE'
  })
  .then(() => {
    // Reset note view div
    getEl('.note-text-div').classList.add('hidden');
    getEl('.note-title').value = "";
    getEl('.time-p').innerHTML = "";
    getEl('.note-text-div textarea').value = "";
    getEl('.save-button').remove();
    getEl('.save-exit-button').remove();
    getEl('.delete-button').remove();
    getAllNotes();
  })
  .catch(console.error);
};
