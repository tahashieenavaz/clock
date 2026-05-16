export default function watch_loop() {
  const hoursElement = document.querySelector(".hours");
  const minutesElement = document.querySelector(".minutes");
  const secondsElement = document.querySelector(".seconds");

  setInterval(() => {
    const now = new Date();

    if (hoursElement) hoursElement.textContent = String(now.getHours());
    if (minutesElement) minutesElement.textContent = String(now.getMinutes());
    if (secondsElement) secondsElement.textContent = String(now.getSeconds());
  }, 1000);
}
