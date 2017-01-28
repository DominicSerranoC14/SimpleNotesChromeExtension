'use strict';

const URL = 'https://simple-notes-23614.firebaseio.com';

const getAllNotes = () => {
  fetch(`${URL}/notes/.json`)
  .then((response) => response.json())
  .then(fbObj => {
    const values = Object.values(fbObj);
    const keys = Object.keys(fbObj);
    values.forEach((each, i) => each.key = keys[i]);
    return values
  })
  .then(determineNoteState)
  .then(activateNoteItem)
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
};

// Activate note click events
const activateNoteItem = () => {
  getElList('.note-item').forEach(each => {
    each.addEventListener('click', (e) => {
      let itemId = e.target.id;

      fetch(`${URL}/notes/${itemId}.json`)
      .then(response => response.json())
      .then(noteObj => {
        console.log("noteObj", noteObj);
        getEl('.note-list').innerHTML = "";
        getEl('.note-text-div').classList.remove('hidden');
        getEl('.note-text-div textarea').innerHTML = noteObj.text;
        getEl('.note-title').value = noteObj.title;
      })

    });
  });
};


// fetch(`${URL}/new/-KbXvpH3Eg2zCkrhAJ2y.json`, {
//   method: 'PUT',
//   body: JSON.stringify({ main: 'one', set: [1,3] })
// })
// .then(console.log);
