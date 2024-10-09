import { formatUSD } from './utils.js';

function calculateBTC() {
  loadingOn();
  const usdAmount = document.getElementById('usdAmount').value;

  if (!usdAmount) {
    alert('Please enter an amount in USD');
    return;
  }

  fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then(response => {
      if (!response.ok) {
        throw new Error('Price Fetch Failed');
      }
      return response.json();
    })
    .then(data => {
      const bitcoinPriceNow = parseFloat(data.bpi.USD.rate.replace(/,/g, ''));
      const btcPurchased = usdAmount / bitcoinPriceNow;

      const priceTargets = [100000, 250000, 500000, 1000000, 3000000, 5000000, 10000000];
      const targetIDs = ["at100k", "at250k", "at500k", "at1mil", "at3mil", "at5mil", "at10mil"];
      priceTargets.forEach((price, index) => {
        const futureValue = btcPurchased * price;
        document.getElementById(targetIDs[index]).innerText = formatUSD(futureValue);
      });
    })
    .catch(_error => {
      throw new Error('Price Fetch Failed');
    });

  loadingOff();
}

function enableForm() {
  document.getElementById('usdAmount').disabled = false;
  const button = document.getElementById('calculate-BTC');
  button.disabled = false;
  button.innerText = 'Calculate';
}

function disableForm() {
  document.getElementById('usdAmount').disabled = true;
  document.getElementById('calculate-BTC').disabled = true;
  const button = document.getElementById('calculate-BTC');
  button.disabled = true;
  button.innerText = 'Loading....';
}

function loadingOn() {
  disableForm();
}
function loadingOff() {
  enableForm();
}

loadingOn();

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('calculate-BTC').addEventListener('click', calculateBTC);
  document.getElementById('invest-form').addEventListener('submit', calculateBTC);
  loadingOff();
});
