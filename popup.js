console.log("Test text");

const button = document.getElementById('save-button');
let inputArea = document.getElementById('input-text');

// button.addEventListener('click', () => {
//   console.log("Test text pressed");
//   console.log("Test text", inputArea.value);
// });

function makeRequest() {
  httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', 'https://simple-notes-chrome-extension.firebaseio.com/simple-notes-chrome-extension');

  // httpRequest.onreadystatechange = 200;
  httpRequest.setRequestHeader("Access-Control-Allow-Origin", "*");
  // httpRequest.setRequestHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  console.log(httpRequest.response);
  httpRequest.send();
}

inputArea.addEventListener('keyup', () => {
  console.log("Test text", inputArea.value);
  console.log(makeRequest());
});
