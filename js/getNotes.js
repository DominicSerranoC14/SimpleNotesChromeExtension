'use strict';

const getAllNotes = () => {
  const httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', 'https://simple-notes-23614.firebaseio.com/notes/.json');
  httpRequest.send();
  httpRequest.addEventListener('load', parseGetNotes);
};

const parseGetNotes = (e) => {
  const parsed = JSON.parse(e.target.responseText);

  const values = Object.values(parsed);
  const keys = Object.keys(parsed);
  values.forEach((each, i) => each.key = keys[i]);

  determineNoteState(values);
};

// Determines if a note was actively being view last
const determineNoteState = (noteArray) => {
  const activeNote = noteArray.filter(each => each.inUse);

  if (activeNote.length === 1) {
    displayNoteList(activeNote);
  } else {
    displayNoteList(noteArray);
  };
};

const displayNoteList = (noteList) => {
  let html = "<h2>Note List</h2>";
  getEl('.note-menu').classList.add('hidden');
  getEl('.note-list').classList.remove('hidden');

  noteList.forEach((each) => {
    html += `
    <p class="note-item" id="${each.key}">${each.title}</p>
    `;
  })

  html += `<input class="nav-to-menu" type="button" value="Back to Menu" />`;
  getEl('.note-list').innerHTML = html;

  getEl('.nav-to-menu').addEventListener('click', () => {
    getEl('.note-list').innerHTML = "";
    getEl('.note-menu').classList.remove('hidden');
  });

  activateNoteItem();
};

const activateNoteItem = () => {

  getElList('.note-item').forEach(each => {
    each.addEventListener('click', (e) => {
      let itemId = e.target.id;
      getEl('note-texarea');
    });
  });

};
