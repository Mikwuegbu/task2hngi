
let displayDayAndTime = () => {
    const dayOfTheWeek = document.getElementById('currentDay');
    const utcCurrentTime = document.getElementById('currentUTCTime');

    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const now = new Date();

    const dayOfWeek = daysOfWeek[now.getUTCDay()];

    let utcTime =

        dayOfTheWeek.textContent = dayOfWeek;
    utcCurrentTime.textContent = utcTime;
}

window.onload = displayDayAndTime;