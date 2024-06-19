/* globals Highcharts */
(function(w) {
  const prototype = {};

  /**
   * Factory for creating MM charts
   * @param  {String} selector
   * @return {Object} - Mayer Multiple Chart instance
   */
   
  Highcharts.setOptions({
    lang: {
        thousandsSep: ','
    }
}); 
   
  function createMayerMultipleChart(selector, price) {
    const chart = Highcharts.stockChart(selector, {
      rangeSelector: {
        selected: 1
      },

      tooltip: {
        split: true,
        valueDecimals: 2,
        valuePrefix: "$"
      },

      yAxis: [
        {
          labels: {
            align: "right",
            x: -3
          },
          title: {
            text: "Bitcoin Price (USD)"
          },
          height: "60%",
          type: 'logarithmic',
          lineWidth: 2,
          resize: {
            enabled: true
          }
        },
        {
          labels: {
            align: "right",
            x: -3
          },
          title: {
            text: "Mayer Multiple"
          },
          top: "65%",
          height: "35%",
          offset: 0,
          lineWidth: 2
        }
      ],

      series: [
        {
          type: "line",
          name: "Bitcoin Price",
          data: price.map(function(datum) {
            return [datum[0], datum[1]];
          })
        },
        {
          type: "column",
          name: "Mayer Multiple",
          data: price.map(function(datum) {
            return [ datum[0], datum[2] ];
          }),
          yAxis: 1,
          tooltip: {
            valueDecimals: 3,
            valuePrefix: ''
          },
          zones: [
            {
              value: 1,
              color: '#26a69a' // Green
            },
            {
              value: 2.4,
              color: '#FFFF00' // Yellow
            },
            {
              value: 100000,
              color: '#ef5350' // Red
            }
          ],
          dataGrouping: {
            approximation: 'average'
          }
        }
      ]
    });

    return Object.create(prototype, {
      chart: { value: chart }
    });
  }

  // Export
  w.createMayerMultipleChart =
    w.createMayerMultipleChart || createMayerMultipleChart;
})(window);
