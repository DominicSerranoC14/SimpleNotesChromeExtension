'use strict';

const createNewNote = () => {
  fetch(`${URL}/notes/.json`, {
    method: 'POST',
    body: JSON.stringify({
      title: getEl('.new-note-title').value,
      text: '',
      timeStamp: `${Date().slice(4,10)} ${Date().slice(16, 24)}`,
      inUse: true
    })
  })
  .then(() => {
    getEl('.note-title-div').classList.add('hidden');
    getEl('.new-note-title').value = "";
    getAllNotes();
  })
  .catch(console.error);
};
