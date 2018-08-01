// Add all the currencies to the dropdown menus
const dropDown1 = document.getElementById('suggestion');
const dropDown2 = document.getElementById('suggestion2');
const list = currencyList.results;
Object.keys(list).forEach((currency) => {
  const type = list[currency];
  const option = document.createElement('option');
  const name = type.currencyName;
  const symbol = type.currencySymbol;
  option.value = `${name} ${symbol}`;
  dropDown1.appendChild(option);
  dropDown2.appendChild(option);
});

// Click event for the exchange button
const audio = document.getElementById('poker-audio');

function playAudio() {
  audio.play();
}
// const exchangeBtn = document.getElementById('btn');
//
// exchangeBtn.addEventListener('click', playAudio(), false);
