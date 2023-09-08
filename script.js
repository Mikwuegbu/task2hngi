
let displayDayAndTime = () => {
    const dayOfTheWeek = document.getElementById('currentDay');
    const utcCurrentTime = document.getElementById('currentUTCTime');

    const daysOfWeek = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();

    const dayOfWeek = daysOfWeek[now.getUTCDay()];

    let utcTime = new Date().getTime();

    dayOfTheWeek.textContent = dayOfWeek;
    utcCurrentTime.textContent = utcTime;
}

window.onload = displayDayAndTime;
