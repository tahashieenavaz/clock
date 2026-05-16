import append_to_app from "./append_to_app";
import create_element from "./create_element";

export default function create_watch_elements(): void {
  const hours = create_element("div", "hours");
  const minutes = create_element("div", "minutes");
  const seconds = create_element("div", "seconds");
  append_to_app(hours, minutes, seconds);
}
