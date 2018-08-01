// Add all the currencies to the dropdown menus
const dropDown1 = document.getElementById('suggestion1');
const dropDown2 = document.getElementById('suggestion2');
const list = currencyList.results;
Object.keys(list).forEach(function(currency)  {
  const type = list[currency];
  const option = document.createElement('option');
  const option2 = document.createElement('option');
  const name = type.currencyName;
  const id = type.id;
  option.value = name + " " + id;
  option2.value = name + " " + id;
  dropDown2.appendChild(option);
  dropDown1.appendChild(option2);
});

// Click event for the exchange button
const audio = document.getElementById('poker-audio');

function playAudio() {
  audio.play();
}
// const exchangeBtn = document.getElementById('btn');
//
// exchangeBtn.addEventListener('click', playAudio(), false);
