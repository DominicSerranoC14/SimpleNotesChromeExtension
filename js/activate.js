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

getEl('.new-note-button').addEventListener('click', () => {
  console.log('New note');
});
