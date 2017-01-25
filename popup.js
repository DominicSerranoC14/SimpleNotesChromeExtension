'use strict';

const newNoteButton = document.getElementById('new-note-button');
const inputArea = document.getElementById('input-text');
const noteTitle = document.getElementById('note-title');

const createNewNote = () => {
  // httpRequest.setRequestHeader("Content-Type", "application/json");
  // httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  const httpRequest = new XMLHttpRequest();
  httpRequest.open('POST', 'https://simple-notes-23614.firebaseio.com/.json');
  httpRequest.send(JSON.stringify(noteTitle.value));
  httpRequest.addEventListener('load', loadSuccess);
};


function loadSuccess() {
  console.log("Res text", this.responseText);
};


newNoteButton.addEventListener('click', () => {
  console.log("Test sent", noteTitle.value);
  createNewNote();
});
