import chartTpl from '../templates/chart.hbs';
import Chart from 'chart.js/auto';
import { fiveDaysData } from './base/helper.js';

// *****

const chartRef = document.querySelector('.fivedays-chart');
chartRef.insertAdjacentHTML('beforeend', chartTpl());
const ctx = document.querySelector('.js-chart').getContext('2d');
const chartBox = document.querySelector('.chart-box');

// *****

const boxOfShowChart = document.querySelector('.show-chart-box');
const hideChartRef = document.querySelector('.hide-chart');

// ***** Вешаем слушатель события
boxOfShowChart.addEventListener('click', onShowChartClick);
hideChartRef.addEventListener('click', onHideChartClick);

// *****

function onShowChartClick() {
  boxOfShowChart.classList.add('none');
  chartBox.classList.add('visible');
  getChartData();
}

function onHideChartClick() {
  chartBox.classList.remove('visible');
  boxOfShowChart.classList.remove('none');
  if (chart) {
    chart.destroy();
  }
}

let chart = null;

function getChartData() {
  // renderChartData();
  // 1. Получаем число, месяц, год
  const сhartData = fiveDaysData.map(e => {
    return e.month + ' ' + e.day + ', ' + e.year;
  });
  // 2. Получаем температуру
  const сhartTemp = fiveDaysData.map(e => e.tempDay);
  // 3. Получаем влажность
  const сhartHumidity = fiveDaysData.map(e => e.humidity);
  // 4. Получаем скорость ветра
  const сhartWindSpeed = fiveDaysData.map(e => e.wind);
  // 5. Получаем давление
  const сhartPressure = fiveDaysData.map(e => e.pressure);

  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: сhartData,

      datasets: [
        {
          label: '— Temperature, C° ',
          data: сhartTemp,
          backgroundColor: '#FF6B09',
          borderColor: '#FF6B09',
          borderWidth: 1,
          fill: false,
        },
        {
          label: '— Humidity, % ',
          data: сhartHumidity,
          backgroundColor: '#0906EB',
          borderColor: '#0906EB',
          fill: false,
          borderWidth: 1,
        },
        {
          label: '— Wind Speed, m/s ',
          data: сhartWindSpeed,
          backgroundColor: '#EA9A05',
          borderColor: '#EA9A05',
          fill: false,
          borderWidth: 1,
        },
        {
          label: '— Atmosphere Pressure, m/m',
          data: сhartPressure,
          backgroundColor: '#067806',
          borderColor: '#067806',
          fill: false,
          borderWidth: 1,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: true,
          align: 'start',
          // position: 'bottom',

          labels: {
            boxWidth: 12,
            boxHeight: 12,
            defaultFontColor: 'rgb(5, 120, 6)',
            padding: 10,
          },
        },
      },

      interaction: {
        mode: 'point',
      },

      scales: {
        x: {
          grid: {
            color: 'rgba(255, 255, 255, 0.54)',

            ticks: {
              padding: 20,
            },
          },
        },
        y: {
          title: {
            display: true,
            text: 'Value of indicators',
            position: 'left',
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.54)',
            stepSize: 0.5,

            ticks: {
              padding: 20,
            },
          },
        },
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  });
  // initEvtFiveDays();
}

export default onHideChartClick;
