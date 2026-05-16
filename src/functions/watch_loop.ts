export default function watch_loop() {
  const hoursElement = document.querySelector(".hours");
  const minutesElement = document.querySelector(".minutes");
  const secondsElement = document.querySelector(".seconds");
  const millisecondsElement = document.querySelector(".milliseconds");

  requestAnimationFrame(function _watch_loop() {
    const now = new Date();
    if (hoursElement) {
      hoursElement.textContent = String(now.getHours()).padStart(2, "0");
    }

    if (minutesElement) {
      minutesElement.textContent = String(now.getMinutes()).padStart(2, "0");
    }

    if (secondsElement) {
      secondsElement.textContent = String(now.getSeconds()).padStart(2, "0");
    }

    if (millisecondsElement) {
      const ms = now.getMilliseconds();
      millisecondsElement.textContent = String(~~(ms / 10)).padStart(2, "0");
    }

    requestAnimationFrame(_watch_loop);
  });
}
