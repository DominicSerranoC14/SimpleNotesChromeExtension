'use strict';

const getEl = (selector) => document.querySelector(selector);

const getElList = (selector) => document.querySelectorAll(selector);

// Call get to firebase to fire note display logic
getAllNotes();

getEl('.new-note-button').addEventListener('click', () => {
  console.log('New note');
});
