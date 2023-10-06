const second = 1000,
minute = 60 * second,
hour = 60 * minute,
day = 24 * hour;

const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes")
const seconds = document.querySelector(".seconds");

const timer = () => {
    
    setInterval(() => {
        const now = new Date();
        const target = new Date("10-07-2023");
        const diff = target - now;

        days.innerText = Math.floor(diff / day);
        const span = document.createElement("span");
        span.innerText = "Days";
        days.append(span);

        hours.innerText = Math.floor((diff % day) / hour);
        const span1 = document.createElement("span");
        span1.innerText = "Hours";
        hours.append(span1);

        minutes.innerText = Math.floor((diff % hour) / minute);
        const span2 = document.createElement("span");
        span2.innerText = "Minutes";
        minutes.append(span2);

        seconds.innerText = Math.floor((diff % minute) / second);
        const span3 = document.createElement("span");
        span3.innerText = "Seconds";
        seconds.append(span3);
    }, 1000)
}

timer();
 