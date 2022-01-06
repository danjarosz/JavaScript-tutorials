window.addEventListener("DOMContentLoaded", () => {
    const updateTimer = (deadline) => {
        const time = deadline - new Date();
        return {
            'days': Math.floor(time / (1000 * 60 * 60 * 24)),
            'hours': Math.floor( (time / (1000 * 60 * 60)) % 24),
            'minutes': Math.floor((time / 1000 / 60) % 60),
            'seconds': Math.floor((time/1000) % 60),
            'total': time
        };
    };

    const animateClock = (el) => {
        el.classList.add("turn");
        setTimeout(() => {
            el.classList.remove("turn")
        }, 700)
    }

    const startTimer = (id, deadline) => {
        const timerInterval = setInterval(() => {
            const clock = document.querySelector(`#${id}`);
            const timer = updateTimer(deadline);

            clock.innerHTML = `
                <span>${timer.days}</span>
                <span>${timer.hours}</span>
                <span>${timer.minutes}</span>
                <span>${timer.seconds}</span>
            `

            // Animation
            const spans = clock.querySelectorAll("span");
            animateClock(spans[3]);
            if (timer.seconds === 59) {
                animateClock(spans[2]);
            };
            if (timer.minutes === 59 && timer.seconds === 59) {
                animateClock(spans[1]);
            };
            if (timer.hours === 23 && timer.minutes === 59 && timer.seconds === 59) {
                animateClock(spans[0]);
            };

            // Check if end
            if (timer.total < 1) {
                clearInterval(timerInterval);
                clock.innerHTML = `
                    <span>0</span>
                    <span>0</span>
                    <span>0</span>
                    <span>0</span>
                `
            }
        }, 1000);
    };

    const deadline = new Date("April 15, 2022 17:15:00");
    startTimer("clock", deadline);
})