const timer = (selector, deadline) => {
    const addZero = (num) => {
        return num <= 9 ? `0${num}` : `${num}`;
    };

    const getTimeRemaining = (endtime) => {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60),
            minutes = Math.floor((total / 1000 / 60) % 60),
            hours = Math.floor((total / 1000 / 60 / 60) % 24),
            days = Math.floor(total / 1000 / 60 / 60 / 24);
        return {
            total: total,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        };
    };

    const setClock = (selectorTime, endtime) => {
        const timer = document.querySelector(selectorTime),
            days = timer.querySelector("#days"),
            hours = timer.querySelector("#hours"),
            minutes = timer.querySelector("#minutes"),
            seconds = timer.querySelector("#seconds"),
            timeInterval = setInterval(updateClock, 1000);
        updateClock();
        function updateClock() {
            const total = getTimeRemaining(endtime);
            days.textContent = addZero(total.days);
            hours.textContent = addZero(total.hours);
            minutes.textContent = addZero(total.minutes);
            seconds.textContent = addZero(total.seconds);
            if (total.total <= 0) {
                days.textContent = "00";
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
                clearInterval(timeInterval);
            }
        }
    };

    setClock(selector, deadline);
};

export default timer;
