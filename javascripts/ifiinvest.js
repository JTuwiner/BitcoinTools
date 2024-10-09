
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


/**
 * Utility functions for the application.
 *
 * use `import { formatUSD } from './utils.js';` to import the function.
 *
 * Make sure to then add the script that imports this file with a type="module" attribute:
 * Do this by using the YAML front matter in the markdown file:
 *
 *    include_module_javascript:
 *      - ./path/to/file-that-imports-utils.js
 *
 * Add any generic utility functions here and export them. Once this file grows beyond a few (10?)
 * functions, break them out into separate files and import them here. e.g. currency.js, date.js, etc.
 */

// Format a number as USD currency
function formatUSD(value) {
  const isNumber = typeof value === 'number';
  if (!isNumber) {
    throw new Error('Value must be a number');
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}
