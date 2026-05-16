export default function append_to_app(...elements: Node[]): void {
  const app = document.getElementById("app");
  if (!app) {
    throw new Error("App element was not found.");
  }
  app.append(...elements);
}
