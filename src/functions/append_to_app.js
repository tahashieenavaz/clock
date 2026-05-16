export default function append_to_app(...elements) {
  const app = document.getElementById("app");
  app.append(...elements);
}
