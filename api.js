//get current btc price from coindesk
export async function getBTCPrice(currency) {
  return new Promise(async (resolve, reject) => {
    const xhr = new XMLHttpRequest();

    const url = `https://api.coindesk.com/v1/bpi/currentprice.json`;

    xhr.responseType = "json";

    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        resolve(xhr.response.bpi[currency].rate_float);
      } else {
        return "Trouble reaching the Coindesk API.";
      }
    };

    xhr.open("GET", url);

    xhr.send();
  });
}
