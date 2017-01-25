'use strict';

const getAllNotes = () => {
  const httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', 'https://simple-notes-23614.firebaseio.com/notes/.json');
  httpRequest.send();
  httpRequest.addEventListener('load', parseGetNotes);
};

const parseGetNotes = (e) => {
  const parsed = JSON.parse(e.target.responseText);

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
