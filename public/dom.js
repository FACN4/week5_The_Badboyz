// Add all the currencies to the dropdown menus
/* eslint-disable*/
const dropDown1 = document.getElementById("suggestion1");
const dropDown2 = document.getElementById("suggestion2");
const list = currencyList.results;
Object.keys(list).forEach(function(currency) {
  const type = list[currency];
  const option = document.createElement("option");
  const option2 = document.createElement("option");
  const name = type.currencyName;
  const id = type.id;
  option.value = name + " " + id;
  option2.value = name + " " + id;
  dropDown2.appendChild(option);
  dropDown1.appendChild(option2);
});

// Click event for the exchange button
const audio = document.getElementById("poker-audio");

function appendExchangeRate(res) {
  let exchangeSection = document.getElementById("exchangeRate");

  while (exchangeSection.firstChild) {
    exchangeSection.removeChild(exchangeSection.firstChild);
  }
  let resArray = res.split(":");
  let val = resArray[resArray.length - 1].replace(/}/g, "");
  let firstC = resArray[3];
  firstC = firstC.substring(3, 10);
  let arr = firstC.split("_");
  let label = document.createElement("label");
  label.textContent =
    "the exchange rate from: " + arr[0] + " to: " + arr[1] + " is: " + val;
  exchangeSection.appendChild(label);
}
function sendForm() {
  playAudio();
  let array1 = document.getElementById("inputBox").value.split(" ");
  let array2 = document.getElementById("inputBox2").value.split(" ");
  let string1 = array1[array1.length - 1];
  let string2 = array2[array2.length - 1];
  let query = "/exchange?q=" + string1 + "_" + string2;
  xhrAPI(query, appendExchangeRate);
  document.getElementById("inputBox").value = "";
  document.getElementById("inputBox2").value = "";
}

function playAudio() {
  audio.play();
}

// function getCurr(value) {
//   const splitted = value.split(' ');
//   return splitted[splitted.length - 1];
// }

// function getQuery() {
//   let input1Value = document.getElementById('inputBox').value;
//   let input2Value = document.getElementById('inputBox2').value;
//   const firstCurr = getCurr(input1Value);
//   const secondCurr = getCurr(input2Value);
//   return '/exchange?q=' + firstCurr + '_' + secondCurr;
// }
// const query = '';
// function sendForm() {
//   playAudio();
//   query += getQuery();
//   console.log(query);
//   // xhrAPI(query);
// }
//
// const exchangeBtn = document.getElementById('btn');
//
// exchangeBtn.addEventListener('click', playAudio(), false);
