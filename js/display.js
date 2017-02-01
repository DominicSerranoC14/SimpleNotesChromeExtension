'use strict';

// Displays an array of note objs from FB
const displayNoteList = (noteList) => {
  let html = "";
  getEl('.note-list').classList.remove('hidden');

  noteList.forEach((each) => {
    html += `
    <p class="note-item" id="${each.key}">${each.title}</p>
    `;
  })

  getEl('.note-list').innerHTML = html;
};

// Display a selected note in the single note view
const displaySelNote = (noteId) => {
  return fetch(`${URL}/notes/${noteId}.json`)
  .then(response => response.json())
  .then(noteObj => {
    // Show note view screen
    getEl('.note-list').innerHTML = "";
    getEl('.note-text-div').classList.remove('hidden');
    getEl('.note-text-div textarea').value = noteObj.text;
    getEl('.note-title').value = noteObj.title;
    getEl('.time-p').innerHTML = 'Last saved: ' + `<b>${noteObj.timeStamp}</b>`;

    createItemSaveButton(noteId);
    createItemSaveAndExitButton(noteId);

    return noteId;
  })
};
