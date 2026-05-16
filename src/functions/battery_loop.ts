export default function battery_loop() {
  (navigator as any).getBattery().then((battery: any) => {
    const levelEl = document.querySelector(".battery");

    setInterval(() => {
      if (levelEl) {
        levelEl.textContent = Math.round(battery.level * 100) + "%";
      }
    }, 1000);
  });
}
