'use strict';

const getEl = (tagName) => document.querySelector(tagName);

const createNewNote = () => {
  const httpRequest = new XMLHttpRequest();
  httpRequest.open('POST', 'https://simple-notes-23614.firebaseio.com/.json');
  httpRequest.send(JSON.stringify(noteTitle.value));
  httpRequest.addEventListener('load', loadSuccess);
};

const getAllNotes = () => {

  const httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', 'https://simple-notes-23614.firebaseio.com/notes/.json');
  httpRequest.send();
  httpRequest.addEventListener('load', parseGetNotes);

};


function parseGetNotes() {
  const parsed = JSON.parse(this.responseText);

  const noteArray = Object.values(parsed);
  displayNoteList(noteArray);
};

const displayNoteList = (noteList) => {
  let html = "<h2>Note List</h2>";
  getEl('.note-menu').classList.add('hidden');

  getEl('.note-list').classList.remove('hidden');

  noteList.forEach((each, i) => {
    html += `
    <p class="note-item" id="${i}">${each.title}</p>
    `;
  })
  getEl('.note-list').innerHTML = html;

};



getEl('.view-notes-button').addEventListener('click', getAllNotes);

getEl('.new-note-button').addEventListener('click', () => {
  console.log('New note');
});

// newNoteButton.addEventListener('click', () => {
//   console.log("Test sent", noteTitle.value);
//   createNewNote();
// });
