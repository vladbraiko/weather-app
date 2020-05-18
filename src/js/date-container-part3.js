const dayNowRef = document.querySelector('.date__day');
const monthNowRef = document.querySelector('.date__month');
const timeNowRef = document.querySelector('.date__time');

const nth = function (d) {
  if (d > 3 && d < 21) return 'th';
  switch (d % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

const intervalId = setInterval(() => {
  const date = new Date();
  dayNow = date.getDate();
  //   nthNow =
  const weekDay = new Array();
  weekDay[0] = 'Sun';
  weekDay[1] = 'Mon';
  weekDay[2] = 'Tue';
  weekDay[3] = 'Wed';
  weekDay[4] = 'Thu';
  weekDay[5] = 'Fri';
  weekDay[6] = 'Sat';
  weekDayNow = weekDay[date.getDay()];

  dayNowRef.innerHTML = `${dayNow}<sup class="date__day--nth">${nth(
    dayNow,
  )}</sup> ${weekDayNow}`;

  const month = new Array();
  month[0] = 'January';
  month[1] = 'February';
  month[2] = 'March';
  month[3] = 'April';
  month[4] = 'May';
  month[5] = 'June';
  month[6] = 'July';
  month[7] = 'August';
  month[8] = 'September';
  month[9] = 'October';
  month[10] = 'November';
  month[11] = 'December';

  monthNowRef.textContent = month[date.getMonth()];
  timeNowRef.textContent =
    pad(date.getHours()) +
    ':' +
    pad(date.getMinutes()) +
    ':' +
    pad(date.getSeconds());
}, 1000);

function pad(value) {
  return String(value).padStart(2, '0');
}
