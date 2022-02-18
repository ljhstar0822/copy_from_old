const clockDay = document.querySelector(".clock-day");
const clockHour = document.querySelector(".clock-hours");


function clock() {
    const date = new Date();
    const [month, day, year] = [
      date.getMonth()+1,
      date.getDate(),
      date.getFullYear()
    ];
    const [hour, minute, second] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds()
    ];
    clockDay.innerHTML = `${month}월 ${day}일 ${year}년`;
    clockHour.innerHTML = `${hour}:${String(minute).padStart(2, 0)}:${String(
      second
    ).padStart(2, 0)}`;
  }
  
clock();
setInterval(clock, 1000);