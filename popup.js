console.log("Test text");

const button = document.getElementById('save-button');
let inputArea = document.getElementById('input-text');

// button.addEventListener('click', () => {
//   console.log("Test text pressed");
//   console.log("Test text", inputArea.value);
// });

function makeRequest() {
  let httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', 'http://localhost:3000/');
  httpRequest.send();
  httpRequest.addEventListener('load', loadSuccess);
}

function loadSuccess() {
  console.log("Res text", JSON.parse(this.responseText));
}

inputArea.addEventListener('keyup', () => {
  console.log("Test text", inputArea.value);
  console.log(makeRequest());
});
