
var dropDown1 = document.getElementById("suggestion");
var dropDown2 = document.getElementById("suggestion2");

// console.log(currencyList.results.keys(results))
  var list = currencyList.results
  // console.log(list)
  Object.keys(list).forEach(currency=>{
    var type = list[currency]
    let option = document.createElement("option")
    let name = type.currencyName;
    let symbol = type.currencySymbol;
    option.value = `${name} ${symbol}`;
    dropDown1.appendChild(option);
    dropDown2.appendChild(option);
});


// var fillDropDownList = data => {
//   for (let key in data.results) {
//     let name = key.currencyName;
//     let symbol = key.currencySymbol;
//     let option = document.creatElement("option");
//     option.value = name + " " + symbol;
//     datalist.appendChild(option);
//     datalist2.appendChild(option);
//   }
// };
