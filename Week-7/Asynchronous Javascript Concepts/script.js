let getExchangeRate = async function (currencyCode) {
  let response = await fetch("https://api.exchangerate.host/latest");
  let data = await response.json();
  if (data.rates[currencyCode]) {
    console.log(data.rates[currencyCode].toFixed(4));
  } else {
    console.log(null);
  }
};

getExchangeRate("EUR").catch((error) => {
  console.error(`Error: `, error);
});
