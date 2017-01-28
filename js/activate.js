'use strict';

const URL = 'https://simple-notes-23614.firebaseio.com';

const getEl = (selector) => document.querySelector(selector);

const getElList = (selector) => document.querySelectorAll(selector);

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

// Call get to firebase to fire note display logic
getAllNotes();
activateNoteList();

// Add event listener to show the new note title div
getEl('.new-note-div').addEventListener('click', () => {
  getEl('.note-menu').classList.add('hidden');
  getEl('.note-title-div').classList.remove('hidden');
});

getEl('.new-note-button').addEventListener('click', () => {

  fetch(`${URL}/notes/.json`, {
    method: 'POST',
    body: JSON.stringify({
      title: getEl('.new-note-title').value,
      text: '',
      timeStamp: `${Date().slice(4,10)} ${Date().slice(16, 24)}`,
      inUse: true
    })
  })
  .then(res => res.json())
  .then(console.log)
  // getEl('.new-note-title').value = "";

});
