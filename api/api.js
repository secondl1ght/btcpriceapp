//get current btc price from coindesk
const axios = require("axios");

export async function getBTCPrice(currency) {
  try {
    const response = await axios.get(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    return response.data.bpi[currency].rate_float;
  } catch (error) {
    console.log("Trouble reaching the Coindesk API.");
  }
}

//export async function getBTCPrice(currency) {
//return new Promise(async (resolve, reject) => {
//const xhr = new XMLHttpRequest();

//const url = `https://api.coindesk.com/v1/bpi/currentprice.json`;

//xhr.responseType = "json";

//xhr.onreadystatechange = () => {
//if (xhr.readyState === XMLHttpRequest.DONE) {
//resolve(xhr.response.bpi[currency].rate_float);
//} else {
//return "Trouble reaching the Coindesk API.";
//}
//};

//xhr.open("GET", url);

//  xhr.send();
//});
//}
