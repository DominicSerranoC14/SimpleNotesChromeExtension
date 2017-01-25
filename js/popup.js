'use strict';

const getEl = (tagName) => document.querySelector(tagName);

const createNewNote = () => {
  const httpRequest = new XMLHttpRequest();
  httpRequest.open('POST', 'https://simple-notes-23614.firebaseio.com/.json');
  httpRequest.send(JSON.stringify(noteTitle.value));
  httpRequest.addEventListener('load', loadSuccess);
};

getEl('.view-notes-button').addEventListener('click', getAllNotes);

getEl('.new-note-button').addEventListener('click', () => {
  console.log('New note');
});

// newNoteButton.addEventListener('click', () => {
//   console.log("Test sent", noteTitle.value);
//   createNewNote();
// });
