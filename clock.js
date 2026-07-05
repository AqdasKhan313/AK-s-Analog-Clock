const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

setInterval(() => {
    const now = new Date();

    const h = now.getHours() % 12;
    const m = now.getMinutes();
    const s = now.getSeconds();
    const ms = now.getMilliseconds();

    const hRotation = h * 30 + m * 0.5 + s * (0.5 / 60);
    const mRotation = m * 6 + s * 0.1;
    const sRotation = s * 6 + ms * 0.006;

    hours.style.transform = `rotate(${hRotation}deg)`;
    minutes.style.transform = `rotate(${mRotation}deg)`;
    seconds.style.transform = `rotate(${sRotation}deg)`;

}, 50);