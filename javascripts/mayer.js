$(document).ready(function() {
  var mm = document.getElementById('mayer-multiple');
  var mmAvg = document.getElementById('mayer-multiple-avg');
  var price = document.getElementById('btc-price');
 
  $.getJSON('https://firebasestorage.googleapis.com/v0/b/buy-bitcoin-worldwide.appspot.com/o/prices%2Fhistoric%2Fbtc%2Fusd.json?alt=media', function(data) {
    // Start from 200th day
    const result = data.slice(200).map(function(day, i) {
      return [
        new Date(day.date).getTime(),     // UNIX time
        day.price,                        // Price
        day.price / (data.slice(i, i+200) // MM
          .map(function(d) { return d.price; })
          .reduce(function(a, b) { return a + b; }, 0) / 200)
      ];
    });

    createMayerMultipleChart('highchart_div', result);
    mm.textContent = result[result.length - 1][2].toFixed(2);
    mmAvg.textContent = (result.reduce(function(acc, datum) {
      return acc + datum[2];
    }, 0) / result.length).toFixed(2);
  }).fail(function(_jqXHR, textStatus, errorThrown) {
    console.error('Error fetching historic data:', textStatus, errorThrown);  // Log errors
  });

  $.getJSON('https://firebasestorage.googleapis.com/v0/b/buy-bitcoin-worldwide.appspot.com/o/prices%2Fcurrent%2Fbtc%2Fusd.json?alt=media', function(data) {
    price.textContent = '$' + data.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }).fail(function(_jqXHR, textStatus, errorThrown) {
    console.error('Error fetching current price data:', textStatus, errorThrown);  // Log errors
  });
});
