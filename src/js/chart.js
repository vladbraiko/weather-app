import Chart from 'chart.js';
const ctx = document.getElementById('myChart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: ' — Temperature, C°',
        backgroundColor: 'rgb(255, 107, 8)',
        borderColor: 'rgb(255, 107, 8)',
        data: [3, 4, 1],
        fill: false,
      },
      {
        label: ' —  Humidity, %',
        backgroundColor: 'rgb(10, 6, 234)',
        borderColor: 'rgb(10, 6, 234)',
        data: [2, 1, -5],
        fill: false,
      },
      {
        label: ' —  Speed, m/s',
        backgroundColor: 'rgb(235, 155, 5)',
        borderColor: 'rgb(235, 155, 5)',
        data: [2, 3],
        fill: false,
      },
      {
        label: ' —  Pressure, m/m',
        backgroundColor: 'rgb(5, 120, 6)',
        borderColor: 'rgb(5, 120, 6)',
        data: [5, 6, 1],
        fill: false,
      },
    ],
  },

  options: {
    title: {
      display: true,
      text: 'Value of indicators',
      position: 'left',
    },
    legend: {
      display: true,
      align: 'start',

      labels: {
        boxWidth: 13,
        boxHeight: 12,
        defaultFontColor: 'rgb(5, 120, 6)',
        padding: 10,
        position: top,
      },
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            color: 'rgba(255, 255, 255, 0.541)',
          },
          ticks: {
            padding: 20,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            color: 'rgba(255, 255, 255, 0.541)',
            stepSize: 0.5,
            zeroLineColor: 'rgba(255, 255, 255, 0.541)',
          },
          ticks: {
            padding: 18,
          },
        },
      ],
    },
    // responsive: true,
  },
});
