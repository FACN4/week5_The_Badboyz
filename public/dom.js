// Add all the currencies to the dropdown menus
/* eslint-disable*/
const dropDown1 = document.getElementById('suggestion1');
const dropDown2 = document.getElementById('suggestion2');
const list = currencyList.results;
Object.keys(list).forEach(function(currency) {
  const type = list[currency];
  const option = document.createElement('option');
  const option2 = document.createElement('option');
  const name = type.currencyName;
  const id = type.id;
  option.value = name + ' ' + id;
  option2.value = name + ' ' + id;
  dropDown2.appendChild(option);
  dropDown1.appendChild(option2);
});

// Click event for the exchange button
const audio = document.getElementById('poker-audio');

const input1Value = document.getElementById('inputBox').value;
const input2Value = document.getElementById('inputBox2').value;

function sendForm() {
  console.log('hello');
}
//
// function getCurr(value) {
//   const splitted = value.split(' ');
//   return splitted[splitted.length - 1];
// }
// function playAudio() {
//   audio.play();
// }
// function getQuery() {
//   const firstCurr = getCurr(input1Value);
//   const secondCurr = getCurr(input2Value);
//   return '/exchange?q=' + firstCurr + '_' + secondCurr;
// }
// const query = '';
// function sendForm() {
//   playAudio();
//   query += getQuery();
//   xhrAPI(query);
// }

// const exchangeBtn = document.getElementById('btn');
//
// exchangeBtn.addEventListener('click', playAudio(), false);
